// DOM Elements
const quizSection = document.querySelector("#start-quiz");
const startButton = document.querySelector("#start-button");

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

// Starting page for quiz
function startQuizAnimation() {
    quizSection.classList.add("animate__animated", "animate__fadeIn");
}

// Animation to hide quiz starting section
function startGame() {
    //Attach event listener to start button to call startGame function on click
     startButton.addEventListener("click", function() {
        // quizSection.classList.remove("animate__fadeIn");
        // quizSection.classList.add("animate__fadeOutDown");
        console.log("The button has been clicked");
    
    });
}

// Calls init() so that it fires when page opened
init();
