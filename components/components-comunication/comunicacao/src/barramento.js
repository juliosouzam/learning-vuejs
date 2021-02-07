import Vue from 'vue';

export default new Vue({
  methods: {
    altIdade(idade) {
      this.$emit('idadeMudou', idade);
    },
    idadeChanged(callback) {
      this.$on('idadeMudou', callback);
    },
  },
});
