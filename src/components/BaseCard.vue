<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
div {
  border: 1px solid black;
  box-shadow: 8px 4px #ccc;
  width: 650px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  border-right: 1px #ccc;
  color: #555d50;
  border-radius: 9px;
  border: 1px solid #ccc;
}
</style>
