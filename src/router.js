import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "./components/Pages/Coach/CoachesList.vue";
import store from "./components/store.js";

const CoachDetails = () => import("./components/Pages/Coach/CoachDetails.vue");
const ContactCoach = () => import("./components/Pages/Coach/ContactCoach.vue");
const Auth = () => import("./components/Pages/Auth/Auth.vue");
const RegisterCoach = () =>
  import("./components/Pages/Coach/RegisterCoach.vue");
const RequestList = () => import("./components/Pages/Requests/RequestList.vue");
const NotFound = () => import("./components/Pages/NotFound.vue");

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
    {
      path: "/register",
      component: RegisterCoach,
      meta: { reqiresAuth: true },
    },
    { path: "/requests", component: RequestList, meta: { reqiresAuth: true } },
    { path: "/auth", component: Auth, meta: { reqiresUnAuth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.reqiresAuth && !store.getters.isAutentificated) {
    next("/auth");
  } else if (to.meta.reqiresUnAuth && store.getters.isAutentificated) {
    next("/coaches");
  } else {
    next();
  }
});
export default router;
