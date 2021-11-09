import { createRouter, createWebHistory } from "vue-router";
// import TheHeader from "./components/UI/TheHeader.vue";
// import TheMain from "./components/UI/TheMain.vue";
// import TheFooter from "./components/UI/TheFooter.vue";
import CouchesList from "./components/Pages/Couches/CouchesList.vue";
import RequestList from "./components/Pages/Requests/RequestList.vue";
import CouchesDetails from "./components/Pages/Couches/CouchesDetails.vue";
import RegisterCoach from "./components/Pages/Couches/RegisterCoach.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/register", component: RegisterCoach },
    { path: "/", component: CouchesList, redirect: "/couches" },
    { path: "/couches", component: CouchesList },
    { path: "/requests", component: RequestList },
    { path: "/details", component: CouchesDetails },
    { path: "/couches/:id", component: CouchesDetails },
  ],
});

export default router;
