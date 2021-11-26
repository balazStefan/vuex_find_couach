<template>
  <div class="wrapper">
    <the-header class="h"></the-header>
    <router-view v-slot="slotProps" class="m">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component
      ></transition>
      <the-footer class="f"></the-footer>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import TheFooter from "./components/UI/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
  created() {
    this.$store.dispatch("autoLogIn");
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(currValue, oldValue) {
      if (currValue && currValue !== oldValue) {
        this.$router.replace("/coaches");
      }
    },
  },
};
</script>
<style>
:root,
*::before,
*::after {
  font-size: 62.5%;
}
*,
*::before,
*::after {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  color: #555d50;
}
div {
  width: 100%;
  font-family: sans-serif;
}
html {
  margin: 0;
  width: 100%;
  height: 100%;
}
body {
  background: rgb(255, 170, 0);
  background: linear-gradient(
    167deg,
    rgba(255, 170, 0, 1) 3%,
    rgba(1, 1, 13, 1) 42%,
    rgba(26, 229, 203, 1) 54%,
    rgba(29, 29, 255, 1) 57%,
    rgba(5, 5, 29, 0.919502835313813) 70%,
    rgba(5, 5, 29, 0.9335084375547094) 83%
  );

  background-repeat: no-repeat;
  background-attachment: fixed;
}
.wrapper {
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(100px, auto);
  grid-template-areas:
    "h h h h h h h h h h h"
    "m m m m m m m m m m m"
    "f f f f f f f f f f f";
}
/*--------------------------------ANIMACIA:-route-styling ---------------------------*/

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.h {
  grid-area: h;
  grid-column: 1/12;
  grid-row: 1/2;
}
.m {
  grid-area: m;
  grid-column-start: 2;
  grid-column-end: 11;
  grid-row: 2/2;
}
.f {
  grid-area: f;
}
</style>
