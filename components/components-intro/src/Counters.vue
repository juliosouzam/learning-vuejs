<template>
  <div>
    <app-counted v-for="c in 3" :key="c"/>
  </div>
</template>

<script>
import Count from "./Count";
export default {
  components: {
    "app-counted": Count,
  },
};
</script>

<style>
</style>