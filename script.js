const parent = document.getElementById("questcontainer")
const header = document.querySelectorAll(".header");
const question = document.getElementById("question");
const welcomeMsg = document.getElementById("welcome");
const testContainer = document.querySelector(".container");
const options = document.getElementById("anscont");
const nextBtn = document.getElementById("nextbtn");
const viewResult = document.getElementById("view");
const footer = document.getElementById("ft");
const scoreProgress = document.getElementById("score");
const questionProgress = document.getElementById("progress");
const startBtn = document.getElementById("startbtn");
const answer = document.querySelector(".option");
const endScreen = document.getElementById("endscreen");
const score = document.getElementById("scr")
const percentage = document.getElementById("percentage");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart")

const questions = [
    {
        question: "What is the ruling when Nūn Sākinah is followed by one of the throat letters (ء هـ ع ح غ خ)?",
        choices: [
            "Ikhfā’ (Hiding)",
            "Iqlāb (Conversion)",
            "Izḥār Ḥalqī (Clear throat pronunciation)",
            "Idghām (Merging)"
        ],
        answer: "Izḥār Ḥalqī (Clear throat pronunciation)"
    },
    {
        question: "How many Idghām letters are there?",
        choices: [
            "4",
            "5",
            "6",
            "7"
        ],
        answer: "6"
    },
    {
        question: "Which of the following letters is a letter of Isti‘lā’ (elevation/heaviness)?",
        choices: [
            "س",
            "ص",
            "م",
            "ل"
        ],
        answer: "ص"
    },
    {
        question: "What is the ruling when a Sākinah Mīm is followed by the letter Bā’?",
        choices: [
            "Iẓhār Shafawī",
            "Idghām Shafawī",
            "Ikhfā’ Shafawī",
            "Iqlāb"
        ],
        answer: "Ikhfā’ Shafawī"
    },
    {
        question: "What is the ruling when a Sākinah Mīm is followed by a moving Mīm?",
        choices: [
            "Iẓhār Shafawī",
            "Idghām Shafawī with Ghunnah",
            "Ikhfā’",
            "Iqlāb"
        ],
        answer: "Idghām Shafawī with Ghunnah"
    },
    {
        question: "How many throat letters (Izḥār Ḥalqī letters) are there?",
        choices: [
            "4",
            "5",
            "6",
            "7"
        ],
        answer: "6"
    },
    {
        question: "Which of the following letters is NOT always heavy (Tafkhīm)?",
        choices: [
            "ق",
            "ط",
            "ظ",
            "ب"
        ],
        answer: "ب"
    },
    {
        question: "When is a Sākinah Rā’ pronounced heavy?",
        choices: [
            "If preceded by a kasrah",
            "If preceded by a fatḥah or ḍammah",
            "If it comes only at the end of a word",
            "If followed by a Madd letter"
        ],
        answer: "If preceded by a fatḥah or ḍammah"
    },
    {
        question: "What is the length of Ghunnah in Idghām with Ghunnah?",
        choices: [
            "One count",
            "Two counts",
            "Three counts",
            "Four counts"
        ],
        answer: "Two counts"
    },
    {
        question: "Which Madd must be stretched six counts?",
        choices: [
            "Madd Aṣlī (Natural Madd)",
            "Madd Munfaṣil (Separated Madd)",
            "Madd Muttasil (Connected Madd)",
            "Madd Lāzim (Necessary Madd)"
        ],
        answer: "Madd Lāzim (Necessary Madd)"
    },
    {
        question: "What is the ruling when stopping on a word ending with an Alif Madd?",
        choices: [
            "No Madd",
            "Natural Madd",
            "Necessary Madd",
            "Idghām"
        ],
        answer: "Natural Madd"
    },
    {
        question: "Which of the following letters produces major Qalqalah when stopping?",
        choices: [
            "ج",
            "ن",
            "م",
            "و"
        ],
        answer: "ج"
    },
    {
        question: "What is the ruling if Tanwīn is followed by the letter Wāw?",
        choices: [
            "Idghām with Ghunnah",
            "Idghām without Ghunnah",
            "Izḥār",
            "Iqlāb"
        ],
        answer: "Idghām with Ghunnah"
    },
    {
        question: "What is the ruling if Tanwīn is followed by the letter Rā’?",
        choices: [
            "Izḥār",
            "Idghām without Ghunnah",
            "Ikhfā’",
            "Iqlāb"
        ],
        answer: "Idghām without Ghunnah"
    },
    {
        question: "How many letters of Ikhfā’ Ḥaqīqī are there?",
        choices: [
            "10",
            "12",
            "15",
            "18"
        ],
        answer: "15"
    },
    {
        question: "Which of the following letters is NOT a letter of Ikhfā’?",
        choices: [
            "ت",
            "ث",
            "ح",
            "ك"
        ],
        answer: "ح"
    },
    {
        question: "What is Madd ‘Āriḍ li-s-Sukūn?",
        choices: [
            "Madd caused by a hamzah",
            "Madd caused by a temporary sukoon when stopping",
            "Natural Madd only",
            "Original necessary Madd"
        ],
        answer: "Madd caused by a temporary sukoon when stopping"
    },
    {
        question: "How long can Madd ‘Āriḍ li-s-Sukūn be stretched?",
        choices: [
            "Two counts only",
            "2, 4, or 6 counts",
            "Six only",
            "Four only"
        ],
        answer: "2, 4, or 6 counts"
    },
    {
        question: "What is the ruling if Nūn Sākinah is followed by the letter Kāf?",
        choices: [
            "Ikhfā’",
            "Izḥār",
            "Idghām",
            "Iqlāb"
        ],
        answer: "Ikhfā’"
    },
    {
        question: "Which of the following is a letter of Shiddah (strength)?",
        choices: [
            "ف",
            "ج",
            "س",
            "هـ"
        ],
        answer: "ج"
    },
    {
        question: "How many letters of Iqlāb are there?",
        choices: [
            "6",
            "7",
            "1",
            "9"
        ],
        answer: "1"
    },
    {
        question: "What is the ruling if a Sākinah Mīm is followed by the letter Fā’?",
        choices: [
            "Iẓhār Shafawī",
            "Idghām",
            "Ikhfā’ Shafawī",
            "Iqlāb"
        ],
        answer: "Iẓhār Shafawī"
    },
    {
        question: "What is minor Qalqalah?",
        choices: [
            "Qalqalah when stopping",
            "Qalqalah in the middle of a word",
            "Qalqalah during Madd",
            "Qalqalah with Ghunnah"
        ],
        answer: "Qalqalah in the middle of a word"
    },
    {
        question: "Which of the following is a letter of Istifāl (lightness)?",
        choices: [
            "ق",
            "ص",
            "ك",
            "ط"
        ],
        answer: "ك"
    },
    {
        question: "What is the ruling when a Madd letter and a hamzah occur in the same word?",
        choices: [
            "Madd Munfaṣil",
            "Madd Muttasil",
            "Madd ‘Āriḍ",
            "Natural Madd"
        ],
        answer: "Madd Muttasil"
    },
    {
        question: "What is the ruling when a Madd letter and a hamzah occur in two separate words?",
        choices: [
            "Madd Muttasil",
            "Madd Munfaṣil",
            "Madd Lāzim",
            "No Madd"
        ],
        answer: "Madd Munfaṣil"
    },
    {
        question: "Which of the following is a letter of Iṭbāq (complete heaviness)?",
        choices: [
            "س",
            "ز",
            "ط",
            "ل"
        ],
        answer: "ط"
    },
    {
        question: "What is the ruling of a doubled (mushaddad) Nūn?",
        choices: [
            "Izḥār",
            "Strong Ghunnah for two counts",
            "Iqlāb",
            "Madd"
        ],
        answer: "Strong Ghunnah for two counts"
    },
    {
        question: "What is the ruling of the Lām in the word 'Allah' if preceded by a fatḥah or ḍammah?",
        choices: [
            "Light pronunciation",
            "Heavy pronunciation",
            "Idghām",
            "Ikhfā’"
        ],
        answer: "Heavy pronunciation"
    },
    {
        question: "What is the ruling of the Lām in the word 'Allah' if preceded by a kasrah?",
        choices: [
            "Heavy pronunciation",
            "Light pronunciation",
            "Iqlāb",
            "Madd Lāzim"
        ],
        answer: "Light pronunciation"
    }
];



