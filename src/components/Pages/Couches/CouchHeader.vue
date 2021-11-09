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
          name="Carrer"
          id="Carrer"
          value="Carrer"
          v-model="inputs"
        />
        Carrer</label
      >
    </form>
    <base-button @click="filter">Refresh</base-button>
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
  methods: {
    filter() {
      this.$store.commit("filtredArr", this.inputs);
      // Object.values zodpovedá za to, aby sme si object zmenili na pole ktoré porovnáme
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
