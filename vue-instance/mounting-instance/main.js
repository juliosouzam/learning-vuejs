const vm = new Vue({
  template: `
    <div>
      <h1>{{ lesson }}</h1>
      <h2>{{ module }}</h2>

      <button @click="alterLesson">alterLesson</button>
      <button @click="alterModule">alterModule</button>
    </div>
  `,
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

// vm.$mount('#app');
vm.$mount();
document.querySelector('#app').appendChild(vm.$el)
