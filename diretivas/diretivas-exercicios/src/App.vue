<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />

    <p v-text="'Usando diretiva <strong>v-text</strong>'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>

    <p v-destaque:fundo.atrasar="'lightblue'">Usando uma custom diretiva</p>
    <p v-destaque="'lightblue'">Usando uma custom diretiva</p>

    <hr />
    <p
      v-destaque:fundo.atrasar="{
        cor1: 'green',
        atraso: 4000,
      }"
    >
      Usando uma custom diretiva
    </p>

    <p
      v-destaque-local:fundo.atrasar.alternar="{
        cor1: 'green',
        cor2: 'lightblue',
        atraso: 2000,
        intervalo: 200,
      }"
    >
      Usando uma custom diretiva
    </p>

    <!-- <p v-test:arg.mod1.mod2.mod3...="value">Usando uma custom diretiva</p> -->
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };

        let atraso = 0;

        if (binding.modifiers["atrasar"]) {
          atraso = binding.value.atraso;
        }

        const cor1 = binding.value.cor1;
        const cor2 = binding.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;

              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1);
          }
        }, atraso);
      },
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
