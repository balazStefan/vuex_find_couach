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
      <router-link :to="coachDetails">Details</router-link>
      <router-link :to="linkToContact">Contact</router-link>
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
  margin: 10px;
  padding: 8px;
}
p {
  margin-left: 25px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

footer {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}
button {
  padding: 5px 10px;
  margin: 10px 0px;
}
button:nth-child(2) {
  margin-right: 20px;
}
section {
  padding: 10px;

  margin-top: 10px;
  align-self: center;
}
</style>
