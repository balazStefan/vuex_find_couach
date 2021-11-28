<template>
  <div class="wrapp">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.wrapp {
  width: 75rem;
  height: fit-content;
  margin: 5rem auto;
  color: #555d50;
  box-shadow: 0.8rem 0.4rem #ccc;
  border-radius: 0.9rem;
  border: 0.1rem solid #ccc;
  background-color: white;
}

@media only screen and (min-width: 200px) {
  .wrapp {
    width: 45rem;
  }
}
@media only screen and (min-width: 280px) {
  .wrapp {
    width: 45rem;
  }
}
@media only screen and (min-width: 350px) {
  .wrapp {
    width: 45rem;
  }
}
@media only screen and (min-width: 400px) {
  .wrapp {
    width: 45rem;
  }
}
@media only screen and (min-width: 768px) {
  .wrapp {
    width: 55rem;
  }
}

@media only screen and (min-width: 800px) {
  .wrapp {
    width: 60rem;
  }
}
@media only screen and (min-width: 900px) {
  .wrapp {
    width: 65rem;
  }
}
@media only screen and (min-width: 1048px) {
  .wrapp {
    width: 65rem;
  }
}
</style>
