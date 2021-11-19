<template>
  <li>
    <base-card>
      <div>
        <header>
          <p class="email__position"><strong>Email from:</strong></p>
          <a :href="emailLink">{{ email }}</a>
        </header>
        <section>
          <p><strong>Message:</strong></p>
          <p>{{ message }}</p>
        </section>
      </div>
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
