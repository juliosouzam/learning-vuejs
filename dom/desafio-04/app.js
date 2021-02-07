new Vue({
  el: '#desafio',
  data: {
    startEffect: false,
    a1: true,
    applied: '',
    applyMeToo: '',
    classMeToo: '',
    newColor: '',
    styled: {
      width: '200px',
      height: '200px',
    },
    currentProgress: 0,
  },
  computed: {
    progress() {
      return {
        width: `${this.currentProgress}%`,
        height: '20px',
        backgroundColor: 'green',
        marginTop: '10px',
        borderRadius: '5px',
      };
    },
    startEffectClass() {
      return {
        destaque: this.startEffect,
        encolher: !this.startEffect,
      };
    },
    metoo() {
      return {
        [this.classMeToo]: this.applyMeToo === 'true' ? true : false,
      };
    },
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.startEffect = !this.startEffect;
      }, 1000);
    },
    iniciarProgresso() {
      const inter = setInterval(() => {
        this.currentProgress += 10;
        if (this.currentProgress >= 100) {
          clearInterval(inter);
        }
      }, 500);
    },
  },
});
