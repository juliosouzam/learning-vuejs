<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome: <strong>{{ invertName() }}</strong>
    </p>
    <p>
      Idade é: <strong>{{ idade }}</strong>
    </p>
    <button @click="restartName">Alter name</button>
    <button @click="restartFn">Restart name</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    userName: {
      type: String,
      required: true,
      default: "Annon",
      // default: () => {
      //   return Array(10).fill("0").join(" ");
      // },
    },
    restartFn: Function,
    idade: Number,
  },
  created() {
    barramento.idadeChanged((age) => {
      this.idade = age;
    });
  },
  methods: {
    invertName() {
      return this.userName.split("").reverse().join("");
    },
    restartName() {
      const name = this.userName === "Pedro" ? "Ana" : "Pedro";
      this.$emit("nameChange", name);
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
