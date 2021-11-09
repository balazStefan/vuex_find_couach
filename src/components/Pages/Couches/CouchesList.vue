<template>
  <div>
    <base-card>
      <couch-filter></couch-filter>
    </base-card>
    <base-coach
      v-for="coach in coaches"
      :key="coach.id"
      :name="coach.name"
      :money="coach.money"
      :description="coach.description"
      :types="coach.types"
      :visibility="coach.visibility"
    >
    </base-coach>
  </div>
</template>
<script>
import BaseCoach from "./BaseCouch.vue";
import BaseCard from "../../BaseCard.vue";
import CouchFilter from "./CouchFilter.vue";

export default {
  components: { BaseCoach, BaseCard, CouchFilter },
  computed: {
    coaches() {
      return this.$store.getters.finalState;
    },
  },
};
</script>
