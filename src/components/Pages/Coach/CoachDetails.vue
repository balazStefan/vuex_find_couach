<template>
  <div>
    <base-card>
      <header>
        <h2>{{ name }}</h2>
        <p>{{ money }}€/Hour</p>
      </header>
      <div class="types">
        <base-types v-for="type in types" :key="type" :type="type"></base-types>
      </div>
      <main>
        <section>{{ desc }}</section>
      </main>
      <base-button class="backHome" @click="homepage">All Coaches</base-button>
      <base-button
        @click="contact"
        class="backHome"
        :class="{ dismiss: clicked }"
        >Contact Coach</base-button
      >
    </base-card>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
      clicked: false,
    };
  },
  computed: {
    name() {
      return this.selectedCoach.name;
    },

    money() {
      return this.selectedCoach.money;
    },

    desc() {
      return this.selectedCoach.description;
    },
    types() {
      return this.selectedCoach.types;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters.getCoaches.find(
      (coach) => coach.id === this.id
    );
  },
  methods: {
    homepage() {
      return this.$router.replace("/");
    },
    contact() {
      const coachId = this.$route.params.id;
      this.clicked = true;
      return this.$router.replace("/coaches/" + `${coachId}` + "/contact");
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
}
h2 {
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
}
p {
  margin-left: 1.1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #555d50;
}
main {
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  padding: 2rem;
}

section {
  margin-top: 1.5rem;
  width: inherit;
  padding: 3rem;
  background-color: whitesmoke;
}
.position {
  display: flex;

  justify-content: flex-end;
}

button {
  margin-right: 2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.types {
  display: flex;
  justify-content: center;
  gap: 4rem;
}
.backHome {
  display: flex;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.dismiss {
  opacity: 0;
}
button::before {
  content: "";
  position: absolute;
  background: rgb(224, 121, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 121, 42, 0.8382703423166141) 17%,
    rgba(215, 130, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 3%;
  height: 100%;
  transition: all 0.8s ease-in-out;
}
button:hover::before {
  background: rgb(224, 121, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 121, 42, 0.8382703423166141) 17%,
    rgba(215, 130, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}
</style>
