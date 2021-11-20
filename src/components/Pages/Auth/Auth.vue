<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Autentificating...">
      <!-- <p :show="isLoading">Connecting...</p> -->
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
            v-model.trim="email"
          />
        </div>
        <div class="control">
          <label for="password">Password:</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            v-model.trim="password"
          />
        </div>
        <p v-if="!formIsValid">Email or Password is invalid...</p>
        <div class="btns">
          <base-button>{{ submitBtn }}</base-button>
          <base-button type="button" mode="flat" @click="switchAutMode">{{
            switchBtn
          }}</base-button>
        </div>
      </base-card>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
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
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 8
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        } else {
          await this.$store.dispatch("signUp", {
            email: this.email,
            password: this.password,
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
</style>
rem
