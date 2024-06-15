const usr = {
  uname: "shubham",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.uname}, welcome to website`);
    console.log(this);
  },
};

usr.welcomeMessage();
usr.uname = "sam";
usr.welcomeMessage();

console.log(this); // empty obj

function coffee() {
  let usr = "jenny";
  console.log(this);
  console.log(this.usr); //undefined
}

coffee();

const chai = () => {
  let usr = "shubham";
  console.log(this); // empty
  console.log(this.usr); // undefined
};

chai();

// implicitly return
const addOne = (num) => num + 1;
const ob = (num) => ({ unamee: "sam" }); // useful in react
