<template>
  <div>
    <h1 class="typing">Find your coach</h1>
    <form>
      <label for="Frontend" class="controls-header">
        Frontend
        <input
          type="checkbox"
          name="Frontend"
          id="Frontend"
          checked
          @change="setFilterCoach"
      /></label>

      <label for="Backend" class="controls-header">
        Backend
        <input
          type="checkbox"
          name="Backend"
          id="Backend"
          checked
          @change="setFilterCoach"
      /></label>

      <label for="Career" class="controls-header">
        Career
        <input
          type="checkbox"
          name="Career"
          id="Career"
          checked
          @change="setFilterCoach"
      /></label>
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
  height: 15rem;
  gap: 1rem;
}
h1 {
  margin-top: 2rem;
  font-size: 3rem;
}

form {
  color: #555d50;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  font-size: 1.7rem;
}

label {
  padding: 0.6rem 0.1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
}
.controls-header {
  cursor: pointer;
}
.typing {
  border-right: 3px solid #555d50;
  letter-spacing: 0.4rem;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3.5s steps(30), borderLine 0.5s step-end infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 40%;
  }
}

@keyframes borderLine {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #555d50;
  }
}
</style>
