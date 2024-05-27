const coding = ["js", "py", "java", "cpp"];

// forEach does not return anything
const values = coding.forEach((val) => {
  //   console.log(val);
  return val;
});

console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = myNums.filter((val) => {
  return val % 2;
});
console.log(odd);

const even = myNums.filter((val) => val % 2 == 0);
console.log(even);

const movies = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    released: 2001,
    rating: 7.6,
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    genre: "Fantasy",
    released: 2002,
    rating: 7.4,
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    genre: "Fantasy",
    released: 2004,
    rating: 7.9,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    genre: "Fantasy",
    released: 2005,
    rating: 7.7,
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    genre: "Fantasy",
    released: 2007,
    rating: 7.5,
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    genre: "Fantasy",
    released: 2009,
    rating: 7.6,
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 1",
    genre: "Fantasy",
    released: 2010,
    rating: 7.7,
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 2",
    genre: "Fantasy",
    released: 2011,
    rating: 8.1,
  },
];

const highRated = movies.filter((val) => val.rating > 7.8);
console.log(highRated);

const released = movies.filter((movie) => movie.released > 2008);
console.log(released);
