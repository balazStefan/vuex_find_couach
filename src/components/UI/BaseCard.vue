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
  width: 75rem;
  height: fit-content;
  margin: 5rem auto;
  color: #555d50;
  box-shadow: 0.8rem 0.4rem #ccc;
  border-radius: 0.9rem;
  border: 0.1rem solid #ccc;
  background-color: white;
  /* background: rgb(249, 249, 250);
  background: linear-gradient(
    342deg,
    rgba(249, 249, 250, 0.6758053563222164) 47%,
    rgba(5, 5, 3, 0.6561975131849616) 52%,
    rgba(249, 249, 250, 1) 52%
  ); */
  /* background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18); */

  background: oldlace;
}
</style>
