<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed: {
    quantidade() {
      return this.$store.state.parametros.quantidade;
    },
    preco() {
      return this.$store.state.parametros.preco;
    },
  },
  methods: {
    // ...mapActions('carrinho', ["addProduto"]),
    ...mapActions(["addProduto"]),
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;

      // this.$store.commit("addProduto", produto);
      // this.$store.state.produtos.push(produto);

      // this.$store.dispatch("addProduto", produto);
      this.addProduto(produto);

      // eslint-disable-next-line no-console
      console.log(this.$store.getters.getNome);
      // eslint-disable-next-line no-console
      console.log(this.$store.getters.getNomeFull);
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
