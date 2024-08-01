const boxElArray = Array.from(document.querySelectorAll(".box"));
const boxHolder = document.querySelector(".box-holder");
const boxFinder = document.querySelector("#box-finder");

console.log(boxElArray);
console.log(
  boxElArray.filter((el) => {
    return el.dataset.color === "red";
  })
);
boxFinder.addEventListener("input", function (e) {
  let filteredArray;
  if (
    e.target.value == "red" ||
    e.target.value == "green" ||
    e.target.value == "blue" ||
    e.target.value == "yellow"
  ) {
    filteredArray = boxElArray.filter((el) => {
      return e.target.value === el.dataset.color;
    });
    boxHolder.innerHTML = "";
    console.log(e.target.value);
    console.log(filteredArray);
    filteredArray.forEach((a) => {
      boxHolder.append(a);
    });
  } else {
    boxElArray.forEach((b) => boxHolder.append(b));
  }
  // boxHolder.append(filteredArray);
});
