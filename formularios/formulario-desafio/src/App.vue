<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!sended">
        <div class="cabecalho">Formulário</div>
        <Fullname v-model="fullname" />

        <Rotulo nome="E-mail">
          <input type="text" v-model="email" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="text" v-model="password" />
        </Rotulo>
        <Rotulo nome="Armazenar dados?">
          <input type="checkbox" v-model="storage" />
        </Rotulo>

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <hr />

        <button @click.prevent="send">Enviar</button>

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ fullname.name }}</span>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <span>{{ fullname.lastname }}</span>
        </Rotulo>
        <Rotulo nome="E-mail">
          <span>{{ email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ password }}</span>
        </Rotulo>
        <Rotulo nome="Armazenar dados?">
          <span>{{ storage }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Fullname from "@/components/Fullname";

export default {
  name: "app",
  components: { Rotulo, Fullname },
  data() {
    return {
      sended: false,
      fullname: {
        name: "",
        lastname: "",
      },
      email: "",
      password: "",
      storage: false,
    };
  },
  methods: {
    send() {
      this.sended = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
