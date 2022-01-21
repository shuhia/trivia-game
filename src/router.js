import { createWebHistory, createRouter } from "vue-router";
import Start from "./views/Start.vue";
import Questions from "./views/Questions.vue";
import Results from "./views/Results.vue";

const routes = [
  { path: "/", component: Start },
  { path: "/questions", component: Questions },
  { path: "/results", component: Results },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
