import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./components/Pages/Coach/CoachesList.vue";
import RequestList from "./components/Pages/Requests/RequestList.vue";
import RegisterCoach from "./components/Pages/Coach/RegisterCoach.vue";
import NotFound from "./components/Pages/NotFound.vue";
import CoachDetails from "./components/Pages/Coach/CoachDetails.vue";
import ContactCoach from "./components/Pages/Coach/ContactCoach.vue";
import Auth from "./components/Pages/Auth/Auth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: CoachesList, redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [{ path: "contact", component: ContactCoach }], //couches/c1/contact
    },
    { path: "/register", component: RegisterCoach },
    { path: "/requests", component: RequestList },
    { path: "/auth", component: Auth },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
