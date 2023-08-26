import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MealList from "../views/MealList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: MealList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
