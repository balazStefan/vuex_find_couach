<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <coach-filter @change-filter="setFilter"></coach-filter>
      <base-button @click="loadCoaches(true)">Refresh</base-button>
    </base-card>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul v-if="!isLoading">
      <base-coach
        v-for="coach in coaches"
        :key="coach.id"
        :name="coach.name"
        :desc="coach.description"
        :types="coach.types"
        :email="coach.email"
        :money="coach.money"
        :id="coach.id"
      >
      </base-coach>
    </ul>
  </div>
</template>
<script>
import BaseCoach from "./BaseCoach.vue";
import CoachFilter from "./CoachFilter.vue";

export default {
  components: {
    BaseCoach,
    CoachFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        Frontend: true,
        Backend: true,
        Career: true,
      },
    };
  },
  computed: {
    coaches() {
      const coaches = this.$store.getters.getCoaches;
      return coaches.filter((coach) => {
        if (this.activeFilters.Frontend && coach.types.includes("Frontend")) {
          return true;
        }
        if (this.activeFilters.Backend && coach.types.includes("Backend")) {
          return true;
        }
        if (this.activeFilters.Career && coach.types.includes("Career")) {
          return true;
        }
        return false;
      });
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadCoaches", { refreshNow: refresh });
      } catch (error) {
        this.error = error.message || "Something  went wrong...";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
button {
  font-size: inherit;
  padding: 0.6rem;
  align-self: flex-start;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
}

button::before {
  content: "";
  position: absolute;
  background: rgb(224, 42, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 42, 42, 0.8382703423166141) 17%,
    rgba(215, 59, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 3%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}
button:hover::before {
  background: rgb(224, 42, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 42, 42, 0.8382703423166141) 17%,
    rgba(215, 59, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}
</style>
