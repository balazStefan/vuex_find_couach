<template>
  <base-card class="active">
    <header>
      <h3>{{ name }}</h3>
      <p>{{ money }}€/1h</p>
    </header>
    <main>
      <base-types v-for="type in types" :key="type" :type="type"> </base-types>
    </main>
    <footer>
      <base-button
        ><router-link :to="coachDetails">Details</router-link></base-button
      >
      <base-button>
        <router-link :to="linkToContact">Contact</router-link></base-button
      >
    </footer>
  </base-card>
</template>

<script>
export default {
  props: ["name", "desc", "types", "money", "id"],

  computed: {
    linkToContact() {
      return this.$route.path + "/" + this.id + "/contact"; //coaches/stevo/contact
    },
    coachDetails() {
      return this.$route.path + "/" + this.id; // coaches/stevo
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 1rem;
  margin-bottom: 0rem;
  padding: 0.8rem;
  font-size: 2rem;
}
p {
  margin-left: 2.5rem;
  font-size: 1.7rem;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

footer {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  color: black;
}
button {
  /* padding: 1rem 1rem; */
  font-size: inherit;
  padding: 0.6rem;
  margin: 1rem 0rem;
}
button:nth-child(2) {
  margin-right: 2rem;
}
a {
  text-decoration: none;
  color: black;
  font-size: inherit;
  font-size: inherit;
  padding: 0.6rem 0rem;
}

a::before {
  font-size: inherit;
  content: "";
  position: absolute;
  background: rgb(224, 121, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 121, 42, 0.8382703423166141) 17%,
    rgba(215, 130, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 3%;
  height: 100%;
  transition: all 0.8s ease-in-out;
}
a:hover::before {
  background: rgb(224, 121, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 121, 42, 0.8382703423166141) 17%,
    rgba(215, 130, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  font-size: inherit;
}

.active {
  transition: all 0.4s;
}
.active:hover {
  background: #e8e8e8;
}
</style>
rem
