<template>
  <div class="user-edit">
    <h3>User Edit</h3>
    <hr />
    <p><strong>Cód.</strong> {{ id }}</p>
    <p>
      <strong>Complete: </strong> {{ $route.query.complete ? "Sim" : "Não" }}
    </p>
    <p><strong>Lang: </strong> {{ $route.query.lang }}</p>

    <hr />
    <button primario @click="confirmed = true">Confirmar</button>

    <div id="rodape">
      <h3>curso vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmed: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Tem certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>