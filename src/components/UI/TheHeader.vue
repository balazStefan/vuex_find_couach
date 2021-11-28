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
//class="notifi"
</script>
<style scoped>
/* div {
  display: flex;
  justify-content: space-between;
  width: 100%;
} */

ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  box-sizing: border-box;
  padding: 0rem;
  list-style: none;
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

/* .lastOne {
  margin-right: 12rem;
} */
.logo {
  display: flex;
  width: max-content;
  font-size: 2.5rem;
  background: transparent;
  color: black;
  border: none;
  box-shadow: none;
  /* padding: 0rem; */
  /* margin-left: 1rem; */
}
.logo:active,
.logo:hover,
.logo:focus {
  color: black;
  border-radius: 0.8rem;
  border: none;
  text-decoration: underline #555d50;
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
    /* transform: rotateY(15deg); */
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

.header {
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  min-width: 100%;
}
/* @media only screen and (max-width: 800px) {
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;
  }
  /* .logo {
    display: none;
  } */

/* @media only screen and (max-width: 360px) {
  .logo {
    display: none;
  }
  .header {
    width: 360px;
    border: 1px solid black;
    margin: auto;
  }
  a {
    font-size: 0.8rem;
    padding: 1rem;
  }
  ul {
    gap: 1rem;
  }
} */

@media only screen and (min-width: 200px) {
  .header {
    width: 20rem;
  }
}
@media only screen and (min-width: 280px) {
  .header {
    width: 20rem;
  }
}
@media only screen and (min-width: 360px) {
  .header {
    width: 35rem;
  }
}
@media only screen and (min-width: 400px) {
  .header {
    width: 40rem;
  }
}
@media only screen and (min-width: 768px) {
  .header {
    width: 55rem;
  }
}

@media only screen and (min-width: 800px) {
  .header {
    width: 60rem;
  }
}
@media only screen and (min-width: 900px) {
  .header {
    width: 65rem;
  }
}
@media only screen and (min-width: 1048px) {
  .header {
    width: 65rem;
  }
}
</style>
