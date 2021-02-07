<template>
  <div class="user-detail">
    <h3>User Detail</h3>
    <hr />
    <p><strong>Cód.</strong> {{ id }}</p>
    <!-- :to="`/user/${id}/edit`" -->
    <router-link
      tag="button"
      primario
      :to="{
        name: 'editUser',
        params: { id },
        query: { complete: true, lang: 'pt-BR' },
        hash: '#rodape',
      }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    // eslint-disable-next-line no-console
    console.log("dentro do componente");
    next();
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
};
</script>

<style>
</style>