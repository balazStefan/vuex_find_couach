<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <!--!! urobí boolean a z trufy urobí false -->
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <h2>All Requests</h2>
    </base-card>
    <base-spinner v-if="isLoading"></base-spinner>
    <ul v-if="hasRequests && !isLoading">
      <request-item
        v-for="req in receivedRequests"
        :key="req.id"
        :email="req.email"
        :message="req.message"
      ></request-item>
    </ul>
    <h5 v-show="!hasRequests && !isLoading">
      You haven´t received any requests YET!
    </h5>
  </div>
</template>
<script>
import RequestItem from "./RequestItem.vue";

export default {
  components: { RequestItem },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters.requests; // over či je dobrý getter
    },
    hasRequests() {
      return this.$store.getters.hasRequests;
    },
  },
  methods: {
    async loadReq() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("fetchRequests");
      } catch (error) {
        this.error = error.message || "Something failed";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadReq();
  },
};
</script>
<style scoped>
h5,
h2 {
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 2rem;
  text-decoration: none;
}
</style>
