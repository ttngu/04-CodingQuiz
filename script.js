var startButton = document.getElementById("start");
var nextButton = document.getElementById("next-btn");
var questionContainerEl= document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons")
var timer = document.getElementById("timer");
var duration = 100;
var timerId;

let shuffledQuestions, currentQuestionIndex;

// Timer function 
function startTimer(duration, display) {
    // var timer = duration, minutes, seconds;
    timerId = setInterval(countDown, 1000);
}
function countDown () {
    
    // duration = duration - 1;
    // duration = duration - 10;
    duration --
    timer.textContent = duration;
    
    if (duration <= 0) {
        scoretotal = 0;
        alert("Out of time!");
        // tryagain();
        clearInterval(timerId);
    }
    
}
// Start game function
function startGame(){
    startTimer (duration, timer)
    console.log("Started");
    startButton.style.display="none";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}

// Next question function
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

// Function to show the question, appends next child
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
        
    });
}

// Function to reset/hide the appended child
function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}

// Select answer function
function selectAnswer() {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide")
    }
 
}
// ** These are to change the colors **
// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add("correct")
//     } else { 
//         element.classList.add("wrong")
//        }
// }

// function clearStatusClass(element) {
//     element.classList.remove("correct")
//     element.classList.remove("wrong")
    
// }

// All of the questions to ask during the quiz
var questions = [
    { question: "What Pokemon does Pikachu evolve into?",
        answers: [
            {text: "Raichu", correct: true},
            {text: "Electivire", correct: false},
            {text: "Meowstic", correct: false},
            {text: "Jolteon", correct: false},
        ]
    },
    { question: "What are the three types of starter Pokemon?",
        answers: [
            {text: "Dragon, Flying and Normal", correct: false},
            {text: "Grass, Fire and Water", correct: true},
            {text: "Psychic, Fighting and Ghost", correct: false},
            {text: "Electric, Ground, and Poison", correct: false},
        ]
    },
    { question: "What type of Pokemon is Mewtwo?",
        answers: [
            {text: "Fighting", correct: false},
            {text: "Dark", correct: false},
            {text: "Psychic", correct: true},
            {text: "Fairy", correct: false},
        ]
    },
    { question: "What does Pikachu do with hard berries?",
        answers: [
            {text: "Throws them", correct: false},
            {text: "Eats them", correct: false},
            {text: "Gives them away", correct: false},
            {text: "Roasts them", correct: true},
        ]
    }    
]

// Click events
startButton.onclick= startGame;

nextButton.addEventListener("click", () =>  {
    currentQuestionIndex++;
    setNextQuestion();
})