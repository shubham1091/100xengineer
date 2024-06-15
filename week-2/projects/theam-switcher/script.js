const body = document.querySelector("body");

const buttons = document.querySelectorAll(".button");
// console.log(buttons)

buttons.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target)
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      default:
        break;
    }
  });
});
