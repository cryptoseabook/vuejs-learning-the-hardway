Vue.component("greeting", {
    template: "<p>Hey there, this is the greeting from {{name}}. <button @click='changeGreeting()'>Change Greeting</button></p>",
    data: function() {
      return {
        name: "seabook"
      }
    },
    methods: {
      changeGreeting: function(){
        this.name = "hetty";
      }
    }
});

var one = new Vue({
  el: "#vue-app-one"
});


var two = new Vue({
  el: "#vue-app-two"
});
