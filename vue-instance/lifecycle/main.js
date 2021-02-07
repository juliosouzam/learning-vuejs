new Vue({
  el: '#app',
  data: {
    title: 'Life cycle',
  },
  beforeCreate() {
    console.log('Before create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before mount DOM');
  },
  mounted() {
    console.log('DOM mounted');
  },
  beforeUpdate() {
    console.log('Before update');
  },
  updated() {
    console.log('Updated');
  },
  beforeDestroy() {
    console.log('Before Destroy');
  },
  destroyed() {
    console.log('Destroy');
  },
});
