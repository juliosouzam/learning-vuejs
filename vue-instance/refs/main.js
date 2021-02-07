const vm = new Vue({
  el: '#app',
  data: {
    lesson: 'Refs in vue',
    module: 'Vue Instance',
  },
  methods: {
    alterLesson() {
      this.lesson += '#';
    },
    alterModule() {
      this.module += '#';
    },
  },
});
