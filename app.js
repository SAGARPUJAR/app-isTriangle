const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#btn-triangle");
const OutputEl = document.querySelector("#result");

function CalsumOfAngles(a1, a2, a3) {
  const sum = a1 + a2 + a3;
  //alert(sum);
  return sum;
}

function isTriangle() {
  const sumofAngle = CalsumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumofAngle == 180) {
    OutputEl.innerText = "Yay, The Angle form a Triangle";
  } else {
    OutputEl.innerText = "Oh Oh, The Angle Doesn't Form a Triangle !!";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
