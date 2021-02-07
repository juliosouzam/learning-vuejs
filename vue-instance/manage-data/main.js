new Vue({
  el: '#app',
  data: {
    title: 'Using Vuejs',
  },
  methods: {
    alter() {
      this.title += '!';
    },
  },
});
