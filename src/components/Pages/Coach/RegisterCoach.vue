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
  padding: 30px;
  height: fit-content;
  gap: 10px;
  color: #555d50;
}
h2 {
  text-align: center;
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

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
}
.money-label {
  cursor: pointer;

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

/*----------------------VALIDATACIA */

.isInvalid {
  color: orangered;
}
</style>