let currentQuestion = 1;
let index = 0;
let totalQuestion = questions.length;
let currentScore = 0;

welcomeMsg.classList.add("fade-in");


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {

    if (index === 0) {
        shuffleArray(questions);
        questions.forEach(q => shuffleArray(q.choices));
    }
    
    parent.classList.add("fade-in");
    welcomeMsg.classList.add("hide");
    viewResult.classList.add("hide")
    startBtn.classList.add("hide");
    testContainer.classList.remove("hide");
    nextBtn.classList.remove("hide");
    footer.classList.remove("hide");
    


    question.innerHTML = questions[index].question;
    options.innerHTML = "";
    questions[index].choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerHTML = choice;
        options.appendChild(button)
        button.value = choice;

        nextBtn.disabled = true;
        button.addEventListener("click", () => {
            Array.from(options.children).forEach(btn => btn.disabled = true);
            if (button.value === questions[index].answer) {
                new Audio("correct.mp3").play();
                button.classList.add("blink");
                button.classList.add("green")
                button.innerHTML = `${button.value} <span>&#10004;</span> `;
                currentScore++
                scoreProgress.innerHTML = `Score: ${currentScore}/${totalQuestion}`
            } else if (button.value !== questions[index].answer) {
                new Audio("wrong.mp3").play();
                button.classList.add("shake");
                button.classList.add("red")
                button.innerHTML = `${button.value}  <span>&#10008;</span> `;
                scoreProgress.innerHTML = `Score: ${currentScore}/${totalQuestion}`
                Array.from(options.children).forEach(btn => {
                    if (btn.value === questions[index].answer) {
                        btn.classList.add("green");
                        btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
                    }
                })
            }
            nextBtn.disabled = false;
            if (currentQuestion === totalQuestion) {
                viewResult.classList.remove("hide")
                nextBtn.classList.add("hide")
            } else {
                nextBtn.innerHTML = "Next Question"
            }
        })
    })


    questionProgress.innerHTML = `Question: ${currentQuestion} of ${totalQuestion}`;
    scoreProgress.innerHTML = `Score: ${currentScore}/${totalQuestion}`;


}



