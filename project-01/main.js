new Vue({
  el: '#app',
  data: {
    running: false,
    playerLife: 100,
    monsterLife: 100,
    logs: [],
  },
  computed: {
    hasResults() {
      return this.playerLife === 0 || this.monsterLife === 0;
    },
  },
  methods: {
    startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
    },
    attack(special = false) {
      this.hurt('playerLife', 7, 12, false, 'Player', 'Monster', 'player');
      if (this.monsterLife > 0) {
        this.hurt(
          'monsterLife',
          5,
          10,
          special,
          'Monster',
          'Player',
          'monster'
        );
      }
    },
    hurt(prop, min, max, special, source, target, cls) {
      const plus = special ? 5 : 0;
      console.log(special, min + plus, max + plus);
      const hurt = this.getRandom(min + plus, max + plus);
      this[prop] = Math.max(this[prop] - hurt, 0);

      this.registerLog(`${source} attack ${target} with ${hurt}`, cls);
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;

      return Math.round(value);
    },
    healAndHurt() {
      this.heal(10, 15);
      this.hurt('playerLife', 7, 12, false, 'Monster', 'Player', 'monster');
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog(`Player heal himself with ${heal}`, 'healed');
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
  watch: {
    hasResults(value) {
      if (value) {
        this.running = false;
      }
    },
  },
});
