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
      <div class="position">
        <!-- <base-button type="button" :to="linkToContact">Contact</base-button> -->
      </div>
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
    };
  },
  computed: {
    name() {
      return this.selectedCoach.name;
    },
    linktoContact() {
      return this.$route.path + "/" + this.id + "/contact";
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
</style>
