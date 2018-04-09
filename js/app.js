new Vue({
  el: "#vue-app",
  data: {
    characters:["Seabook","Jira", "Syvia", "hetty"],
    name: "Seabook",
    job: "Developer",
    website:"http://kungfusoftware.net",
    websiteTag:"<a href='http://kungfusoftware.net'>kungfusoftware</a>",
    age: 30,
    x:0,
    y:0,
    newName: "",
    a: 0,
    b: 0,
    success: false,
    error: false,
    available: false,
    nearby: false,
    ninjas: [
      {name:"seabook", age: 10},
      {name:"hetty", age: 20},
      {name:"sex", age: 90},
    ],
    refValue: ""
  },
  methods: {
    greet: function(time) {
      var name = this.name,
       job = this.job;
      return "Good " + time + " " + name + " " + job
    },
    addAge: function(age) {
      this.age += age;
    },
    subtractAge: function(age) {
      this.age -= age;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert("clicked");
    },
    logName: function() {
      console.log("you input your name");
    },
    logAge: function() {
      console.log("you input your age");
    },
    readRefs: function(event) {
      event.preventDefault();
      //this.refValue = this.$refs.seabook.value;
      console.log(this.$refs)
      this.refValue = this.$refs.refDiv.innerText;
    }
  },
  computed: {
    addToA: function () {
      return this.age + this.a;
    },
    addToB: function() {
      return this.age + this.b;
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
