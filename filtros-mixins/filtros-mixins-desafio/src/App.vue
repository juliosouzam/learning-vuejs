<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ frase | espaceToComma }}</p>
    <p>{{ frase | (espace - to - comma) }}</p>
    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ frase | countWords }}</p>
    <p>{{ frase | (count - words) }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ fraseComma }}</p>
    <p>{{ fraseTamanhos }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import fraseMixin from "./fraseMixin";

export default {
  mixins: [fraseMixin],
  filters: {
    espaceToComma(valor) {
      return valor.replace(/\s/g, ",");
    },
  },
  data() {
    return {
      frase: "Essa frase será usada como teste do testes",
    };
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
