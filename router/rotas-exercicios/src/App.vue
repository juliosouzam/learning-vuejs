<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <!-- <Menu /> -->
    <router-view name="menu"></router-view>
    <transition
      mode="out-in"
      enter-class="animated rubberBand"
      leave-active-class="animated rollOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
// import Menu from "@/components/template/Menu";
export default {
  // components: { Menu },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
