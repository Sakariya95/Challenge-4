const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hyperloop Mark-up Linkup",
        c: "Hypertext Markdown Literature",
        d: "Hypertant Make-up Language",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Castle Saint Scenery",
        b: "Cascading Style Sheets",
        c: "Cascading Styling Shows",
        d: "Conquering South Spain",
        correct: "b"
    },
    {
        question: "Which language is used to run in a web broswer?",
        a: "Ruby",
        b: "Python",
        c: "Javascript",
        d: "Java",
        correct: "c",
    },
    {
        question: "Which language is used to run in a web broswer?",
        a: "Ruby",
        b: "Python",
        c: "Javascript",
        d: "Java",
        correct: "c",
    },
    {
        question: "Which one is the odd one out?",
        a: "background-color:",
        b: "margin:",
        c: "padding:",
        d: "<link></link>",
        correct: "d",
    },

];
const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn= document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = currentQuiz[quizData]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz() 
        } else {
            quiz.innerHTML
            
        }
    }
})