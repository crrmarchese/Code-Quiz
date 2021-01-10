// DOM Elements
const quizIntroEl = document.querySelector("#start-quiz-about");
const startButton = document.querySelector("#start-button");
const quizSectionEl = document.querySelector("#quiz-questions-all");
const quizQuestionEl = document.querySelector("#quiz-question");
const quizQuestionNumberEl = document.querySelector("#quiz-question-number")
const answerChoicesEl = document.querySelector("#answer-choices");
const timerCounterEl = document.querySelector("#timer-count");
const answerResultEl = document.querySelector("#user-answer-result");

// Quiz Questions
const numberedQuestions = [
    {
        questionNumber: 1,
        question: "What is a block of JavaScript code that can be executed when \"called\" for?",
        choices: ["variable","number", "function", "identifiers"],
        correctAnswer: "function",
        wrongAnswer: null
    },
    {
        questionNumber: 2,
        question: "Array indexes start at which number?",
        choices: ["0","1", "2", "3"],
        correctAnswer: "0",
        wrongAnswer: null
    },
    {
        questionNumber: 3,
        question: "Which property of an array returns the number of array elements?",
        choices: ["count property","text property", "last property", "length property"],
        correctAnswer: "length property",
        wrongAnswer: null
    },
    {
        questionNumber: 4,
        question: "Which JavaScript method cannot be used to convert variables to numbers?",
        choices: ["Number()","parseInt()", "parseFloat()", "toString()"],
        correctAnswer: "toString()",
        wrongAnswer: null
    },
    {
        questionNumber: 5,
        question: "Which two values can JavaScript booleans have?",
        choices: ["up or down","left or right", "true or false", "right or wrong"],
        correctAnswer: "true or false",
        wrongAnswer: null
    }
]

// Load questions on page


// The init function is called when the page loads 
function init() {
  startQuizAnimation();
}

// Fade in starting page for quiz
function startQuizAnimation() {
    quizIntroEl.classList.add("animate__animated", "animate__fadeIn");
}

// Animation to hide quiz starting section
function startGame() {
    // Hide intro to quiz
    quizIntroEl.classList.remove("animate__fadeIn");
    quizIntroEl.classList.add("animate__fadeOut");  
    quizIntroEl.remove();
    // Show quiz questions section
    quizSectionEl.classList.remove("d-none");
    quizSectionEl.classList.add("animate__animated", "animate__fadeInUp");

    
}

//Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();
