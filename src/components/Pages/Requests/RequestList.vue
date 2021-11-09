<template>
  <div>
    <base-card>
      <h2>All Requests</h2>
    </base-card>
    <base-card>
      <request-item></request-item>
    </base-card>
  </div>
</template>
<script>
import BaseCard from "../../BaseCard.vue";
import RequestItem from "./RequestItem.vue";
export default {
  components: { BaseCard, RequestItem },
};
</script>
<style scoped>
h2 {
  display: flex;
  justify-content: center;
  padding: 10px;
  text-decoration: underline;
}
</style>
