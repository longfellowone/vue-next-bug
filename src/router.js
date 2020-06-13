import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Takeoff from "./views/Takeoff.vue";

const history = createWebHistory();
const routes = [
  { path: "/", component: Home },
  { path: "/Takeoff", component: Takeoff },
];

const router = createRouter({ history, routes });

export default router;
