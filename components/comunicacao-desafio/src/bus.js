import Vue from 'vue';

export default new Vue({
  methods: {
    setUser(user) {
      this.$emit('selectedUser', user);
    },
    getUser(callback) {
      this.$on('selectedUser', callback);
    },
  },
});
