<template>
  <svg
    ref="containerRef"
    class="bg-blue-500 w-full h-full"
    style="user-select: none;"
  >
    <g id="drawing" :transform="transformStr">
      <image
        data-item="canvas"
        xlink:href="../assets/drawing.jpg"
        width="14400"
        height="10800"
      />
    </g>
    <g>
      <rect
        x="200"
        y="200"
        width="60"
        height="60"
        fill="green"
        transform="translate(30 30)"
      ></rect>
    </g>
    <!-- <g></g> -->
  </svg>
</template>

<script>
import { ref, onMounted } from "vue";
// import { zoom } from 'd3-zoom'
// import { select }from "d3-selection";
import * as d3 from "d3";

export default {
  name: "Canvas",
  props: {
    data: { type: Array, default: () => [] },
  },
  setup() {
    const containerRef = ref(null);
    const transformStr = ref(null);

    const zoom = d3
      .zoom()
      // .extent([[0, 0], [width, height]])
      .scaleExtent([0.04, 1])
      .on("zoom", () => zooming(d3.event));

    const zooming = (e) => (transformStr.value = `${e.transform}`);

    onMounted(() => {
      const initialTransform = d3.zoomIdentity.translate(1, 1).scale(0.04);

      d3.select(containerRef.value)
        .call(zoom)
        .call(zoom.transform, initialTransform);

      // d3.select(containerRef.value).on("click", () => console.log("clicked"));
    });

    return { containerRef, transformStr };
  },
};
</script>
