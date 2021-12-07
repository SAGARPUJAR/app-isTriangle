const Inputs = document.querySelectorAll(".sideinput");
const btnCheck = document.querySelector("#btnResult");
const output = document.querySelector("#output");

function calculateSumofSides(a, b) {
  const sumofSquares = a * a + b * b;
  return sumofSquares;
}

function calculateHypo() {
  const sumofSquares1 = calculateSumofSides(
    Number(Inputs[0].value),
    Number(Inputs[1].value)
  );
  const lengthHypo = Math.sqrt(sumofSquares1);
  output.innerText = "The length of Hypotenous is : " + lengthHypo;
}

btnCheck.addEventListener("click", calculateHypo);
