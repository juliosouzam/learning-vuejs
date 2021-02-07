const vm1 = new Vue({
  el: '#app',
  data: {
    title1: 'Using Vuejs - title1',
    title2: 'Using Vuejs - title2',
  },
});

const vm2 = new Vue({
  el: '#app2',
  data: {
    title1: 'Using Vuejs - title1',
    title2: 'Using Vuejs - title2',
  },
  methods: {
    alter() {
      vm1.title1 = 'Alterado pela outra instância';
    },
  },
});
