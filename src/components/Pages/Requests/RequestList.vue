<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <h2>All Requests</h2>
    </base-card>
    <base-spinner v-if="isLoading"></base-spinner>
    <transition-group tag="ul" v-if="hasRequests && !isLoading">
      <request-item
        v-for="req in receivedRequests"
        :key="req.id"
        :id="req.id"
        :email="req.email"
        :message="req.message"
        @deleteReq="removeReq"
      ></request-item>
    </transition-group>
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
      return this.$store.getters.requests;
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
    async removeReq(id) {
      const token = this.$store.getters.token;
      const coachId = this.$store.getters.getUserId;
      const response = await fetch(
        `https://dasdas-b3d79-default-rtdb.firebaseio.com/requests/${coachId}/${id}.json?auth=` +
          token,
        { method: "DELETE" }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message ||
            "Fail to  Sign Up .. This Email adress is used..."
        );
        throw error;
      }
      this.$store.dispatch("fetchRequests");
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
.bell {
  position: relative;
  width: 250px;
  height: auto;
}
</style>
