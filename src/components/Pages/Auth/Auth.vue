<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Autentificating...">
      <base-spinner></base-spinner>
    </base-dialog>
    <form @submit.prevent="submitForm">
      <base-card>
        <div class="control">
          <label for="email">Email:</label>
          <input
            type="email"
            placeholder="Your Email adress"
            id="email"
            v-model.trim="email.value"
          />
          <p v-if="!this.email.isValid">Bad emailAdress..</p>
        </div>
        <div class="control">
          <label for="password">Password:</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            v-model.trim="password.value"
          />
          <p v-if="!this.password.isValid">Bad Password..</p>
        </div>
        <p v-if="!formIsValid">
          Email or Password is invalid...(Password must have min.(8 characters)
        </p>
        <div class="btns">
          <base-button
            :class="{ signUp: mode == 'signup', signIn: mode == 'login' }"
            >{{ submitBtn }}</base-button
          >
          <base-button
            type="button"
            mode="flat"
            @click="switchAutMode"
            :class="{ signUp: mode == 'login', signIn: mode == 'signup' }"
            >{{ switchBtn }}</base-button
          >
        </div>
      </base-card>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: {
        value: "",
        isValid: true,
      },
      password: {
        value: "",
        isValid: true,
      },
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitBtn() {
      if (this.mode === "login") {
        return "login";
      } else {
        return "signup";
      }
    },
    switchBtn() {
      if (this.mode === "login") {
        return "SignUp instead";
      } else {
        return "Login instead";
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;

      if (
        this.email.value === "" ||
        !this.email.value.includes("@") ||
        this.password.value.length < 8
      ) {
        this.formIsValid = false;

        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", {
            email: this.email.value,
            password: this.password.value,
          });
        } else {
          await this.$store.dispatch("signUp", {
            email: this.email.value,
            password: this.password.value,
          });
        }
        this.$router.replace("/coaches");
      } catch (error) {
        this.error = error.message || "Fail to SignUp...";
      }

      this.isLoading = false;
    },
    switchAutMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
div {
  margin: auto;
}
form {
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
input {
  width: 45rem;
  height: 3rem;
  margin-top: 1rem;
  border: none;
  border-bottom: 1px solid black;
  text-indent: 0.4rem;
}
button {
  width: 10rem;
  margin-top: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.control {
  display: flex;
  justify-content: center;

  gap: 1rem;
}

label {
  width: 10rem;
  padding-left: 2rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 1.5rem;
}
.btns {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

p {
  text-align: center;
  margin: 0.5rem;
  padding: 1rem;
  color: red;
}

.signUp {
  background: rgb(242, 0, 0);
  background: linear-gradient(
    107deg,
    rgba(242, 0, 0, 1) 17%,
    rgba(249, 0, 0, 0.9531162806919643) 50%,
    rgba(244, 244, 244, 0.7458333675266982) 79%
  );
  color: black;
}
.signIn {
  background: rgb(45, 40, 219);
  background: linear-gradient(
    75deg,
    rgba(45, 40, 219, 1) 19%,
    rgba(14, 89, 235, 0.6758053563222164) 27%,
    rgba(249, 249, 249, 0.5105392498796393) 62%
  );
  color: black;
}
</style>
