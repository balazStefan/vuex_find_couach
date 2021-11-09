<template>
  <form>
    <label for="email"><strong> Your Email</strong></label>
    <input
      class="contact-control contact--control_email"
      type="text"
      name="email"
      id="email"
      placeholder=" Enter your email adress"
    />
    <label for="message"><strong>Your Message </strong></label>
    <textarea
      class="contact-control"
      name="message"
      id="message"
      cols="30"
      rows="4"
      placeholder="Type Here your question...."
    ></textarea>
    <base-button type="button">Send</base-button>
  </form>
</template>
<script>
import BaseButton from "../../BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
input {
  width: 450px;
  height: 30px;
  align-self: center;
  border: #ccc 1px solid;
}
textarea {
  width: 450px;
  height: 120px;
  resize: none;
  border: #ccc 1px solid;
}

button {
  width: 100px;
  align-self: center;
  margin-top: 10px;
  padding: 5px;
  margin-bottom: 10px;
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
  border-bottom: 1px solid #555d50;
}
.contact--control_email:focus {
  border-bottom: 1px solid #555d50;
}
</style>
