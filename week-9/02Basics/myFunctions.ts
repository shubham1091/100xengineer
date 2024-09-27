function addTwo(num: number) {
  return num + 2;
}

addTwo(2);

function getUpper(val: string) {
  //   console.log(this);
  return val.toUpperCase();
}

getUpper("hello");

function signUpUser(name: string, age: number, email: string, isPaid: boolean) {
  console.log("name is " + name);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  //   console.log(this);
  console.log("name is " + name);
};

loginUser("shubham", "shubham@gmail.com");

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
