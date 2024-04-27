$("#efecto").hover(function(){
    $("#efecto").slideToggle();         
});



const questions = [

    { question: "Pregunta 1: ¿Que animales son Aves?", answers: ["loro", "tucan"] },
    { question: "Pregunta 2: Selecciona el animamal domestico:", answers: ["Perro"] },
    { question: "Pregunta 3: ¿Cuantos lados tiene un triangulo?", answer: 3 }
];

let currentQuestion = 0;
let correctAnswers = 0;

function nextQuestion() {
    const currentContainer = document.getElementById('question-container');
    const answerContainer = document.getElementById('answer-container');
    const numberContainer = document.getElementById('number-container');

/* seccion check box */
    if (currentQuestion === 0) {
        const redCheckbox = document.getElementById('Checkboxloro');
        const blueCheckbox = document.getElementById('Checkboxtucan');
        const yellowCheckbox = document.getElementById('Checkboxlagarto');
     if (redCheckbox.checked && blueCheckbox.checked && !yellowCheckbox.checked) {
        correctAnswers++;
}} 
/* ------------------- */

/* Seccion lista */
else if (currentQuestion === 1) {
        const animalSelect = document.getElementById('animalSelect');
        const selectedAnimal = animalSelect.value;
        if (selectedAnimal === 'Perro') {
            correctAnswers++;
}}
/* ------------------- */

    currentQuestion++;

if (currentQuestion < questions.length) {
        currentContainer.style.display = 'none';

if (currentQuestion === 1) {
        answerContainer.style.display = 'block';} 
    else if (currentQuestion === 2) {
        answerContainer.style.display = 'none';
        numberContainer.style.display = 'block';}
        
        document.getElementById('question').innerText = questions[currentQuestion].question;} 

/* Seccion dato numerico */
    else {
        const numberInput = document.getElementById('numberInput');
        const enteredNumber = parseInt(numberInput.value);

        if (!isNaN(enteredNumber) && enteredNumber === questions[2].answer) {
            correctAnswers++;
        }

        displayResult();
    }
}
/* ------------------- */

/* Seccion resultado */
function displayResult() {
    const resultContainer = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const correctAnswersDisplay = document.getElementById('correct-answers');

    resultContainer.style.display = 'block';
    scoreDisplay.innerText = `Nota obtenida: ${correctAnswers}/${questions.length}`;

    let correctAnswersString = 'Respuestas correctas:';
    for (let i = 0; i < questions.length; i++) {
        if (Array.isArray(questions[i].answers)) {
            correctAnswersString += `\nPregunta ${i + 1}: ${questions[i].answers.join(', ')}`;
        } else {
            correctAnswersString += `\nPregunta ${i + 1}: ${questions[i].answer}`;
        }
    }
    correctAnswersDisplay.innerText = correctAnswersString;
}
/* ------------------- */

/* Seccion verificacion de respuestas */
function checkAnswer() {
    const numberInput = document.getElementById('numberInput');
    const enteredValue = numberInput.value;

    if (!isNaN(enteredValue) && enteredValue !== '' && Number.isInteger(parseFloat(enteredValue))) {
        nextQuestion();
    } else {
        alert('Por favor, ingresa un valor valido.');
}}
/* ------------------- */


/* Seccion Reiniciar */
function restart() {
    window.open("../index.html")
}
/* ------------------- */