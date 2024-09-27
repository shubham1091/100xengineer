const User = {
  name: "shubham",
  email: "shubham@gmail.com",
  isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

createUser({ name: "shubham", isPaid: true });
const newUser = { name: "shubham", isPaid: true, email: "shubham@gmail.com" };

createUser(newUser); //?

const createCourse = (
  name: string,
  price: number
): { name: string; price: number } => {
  return {
    name: name,
    price: price,
  };
};

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function create(user: User) {}

// create(newUser);
create({ name: "shubham", email: "shubham@gmail.com", isActive: true });

type Member = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  card?: CardDetails;
};

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  cardDate: string;
};

type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
  };

let member: Member = {
  _id: "123",
  name: "shubham",
  email: "shubham@gmail.com",
  isActive: true,
};
