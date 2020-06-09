<template>
  <div class="h-screen flex flex-col">
    <div class="bg-gray-400 h-24 flex items-center justify-center">
      Mouse position:
    </div>
    <div class="flex flex-1 bg-gray-200 p-8">
      <div class="flex h-full w-full bg-green-500 items-center justify-center">
        <Canvas :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import * as d3 from "d3";

import Canvas from "./components/Canvas.vue";

export default {
  name: "App",
  components: {
    Canvas,
  },
  props: {},
  setup() {
    const data = ["data1", "data2", "data3"];
    return { data };
  },
};
</script>
