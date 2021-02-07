const counted = {
  template: `
    <div>
      <p>{{ count }}</p>
      <button @click="count++">+</button>
      <button @click="count--">-</button>
    </div>
  `,
  data: () => {
    return {
      count: 0,
    };
  },
};

new Vue({
  el: '#app1',
  components: {
    counted1: counted,
  },
});

new Vue({
  el: '#app2',
  components: {
    'app-counted': counted,
  },
});
