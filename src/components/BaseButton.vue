<template>
  <button><slot></slot></button>
</template>
<script>
export default {};
</script>
<style scoped>
button {
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  height: max-content;
  box-shadow: 4px 2px #ccc;
  cursor: pointer;
  border: none;
  color: #555d50;
  background-color: #e8e8e8;
  /* outline: outset 1px #ccc; */

  /* %border: 1px solid rgba(97, 105, 93, 0.1); */
}
</style>
