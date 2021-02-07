new Vue({
  el: '#app',
  data: {
    count: 0,
    count2: 0,
  },
  computed: {
    result() {
      console.log('called');
      return this.count >= 5 ? 'Maior ou igual a 5' : 'Menor que 5';
    },
  },
  watch: {
    // newl is the new value
    count(newl, old) {
      setTimeout(() => {
        this.count = 0;
      }, 2000);
    },
  },
  methods: {
    inc() {
      this.count++;
    },
    dec() {
      this.count--;
    },
  },
});
