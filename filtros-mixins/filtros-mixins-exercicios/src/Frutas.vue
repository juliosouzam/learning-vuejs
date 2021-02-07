<template>
  <div>
    <ul>
      <li v-for="f in frutas" :key="f">{{ f }}</li>
    </ul>

    <input type="text" v-model="fruta" @keydown.enter="add" />
  </div>
</template>

<script>
import userMixin from "./userMixin";
import frutasMixin from "./frutasMixin";

export default {
  mixins: [frutasMixin, userMixin],
  created() {
		console.log('created Frutas')
	}
};
</script>

<style>
</style>