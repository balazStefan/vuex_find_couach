<template>
  <div>
    <h1><router-link class="logo" to="/">Find a coach</router-link></h1>
    <ul>
      <li><router-link to="/coaches">Couches List</router-link></li>
      <li>
        <router-link class="active" to="/register" v-show="isAuth"
          >Register as a coach</router-link
        >
      </li>
      <li>
        <router-link to="/requests" class="lastOne" v-show="isAuth"
          >Request List</router-link
        >
      </li>
      <li><router-link to="/auth" v-if="!isAuth">Log In</router-link></li>
      <li>
        <router-link to="/" v-show="isAuth" @click="logout"
          >Log out</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAutentificated;
    },
    isCoach() {
      return this.$store.getters.userIsCoach;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/coaches");
    },
  },
};
</script>
<style scoped>
div {
  display: flex;

  /* border-bottom: 2px solid #ccc; */
  /* background: paleturquoise; */
  /* border: 2px solid red; */
  justify-content: space-between;
  background-color: #021691;
  /* margin: 10px; */
  padding: 0px;
  height: 100px;
}

ul {
  box-sizing: border-box;
  /* border: 3px solid purple; */

  margin: 0px;
  padding: 0px;
  list-style: none;
  width: max-content;
  display: flex;
  /* justify-content: flex-end;
  align-items: center; */
  gap: 50px;
  justify-content: center;
}
li {
  /* width: 200px;
  height: 80px; */
  /* border: 2px solid green; */
  box-sizing: inherit;
  list-style: none;
  /* background: orange; */
  display: flex;
}
a {
  width: inherit;
  text-decoration: none;
  color: #555d50;
  font-weight: bolder;
  font-family: inherit;
  cursor: pointer;
  margin: 0px;
  border: 1px solid #555d50;
  padding: 1rem;
  box-sizing: inherit;
  background-color: oldlace;
  justify-content: center;
  align-self: center;
  text-align: center;
  border-radius: 8px;
  border: none;
}
.router-link-exact-active {
  background-color: red;
  color: white;
  border-radius: 8px;
  border: none;
}

h1 {
  /* border: 2px solid black; */
  padding: 10px;
  width: 300px;
  color: white;
  margin: 0px;
  display: flex;
}

/******** HOVERING *************/
/* a:active,
a:hover,
a:focus {
  background: orangered;
  */

.lastOne {
  margin-right: 20px;
}
.logo {
  display: flex;
  width: max-content;
  font-size: 1.5rem;
  background: transparent;
  color: white;
  /* border: 2px solid black; */
  padding: 0px;
  margin-left: 10px;
}
.logo:active,
.logo:hover,
.logo:focus {
  color: white;
  background: transparent;
  border-radius: 8px;
  border: none;
  text-decoration: underline whitesmoke;
}
</style>
>
