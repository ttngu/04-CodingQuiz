var startButton = document.getElementById("start-btn")
var questionContainerElement= document.getElementById("question-container")
// why doesn't this work??, it will not console log says "TypeError"
startButton.addEventListener('click', startGame())

function startGame(){
    console.log('Started')
    startButton.classList.add("hide")
}

function setNextQuestion() {

}

function selectAnswer() {

}