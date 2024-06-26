import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Statistics from "../views/Statistics.vue";
import Programs from "../views/Programs.vue";
import VideoView from "../views/VideoView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotUserNamePassword from "../views/ForgotUserNamePassword.vue";
import Profile from "../views/Profile.vue";
import UpdateWeight from "../views/UpdateWeight.vue";
import UpdateProgram from "../views/UpdateProgram.vue";
import TestApi from "@/views/TestApi.vue";
import UpdatePassword from "@/views/UpdatePassword.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/stats",
    name: "statistics",
    component: Statistics,
  },
  {
    path: "/programs",
    name: "programs",
    component: Programs,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotUserNamePassword,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/testapi",
    name: "testapi",
    component: TestApi,
  },
  {
    path: "/updateweight",
    name: "updateweight",
    component: UpdateWeight,
  },
  {
    path: "/change-program",
    name: "changeprogram",
    component: UpdateProgram,
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
  },
  {
    path: "/profile/updatepassword",
    name: "UpdateUserPassword",
    component: UpdatePassword,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
