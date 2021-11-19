import { createStore } from "vuex";
let timer;
const store = createStore({
  state() {
    return {
      requests: [],
      // isCoach: false,
      lastFetch: null,
      userId: null,
      token: null,
      didAutoLogout: false,
      coaches: [
        {
          id: "stefan",
          name: "Štefan Baláž",
          email: "stevobko123@gmail.com",
          money: 35,
          types: ["Frontend", "Backend", "Career"],
          description:
            "Moje meno je Štefan Baláž , venujem sa FrontEnd Dizajnu niečo okolo 10 mesiacov, v poslednej dobe ale oveľa aktívnejšie",
        },
        {
          id: "vava",
          name: "Vanessa Revická",
          email: "vava@gmail.com",
          money: 45,
          types: ["Backend", "Career"],
          description:
            "Moje meno je Vanessa , pracujem pre spoločnosť Yangfeng od polovice roku 2021",
        },
        {
          id: "tobi",
          name: "Tobias Ďuriš",
          email: "tobino@gmail.com",
          money: 105,
          types: ["Backend"],
          description:
            "Moje meno je Tobinko, mojou prácou je byť rozkošný a rád pozujem na fotky ",
        },
        {
          id: "romi",
          name: "Romana Revická",
          email: "romi@gmail.com",
          money: 50,
          types: ["Frontend", "Career"],
          description:
            "Moje meno je Romana, som aktuálne nezamestnaná, a som žena v domácnosti  ",
        },
      ],
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
    isCoach(state) {
      return state.isCoach;
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    },
  },
  mutations: {
    addNewCoach(state, payload) {
      state.coaches.unshift(payload);
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
      // const responseData = await response.json();
      if (!response.ok) {
        //error....
      }
      context.commit("addNewCoach", {
        ...coachData,
        id: userId,
      });
    },
    async contactCoach(context, payload) {
      const newRequest = {
        // id: new Date().toISOString(),
        // coachId: payload.coachId,

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
      // console.log(payload);
      newRequest.id = responseData.name;
      newRequest.coachId = payload.coachId;
      console.log(context);
      // console.log(responseData.coachId); // responseData.name, nakoľko firebase, generuje nové ID pre rq a má to pod. name a pomocou newReq.id pridávam do poľa novú položku ale až po tom keĎ nám príde späť z firebae
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
      // vytvorím si helpera, nakoľko príde odpoveď z firebase v tvare ktorý musíme najprv pretvoriť aby vyzeral ako req
      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId, //-----------------------CYHBA BOLA TU mal som tam this.
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
            "Fail to  Sign Up .. This Email adress is used..."
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
            "Fail to  Sign Up .. This Email adress is used..."
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
