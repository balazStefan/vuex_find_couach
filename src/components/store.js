import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      coaches: [
        {
          id: "stefan",
          name: "Štefan Baláž",
          email: "stevobko123@gmail.com",
          money: 35,
          types: ["Frontend", "Backend"],
          description:
            "Moje meno je Štefan Baláž , venujem sa FrontEnd Dizajnu niečo okolo 10 mesiacov, v poslednej dobe ale oveľa aktívnejšie",
          visibility: false,
        },
        {
          id: "vava",
          name: "Vanessa Revická",
          email: "vava@gmail.com",
          money: 45,
          types: ["Backend", "Carrer"],
          description:
            "Moje meno je Vanessa , pracujem pre spoločnosť Yangfeng od polovice roku 2021",
          visibility: false,
        },
        {
          id: "tobi",
          name: "Tobias Ďuriš",
          email: "tobino@gmail.com",
          money: 105,
          types: ["Backend"],
          description:
            "Moje meno je Tobinko, mojou prácou je byť rozkošný a rád pozujem na fotky ",
          visibility: false,
        },
        {
          id: "romi",
          name: "Romana Revická",
          email: "romi@gmail.com",
          money: 50,
          types: ["Frontend", "Carrer"],
          description:
            "Moje meno je Romana, som aktuálne nezamestnaná, a som žena v domácnosti  ",
          visibility: false,
        },
      ],
    };
  },
  mutations: {
    updateArray(state, payload) {
      // adding new Couach to array
      const NewCouch = payload;
      return state.coaches.unshift(NewCouch);
    },

    filtredArr(state, payload) {
      state.coaches.filter((coach) => {
        if (coach.types.includes("Frontend") && payload.includes("Frontend")) {
          coach.visibility = true;
        } else if (
          coach.types.includes("Backend") &&
          payload.includes("Backend")
        ) {
          coach.visibility = true;
        } else if (
          coach.types.includes("Carrer") &&
          payload.includes("Carrer")
        ) {
          coach.visibility = true;
        } else {
          coach.visibility = false;
        }
      });
      console.log(payload);
      console.log(state);
    },
  },

  actions: {},
  getters: {
    finalState(state) {
      return state.coaches;
    },
  },
});

export default store;
