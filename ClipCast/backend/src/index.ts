console.log("Hello via Bun!");

const hello = (name: string) => `Hello ${name}!`;

console.log(hello(process.env.SHUBHAM || "world"));
