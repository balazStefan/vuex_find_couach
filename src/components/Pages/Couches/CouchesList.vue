<template>
  <div>
    <base-card>
      <couch-filter></couch-filter>
    </base-card>
    <base-coach
      v-for="coach in coaches"
      :key="coach.id"
      :name="coach.name"
      :desc="coach.description"
      :types="coach.types"
      :email="coach.email"
      :money="coach.money"
    >
    </base-coach>
  </div>
</template>
<script>
import BaseCoach from "./BaseCoach.vue";
import BaseCard from "../../BaseCard.vue";
import CouchFilter from "./CouchFilter.vue";

export default {
  components: { BaseCoach, BaseCard, CouchFilter },
  computed: {
    coaches() {
      return this.$store.getters.getCoaches;
    },
  },
};
</script>
