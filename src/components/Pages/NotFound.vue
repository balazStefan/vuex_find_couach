<template>
  <section>
    <base-card>
      <h2>PAGE NOT FOUND</h2>
      <p>
        This page could not be found ... Here is for you our
        <router-link to="/coaches"> <strong>Home Page</strong></router-link>
      </p>
    </base-card>
  </section>
</template>
<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
};
</script>
<style scoped>
h2 {
  width: 100%;
  text-align: center;
  margin: 10px;
}
p {
  margin: 10px;
  text-align: center;
}
</style>
