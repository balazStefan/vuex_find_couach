import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./components/store.js";

const BaseDialog = defineAsyncComponent(() =>
  import("./components/UI/BaseDialog.vue")
);
const BaseButton = defineAsyncComponent(() =>
  import("./components/UI/BaseButton.vue")
);
const BaseCard = defineAsyncComponent(() =>
  import("./components/UI/BaseCard.vue")
);
const BaseTypes = defineAsyncComponent(() =>
  import("./components/UI/BaseTypes.vue")
);
const BaseSpinner = defineAsyncComponent(() =>
  import("./components/UI/BaseSpinner.vue")
);

const app = createApp(App);
app.use(router);
app.use(store);
app.component("base-dialog", BaseDialog);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-types", BaseTypes);
app.component("base-spinner", BaseSpinner);
app.mount("#app");
