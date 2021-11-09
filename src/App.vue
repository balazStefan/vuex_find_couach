<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
export default {
  components: { TheHeader },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
*,
*::before,
*::after {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  color: #555d50;
}
body {
  /* box-sizing: border-box; */
  font-family: sans-serif;
  background-color: white;

  /* border: 2px solid black; */
}
</style>
