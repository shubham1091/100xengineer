// Immediately Invoked Function Expressions (IIFE)

function coffee() {
  console.log("DB connected");
  //   console.log(this);
}

coffee();

// named
(function chai() {
  console.log("DB conneced From IIFE");
  //   console.log(this);
})();

// unnamed
((name) => {
  console.log(`DB CONNECTED ${name}`);
})("shubham");
