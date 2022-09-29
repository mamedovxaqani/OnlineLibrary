import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: null,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
