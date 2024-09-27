interface User {
  email: string;
  userId: number;
  trail: () => string;
}

const shubham: User = {
  email: "shubham@gmail.com",
  userId: 123,
  trail: () => "trail started",
};

interface User {
  loginMethod?: string;
}

interface Admin extends User {
  role: string;
}
