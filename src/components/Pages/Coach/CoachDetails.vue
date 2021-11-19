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
// import BaseButton from "../../UI/BaseButton.vue";
import BaseCard from "../../UI/BaseCard.vue";
import BaseTypes from "../../UI/BaseTypes.vue";

export default {
  components: { BaseCard, BaseTypes },
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
  gap: 8px;
}
h2 {
  margin-top: 10px;
  margin-left: 10px;
}
p {
  margin-left: 10px;
}
main {
  display: flex;
  flex-direction: column;
}

section {
  text-align: center;
  margin-top: 15px;
}
.position {
  display: flex;

  justify-content: flex-end;
}

button {
  margin-right: 20px;
  padding: 5px;
  margin-bottom: 10px;
}
.types {
  display: flex;
  justify-content: center;
  gap: 40px;
}
</style>
