<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Idade é: <strong>{{ idade }}</strong>
    </p>
    <button @click="alterIdade">Alterar idade</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    idade: {
      type: Number,
    },
  },
  methods: {
    alterIdade() {
      this.idade += 1;
      barramento.altIdade(this.idade);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
