export default {
  state: {
    quantidade: 2,
    preco: 19.99,
  },
  mutations: {
    setQtd(state, payload) {
      state.quantidade = payload;
    },
    setPrice(state, payload) {
      state.preco = payload;
    },
  },
};
