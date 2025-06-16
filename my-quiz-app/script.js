const quizArray = [
  {
    question: "Which is the biggest land animal ?",
    answers: ["Lion", "Hawk", "Elephant", "Dog"],
    correct: "Elephant",
  },

  {
    question: "The tallest Mountain in Africa is?",
    answers: ["Everest", "Kilimonjaro", "Hijo", "Zuma"],
    correct: "Kilimonjaro",
  },

  {
    question: "Which is the biggest sea animal ?",
    answers: ["Blue Whale", "Snake", "Snail", "Sea Lion"],
    correct: "Blue Whale",
  },

  {
    question: "Which is the largest continent ?",
    answers: ["Europe", "Asia", "Africa", "Antartica"],
    correct: "Asia",
  },
  {
    question: "Which produces honey ?",
    answers: ["Mosquito", "Wasp", "Housefly", "Bee"],
    correct: "Bee",
  },
];

const body = document.querySelector("body");
const logo = document.getElementById("logo");
const darkModeBtn = document.getElementById("dark-mode-btn");
const startQuizBtn = document.getElementById("start-btn");
const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.getElementById("questions");
const answersContainer = document.getElementById("answers-container");
const nextBtn = document.getElementById("next-btn");
const restartContainer = document.querySelector(".restart-container");
const scoreText = document.getElementById("score-text");
const score = document.querySelector("span");
const restartBtn = document.getElementById("restart");

// DARK MODE
function darkModeFunction() {
  body.classList.toggle("dark-body");
  logo.classList.toggle("dark-logo");
  darkModeBtn.classList.toggle("dark-btn");
  startQuizBtn.classList.toggle("dark-btn");
  questionEl.classList.toggle("dark-text");
  restartBtn.classList.toggle("dark-btn");
  scoreText.classList.toggle("dark-text");
}
darkModeBtn.addEventListener("click", darkModeFunction);

// START QUIZ
function startQuizFunction() {
  startQuizBtn.style.display = "none";
  quizContainer.style.display = "flex";
  nextBtn.style.display = "none";
  getQuestion();
  scoreIndex = 0; // Reset score index
}
startQuizBtn.addEventListener("click", startQuizFunction);

let questionIndex = 0;
let scoreIndex = 0;

// GET QUESTION
function getQuestion() {
  const currentQuestion = quizArray[questionIndex];
  questionEl.innerText = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const answerBtn = document.createElement("button");
    answerBtn.classList.add("answer");
    answerBtn.innerText = answer;
    answerBtn.addEventListener("click", checkAnswer);
    answersContainer.appendChild(answerBtn);
  });
}
// CHECK ANSWER
function checkAnswer(event) {
  // Disable all answer buttons after one is clicked
  const answerEl = document.querySelectorAll(".answer");
  answerEl.forEach((option) => {
    option.disabled = true;
    option.style.pointerEvents = "none"; // Disable pointer events
    option.style.cursor = "not-allowed"; // Change cursor to indicate disabled state
    option.style.color = "black";
  });
  const selectedAnswer = event.target;
  const currentQuestion = quizArray[questionIndex];
  scoreIndex;
  scoreText.innerHTML = `Your score is: ${scoreIndex} out of ${quizArray.length}`;
  if (selectedAnswer.innerText === currentQuestion.correct) {
    selectedAnswer.style.backgroundColor = "green";
    scoreIndex++;
    scoreText.innerHTML = `Your score is: ${scoreIndex} out of ${quizArray.length}`;
  } else {
    selectedAnswer.style.backgroundColor = "red";
  }
  nextBtn.style.display = "block";
}

// NEXT QUESTION  
nextBtn.addEventListener("click", () => {
  questionIndex++;
  if (questionIndex < quizArray.length) {
    getQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
});

// SHOW SCORE
function showScore() {
  quizContainer.style.display = "none";
  restartContainer.style.display = "flex";
}

if(questionIndex >= quizArray.length) {
  nextBtn.style.display = "none";
  quizContainer.style.display = "none";
  restartContainer.style.display = "flex";
};

restartBtn.addEventListener("click", restartQuiz);

function restartQuiz() {
  quizContainer.style.display = "flex";
  restartContainer.style.display = "none";
  scoreText.innerText = "";
  score.innerText = "";
  questionIndex = 0;
  startQuizFunction();
  console.log("Quiz restarted");
  nextBtn.style.display = "none";
};
