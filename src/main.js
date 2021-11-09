import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./components/store";

import ContactCoach from "./components/Pages/Couches/ContactCoach.vue";

const app = createApp(App);
app.component(ContactCoach, "contact-coach");
app.use(router);
app.use(store);
app.mount("#app");
