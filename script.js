const questions =
    [
        {
            "question": "What does CSS stand for?",
            "answers": [
                { "text": "Computer Style Sheets", "correct": false },
                { "text": "Cascading Style Sheets", "correct": true },
                { "text": "Creative Style Systems", "correct": false },
                { "text": "Colorful Style Sheets", "correct": false }
            ]
        },
        {
            "question": "Which HTML element is used to define the title of a document?",
            "answers": [
                { "text": "<header>", "correct": false },
                { "text": "<title>", "correct": true },
                { "text": "<meta>", "correct": false },
                { "text": "<h1>", "correct": false }
            ]
        },
        {
            "question": "Which property is used to change the font of an element in CSS?",
            "answers": [
                { "text": "font-weight", "correct": false },
                { "text": "font-style", "correct": false },
                { "text": "font-family", "correct": true },
                { "text": "text-font", "correct": false }
            ]
        },
        {
            "question": "What does JavaScript primarily allow you to do on a web page?",
            "answers": [
                { "text": "Style the page", "correct": false },
                { "text": "Create interactive elements", "correct": true },
                { "text": "Structure the content", "correct": false },
                { "text": "Serve files", "correct": false }
            ]
        },
        {
            "question": "Which HTML tag is used for creating an unordered list?",
            "answers": [
                { "text": "<ol>", "correct": false },
                { "text": "<ul>", "correct": true },
                { "text": "<list>", "correct": false },
                { "text": "<li>", "correct": false }
            ]
        },
        {
            "question": "What is the correct syntax for referring to an external script called 'script.js'?",
            "answers": [
                { "text": "<script src='script.js'>", "correct": true },
                { "text": "<script href='script.js'>", "correct": false },
                { "text": "<script file='script.js'>", "correct": false },
                { "text": "<script link='script.js'>", "correct": false }
            ]
        },
        {
            "question": "Which CSS property is used to change the background color of an element?",
            "answers": [
                { "text": "color", "correct": false },
                { "text": "bg-color", "correct": false },
                { "text": "background-color", "correct": true },
                { "text": "background", "correct": false }
            ]
        },
        {
            "question": "In JavaScript, how do you declare a variable?",
            "answers": [
                { "text": "var variableName", "correct": true },
                { "text": "variable variableName", "correct": false },
                { "text": "declare variableName", "correct": false },
                { "text": "let variableName", "correct": false }
            ]
        },
        {
            "question": "Which HTML attribute is used to specify an inline CSS style?",
            "answers": [
                { "text": "style", "correct": true },
                { "text": "class", "correct": false },
                { "text": "css", "correct": false },
                { "text": "font", "correct": false }
            ]
        },
        {
            "question": "What is the purpose of the <meta> tag in HTML?",
            "answers": [
                { "text": "To define metadata about an HTML document", "correct": true },
                { "text": "To create links", "correct": false },
                { "text": "To insert images", "correct": false },
                { "text": "To create lists", "correct": false }
            ]
        },
        {
            "question": "Which CSS selector is used to select an element with a specific ID?",
            "answers": [
                { "text": ".classname", "correct": false },
                { "text": "#idname", "correct": true },
                { "text": "*elementname", "correct": false },
                { "text": "[attribute=value]", "correct": false }
            ]
        },
        {
            "question": "Which JavaScript method is used to write output to the console?",
            "answers": [
                { "text": "log.console()", "correct": false },
                { "text": "console.log()", "correct": true },
                { "text": "print.console()", "correct": false },
                { "text": "output.console()", "correct": false }
            ]
        },
        {
            "question": "What is the purpose of the <form> tag in HTML?",
            "answers": [
                { "text": "To create a link", "correct": false },
                { "text": "To collect user input", "correct": true },
                { "text": "To define a table", "correct": false },
                { "text": "To include a script", "correct": false }
            ]
        },
        {
            "question": "Which CSS property controls the text size?",
            "answers": [
                { "text": "font-size", "correct": true },
                { "text": "text-size", "correct": false },
                { "text": "font-style", "correct": false },
                { "text": "text-style", "correct": false }
            ]
        },
        {
            "question": "What is the correct way to create a function in JavaScript?",
            "answers": [
                { "text": "function myFunction()", "correct": true },
                { "text": "create myFunction()", "correct": false },
                { "text": "define myFunction()", "correct": false },
                { "text": "func myFunction()", "correct": false }
            ]
        }
    ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next"
    showQuestion()
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState()
    questionElement.textContent = `You scored ${score} out of ${questions.length}`
    nextButton.textContent = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz()
    }
})

startQuiz()