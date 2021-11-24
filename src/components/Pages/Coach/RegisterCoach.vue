<template>
  <div>
    <base-card>
      <h2>Register as a coach</h2>
      <form @submit.prevent>
        <label for="text"><strong>Enter your Name :</strong></label>
        <input
          type="text"
          placeholder="John Smith"
          class="input-styling"
          v-model.trim="inputName.value"
          @blur="clearValidity('inputName')"
        />
        <!--po strate focusu na v-model sa odoberie class ktorá je zadefinovaná -->
        <span v-if="!inputName.isValid" :class="{ isInvalid: 'isInvalid' }"
          >Name is required...</span
        >

        <label for=""><strong>Enter your Email Adress :</strong></label>
        <input
          type="Email"
          placeholder="example@example.com"
          class="input-styling"
          v-model.trim="inputEmail.value"
          @blur="clearValidity('inputEmail')"
        />
        <span v-if="!inputEmail.isValid" :class="{ isInvalid: 'isInvalid' }"
          >Email adress is required...</span
        >

        <label for=""><strong>About me :</strong> </label>
        <textarea
          id="about"
          cols="10"
          rows="10"
          placeholder="Describe Yourself in few sentences...."
          v-model.trim="inputMsg.value"
          @blur="clearValidity('inputMsg')"
        ></textarea>
        <p v-if="!inputMsg.isValid" :class="{ isInvalid: 'isInvalid' }">
          You must descripe yourself....
        </p>

        <label for="money" class="money-label">
          <input
            type="number"
            placeholder=" 10.99 "
            class="money"
            min="4.99"
            max="100"
            step="0.01"
            lang="us"
            id="money"
            name="money"
            v-model.trim="inputMoney.value"
            @blur="clearValidity('inputMoney')"
          />
          €/Hours
        </label>

        <span v-if="!inputMoney.isValid" :class="{ isInvalid: 'isInvalid' }">
          You must choose money... min. is 5€
        </span>

        <div class="controls">
          <input
            type="checkbox"
            id="frontend"
            value="Frontend"
            name="valid"
            class="input-controls"
            v-model="checkInfo.value"
            @blur="clearValidity('checkInfo')"
          />
          <label for="frontend" class="label-controls">Frontend</label>

          <input
            type="checkbox"
            id="backend"
            value="Backend"
            name="valid"
            class="input-controls"
            v-model="checkInfo.value"
            @blur="clearValidity('checkInfo')"
          />
          <label for="backend" class="label-controls">Backend</label>
          <input
            type="checkbox"
            id="Career"
            value="Career"
            name="valid"
            class="input-controls"
            v-model="checkInfo.value"
            @blur="clearValidity('checkInfo')"
          />
          <label for="Career" class="label-controls">Career</label>
        </div>
        <p v-if="!checkInfo.isValid" :class="{ isInvalid: 'isInvalid' }">
          You must select minimum <strong>One checkbox </strong> or more...
        </p>
        <base-button type="button" @click="submitData">Register</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
      inputName: {
        value: "",
        isValid: true,
      },
      inputEmail: {
        value: "",
        isValid: true,
      },
      inputMoney: {
        value: null,
        isValid: true,
      },
      inputMsg: {
        value: "",
        isValid: true,
      },
      checkInfo: {
        value: [],
        isValid: true,
      },
    };
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validationOfinputs() {
      this.formIsValid = true;
      if (this.inputName.value === "") {
        this.inputName.isValid = false;
        this.formIsValid = false;
      }
      if (this.inputEmail.value === "") {
        this.inputEmail.isValid = false;
        this.formIsValid = false;
      }
      if (this.inputMsg.value === "") {
        this.inputMsg.isValid = false;
        this.formIsValid = false;
      }
      if (!this.inputMoney.value || this.inputMoney.value <= 5) {
        this.inputMoney.isValid = false;
        this.formIsValid = false;
      }
      if (this.checkInfo.value.length === 0) {
        this.checkInfo.isValid = false;
        this.formIsValid = false;
      }
    },
    submitData() {
      this.validationOfinputs(); // zavolám si methodú ktorá skontroluje či sú inputy OK
      if (!this.formIsValid) {
        return;
      }
      const newCoach = {
        id: "c3", //-----------------zodpovedné za ID kde mi predtým dávalo undefined
        name: this.inputName.value,
        email: this.inputEmail.value,
        money: this.inputMoney.value,
        types: this.checkInfo.value,
        description: this.inputMsg.value,
      };
      this.$store.dispatch("addNewCoach", newCoach);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 3rem;
  height: fit-content;
  gap: 1rem;
  color: #555d50;
}
h2 {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 2.2rem;
  padding: 1rem;
  text-decoration: underline;
}
input {
  height: 3rem;
  text-indent: 0.5rem;
  color: black;
  font-size: 1.5rem;
  border: none;
  border-bottom: 0.1rem dashed #555d50;
  padding-top: 0.3rem;
}
form input:focus {
  border: none;
  border-bottom: 0.1rem dashed #555d50;
  outline: none;
}
input::selection {
  color: white;
  background-color: black;
}

textarea {
  resize: none;
  text-indent: 0.5rem;
  color: black;
  font-size: 1.5rem;
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
  align-self: center;
  margin-top: 1rem;
  font-size: 1.5rem;
}
button {
  position: relative;
  /* box-shadow: none; */
  border-radius: 0.8rem;
  z-index: 2;
  align-self: center;
  margin-top: 1rem;
  padding: 1rem 3rem;
  margin-bottom: 1rem;
  transition: all 1s;
  transition-delay: 0.2s;
}
button:hover {
  color: white;
}

button::before {
  content: "";
  position: absolute;
  border-radius: 0.8rem;
  opacity: 0.5;
  width: 0%; /*začiatok animácie */
  top: 90%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
  background: red;

  color: white;
  transition: all 0.7s ease-in;
}
button:hover::before {
  content: "";
  position: absolute;
  opacity: 1;
  width: 100%;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
  background: red;
}
button::after {
  border-radius: 0.8rem;
  content: "";
  opacity: 0.5;
  position: absolute;
  width: 0%;
  top: 0%;
  left: 100%; /*začiatok animácie*/
  right: 0%;
  bottom: 90%; /*začiatok animácie*/
  z-index: -1;
  background: red;
  color: white;
  transition: all 0.7s ease-in;
}

button:hover::after {
  opacity: 1;
  content: "";
  position: absolute;
  width: 100%;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  margin-top: 2rem;
  font-size: 1.5rem;
}
.money-label {
  cursor: pointer;
  font-size: 1.5rem;
  width: max-content;
  padding-right: 2rem;

  text-align: left;
}
.money {
  width: 8rem;
  border: none;
  font-size: 1.5rem;
  font-size: 0.9rem;
  text-indent: 1rem;
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
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
label {
  font-size: 1.5rem;
}

/*----------------------VALIDATACIA */
.btnColor {
  color: black;
}
.isInvalid {
  color: orangered;
}
</style>
