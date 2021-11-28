<template>
  <div class="griding">
    <the-header class="h"></the-header>
    <router-view v-slot="slotProps" class="m">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component
      ></transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";

export default {
  components: { TheHeader },
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
/* html {
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  width: 100%;
  background: white;
} */

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
.griding {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "h h   "
    "m m ";
}
.h {
  grid-area: h;
  grid-column: 1/3;
  grid-row: 1/2;
}
.m {
  grid-area: m;
  grid-column: 1/-1;
  grid-row: 2/2;
}
</style>
