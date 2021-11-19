<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <!--!! urobí boolean a z trufy urobí false -->
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
  width: 100px;
  padding: 6px;
  align-self: flex-start;
  margin-left: 20px;
  margin-bottom: 15px;
}
</style>
