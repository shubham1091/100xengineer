const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    // bmi = weight / (height^2 /10000)
    const BMI = (weight / (height ** 2 / 10000)).toFixed(2);
    let detail;

    if (BMI < 18.6) {
      detail = "You are under weight";
    } else if (BMI < 24.9) {
      detail = "You are in Normal range ";
    } else {
      detail = "You are Overweight";
    }
    results.innerHTML = `<span>${BMI}</span>\n${detail}`;
  }
});
