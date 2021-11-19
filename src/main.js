import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./components/store.js";
// import BaseTypes from "./components/UI/BaseTypes.vue";
// import ContactCoach from "./components/Pages/Coach/ContactCoach.vue";
// import BaseSpinner from "./components/UI/BaseSpinner.vue";
// import BaseDialog from "./components/UI/BaseDialog.vue";

const BaseDialog = defineAsyncComponent(() =>
  import("./components/UI/BaseDialog.vue")
);

const app = createApp(App);
app.use(router);
app.use(store);
app.component(BaseDialog, "base-dialog");
app.mount("#app");
