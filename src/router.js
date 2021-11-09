import { createRouter, createWebHistory } from "vue-router";
import CouchesList from "./components/Pages/Couches/CouchesList.vue";
import RequestList from "./components/Pages/Requests/RequestList.vue";
import RegisterCoach from "./components/Pages/Couches/RegisterCoach.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: CouchesList, redirect: "/couches" },
    { path: "/register", component: RegisterCoach },
    { path: "/couches", component: CouchesList },
    { path: "/requests", component: RequestList },
  ],
});

export default router;
