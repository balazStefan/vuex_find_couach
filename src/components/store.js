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
      filtredCoaches: [],
    };
  },
  getters: {
    getCoaches(state) {
      return state.filtredCoaches;
    },
  },
  mutations: {
    filter(state, payload) {
      const coachestoFilter = [...state.coaches];
      state.filtredCoaches = coachestoFilter.filter((coach) =>
        coach.types.includes(...payload)
      );
    },
  },
});

export default store;
///
