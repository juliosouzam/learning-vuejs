<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ cpf | cpf | invert }}</p>
		<p>{{ userLogged }}</p>

    <hr />

    <input type="text" :value="cpf | cpf" />

    <hr />
    <Frutas />

    <hr />

    <div>
      <ul>
        <li v-for="f in frutas" :key="f">{{ f }}</li>
      </ul>

      <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin";
import userMixin from "./userMixin";

import Frutas from "./Frutas";
export default {
  components: { Frutas },
  mixins: [frutasMixin, userMixin],
  filters: {
    cpf(value) {
      const arr = value.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");

      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "12345678910",
    };
	},
	created() {
		console.log('created App')
	}
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

input {
  font-size: 2.5rem;
}
</style>
