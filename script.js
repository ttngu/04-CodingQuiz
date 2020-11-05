var startButton = document.querySelector("start");
var nextButton = document.getElementById("next-btn");
var questionContainerEl= document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;
console.log(startButton)
// why doesn't this work??, it says "TypeError"
startButton.addEventListener("click", startGame );
nextButton.addEventListener("click", () =>  {
    currentQuestionIndex++;
    setNextQuestion();
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            } else if (--timer == 0){
            scoretotal = 0;
            alert("Out of time!");
            tryagain();
        }

    }, 1000);
}

function startGame(){
    console.log("Started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
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

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}

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