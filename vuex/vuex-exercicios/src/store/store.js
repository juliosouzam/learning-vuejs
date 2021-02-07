import Vue from 'vue';
import Vuex from 'vuex';

import carrinho from './modules/cart';
import parametros from './modules/params';

import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nome: 'Maria',
    sobrenome: 'Silva',
  },
  getters,
  modules: { carrinho, parametros },
});
