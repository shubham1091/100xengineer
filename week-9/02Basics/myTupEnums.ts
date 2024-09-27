// let color: [number,number,number] = [255, 255, 255,0.5];
let color: [number, number, number] = [255, 255, 255];

type User = [number, string];

const user: User = [123, "shubham"];

// user[0] = "123";

// user.pop();

user.push();

enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}
enum Seat {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = "window",
}

let choice: SeatChoice = SeatChoice.MIDDLE;

console.log(SeatChoice.MIDDLE);
console.log(Seat.MIDDLE);


