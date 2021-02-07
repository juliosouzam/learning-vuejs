Vue.component('comp', {
  template: `
    <div>
      <h1>{{ lesson }}</h1>
      <h2>{{ module }}</h2>

      <button @click="alterLesson">alterLesson</button>
      <button @click="alterModule">alterModule</button>
    </div>
  `,
  data: () => {
    return {
      lesson: 'Refs in vue',
      module: 'Vue Instance',
    };
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

new Vue({
  el: '#app',
});
