<template>
  <div>
    <base-card>
      <couch-header></couch-header>
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
import CouchHeader from "./CouchHeader.vue";
import BaseCoach from "../../BaseCoach.vue";
import BaseCard from "../../BaseCard.vue";
// import TheInfo from "../../UI/TheInfo.vue";

export default {
  components: { CouchHeader, BaseCoach, BaseCard },
  computed: {
    coaches() {
      return this.$store.getters.finalState;
    },
  },
};
</script>
