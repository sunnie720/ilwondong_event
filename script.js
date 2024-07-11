// const questions = [
//     { question: "2 + 2는?", answer: "4" },
//     { question: "대한민국의 수도는?", answer: "서울" },
//     { question: "사과는 영어로?", answer: "apple" }
// ];

// let currentQuestionIndex = 0;
// let correctAnswers = 0;

// const startButton = document.getElementById('start-button');
// const questionContainer = document.getElementById('question-container');
// const questionElement = document.getElementById('question');
// const answerInput = document.getElementById('answer');
// const submitButton = document.getElementById('submit-button');
// const resultContainer = document.getElementById('result');

// startButton.addEventListener('click', startQuiz);
// submitButton.addEventListener('click', submitAnswer);

// function startQuiz() {
//     startButton.style.display = 'none';
//     questionContainer.style.display = 'block';
//     showNextQuestion();
// }

// function showNextQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         questionElement.textContent = questions[currentQuestionIndex].question;
//         answerInput.value = '';
//     } else {
//         showResult();
//     }
// }

// function submitAnswer() {
//     const userAnswer = answerInput.value.trim();
//     if (userAnswer === questions[currentQuestionIndex].answer) {
//         correctAnswers++;
//     }
//     currentQuestionIndex++;
//     showNextQuestion();
// }

// function showResult() {
//     questionContainer.style.display = 'none';
//     if (correctAnswers === questions.length) {
//         resultContainer.style.display = 'block';
//     } else {
//         alert("정답을 모두 맞추지 못했습니다. 다시 시도하세요.");
//         location.reload(); // 페이지를 새로고침하여 다시 시도할 수 있게 함
//     }
// }



// const questions = [
//     { 
//         question: "2 + 2는?", 
//         answers: ["3", "4", "5", "6"], 
//         correct: "4" 
//     },
//     { 
//         question: "대한민국의 수도는?", 
//         answers: ["부산", "서울", "대구", "인천"], 
//         correct: "서울" 
//     },
//     { 
//         question: "사과는 영어로?", 
//         answers: ["banana", "grape", "apple", "orange"], 
//         correct: "apple" 
//     }
// ];

// let currentQuestionIndex = 0;
// let correctAnswers = 0;

// const startButton = document.getElementById('start-button');
// const questionContainer = document.getElementById('question-container');
// const questionElement = document.getElementById('question');
// const answerButtons = document.querySelectorAll('.answer-button');
// const resultContainer = document.getElementById('result');

// startButton.addEventListener('click', startQuiz);
// answerButtons.forEach(button => button.addEventListener('click', submitAnswer));

// function startQuiz() {
//     startButton.style.display = 'none';
//     questionContainer.style.display = 'block';
//     showNextQuestion();
// }

// function showNextQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const currentQuestion = questions[currentQuestionIndex];
//         questionElement.textContent = currentQuestion.question;
//         answerButtons.forEach((button, index) => {
//             button.textContent = currentQuestion.answers[index];
//         });
//     } else {
//         showResult();
//     }
// }

// function submitAnswer(event) {
//     const userAnswer = event.target.textContent;
//     if (userAnswer === questions[currentQuestionIndex].correct) {
//         correctAnswers++;
//     }
//     currentQuestionIndex++;
//     showNextQuestion();
// }

// function showResult() {
//     questionContainer.style.display = 'none';
//     if (correctAnswers === questions.length) {
//         resultContainer.style.display = 'block';
//     } else {
//         alert("정답을 모두 맞추지 못했습니다. 다시 시도하세요.");
//         location.reload(); // 페이지를 새로고침하여 다시 시도할 수 있게 함
//     }
// }


// const questions = [
//     { 
//         question: "2 + 2는?", 
//         answers: ["3", "4", "5", "6"], 
//         correct: "4" 
//     },
//     { 
//         question: "대한민국의 수도는?", 
//         answers: ["부산", "서울", "대구", "인천"], 
//         correct: "서울" 
//     },
//     { 
//         question: "사과는 영어로?", 
//         answers: ["banana", "grape", "apple", "orange"], 
//         correct: "apple" 
//     }
// ];

// let currentQuestionIndex = 0;
// let correctAnswers = 0;

// const startButton = document.getElementById('start-button');
// const questionContainer = document.getElementById('question-container');
// const questionElement = document.getElementById('question');
// const answerButtons = document.querySelectorAll('.answer-button');
// const feedback = document.getElementById('feedback');
// const resultContainer = document.getElementById('result');

// startButton.addEventListener('click', startQuiz);
// answerButtons.forEach(button => button.addEventListener('click', submitAnswer));

// function startQuiz() {
//     startButton.style.display = 'none';
//     questionContainer.style.display = 'block';
//     showNextQuestion();
// }

// function showNextQuestion() {
//     feedback.style.display = 'none';  // 피드백 문구 숨기기
//     if (currentQuestionIndex < questions.length) {
//         const currentQuestion = questions[currentQuestionIndex];
//         questionElement.textContent = currentQuestion.question;
//         answerButtons.forEach((button, index) => {
//             button.textContent = currentQuestion.answers[index];
//         });
//     } else {
//         showResult();
//     }
// }

// function submitAnswer(event) {
//     const userAnswer = event.target.textContent;
//     if (userAnswer === questions[currentQuestionIndex].correct) {
//         correctAnswers++;
//         currentQuestionIndex++;
//         showNextQuestion();
//     } else {
//         feedback.style.display = 'block';
//     }
// }

// function showResult() {
//     questionContainer.style.display = 'none';
//     if (correctAnswers === questions.length) {
//         resultContainer.style.display = 'block';
//     } else {
//         alert("정답을 모두 맞추지 못했습니다. 다시 시도하세요.");
//         location.reload(); // 페이지를 새로고침하여 다시 시도할 수 있게 함
//     }
// }


const questions = [
    { 
        question: "2 + 2는?", 
        answers: ["3", "4", "5", "6"], 
        correct: "4" 
    },
    { 
        question: "대한민국의 수도는?", 
        answers: ["부산", "서울", "대구", "인천"], 
        correct: "서울" 
    },
    { 
        question: "사과는 영어로?", 
        answers: ["banana", "grape", "apple", "orange"], 
        correct: "apple" 
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');
const resultContainer = document.getElementById('result');
const popup = document.getElementById('popup');
const retryButton = document.getElementById('retry-button');

startButton.addEventListener('click', startQuiz);
answerButtons.forEach(button => button.addEventListener('click', submitAnswer));
retryButton.addEventListener('click', retryQuestion);

function startQuiz() {
    startButton.style.display = 'none';
    questionContainer.style.display = 'block';
    showNextQuestion();
}

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answerButtons.forEach((button, index) => {
            button.textContent = currentQuestion.answers[index];
            button.disabled = false; // 버튼을 다시 활성화
        });
    } else {
        showResult();
    }
}

function submitAnswer(event) {
    const userAnswer = event.target.textContent;
    if (userAnswer === questions[currentQuestionIndex].correct) {
        correctAnswers++;
        currentQuestionIndex++;
        showNextQuestion();
    } else {
        showPopup();
    }
}

function showPopup() {
    popup.style.display = 'flex';
}

function retryQuestion() {
    popup.style.display = 'none';
}

function showResult() {
    questionContainer.style.display = 'none';
    if (correctAnswers === questions.length) {
        resultContainer.style.display = 'block';
    } else {
        alert("정답을 모두 맞추지 못했습니다. 다시 시도하세요.");
        location.reload(); // 페이지를 새로고침하여 다시 시도할 수 있게 함
    }
}
