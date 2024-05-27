const coding = ["js", "py", "java", "cpp"];

// idx and arr are optional
coding.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

const myarr = [
  { lang: "javascript", extention: "js" },
  { lang: "java", extention: "java" },
  { lang: "python", extention: "py" },
];

myarr.forEach((val) => {
  console.log(val.lang);
});
