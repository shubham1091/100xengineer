let score: number | string = 22;

score = "22";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let user: User | Admin = {
  name: "shubham",
  id: 123,
};

user = {
  username: "shubham",
  id: 123,
};

function getId(id: number | string) {
  if (typeof id === "number") {
    console.log(`DB is is :${id}`);
  } else {
    id.toLowerCase();
    console.log(`DB is is :${id}`);
  }
}

getId(123);
getId("123");

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// const data3: number[] | string[] = [1, 2, "3"]; // either number array or string array
const data3: (number | string)[] = [1, 2, "3"]; // mix of number and string

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";
