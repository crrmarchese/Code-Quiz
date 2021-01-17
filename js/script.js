// DOM Elements
const quizIntroEl = $("#start-quiz-about");
const startButton = document.querySelector("#start-button");
const quizSectionEl = $("#quiz-questions-all");
const timerCounterEl = document.querySelector("#timer-count");
const answerContainer= $(".answer-container");
const answerResultEl = $(".user-answer-result");
const scoreEl = $("#final-score");

// Score
let score = 0;
scoreEl.text(score);

//Timer variables
let timer
let timerCount; //seconds on timer

//Start at first question (index) Keep this!
let indexCounter = 0;

// Quiz Questions
const quizQuestionsAll = [
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


// The init function is called when the page loads 
function init() {
  startQuizAnimation();
  storedScore();
}

// Fade in starting page for quiz
function startQuizAnimation() {
    quizIntroEl.addClass("animate__animated animate_fadeIn");
}

// Animation to hide quiz starting section
function startGame() {
    quizIntroEl.removeClass("animate__fadeIn");
    quizIntroEl.addClass("animate__fadeOut");  
    quizIntroEl.remove();
    
    // Show quiz questions section
    quizSectionEl.removeClass("d-none");
    quizSectionEl.addClass("animate__animated animate__fadeInUp");

   //Set time on counter
    timerCount = 75;

   //Start Timer
    startTimer()

    //Load Quiz Questions
    getQuestion();
    
}

function getQuestion() {
    // Get question number and question from quizQuestionsAll Object
    let currentQuestion = quizQuestionsAll[indexCounter];
        $("span.quiz-question-number").text(currentQuestion.questionNumber);
        $("p.quiz-question").text(currentQuestion.question).attr("id","quiz-question-" + (currentQuestion.questionNumber));
        $(".button-group-choices button:first").text(currentQuestion.choices[0]). attr("value", currentQuestion.choices[0]);
        $(".button-group-choices button:nth-child(2n)").text(currentQuestion.choices[1]).attr("value", currentQuestion.choices[1]);
        $(".button-group-choices button:nth-child(3n)").text(currentQuestion.choices[2]).attr("value", currentQuestion.choices[2]);
        $(".button-group-choices button:last").text(currentQuestion.choices[3]).attr("value", currentQuestion.choices[3]);
       
         
    btnAnswer(); 
}

 function btnAnswer() {
     // Attach event Listener to buttons; Get button value
        $(".button-group-choices .btn").on("click", function(event) {
            let answerClicked = ($(this).attr("value"));

        // Check if answer is correct
            answerContainer.removeClass("d-none");
            answerContainer.addClass("animate__animated animate__fadeInUp");
            if(answerClicked === quizQuestionsAll[indexCounter].correctAnswer) {
                answerResultEl.text("Correct!");
                let finalScore = score += 20;
                scoreEl.text(finalScore);

            } else {
                answerResultEl.text("Wrong!");
                timerCount = timerCount - 10; // Wrong answer deduct 10 seconds
            }
            if(indexCounter < 5) {
                transitionQuestion();

            }  else {
             $("#quiz-score-container").removeClass("d-none");   
            }    
                        
        });
    
 }

 // Empty quiz container and transition to next question
 function transitionQuestion() {
    const quizContainer = function() {

        setTimeout(function(){
            console.log("emptying!!");
            $(".quiz-container").empty();
        }, 3000);
    
    } 
        

        if(indexCounter < 5) {
            indexCounter++;
            getQuestion();
        } else {
            getFinalScore();
        }
         
   
 }

//Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
    timerCounterEl.textContent = timerCount;
      timerCount--; 
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
}

// Show final score section
function getFinalScore() {
    $("#quiz-score-container").removeClass("d-none");
}

function storedScore() {
    // Stringify and set key in localStorage to scoring
    localStorage.setItem("score", JSON.stringify(score));
  }
