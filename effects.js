var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var flipcard = document.getElementsByClassName("flashcard");
for (var j = 0; j < flipcard.length; j++) {
    flipcard[j].addEventListener("click", function () {
        this.classList.toggle("flip");
    });
}



const quizData = [
    {
        question: "How many moons does Saturn have?",
        options: ["146", "1", "36", "0"],
        answer: "146"
    },
    {
        question: "What type of planet is Neptune?",
        options: ["Terrestrial", "Gas giant", "Ice giant", "N/A"],
        answer: "Ice giant"
    },
    {
        question: "Which planet tilts at 98 degrees?",
        options: ["Neptune", "Uranus", "Mars", "Venus"],
        answer: "Uranus"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which planet is the hottest",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Venus"
    }
];

let currentQuestion = 0;
let score = 0;
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const scoreEl = document.getElementById('score');
const restartBtn = document.querySelector('.restart-btn');

// Function to load the question
function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = ''; // Clear previous options
    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

// Check the answer
function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

// Start the timer


// End the quiz and show the results
function endQuiz() {
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = score;
    restartBtn.style.display = 'block';
}

// Restart the quiz
restartBtn.addEventListener('click', () => {
    // Reset variables
    currentQuestion = 0;
    score = 0;

    // Reset the display
    questionEl.style.display = 'block';
    optionsEl.style.display = 'flex'; // Ensure options are displayed correctly
    resultEl.style.display = 'none';
    restartBtn.style.display = 'none';

    // Load the first question
    loadQuestion();
});

// Initialize the quiz with the first question
loadQuestion();
