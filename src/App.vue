<template>
  <div class="wrapper">
    <the-header></the-header>
    <router-view v-slot="slotProps">
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
body {
  width: 100%;
  font-family: sans-serif;

  /* background: linear-gradient(
      342deg,
      rgba(13, 9, 1, 0.9139005944174545) 0%,
      rgba(0, 8, 7, 0.8438725832129726) 26%,
      rgba(21, 14, 123, 0.846673703661152) 32%,
      rgba(24, 212, 188, 0.8438725832129726) 52%,
      rgba(0, 0, 0, 0.8578781854538691) 52%,
      rgba(220, 147, 2, 0.7682423311121324) 87%
    ); */
  /* background: rgb(255,255,255);
background: linear-gradient(344deg, rgba(255,255,255,0.2164216028208158) 0%, rgba(84,75,96,1) 33%, rgba(4,24,34,0.1407913507199755) 49%, rgba(43,84,194,1) 69%);
} */
}
html {
  margin: 0;
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
</style>
