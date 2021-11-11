<template>
  <div>
    <h1>Find your coach</h1>
    <form>
      <label for="Frontend" class="controls-header">
        <input
          type="checkbox"
          name="Frontend"
          id="Frontend"
          value="Frontend"
          v-model="inputs"
        />
        Frontend</label
      >
      <label for="Backend" class="controls-header">
        <input
          type="checkbox"
          name="Backend"
          id="Backend"
          value="Backend"
          v-model="inputs"
        />
        Backend</label
      >
      <label for="Carrer" class="controls-header">
        <input
          type="checkbox"
          name="Career"
          id="Career"
          value="Career"
          v-model="inputs"
        />
        Career</label
      >
    </form>
    <base-button @click="test">Filtruj</base-button>
  </div>
</template>
<script>
import BaseButton from "../../BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      inputs: [],
    };
  },
  // computed: {
  //   setCoaches() {
  //     return this.$store.getters.getCoaches;
  //   },
  // },
  methods: {
    test() {
      this.$store.commit("filter", this.inputs);
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  gap: 10px;
}
h1 {
  margin-top: 20px;
}

form {
  color: #555d50;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

label {
  padding: 6px 1px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

button {
  width: 100px;
  padding: 6px;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 15px;
}

.controls-header {
  cursor: pointer;

  padding: 3px 8px 3px 8px;
}

.controls-header:hover {
  font-weight: bold;
}
</style>
