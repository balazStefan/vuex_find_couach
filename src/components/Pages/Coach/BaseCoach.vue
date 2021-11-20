<template>
  <base-card>
    <header>
      <h3>{{ name }}</h3>
      <p>{{ money }}€/1h</p>
    </header>
    <main>
      <base-types v-for="type in types" :key="type" :type="type"> </base-types>
    </main>
    <footer>
      <base-button
        ><router-link :to="coachDetails">Details</router-link></base-button
      >
      <base-button>
        <router-link :to="linkToContact">Contact</router-link></base-button
      >
    </footer>
  </base-card>
</template>

<script>
// import ContactCoach from "./ContactCoach.vue";

export default {
  props: ["name", "desc", "types", "money", "id"],

  computed: {
    linkToContact() {
      return this.$route.path + "/" + this.id + "/contact"; //coaches/stevo/contact
    },
    coachDetails() {
      return this.$route.path + "/" + this.id; // coaches/stevo
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 1rem;
  margin-bottom: 0rem;
  padding: 0.8rem;
  font-size: 2rem;
}
p {
  margin-left: 2.5rem;
  font-size: 1.7rem;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

footer {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
}
button {
  padding: 0.5rem 1rem;
  margin: 1rem 0rem;
}
button:nth-child(2) {
  margin-right: 2rem;
}
a {
  text-decoration: none;
}
</style>
rem
