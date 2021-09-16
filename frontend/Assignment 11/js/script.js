//jshint esversion: 8

const data = [
    {
        label: "Question 1",
        question: "Who invented JavaScript?",
        options: {
            option1: "Douglas Crockford",
            option2: "Sheryl Sandberg",
            option3: "Brendan Eich",
        },
        answer: "option3",
    },
    {
        label: "Question 2",
        question: "Which one of these is a JavaScript package manager?",
        options: {
            option1: "Node.js",
            option2: "TypeScript",
            option3: "npm",
        },
        answer: "option3",
    },
    {
        label: "Question 3",
        question: "Which tool can you use to ensure code quality?",
        options: {
            option1: "Eslint",
            option2: "jQuery",
            option3: "RequireJs",
        },
        answer: "option1",
    },
    {
        label: "Question 4",
        question: "Which method to select to choose id?",
        options: {
            option1: "document.getElementbyClassName",
            option2: "document.getElementbyId",
            option3: "document.querySelector",
        },
        answer: "option2",
    },
];

let currentQuestion = 1;

const totalNoOfQuestions = data.length;

let choosedAnswer = {};

let evaluated = false;

const title = document.querySelector(".card-title");
const question = document.querySelector(".card-subtitle");
const options = document.querySelectorAll(".input-group-text span");

function updateQuestion(number) {
    console.log("updateing");
    title.textContent = data[number].label;
    question.textContent = data[number].question;
    options[0].textContent = data[number].options.option1;
    options[1].textContent = data[number].options.option2;
    options[2].textContent = data[number].options.option3;
    if (choosedAnswer[number + 1] === "option1") {
        document.querySelector(".option1 input").checked = true;
        document.querySelector(".option2 input").checked = false;
        document.querySelector(".option3 input").checked = false;
    } else if (choosedAnswer[number + 1] === "option2") {
        document.querySelector(".option1 input").checked = false;
        document.querySelector(".option2 input").checked = true;
        document.querySelector(".option3 input").checked = false;
    } else if (choosedAnswer[number + 1] === "option3") {
        document.querySelector(".option1 input").checked = false;
        document.querySelector(".option2 input").checked = false;
        document.querySelector(".option3 input").checked = true;
    }
}

function nextQuestion() {
    if (!evaluated) updateAnswer(currentQuestion);
    document.querySelector(".back-button").classList.remove("d-none");
    console.log("next");
    currentQuestion++;
    if (currentQuestion === totalNoOfQuestions) {
        document.querySelector(".next-button").textContent = "Submit";
        updateQuestion(currentQuestion - 1);
    } else if (currentQuestion > totalNoOfQuestions) {
        currentQuestion = totalNoOfQuestions;
        if (!evaluated) submit();
    } else {
        document.querySelector(".next-button").textContent = "Next Question";
        updateQuestion(currentQuestion - 1);
    }
    if (evaluated) {
        if (data[currentQuestion - 1].answer === choosedAnswer[currentQuestion]) {
            title.style.color = "green";
            options.forEach((item) => {
                item.style.color = "green";
            });
        } else {
            title.style.color = "red";
            options.forEach((item) => {
                item.style.color = "red";
            });
        }
    }
    if (evaluated && currentQuestion === 4) {
        document.querySelector(".next-button").style.display = "none";
    } else {
        document.querySelector(".next-button").style.display = "block";
    }
}

function prevQuestion() {
    document.querySelector(".next-button").style.display = "block";
    console.log("prev");
    currentQuestion--;
    if (currentQuestion === 1) {
        document.querySelector(".next-button").textContent = "Next Question";
        document.querySelector(".back-button").classList.add("d-none");
        updateQuestion(currentQuestion - 1);
    } else if (currentQuestion < 1) {
        document.querySelector(".next-button").textContent = "Next Question";
        document.querySelector(".back-button").classList.remove("d-none");
        currentQuestion = 1;
        updateQuestion(currentQuestion - 1);
    } else {
        document.querySelector(".next-button").textContent = "Next Question";
        document.querySelector(".back-button").classList.remove("d-none");
        updateQuestion(currentQuestion - 1);
    }
    if (evaluated) {
        if (data[currentQuestion - 1].answer === choosedAnswer[currentQuestion]) {
            title.style.color = "green";
            options.forEach((item) => {
                item.style.color = "green";
            });
        } else {
            title.style.color = "red";
            options.forEach((item) => {
                item.style.color = "red";
            });
        }
    }
}

prevQuestion();

function updateAnswer(number) {
    let checkbox = document.querySelector('input[type="radio"]:checked');
    choosedAnswer[number] = checkbox.value;
    console.log(choosedAnswer);
}

function submit() {
    evaluated = true;
    document.querySelector(".option1 input").disabled = true;
    document.querySelector(".option2 input").disabled = true;
    document.querySelector(".option3 input").disabled = true;
    nextQuestion();
}
