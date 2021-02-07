new Vue({
  el: '#app',
  data: {
    title: 'Using Vuejs 2'
  },
  methods: {
    alterarTitulo(event) {
      this.title = event.target.value
    }
  }
})