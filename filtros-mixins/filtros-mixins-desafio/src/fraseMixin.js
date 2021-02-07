export default {
  computed: {
    fraseComma() {
      return this.frase.replace(/\s/g, ',');
    },
    fraseTamanhos() {
      return this.frase
        .split(' ')
        .map((w) => `${w} (${w.length})`)
        .join(' ');
    },
  },
};
