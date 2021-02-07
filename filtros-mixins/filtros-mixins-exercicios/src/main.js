import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('invert', (value) => {
  return value
    .split('')
    .reverse()
    .join('');
});

Vue.mixin({
  created() {
    console.log('created global');
  },
});

new Vue({
  render: (h) => h(App),
  created() {
    console.log('created Vue instance');
  },
}).$mount('#app');
