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
  font-size: inherit;
  cursor: pointer;
  border: none;
  color: #555d50;
  border: outset 0.3rem #ccc;
  background-color: #e8e8e8;
  position: relative;
  z-index: 6;
}
</style>
