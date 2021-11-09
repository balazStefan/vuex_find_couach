<template>
  <base-card>
    <h2>Register as a coach</h2>
    <form @submit.prevent>
      <label for=""><strong>Enter your Name :</strong></label>
      <input
        type="text"
        placeholder="John Smith"
        ref="inputValue"
        class="input-styling"
      />
      <label for=""><strong>Enter your Email Adress :</strong></label>
      <input
        type="email"
        placeholder="example@example.com"
        ref="inputEmail"
        class="input-styling"
      />
      <label for=""><strong>About me :</strong> </label>
      <textarea
        id=""
        cols="10"
        rows="10"
        placeholder="Describe Yourself in few sentences...."
        ref="inputMsg"
      ></textarea>
      <label for="money" class="money-label">
        <input
          type="number"
          placeholder=" 10.99 €"
          class="money"
          min="5"
          max="100"
          step="0.01"
          ref="inputMoney"
          lang="us"
          id="money"
          name="money"
        />
        €/Hours
      </label>
      <p>Please select <strong>minimum one</strong> of the next checkboxes</p>
      <div class="controls">
        <input
          type="checkbox"
          id="frontend"
          v-model="checkInfo"
          value="Frontend"
          name="valid"
          class="input-controls"
        />
        <label for="frontend" class="label-controls">Frontend</label>

        <input
          type="checkbox"
          id="backend"
          v-model="checkInfo"
          value="Backend"
          name="valid"
          class="input-controls"
        />
        <label for="backend" class="label-controls">Backend</label>

        <input
          type="checkbox"
          id="Carrer"
          v-model="checkInfo"
          value="Carrer"
          name="valid"
          class="input-controls"
        />
        <label for="Carrer" class="label-controls">Carrer</label>
      </div>
      <base-button @click="newCoach">Register</base-button>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "../../BaseButton.vue";
import BaseCard from "../../BaseCard.vue";
export default {
  components: { BaseCard, BaseButton },
  data() {
    return {
      checkInfo: [],
    };
  },

  methods: {
    newCoach() {
      this.$store.commit("updateArray", {
        id: new Date().toISOString().slice(6),
        name: this.$refs.inputValue.value,
        email: this.$refs.inputEmail.value,
        money: this.$refs.inputMoney.value,
        description: this.$refs.inputMsg.value,
        types: this.checkInfo,
      });

      // const name = this.$refs.inputValue.value;
      // const email = this.$refs.Email.value;
      // const inputMsg = this.$refs.inputMsg.value;
      // console.log(name, email, inputMsg);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 30px;
  height: fit-content;
  gap: 10px;
  color: #555d50;
}
h2 {
  margin: auto;
  margin-top: 15px;
  padding: 10px;
  text-decoration: underline;
}
input {
  height: 30px;
  text-indent: 5px;
  color: black;
  font-size: 1rem;
  border: none;
  border-bottom: 1px dashed #555d50;
  padding-top: 3px;
}
form input:focus {
  border: none;
  border-bottom: 1px dashed #555d50;
  outline: none;
}
input::selection {
  color: white;
  background-color: black;
}

textarea {
  resize: none;
  text-indent: 5px;
  color: black;
  font-size: 1rem;
  border: none;
}
textarea:focus {
  border: none;
  outline: none;
}
textarea::selection {
  color: white;
  background-color: black;
}
p {
  /* border: 1px solid black; */
  align-self: center;
  margin-top: 10px;
}
button {
  position: relative;
  box-shadow: none;
  z-index: 2;
  align-self: center;
  margin-top: 10px;
  padding: 10px 30px;
  margin-bottom: 10px;
}
button::before {
  content: "";
  position: absolute;
  width: 15%;
  top: 65%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
  border-left: 2px solid black;
  border-bottom: 2px solid black;

  /* background: red; */
}
button::after {
  content: "";
  position: absolute;
  width: 15%;
  top: 0%;
  left: 85%;
  right: 0%;
  bottom: 50%;
  z-index: -1;
  border-top: 2px solid black;
  border-right: 2px solid black;
}
button:hover::before {
  content: "";
  position: absolute;
  width: 15%;
  top: 65%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  animation: hoverbtnbefore 0.5s forwards;
  /* background: red; */
}
button:hover::after {
  content: "";
  position: absolute;
  width: 15%;
  top: 0%;
  left: 85%;
  right: 0%;
  bottom: 50%;
  z-index: -1;
  border-top: 2px solid black;
  border-right: 2px solid black;
  animation: hoverbtnafter 0.5s forwards;
}

@keyframes hoverbtnafter {
  0% {
    width: 15%;
    left: 85%;
    bottom: 50%;
  }
  100% {
    width: 100%;
    left: 0%;
    bottom: 0%;
  }
}

@keyframes hoverbtnbefore {
  0% {
    width: 15%;
    top: 65%;
  }
  100% {
    width: 100%;
    top: 0%;
  }
}
/* button:hover::before {
  content: "";
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0;
  z-index: -1;

  /* background-color: orangered; */
/* outline-style: outset;
  outline-color: black;
  outline-offset: 2px; */

/* animation: button_on_hover 0.5s forwards ease-in-out;
} */

@keyframes button_on_hover {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
    transform: translateX(25%);
  }
  40% {
    opacity: 1;
    transform: translateX(50%);
  }
  55% {
    transform: translateX(75%);
    opacity: 1;
  }
  60% {
    transform: translateX(100%);
    opacity: 1;
  }
  75% {
    transform: translateX(75%);
    opacity: 1;
  }
  100% {
    transform: translateX(50%);
    opacity: 1;
  }
}
.controls {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
}
.money-label {
  cursor: pointer;
  border-bottom: 1px dashed #555d50;
  width: max-content;
  padding-right: 20px;

  text-align: left;
}
.money {
  width: 80px;
  border: none;

  font-size: 0.9rem;
  text-indent: 10px;
  text-align: center;
  cursor: pointer;
}

.money:focus,
.money:active {
  max-width: max-content;
}
.label-controls {
  cursor: pointer;
}
.input-controls {
  cursor: pointer;
}
</style>
