<template>
  <button>
    <slot></slot>
  </button>
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
  box-shadow: 0.4rem 0.2rem #ccc;
  cursor: pointer;
  border: none;
  color: #555d50;
  background-color: #e8e8e8;
}
</style>
