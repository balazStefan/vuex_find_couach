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
          >Request List <span class="notifi">{{ requests }}</span></router-link
        >
      </li>
      <li><router-link to="/auth" v-if="!isAuth">Log In</router-link></li>
      <li>
        <router-link to="/" v-show="isAuth" @click="logout" class="logout"
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
    requests() {
      return this.$store.getters.numberOfRequests;
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
  width: 100%;
  /* border-bottom: 2rem solid #ccc; */
  /* background: paleturquoise; */
  /* border: 2rem solid red; */
  justify-content: space-between;
  background-color: #021691;
  /* margin: 10rem; */
  padding: 0rem;
  height: 10rem;
}
ul {
  box-sizing: border-box;
  /* border: 3rem solid purple; */
  margin: 0rem;
  padding: 0rem;
  list-style: none;
  width: max-content;
  display: flex;
  /* justify-content: flex-end;
  align-items: center; */
  gap: 5rem;
  justify-content: center;
}
li {
  /* width: 200rem;
  height: 80rem; */
  /* border: 2rem solid green; */
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
  margin: 0rem;
  border: 0.1rem solid #555d50;
  padding: 1.6rem;
  box-sizing: inherit;
  background-color: oldlace;
  justify-content: center;
  align-self: center;
  text-align: center;
  border-radius: 0.8rem;
  border: none;
  font-size: 1.3rem;
  position: relative;
}

.router-link-active {
  background-color: red;
  color: white;
  border-radius: 0.8rem;
  border: none;
}
.router-link-exact-active {
  background-color: red;
  color: white;
  border-radius: 0.8rem;
  border: none;
}
h1 {
  /* border: 2rem solid black; */
  padding: 1rem;
  width: 30rem;
  color: white;
  margin: 0rem;
  display: flex;
}
/******** HOVERING *************/

.lastOne {
  margin-right: 12rem;
}
.logo {
  display: flex;
  width: max-content;
  font-size: 2.5rem;
  background: transparent;
  color: white;
  /* border: 2rem solid black; */
  padding: 0rem;
  margin-left: 1rem;
}
.logo:active,
.logo:hover,
.logo:focus {
  color: white;
  background: transparent;
  border-radius: 0.8rem;
  border: none;
  text-decoration: underline whitesmoke;
}
.logout {
  margin-right: 2rem;
}
.notifi {
  position: absolute;
  top: -10px;
  background-color: white;
  /* border: 2px solid red; */
  border-radius: 150px;
  width: 3rem;
  font-weight: bolder;
}
</style>
