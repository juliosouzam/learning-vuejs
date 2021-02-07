<template>
  <div id="container">
    {{ title }}

    <button @click="title += '#'">+</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return { title: "Using Vue" };
  },
};
</script>

<style scoped>
#container {
  background-color: chocolate;
  color: #fff;
}
</style>