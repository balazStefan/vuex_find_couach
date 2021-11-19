<template>
  <div>
    <h1>Find your coach</h1>
    <form>
      <label for="Frontend" class="controls-header"> Frontend</label>
      <input
        type="checkbox"
        name="Frontend"
        id="Frontend"
        checked
        @change="setFilterCoach"
      />

      <label for="Backend" class="controls-header"> Backend</label>
      <input
        type="checkbox"
        name="Backend"
        id="Backend"
        checked
        @change="setFilterCoach"
      />

      <label for="Career" class="controls-header"> Career </label>
      <input
        type="checkbox"
        name="Career"
        id="Career"
        checked
        @change="setFilterCoach"
      />
    </form>
  </div>
</template>
<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        Frontend: true,
        Backend: true,
        Career: true,
      },
    };
  },

  methods: {
    setFilterCoach(event) {
      // klik na zmmenu
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = { ...this.filters, [inputId]: isActive };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
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

.controls-header {
  cursor: pointer;

  padding: 3px 8px 3px 8px;
}

.controls-header:hover {
  font-weight: bold;
}
</style>
