new Vue({
  el: '#app',
  data: {
    applyC1: false,
    classCSS: 'c1',
    applySpin: true,
    color: 'red',
    widthLen: 100,
    heightLen: '100px',
  },
  computed: {
    style1() {
      return {
        c1: this.applyC1,
        c2: !this.applyC1,
      };
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: `${this.widthLen}px`,
      };
    },
  },
});
