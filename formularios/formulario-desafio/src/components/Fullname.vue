<template>
  <div class="">
    <Rotulo nome="Nome">
      <input type="text" :value="value.name" @input="altName" />
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" :value="value.lastname" @input="altLastname" />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "@/components/Rotulo.vue";
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  components: { Rotulo },
  methods: {
    altName(event) {
      this.$emit("input", {
        name: event.target.value,
        lastname: this.value.lastname,
      });
    },
    altLastname(event) {
      this.$emit("input", {
        name: this.value.name,
        lastname: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>