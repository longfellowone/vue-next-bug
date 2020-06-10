<template>
  <svg
    ref="containerRef"
    class="bg-blue-500 w-full h-full"
    style="user-select: none;"
  >
    <g id="drawing" ref="drawingRef" :transform="transformStr">
      <image
        href="../assets/drawing.jpg"
        width="14400"
        height="10800"
        draggable="false"
        style="user-select: none;"
      />
    </g>
    <g id="markup" :transform="transformStr">
      <rect
        v-for="item in data"
        :key="item"
        :x="item.x"
        :y="item.y"
        width="50"
        height="50"
        fill="green"
        opacity="0.5"
        @click="clickHandler"
      />
    </g>
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
    const drawingRef = ref(null);
    const containerRef = ref(null);
    const transformStr = ref(null);

    const zoom = d3
      .zoom()
      // .extent([[0, 0], [width, height]])
      .scaleExtent([0.04, 2])
      // Returning false in the filter function ignores the event.
      .filter(
        () =>
          !(d3.event.type === "mousedown" && d3.event.button === 0) ||
          d3.event.button === 2
      )
      .on("zoom", () => zooming(d3.event));

    const zooming = (e) => (transformStr.value = `${e.transform}`);

    onMounted(() => {
      const initialTransform = d3.zoomIdentity.translate(1, 1).scale(0.04);

      d3.select(containerRef.value)
        .call(zoom)
        .call(zoom.transform, initialTransform);

      d3.select(drawingRef.value).on("click", () => {
        console.log(
          parseInt(d3.mouse(drawingRef.value)[0]),
          parseInt(d3.mouse(drawingRef.value)[1])
        );
      });
    });

    const clickHandler = () => console.log("box clicked");

    return { containerRef, drawingRef, transformStr, clickHandler };
  },
};
</script>
