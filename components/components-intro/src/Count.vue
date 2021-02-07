<template>
  <div class="counted">
    <p>{{ counted }}</p>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      counted: 0,
    };
  },
  methods: {
    inc() {
      this.counted++;
    },
    dec() {
      this.counted--;
    },
  },
};
</script>

<style scoped>
.counted span {
  border-bottom: 1px dashed #ccc;
  height: 30px;
  padding: 5 25px;
}

.counted button {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: 0;
  border: 0;
}
</style>