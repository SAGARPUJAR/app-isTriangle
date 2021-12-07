const getvals = document.querySelectorAll(".input-val");
const btnCheck = document.querySelector("#btn-checkArea");
const output = document.querySelector("#output");

function CalulateTraiangle(a, b) {
  return a * b;
}

function CalulateArea() {
  const Result = CalulateTraiangle(
    Number(getvals[0].value),
    Number(getvals[1].value)
  );

  const FinalResult = Result / 2;
  output.innerText = "The Area of Triangle is : " + FinalResult;
}

btnCheck.addEventListener("click", CalulateArea);
