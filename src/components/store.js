import { createStore } from "vuex";
let timer;
const store = createStore({
  state() {
    return {
      requests: [],
      lastFetch: null,
      userId: null,
      token: null,
      didAutoLogout: false,
      coaches: [],
    };
  },
  getters: {
    getCoaches(state) {
      return state.coaches;
    },
    getUserId(state) {
      return state.userId;
    },
    requests(state, getters) {
      const coachId = getters.getUserId;
      return state.requests.filter((req) => req.coachId === coachId);
    },
    hasRequests(_, getters) {
      return getters.requests && getters.requests.length > 0;
    },
    numberOfRequests(_, getters) {
      return getters.requests.length;
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;
      if (!lastFetch) {
        return true;
      }
      const currentTimeStamp = new Date().getTime();
      return (currentTimeStamp - lastFetch) / 1000 > 60; // aktuálny čas- posledný čas /1000 *60 aby mi vyrátalo minutu
    },
    token(state) {
      return state.token;
    },
    isAutentificated(state) {
      return !!state.token;
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    },
  },
  mutations: {
    addNewCoach(state, payload) {
      state.coaches.shift(payload);
    },
    addRequest(state, payload) {
      state.requests.push(payload);
    },
    setCoaches(state, payload) {
      // zodpovedné aby sa načítali dáta z databazy
      state.coaches = payload;
    },
    setRequests(state, payload) {
      state.requests = payload;
    },
    setFetchTimeStamp(state) {
      state.lastFetch = new Date().getTime();
    },
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.didAutoLogout = false;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    },
  },
  actions: {
    async loadCoaches(context, payload) {
      if (!payload.refreshNow && !context.getters.shouldUpdate) {
        // payload.refreshNow, aby btn fungoval vždy , inak sa každú min. refreshne
        return;
      }
      const response = await fetch(
        `https://dasdas-b3d79-default-rtdb.firebaseio.com/coaches.json`
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Fail to load Coaches from database..."
        );
        throw error;
      }
      // helper to restructure answer from firebase
      const coaches = [];
      for (const key in responseData) {
        const coach = {
          id: key,
          name: responseData[key].name,
          email: responseData[key].email,
          money: responseData[key].money,
          types: responseData[key].types,
          description: responseData[key].description,
        };
        coaches.push(coach);
      }
      context.commit("setCoaches", coaches);
      context.commit("setFetchTimeStamp");
    },

    async addNewCoach(context, payload) {
      const userId = context.getters.getUserId; // zodpovedné za ID "C3" neskor vraj da firebase skutočné context.getters.userId
      const coachData = {
        name: payload.name,
        email: payload.email,
        money: payload.money,
        types: payload.types,
        description: payload.description,
        // register: payload.register,
      };
      const token = context.getters.token;
      const response = await fetch(
        `https://dasdas-b3d79-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
          token,
        {
          method: "PUT",
          body: JSON.stringify(coachData),
        }
      );

      if (!response.ok) {
        console.log("ok");
      }
      context.commit("addNewCoach", {
        ...coachData,
        id: userId,
      });
    },
    async contactCoach(context, payload) {
      const newRequest = {
        email: payload.email,
        message: payload.message,
      };
      const response = await fetch(
        `https://dasdas-b3d79-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
        {
          method: "POST",
          body: JSON.stringify(newRequest),
        }
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to send request "
        );
        throw error;
      }
      newRequest.id = responseData.name;
      newRequest.coachId = payload.coachId;
      console.log(context);
      context.commit("addRequest", newRequest);
    },
    async fetchRequests(context) {
      const coachId = context.getters.getUserId; // -----------------------------------  fetch na základe ID

      const token = context.getters.token;
      const response = await fetch(
        `https://dasdas-b3d79-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` +
          token
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch requests..."
        );
        throw error;
      }
      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          email: responseData[key].email,
          message: responseData[key].message,
        };

        requests.push(request);
      }
      context.commit("setRequests", requests);
    },
    ///////////////////////////////////////SIGN UP/////////////////////////////////////////////////////////////
    async signUp(context, payload) {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1evoJjLdUb2LKkkZrQDZD_v4QuRMFFQQ
        `,
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message ||
            "We can´t log you into app... Something went wrong"
        );
        throw error;
      }

      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },

    async login(context, payload) {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1evoJjLdUb2LKkkZrQDZD_v4QuRMFFQQ
        `,
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        //... err handling

        const error = new Error(
          responseData.message ||
            "Fail to Sign Up .. Do you wanna Register instead ? "
        );
        throw error;
      }
      const expireIn = +responseData.expiresIn * 1000;
      // const expireIn = 5000;
      const expireDate = new Date().getTime() + expireIn;
      localStorage.setItem("tokenExpiration", expireDate);
      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);

      timer = setTimeout(function () {
        context.dispatch("autoLogout");
      }, expireIn);

      context.commit("setUser", {
        token: responseData.idToken,
        userId: responseData.localId,
      });
    },
    autoLogIn(context) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const tokenExpiration = localStorage.getItem("tokenExpiration");
      const expiresIn = +tokenExpiration - new Date().getTime();
      if (expiresIn < 0) {
        return;
      }
      timer = setTimeout(function () {
        context.dispatch("autoLogout");
      }, expiresIn);
      if (token && userId) {
        context.commit("setUser", {
          token: token,
          userId: userId,
        });
      }
    },
    ///////////////////////////////////////////////////////LOGOUT/////////////////////////////////////////////////
    logout(context) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");
      clearTimeout(timer);
      context.commit("setUser", {
        token: null,
        userId: null,
      });
    },
    //////////////////////////////////////////////////////////AUTOLOGOUT/////////////////////////////////////////////
    autoLogout(context) {
      context.dispatch("logout");
      context.commit("setAutoLogout");
    },
  },
});

export default store;
///
