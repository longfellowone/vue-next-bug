<template>
  <h1 class="bg-green-500">{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: { type: String, default: "" },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
