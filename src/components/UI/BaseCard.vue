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
  max-width: 75rem;
  height: fit-content;
  margin: 5rem auto;
  color: #555d50;
  box-shadow: 0.8rem 0.4rem #ccc;
  border-radius: 0.9rem;
  border: 0.1rem solid #ccc;
  background-color: white;
  /* border: 2px solid black; */
}

@media only screen and (min-width: 320px) {
  .wrapp {
    max-width: 28rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}
@media only screen and (min-width: 375px) {
  .wrapp {
    max-width: 34rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}
@media only screen and (min-width: 414px) {
  .wrapp {
    max-width: 37rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}
@media only screen and (min-width: 568px) {
  .wrapp {
    max-width: 50rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}
@media only screen and (min-width: 667px) {
  .wrapp {
    max-width: 60rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}

@media only screen and (min-width: 736px) {
  .wrapp {
    max-width: 60rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}
@media only screen and (min-width: 1024px) {
  .wrapp {
    max-width: 65rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}
@media only screen and (min-width: 1366px) {
  .wrapp {
    max-width: 75rem;
    /* margin: 0rem;
    margin-top: 1rem;
    margin-left: 2rem; */
  }
}
</style>
