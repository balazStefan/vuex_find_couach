<template>
  <div class="header">
    <h1>
      <router-link class="logo" to="/">Find a coach</router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/coaches" class="hoverNav">Couches List</router-link>
      </li>
      <li>
        <router-link class="active hoverNav" to="/register" v-show="isAuth"
          >Register as a coach</router-link
        >
      </li>
      <li>
        <router-link to="/requests" class="notifi hoverNav" v-show="isAuth"
          >Request List
          <span :class="{ new: requests, norq: !requests }">
            <svg-bell> </svg-bell>
            <span>{{ requests }}</span>
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/auth" class="hoverNav login" v-if="!isAuth"
          >Log In</router-link
        >
      </li>
      <li>
        <router-link
          to="/"
          v-show="isAuth"
          @click="logout"
          class="logout hoverNav"
          >Log out</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import SvgBell from "./SvgBell.vue";
export default {
  components: { SvgBell },
  computed: {
    isAuth() {
      return this.$store.getters.isAutentificated;
    },
    isCoach() {
      return this.$store.getters.isCoach;
    },
    requests() {
      return this.$store.getters.numberOfRequests;
    },
    hasRequests() {
      return this.$store.getters.hasRequests;
    },
    isRegistreated() {
      return this.$store.getters.getReg;
    },
  },
  methods: {
    logout() {
      console.log(this.isCoach);
      this.$store.dispatch("logout");
      this.$router.replace("/coaches");
    },
  },
};
</script>
<style scoped>
.header {
  /* max-width: max-content; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  background: darkblue;
}
ul {
  display: flex;
  align-items: center;
  gap: 3rem;
  box-sizing: border-box;
  padding: 0rem;
  list-style: none;
  /* background: burlywood; */
  max-width: max-content;
}
li {
  min-width: max-content;
  list-style: none;
}
a {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  border-radius: 0.8rem;
  border: none;
  font-size: 1.3rem;
  position: relative;
  box-shadow: 0.4rem 0.2rem #ccc;
}
span {
  position: absolute;
  top: -4px;
  right: 4px;
  z-index: 10;
  color: black;
}

.router-link-active {
  background-color: red;
  color: white;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0.4rem 0.2rem #dc143c;
}
.router-link-exact-active {
  background-color: red;
  color: white;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0.4rem 0.2rem #dc143c;
}

/******** HOVERING *************/

.logo {
  /* display: flex; */
  width: max-content;
  font-size: 2.5rem;
  background: transparent;
  color: white;
  border: none;
  box-shadow: none;
  /* border: 1px solid black; */
}
.logo:active,
.logo:hover,
.logo:focus {
  color: white;
  border-radius: 0.8rem;
  border: none;
  text-decoration: underline white;
}
.logout,
.login {
  margin-right: 2rem;
}

.new {
  background-color: transparent;
  animation: newOne 0.7s infinite steps(5);
}
.norq {
  display: none;
}
.img {
  background-color: black;
}
.hoverNav {
  transition: all 1s ease-in-out;
}
.hoverNav:hover {
  background-color: red;
  color: white;
  box-shadow: 0.4rem 0.2rem #dc143c;
}

@keyframes newOne {
  0% {
    transform: rotateZ(0deg);
    transform-origin: center top;
  }
  25% {
    transform: rotateZ(25deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(-25deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

@media only screen and (max-width: 560px) {
  .header {
    display: flex;
    align-items: center;
  }
  .logo {
    text-align: center;
    /* border: 2px solid gold; */
    margin-right: 35px;
  }

  ul {
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    gap: 10px;
    /* border: 2px solid orangered; */
  }
  a {
    padding: 10px;
    max-width: fit-content;
    text-align: center;
    min-width: 150px;
  }
}
@media only screen and (max-width: 320px) {
  .header {
    display: flex;
    align-items: center;
  }
  .logo {
    text-align: center;
    /* border: 2px solid gold; */
    margin: 5px;
  }

  ul {
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    gap: 10px;
    margin: 5px;
    /* border: 2px solid orangered; */
  }
  a {
    padding: 10px;
    max-width: fit-content;
    text-align: center;
    min-width: 150px;
  }
}
/* @media only screen and (min-width: 320px) {
  ul {
    max-width: 28rem;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 20px;
  }
} */
@media only screen and (min-width: 375px) {
  ul {
    max-width: 34rem;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 20px;
  }
}
@media only screen and (min-width: 414px) {
  ul {
    max-width: 37rem;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 20px;
  }
}
@media only screen and (min-width: 568px) {
  .header {
    justify-content: space-between;
  }
  ul {
    max-width: 45rem;
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    /* border: 2px solid white; */
    flex-wrap: wrap;
    margin-right: 0;
  }
  .logo {
    /* border: 1px solid green; */
    max-width: fit-content;
    /* background: chartreuse; */
    text-align: center;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 2rem;
    margin-top: 1rem; */
  }
  a {
    /* max-width: fit-content; */
    font-size: 1rem;
  }
}
@media only screen and (min-width: 640px) {
  .header {
    justify-content: space-around;
  }
  ul {
    flex-wrap: nowrap;
    gap: 20px;
  }
}

@media only screen and (min-width: 736px) {
  .header {
    justify-content: space-around;
  }
  ul {
    max-width: 45rem;
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    /* border: 2px solid white; */
    flex-wrap: nowrap;
    margin-left: -100px;
  }
  .logo {
    /* border: 1px solid green; */
    max-width: fit-content;
    /* background: chartreuse; */
    text-align: center;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 2rem;
    margin-top: 1rem; */
  }
  a {
    /* max-width: fit-content; */
    font-size: 1rem;
  }
}

@media only screen and (min-width: 812px) {
  .header {
    justify-content: space-evenly;
  }
  ul {
    max-width: 45rem;
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    /* border: 2px solid white; */
    flex-wrap: wrap;
    margin-right: 0;
  }
  .logo {
    /* border: 1px solid green; */
    /* max-width: fit-content; */
    /* background: chartreuse; */
    text-align: center;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 2rem;
    margin-top: 1rem; */
  }
  a {
    /* max-width: fit-content; */
    font-size: 1rem;
  }
  .header {
    justify-content: space-around;
  }
  ul {
    flex-wrap: nowrap;
    gap: 20px;
  }
}
/*
/* @media only screen and (min-width: 1024px) {
  ul {
    max-width: 65rem;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 20px;
  }
} */
@media only screen and (min-width: 1366px) {
  .header {
    justify-content: space-between;
  }
  .logo {
    min-width: 250px;
  }
  ul {
    max-width: 75rem;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 20px;
  }
}
</style>
