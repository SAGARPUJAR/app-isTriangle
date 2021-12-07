const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#submit-answer");
const outPut = document.querySelector(".output");

const correctAnswers = ["90", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let result of formResults.values()) {
    if (result === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  outPut.innerText = "Your Score is : " + score;
}

btnSubmit.addEventListener("click", calculateScore);
