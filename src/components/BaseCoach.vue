<template>
  <div>
    <!--VISIBILITY -->
    <base-card>
      <header>
        <h3>{{ name }}</h3>
        <p>{{ money }}€/1h</p>
      </header>
      <main>
        <span v-for="type in types" :key="type" :class="type">{{ type }}</span>
      </main>
      <footer>
        <base-button @click="toggleShow">Details</base-button>
        <base-button @click="toggleContact">Contact</base-button>
      </footer>
      <section v-if="show">{{ description }}</section>
      <contact-coach v-if="contact"></contact-coach>
    </base-card>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseCard from "./BaseCard.vue";
import ContactCoach from "./Pages/Couches/ContactCoach.vue";

export default {
  components: { BaseCard, ContactCoach, BaseButton },
  props: ["name", "money", "description", "types", "visibility"],
  data() {
    return {
      show: false,
      contact: false,
    };
  },

  methods: {
    toggleShow() {
      if (this.show === false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    toggleContact() {
      if (this.contact === false) {
        this.contact = true;
      } else {
        this.contact = false;
      }
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 10px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding: 8px;
}
p {
  /* border: 1px solid red; */
  margin-left: 25px;
}

main {
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
span {
  /* border: 1px solid black; */
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
  /* border: 1px solid black; */
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
