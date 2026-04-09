import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "mainLayout",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
