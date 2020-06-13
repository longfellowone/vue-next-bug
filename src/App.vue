<template>
  <div>Hello from App</div>
  <div>
    <span>Links:</span>
    <router-link to="/">Home</router-link>
    <router-link to="/Takeoff">Takeoff</router-link>
  </div>
  <keep-alive>
    <router-view :key="route.fullPath" />
  </keep-alive>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {},
  props: {},
  setup() {
    const route = useRoute();

    return { route };
  },
};
</script>
