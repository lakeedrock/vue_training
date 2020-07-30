const vm = new Vue({
  el: "#app",
  data: {
    label: 'Open the console and call vm.output(); method',
    message: 'MESSAGE property',
  },
  methods: {
    output: function () {
      alert(this.message);
    }
  }
});
