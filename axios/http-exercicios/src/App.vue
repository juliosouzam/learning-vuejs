<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      v-for="message in messages"
      :key="message.text"
      :variant="message.type"
    >
      {{ message.text }}
    </b-alert>
    <b-card>
      <b-form-group label="Name:">
        <b-form-input
          type="text"
          size="lg"
          v-model="user.name"
          placeholder="Informe nome"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input
          type="email"
          size="lg"
          v-model="user.email"
          placeholder="Informe o email"
        >
        </b-form-input>
      </b-form-group>

      <hr />
      <b-list-group>
        <b-list-group-item v-for="user in users" :key="user.id">
          {{ user.id }}) {{ user.name }} - {{ user.email }}
          <b-button variant="warning" size="lg" @click="load(user.id)"
            >Load</b-button
          >
          <b-button
            variant="danger"
            size="lg"
            class="ml-2"
            @click="drop(user.id)"
            >Delete</b-button
          >
        </b-list-group-item>
      </b-list-group>
      <hr />
      <b-button @click="save" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="list" size="lg" variant="success" class="ml-2"
        >List</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      users: [],
      id: null,
      user: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    clear() {
      this.errors = [];
      this.user.name = "";
      this.user.email = "";
      this.id = null;
    },
    save() {
      // eslint-disable-next-line no-unused-vars
      // this.$http.post("users", this.user).then((res) => this.clear());
      const method = this.id ? "patch" : "post";
      const finalUrl = this.id ? `${this.id}` : "";
      // eslint-disable-next-line no-console
      this.$http[method](`users/${finalUrl}`, this.user).then(() => {
        this.clear();
        this.messages.push({
          text: "Operação realizada com sucesso!",
          type: "success",
        });
      });
    },
    list() {
      this.clear();
      this.$http.get("users").then((res) => {
        this.users = res.data;
      });
    },
    load(id) {
      this.id = id;
      this.user = this.users.find((u) => u.id === id);
    },
    drop(id) {
      this.$http.delete(`users/${id}`).catch((_) => {
        this.clear();
        this.messages.push({
          text: "Erro ao excluir",
          type: "danger",
        });
      });
    },
  },
  // created() {
  //   this.$http
  //     .post("users", {
  //       name: "Julio",
  //       email: "julio@mail.com",
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
