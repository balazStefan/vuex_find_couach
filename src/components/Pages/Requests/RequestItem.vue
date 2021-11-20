<template>
  <li>
    <base-card>
      <div>
        <header>
          <p><strong>Email from:</strong></p>
          <a :href="emailLink" class="email">{{ email }}</a>
        </header>
        <section>
          <p class="message"><strong>Message:</strong></p>
          <p>{{ message }}</p>
        </section>
      </div>
      <footer>
        <base-button @click="deleteReq">Delete</base-button>
        <base-button>Reply</base-button>
      </footer>
    </base-card>
  </li>
</template>
<script>
export default {
  props: ["email", "message", "id"],
  emits: ["deleteReq"],

  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
  methods: {
    deleteReq() {
      this.$emit("deleteReq", this.id);
    },
  },
};
</script>
<style scoped>
div {
  padding: 1rem;
  font-size: 1.5rem;
}
header {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
section {
  padding: 1rem;
}
a {
  text-decoration: none;
}
.message {
  margin-bottom: 1rem;
}
.email {
  color: darkblue;
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
button {
  padding: 0.6rem;
  text-align: center;
}
</style>
