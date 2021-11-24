<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <!--!! urobí boolean a z trufy urobí false -->
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <coach-filter @change-filter="setFilter"></coach-filter>
      <base-button @click="loadCoaches(true)" class="hovering"
        >Refresh</base-button
      >
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
  width: 10rem;
  padding: 0.6rem;
  align-self: flex-start;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
}

.hovering {
  position: relative;
  background: white;
  transition: all 1s ease-in-out;
  border: outset 3px;
  box-shadow: none;
  color: black;
}

.hovering::before {
  position: absolute;
  content: "";
  top: 0;
  left: 50%;
  width: 10%;
  height: 100%;
  z-index: -1;
  background: white;
  transition: all 2.6s ease-in-out;
  transform-origin: center;
}

.hovering:hover::before {
  background: rgb(255, 0, 0);
  background: linear-gradient(
    75deg,
    rgba(255, 0, 0, 1) 6%,
    rgba(255, 255, 255, 0) 48%,
    rgba(247, 0, 30, 0.7682423311121324) 93%
  );
  z-index: -2;
  width: 100%;
  left: 0%;
  opacity: 1;
}
</style>
