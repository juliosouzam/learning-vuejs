<template>
  <div class="user">
    <h2>Users</h2>
    <hr />
    <router-view />
    <button sucesso @click="goToStart">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToStart() {
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
</style>