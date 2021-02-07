export default {
  namespaced: true,
  state: {
    produtos: [],
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    },
  },
  mutations: {
    addProduto(state, payload) {
      state.produtos.push(payload);
    },
  },
  actions: {
    addProduto: {
      root: true,
      handler(ctx, payload) {
        setTimeout(() => {
          ctx.commit('addProduto', payload);
        }, 1000);
      },
    },
  },
};
