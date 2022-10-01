import { createRouter, createWebHistory } from "vue-router";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "Login",
    component: null,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
