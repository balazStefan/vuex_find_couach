<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Autentificating...">
      <!-- <p>Autentificating...</p> -->
      <base-spinner></base-spinner>
    </base-dialog>

    <form @submit.prevent="submitForm">
      <base-card>
        <div class="control">
          <label for="email">EMAIL:</label>
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
        <p v-if="!formIsValid">You must enter BOTH email and password..</p>
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
import BaseCard from "../../UI/BaseCard.vue";
import BaseButton from "../../UI/BaseButton.vue";
import BaseDialog from "../../UI/BaseDialog.vue";
import BaseSpinner from "../../UI/BaseSpinner.vue";
export default {
  components: { BaseCard, BaseButton, BaseDialog, BaseSpinner },
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
        this.$router.replace("/coaches"); // HERE!!!!!!!!!!!!!§
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
  gap: 10px;
  margin-top: 10px;
}
input {
  width: 450px;
  height: 30px;
  margin-top: 10px;
  border: #ccc 1px solid;
  text-indent: 4px;
}
button {
  width: 100px;

  margin-top: 10px;
  padding: 5px;
  margin-bottom: 10px;
}
.control {
  display: flex;

  gap: 10px;
}

label {
  width: 100px;
  padding-left: 20px;
  align-items: center;
  margin-top: 15px;
}
.btns {
  display: flex;
  justify-content: center;
  gap: 50px;
}

p {
  text-align: center;
  margin: 5px;
  pad: 10px;
  color: red;
}
</style>
