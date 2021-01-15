// DOM Elements
const quizIntroEl = document.querySelector("#start-quiz-about");
const startButton = document.querySelector("#start-button");
const quizSectionEl = document.querySelector("#quiz-questions-all");
const quizQuestionEl = document.querySelector("#quiz-question");
const quizQuestionNumberEl = document.querySelector(".quiz-question-number");
// const quizQuestionNumberEl = document.createElement("span");
// const answerChoicesEl = document.querySelector("#answer-choices");
const timerCounterEl = document.querySelector("#timer-count");
// const answerResultEl = document.querySelector("#user-answer-result");
// const quizContainer = document.querySelector("#quiz-container");
const divTextStartEl = document.querySelector(".text-start"); //Use this for HTML reset
const finalScoreEl = document.querySelector("#final-score");

//Timer variables
let timer
let timerCount; //seconds on timer


//Start at first question (index) Keep this!
let indexCounter = 0;

// Quiz Questions
let quizQuestionsAll = [
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

    //Set time on counter
     timerCount = 75;

     // Start Timer
    startTimer();

    //Load Quiz Questions
    getQuestion()
    
 
}

function getQuestion() {
    // Create Quiz Container
    let quizContainer = document.createElement("div");
    divTextStartEl.appendChild(quizContainer);
    quizContainer.setAttribute("class","quiz-container");
    quizContainer.setAttribute("class","animate__animated", "animate__fadeIn");

    // Create Paragraph <p> for questions
    let currentQuestion = quizQuestionsAll[indexCounter];
    let paraQuestion = document.createElement("p");
    paraQuestion.textContent = currentQuestion.question;
    quizContainer.appendChild(paraQuestion);
    paraQuestion.setAttribute("id","quiz-question-" + currentQuestion.questionNumber);
    paraQuestion.setAttribute("class","fw-bold");

    // Create <span> for question numbers
    let questionId = document.createElement("span");
    questionId.textContent = currentQuestion.questionNumber;
    paraQuestion.prepend(questionId);
    questionId.setAttribute("class", "quiz-question-number me-2");

    // Create <div> for buttons
    let divElBtn = document.createElement("div");
    quizContainer.appendChild(divElBtn);
    divElBtn.setAttribute("class", "button-group-choices");

    // Loop through answers currently only the first one is set
    currentQuestion.choices.forEach(function(choice){
        let btnChoices = document.createElement("button");
        divElBtn.appendChild(btnChoices);
        btnChoices.setAttribute("class", "btn btn-lg btn-primary ripple-surface");
        btnChoices.setAttribute("type", "button");
        btnChoices.setAttribute("value", choice);
        btnChoices.textContent = choice;
        // Attach event Listener when creating buttons; 
        // Check answer when button clicked, move to next question
        btnChoices.addEventListener("click", btnAnswer);
    });
    
}

function btnAnswer() {
    // Create div to hold <hr> and answer choice
    let divSibling = document.querySelector("div.button-group-choices")
    let divElAnswer = document.createElement('div');
    divSibling.after(divElAnswer);
    divElAnswer.setAttribute("class", "answer-container");
    
    // Create Horizontal rule <hr>
    let hrRule = document.createElement("hr");
    divElAnswer.appendChild(hrRule);
    hrRule.setAttribute("class", "text-primary");

    // Create <p> with answer
    let answerResultEl = document.createElement("p");
    divElAnswer.appendChild(answerResultEl);
    answerResultEl.setAttribute("class", "user-answer-result");

    // Check if answer is correct
    let answerClicked = (this.value);
    if(answerClicked === quizQuestionsAll[indexCounter].correctAnswer) {
        answerResultEl.textContent = "Correct!";
    } else {
        answerResultEl.textContent = "Wrong!";
        timerCount = timerCount - 10; // Wrong answer deduct 10 seconds
    }
    
    //write logic to show if answer is correct
    //write logic to go to the next question indexCounter ++
    //clear page with html remove
    indexCounter ++;
    getQuestion();
}


//Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

//Timer
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
