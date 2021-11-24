<template>
  <li>
    <transition leave-active-class="leave">
      <base-card :class="{ leave: isDelete }">
        <div>
          <header>
            <p><strong>Email from:</strong></p>
            <a :href="emailLink" class="email">{{ email }}</a>
          </header>
          <section>
            <p class="message"><strong>Message:</strong></p>
            <p class="message">{{ message }}</p>
          </section>
        </div>
        <footer>
          <base-button @click="deleteReq">Delete</base-button>
          <base-button @click="reply">Reply</base-button>
        </footer>
      </base-card>
    </transition>
  </li>
</template>
<script>
export default {
  props: ["email", "message", "id"],
  emits: ["deleteReq"],
  data() {
    return {
      isDelete: false,
    };
  },

  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
  methods: {
    deleteReq() {
      this.isDelete = true;
      this.$emit("deleteReq", this.id);
    },
    reply() {
      return "mailto:" + this.email;
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
  width: 600px;
}
a {
  text-decoration: none;
  max-width: 600px;
}
.message {
  margin-bottom: 1rem;
  /* border: 2px solid black; */
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
.leave {
  animation: deleting 2s ease-out;
}
/* .req-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
.req-leave-active {
  transition: all 1s ease-out;
} 
/* .req-leave-to {
  transform: translateX(-30px);
  opacity: 0;
} */

@keyframes deleting {
  0% {
    transform: translateX(0px);
    opacity: 0.8;
  }
  50% {
    opacity: 0.5;
    transform: translateX(-300px);
  }

  100% {
    opacity: 0;
    transform: translateX(0px);
  }
}
button::before {
  content: "";
  position: absolute;
  background: rgb(224, 121, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 121, 42, 0.8382703423166141) 17%,
    rgba(215, 130, 25, 0.465721322708771) 39%,
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
  background: rgb(224, 121, 42);
  background: linear-gradient(
    107deg,
    rgba(224, 121, 42, 0.8382703423166141) 17%,
    rgba(215, 130, 25, 0.465721322708771) 39%,
    rgba(244, 244, 244, 0.7458333675266982) 74%
  );
  top: 0%;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}
</style>
