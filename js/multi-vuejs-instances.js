var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Hello World this is title Vue App  Vue App One"
  },
  methods: {

  },
  computed: {
    greet: function() {
      return "Hello from app one :-)"
    }
  }
});


var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Hello World this is title Vue App Two"
  },
  methods: {
    changeTitle: function(newTitle) {
      one.title = newTitle;
    }
  },
  computed: {
    greet: function() {
      return "Hello from app two :-)"
    }
  }
});
