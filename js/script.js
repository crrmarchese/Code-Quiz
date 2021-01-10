// DOM Elements
const quizIntro = document.querySelector("#start-quiz-about");
const startButton = document.querySelector("#start-button");
const quizSection = document.querySelector("#quiz-questions-all");
const quizQuestion = document.querySelector("#quiz-question");
const answerChoices = document.querySelector("#answer-choices");
const timerCounter = document.querySelector(".timer-count");
const answerResult = document.querySelector("#user-answer-result");

// Attach event listener to start button to call startGame function on click
// startQuiz.addEventListener("click", function(event) {
//     var state = element.getAttribute("data-state");

//     if (state === "hidden") {
//     }

// });

// The init function is called when the page loads 
function init() {
  startQuizAnimation();

}

// Fade in starting page for quiz
function startQuizAnimation() {
    quizIntro.classList.add("animate__animated", "animate__fadeIn");
}

// Animation to hide quiz starting section
function startGame() {
    // Hide intro to quiz
    quizIntro.classList.remove("animate__fadeIn");
    quizIntro.classList.add("animate__fadeOut");  
    quizIntro.remove();
    quizSection.classList.remove("d-none");
    quizSection.classList.add("animate__animated", "animate__fadeInUp");

    
}

//Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();
