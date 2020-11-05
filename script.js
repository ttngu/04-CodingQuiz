var startButton = document.getElementById("start-btn");
// var questionContainerEl= document.getElementById("question-container");

var shuffledQuestions, currentQuestionIndex;

// why doesn't this work??, it will not console log says "TypeError"
startButton.addEventListener('click', startGame);

function startGame(){
    console.log("Started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {

}

function selectAnswer() {

}

var questions = [
    { question: "What Pokemon does Pikachu evolve into?",
        answers: [
            {text: "Raichu", correct: true},
            {text: "Electivire", correct: false},
            {text: "Meowstic", correct: false},
            {text: "Jolteon", correct: false},
        ]
    }
    
]