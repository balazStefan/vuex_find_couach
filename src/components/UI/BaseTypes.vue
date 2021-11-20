<template>
  <span :class="type">{{ type }}</span>
</template>
<script>
export default {
  props: ["type"],
};
</script>
<style scoped>
/*--------------------COLOR OF SPANS--------------- */

span {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: 0.4rem 0.4rem #ccc;
}
.Frontend {
  background-color: lightgreen;
  color: #555d50;
}
.Backend {
  background-color: lightpink;
  color: #555d50;
}
.Career {
  background-color: lightskyblue;
  color: #555d50;
}
</style>
