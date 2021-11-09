<template>
  <div>
    <h3>Are you interest ?</h3>
    <p>So, Here is your new COUCH !</p>
    <section>
      <p>
        {{ description }}
      </p>
    </section>
    <base-button>Contact</base-button>
  </div>
</template>

<script>
import BaseButton from "../BaseButton.vue";
// import ContactCoach from "../Pages/Couches/ContactCoach.vue";
// import BaseCard from "./BaseCard.vue";
export default {
  // components: { ContactCoach },
  components: { BaseButton },
  computed: {
    info() {
      return this.$store.getters.getInfo;
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 15px;
}

p {
  /* border: 1px solid black; */
  align-self: flex-start;
}
</style>
