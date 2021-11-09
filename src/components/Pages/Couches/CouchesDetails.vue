<template>
  <div>
    <base-card>
      <the-info></the-info>
    </base-card>
  </div>
</template>
<script>
import BaseCard from "../../BaseCard.vue";

import TheInfo from "../../UI/TheInfo.vue";

export default {
  components: { BaseCard, TheInfo },
};
</script>
