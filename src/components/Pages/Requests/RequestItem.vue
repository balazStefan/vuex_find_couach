<template>
  <base-card>
    <h3>Email from:</h3>
    <p><strong>Message:</strong></p>
    <base-button>Reply</base-button>
  </base-card>
</template>
<script>
import BaseCard from "../../BaseCard.vue";
import BaseButton from "../../BaseButton.vue";

export default {
  components: {
    BaseButton,
    BaseCard,
  },
};
</script>
<style scoped>
h3 {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
p {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
button {
  display: flex;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px 20px;
}
</style>
