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
  padding: 6px;
  border-radius: 8px;
  box-shadow: 4px 4px #ccc;
}
.Frontend {
  background-color: lightgreen;
  color: black;
}
.Backend {
  background-color: lightpink;
  color: black;
}
.Career {
  background-color: lightskyblue;
  color: black;
}
</style>
