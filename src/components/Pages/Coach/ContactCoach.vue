<template>
  <div>
    <base-card class="contact_position">
      <form>
        <label for="email"><strong> Your Email</strong></label>
        <input
          class="contact-control contact--control_email"
          type="text"
          name="email"
          id="email"
          placeholder=" Enter your email adress"
          v-model.trim="inputEmail.value"
          @blur="clearValidity('inputEmail')"
        />
        <p v-if="!inputEmail.isValid">
          You must type your email adress, and check if there is a "@" symbol in
          your mail adress..
        </p>
        <label for="message"><strong>Your Message </strong></label>
        <textarea
          class="contact-control"
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Type Here your question...."
          v-model.trim="inputQuestion.value"
          @blur="clearValidity('inputQuestion')"
        ></textarea>
        <p v-if="!inputQuestion.isValid">You must ask something...</p>
        <base-button type="button" @click="submitQuestion">Send</base-button>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputEmail: {
        isValid: true,
        value: "",
      },
      inputQuestion: {
        isValid: true,
        value: "",
      },
      formIsValid: true,
    };
  },
  methods: {
    validation() {
      this.formIsValid = true;
      if (
        this.inputEmail.value === "" ||
        !this.inputEmail.value.includes("@")
      ) {
        this.inputEmail.isValid = false;
        this.formIsValid = false;
      }
      if (this.inputQuestion.value === "") {
        this.inputQuestion.isValid = false;
        this.formIsValid = false;
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    submitQuestion() {
      this.validation();
      if (!this.formIsValid) {
        return;
      }

      this.$store.dispatch("contactCoach", {
        email: this.inputEmail.value,
        message: this.inputQuestion.value,
        coachId: this.$route.params.id,
      });

      this.$router.replace("/coaches");
    },
  },
};
</script>
<style scoped>
.contact_position {
  display: flex;
}
form {
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
}
input {
  width: 45rem;
  height: 3rem;
  align-self: center;
  border: #ccc 0.1rem solid;
  font-size: 1.5rem;
}
textarea {
  width: 45rem;
  height: 12rem;
  resize: none;
  border: #ccc 0.1rem solid;
  font-size: 1.5rem;
}

button {
  width: 10rem;
  align-self: center;
  margin-top: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.contact-control {
  border: none;
  color: #555d50;
}
.contact-control::selection {
  color: white;
  background-color: black;
  background: orangered;
}

.contact-control:focus,
.contact-control:active {
  border: none;
  outline: none;
}

.contact--control_email {
  border-bottom: 0.1rem solid #555d50;
}
.contact--control_email:focus {
  border-bottom: 0.1rem solid #555d50;
}
button::before {
  content: "";
  position: absolute;
  background: rgb(224, 42, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 42, 42, 0.8382703423166141) 17%,
    rgba(215, 59, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 3%;
  height: 100%;
  transition: all 0.8s ease-in-out;
}
button:hover::before {
  background: rgb(224, 42, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 42, 42, 0.8382703423166141) 17%,
    rgba(215, 59, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}
</style>
