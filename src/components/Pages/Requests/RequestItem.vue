<template>
  <li>
    <base-card>
      <a :href="emailLink">{{ email }}</a>

      <p>{{ message }}</p>
    </base-card>
  </li>
</template>
<script>
import BaseCard from "../../UI/BaseCard.vue";

export default {
  components: { BaseCard },
  props: ["email", "message"],

  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  gap: 10px;
  padding: 10px;
}
section {
  padding: 10px;
}
</style>
