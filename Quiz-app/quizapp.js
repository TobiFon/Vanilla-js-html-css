const questions = [
  {
    question: 'What is the largest animal in the world?',
    answers: [
      { text: 'Sharks', correct: false },
      { text: 'Blue whale', correct: true },
      { text: 'Elephant', correct: false },
      { text: 'Giraffe', correct: false },

]
  },
  {
  question: 'Which is the smallest continent in the world?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Africa', correct: false },
      { text: 'Australia', correct: true },
      { text: 'America', correct: false },
    ]
  },
  {
    question: 'Which is the largest deseert in the world?',
    answers: [
      { text: 'Kalahari', correct: false },
      { text: 'Gobi', correct: false },
      { text: 'Sahara', correct: false },
      { text: 'Antartica', correct: true },
    ]
  },
  {
  question: "Which of Tobi's little siblings is his favourite?",
    answers: [
      { text: 'Jersey', correct: false },
      { text: 'Morelle', correct: true },
      { text: 'Terah', correct: false},
      { text: 'None', correct: false},
    ]
  }
]

const questionElement = document.querySelector('.question');
const answerElement = document.querySelector('.answer-btn');
const nextElement = document.querySelector('.button-next');

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextElement.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '.' + currentQuestion.question

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerElement.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}
function resetState() {
  nextElement.style.display = 'none';
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);  
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (!isCorrect) {
      selectedBtn.classList.add('incorrect'); 
  } else {
    score++;
  }

  Array.from(answerElement.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextElement.style.display = 'block';
}

function showscore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} our of ${questions.length}!`;
  nextElement.innerHTML = 'Play Again';
  nextElement.style.display = 'block';
}
function handleNextElement() {
  currentQuestionIndex++
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

nextElement.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextElement();
  } else {
    startQuiz()
  }
})


startQuiz();