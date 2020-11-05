var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl= document.getElementById("question-container");
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;

// why doesn't this work??, it will not console log says "TypeError"
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++,
    setNextQuestion()
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

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else { 
        element.classList.add("wrong")
       }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
    
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