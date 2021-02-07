new Vue({
  el: '#app',
  data: {
    count: 0,
    x: 0,
    y: 0,
  },
  methods: {
    inc() {
      this.count++;
    },
    dec() {
      this.count--;
    },
    updateXY({ clientX, clientY }) {
      this.x = clientX;
      this.y = clientY;
    },
    stop(ev) {
      ev.stopPropagation();
    },
    showAlert() {
      alert('Keyboard pressed');
    },
  },
});
