const vm = new Vue({
  el: "#app",
  data: {
    value: false,
    greeting_message: 'Welcome'
  },
  methods: {
    click_me: function () {
      alert(this.greeting_message + " !");
    },
    click_now: function (first_name, last_name) {
      alert(this.greeting_message + " " + first_name + " " + last_name + " !");
    }
  }
});
