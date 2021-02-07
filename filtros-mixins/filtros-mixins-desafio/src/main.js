import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('countWords', (value) => {
  return value
    .split(' ')
    .map((w) => `${w} (${w.length})`)
    .join(' ');
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
