<template>
  <base-card>
    <header>
      <h3>{{ name }}</h3>
      <p>{{ money }}€/1h</p>
    </header>
    <main>
      <span v-for="type in types" :key="type" :class="type">{{ type }}</span>
    </main>
    <footer>
      <base-button>Details</base-button>
      <base-button>Contact</base-button>
    </footer>
    <section v-show="toggleDesc">{{ desc }}</section>
    <contact-coach v-show="toggleContact"></contact-coach>
  </base-card>
</template>

<script>
import BaseButton from "../../BaseButton.vue";
import BaseCard from "../../BaseCard.vue";
import ContactCoach from "./ContactCoach.vue";

export default {
  props: ["name", "desc", "types", "money"],
  components: { BaseCard, ContactCoach, BaseButton },
  data() {
    return {
      toggleDesc: false, // dočasne riešenie
      toggleContact: false, // dočasne riešenie, nebude to cez v-show minimálne nie contact, mal by to byť zvlášť link pod id Coucha
    };
  },
};
</script>
<style scoped>
h3 {
  margin: 10px;
  padding: 8px;
}
p {
  margin-left: 25px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
span {
  padding: 6px;
  border-radius: 8px;
  box-shadow: 4px 4px #ccc;
}
footer {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}
button {
  padding: 5px 10px;
  margin: 10px 0px;
}
button:nth-child(2) {
  margin-right: 20px;
}
section {
  padding: 10px;

  margin-top: 10px;
  align-self: center;
}

/*--------------------COLOR OF SPANS--------------- */

.Frontend {
  background-color: lightgreen;
  color: black;
}
.Backend {
  background-color: lightpink;
  color: black;
}
.Carrer {
  background-color: lightskyblue;
  color: black;
}
</style>
