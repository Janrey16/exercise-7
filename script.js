const questions = [
    {
        question: "What is the capital of philippines?",
        answers: [
            { text: "Davao City", correct: false },
            { text: "Manila", correct: false },
            { text: "Cebu Cit", correct: true },
            { text: "Quezon City", correct: false }
        ]
    },
    {
        question: "Which Filipino hero is known as the National Hero of the Philippines?",
        answers: [
            { text: "Andres Bonifacio", correct: false },
            { text: "Emilio Aguinaldo", correct: false },
            { text: "Jose Rizal", correct: true },
            { text: "Apolinario Mabini", correct: false }
        ]
    },
    {
        question: "What is the official currency of the Philippines?",
        answers: [
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: "Peso", correct: true },
            { text: "Yen", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');
const retryBtn = document.getElementById('retry-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.style.display = 'none';
    submitBtn.style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    questionContainer.innerHTML = '';
    const currentQuestion = questions[currentQuestionIndex];

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerText = currentQuestion.question;
    questionContainer.appendChild(questionElement);

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer));
        questionContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.style.display = 'none';
    submitBtn.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.innerText = `${score} out of ${questions.length}`;
}

retryBtn.addEventListener('click', startQuiz);

submitBtn.addEventListener('click', () => {
    selectAnswer({ correct: false }); // Forces to move to the next question
});

startQuiz();