function displayResult() {

    if (currentQuestion < totalQuestion) {
        index++;
        currentQuestion++
        startQuiz();

    } else {
        header.innerHTML = "Quiz Completed"
        testContainer.classList.add("hide");
        nextBtn.classList.add("hide")
        footer.classList.add("hide")
        endScreen.classList.remove("hide")
        endScreen.classList.add("fade-in");
        score.innerHTML = `Your Score: <strong>${currentScore}/${totalQuestion}</strong>`;
        const percent = ((currentScore / totalQuestion) * 100).toFixed(1);
        percentage.innerHTML = `You Scored <strong>${percent}%</strong> of the Total Questions.`

        if (percent < 50) {
            result.innerHTML = "You <strong>failed</strong>, try harder next time!😞"
        } else {
            result.innerHTML = "<strong>Wow</strong>, You have done a great job!"
        }
    }
}




function restartGame() {
    currentQuestion = 1;
    index = 0;
    totalQuestion = questions.length;
    currentScore = 0;
    welcomeMsg.classList.add("fade-in");
    endScreen.classList.add("hide")
    welcomeMsg.classList.remove("hide");
    startBtn.classList.remove("hide");
}

startBtn.addEventListener("click", () => {
    startQuiz()
}

);
nextBtn.addEventListener("click", displayResult);
viewResult.addEventListener("click", displayResult)

restartBtn.addEventListener("click", restartGame);
