// Questions Array
const questions = [
    {
        question: "Where is tree",
        options: [
            { image: "tree.jpg", isCorrect: true },
            { image: "notree.jpeg", isCorrect: false }
        ]
    },
    {
        question: "Where is sugar?",
        options: [
            { image: "nosughar.jpeg", isCorrect: false },
            { image: "sugar.jpg", isCorrect: true }
        ]
    },
    {
        question: "Where is honey?",
        options: [
            { image: "honey.jpg", isCorrect: true },
            { image: "nohoney.jpeg", isCorrect: false }
        ]
    },
    {
        question: "Which is the moon?",
        options: [
            { image: "moon.jpeg", isCorrect: false },
            { image: "nomoon.jpg", isCorrect: false }
        ]
    }
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-button");

// Function to render the current question
function renderQuestion() {
    // Clear previous content
    quizContainer.innerHTML = '';
    nextButton.disabled = true;

    const questionData = questions[currentQuestionIndex];
    const questionElem = document.createElement("div");
    questionElem.classList.add("question");
    
    const questionText = document.createElement("h3");
    questionText.textContent = questionData.question;
    
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");

    questionData.options.forEach((option, optionIndex) => {
        const optionElem = document.createElement("div");
        optionElem.classList.add("option");
        
        const optionImage = document.createElement("img");
        optionImage.src = option.image;
        optionImage.alt = `Option ${optionIndex + 1}`;

        const feedback = document.createElement("span");
        feedback.classList.add("feedback");
        feedback.classList.add(option.isCorrect ? "correct-feedback" : "incorrect-feedback");
        feedback.textContent = option.isCorrect ? "✔️" : "❌";

        optionElem.appendChild(optionImage);
        optionElem.appendChild(feedback);

        optionElem.addEventListener("click", () => selectOption(optionElem, option.isCorrect));
        optionsContainer.appendChild(optionElem);
    });

    questionElem.appendChild(questionText);
    questionElem.appendChild(optionsContainer);
    quizContainer.appendChild(questionElem);
}

// Function to handle option selection
function selectOption(optionElem, isCorrect) {
    const options = quizContainer.querySelectorAll(".option");

    options.forEach((option) => {
        option.classList.remove("correct", "incorrect");
    });

    optionElem.classList.add(isCorrect ? "correct" : "incorrect");
    nextButton.disabled = false; // Enable "Next" button after selection
}

// Function to go to the next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

// Function to display results at the end
function showResults() {
    // Clear the quiz container
    quizContainer.innerHTML = `
        <div class="end-screen">
            <span class="emoji">👉</span>
            <p class="end-text">You</p>
        </div>
    `;
    // Hide the "Next" button
    nextButton.style.display = "none";
}


// Initialize the quiz
renderQuestion();
