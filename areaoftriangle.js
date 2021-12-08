const getvals = document.querySelectorAll(".input-val");
const btnCheck = document.querySelector("#btn-checkArea");
const output = document.querySelector("#output");

function CalulateTraiangle(a, b) {
  return a * b;
}

function CalulateArea() {
  if ((Number(getvals[0].value) != "", Number(getvals[1].value) != "")) {
    const Result = CalulateTraiangle(
      Number(getvals[0].value),
      Number(getvals[1].value)
    );

    const FinalResult = Result / 2;
    output.innerText = "The Area of Triangle is : " + FinalResult.toFixed(2);
  } else {
    alert("Please Enter All Required Fields");
  }
}

btnCheck.addEventListener("click", CalulateArea);
