import { createWebHistory, createRouter } from "vue-router";
import Profile from "./components/profile/Profile.vue";
import HelloWorld from "./components/HelloWorld.vue";
const routes = [
  {
    path: "/profile/:name",
    component: Profile,
  },
  { path: "/", component: HelloWorld },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
