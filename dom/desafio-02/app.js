new Vue({
  el: '#desafio',
  data: {
    valor: '',
  },
  methods: {
    getValue(event) {
      this.valor = event.target.value;
    },
    showAlert() {
      alert('clicked');
    },
  },
});
