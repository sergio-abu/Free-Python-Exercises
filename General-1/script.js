const quizData = [
    {
        question: `What is the output of the following code snippet?
        print(ord('c')) `,

        a: `The output is 'd'`,
        b: `An error will occur`,
        c: `The output will be a string`,
        d: `The output is a Unicode code point and will be a integer`,
        correct: "d",
    },
    {
        question: `What is the output of the following snippet of code?

        1: a = "ab cd"
        2: print('*'.join(a.split()))`,

        a: `ab*cd`,
        b: `An error occurs`,
        c: `a*b c*d`,
        d: `*ab*cd*`,
        correct: "a",
    },
    {
        question: `Which of the following variable names is illegal?`,

        a: `in`,
        b: `In`,
        c: `IN`,
        d: `in_`,
        correct: "a",
    },
    {
        question: `What will be the output of the following code snippet?
        
            1: x = 1
            2: y = 2
            3: z = x
            4: x = y
            5: y = z
            6: print(x, y)`,
        a: `1 1`,
        b: `1 2`,
        c: `2 1`,
        d: `2 2`,
        correct: "c",
    },
    {
        question: `The digraph written as #! is used to:`,
        a: `tell a Unix or Unix-like OS how to execute the contents 
            of a Python file`,
        b: `make a particular module entity a private one`,
        c: `create a docstring`,
        d: `tell an MS Windows OS how execute the contents
            of a Python file`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?
        
        1: x = '\''
        2: print(len(x))`,
        a: `0`,
        b: `2`,
        c: `1`,
        d: `\\'`,
        correct: "c",
    },
    {
        question: `Which of the following is a valid string?`,
        a: `'Hi "friend"'`,
        b: `'Hi 'friend''`,
        c: `''Bye""'`,
        d: `'Bye"`,
        correct: "a",
    },
    {
        question: `Which of the following is True about bytearrays?`,
        a: `bytearrays are immutable`,
        b: `bytearrays can store characters`,
        c: `The readinto() method can be used to read bytes
            from a file into an existing bytearray`,
        d: `bytearrays cannont be written to files`,
        correct: "c",
    },
    {
        question: `What is the output of the following snippet of code:

        1: a = "television"
        2: print(a.find('Vision'))`,
        a: `-1`,
        b: `0`,
        c: `5`,
        d: `4`,
        correct: "a",
    },
    {
        question: `Which of the following evaluates to True?`,
        a: `'abc' < 'abcd'`,
        b: `'abc' > 'abcd'`,
        c: `'Abc' > 'abc'`,
        d: `'abc' == 'Abc'`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code?

        1: a = "abcdef"
        2: b = a[-3:-1]
        3: print(b)`,

        a: `def`,
        b: `de`,
        c: `cde`,
        d: `abcdef`,
        correct: "b",
    },
    {
        question: `UTF-8 is ...`,
        a: `a Python version`,
        b: `a Python character styling`,
        c: `the 8th character style from the Unique Typing Format`,
        d: `an encoding form of the Unicode Standard`,
        correct: "c",
    },
    {
        question: `Which of the following variable names is illegal?`,
        a: `TRUE`,
        b: `true`,
        c: `true`,
        d: `True`,
        correct: "d",
    },
    {
        question: `A code point is:`,

        a: `A number which makes up a character`,
        b: `The location of each reserver word in a Python document`,
        c: `A method used for mapping Python code to the HTML DOM`,
        d: `Another name for an API`,
        correct: "a",
    },
    
    {
        question: `What is the expected output of the following code?

        1: x = """
        2: """
        3: print(len(x))`,
        
        a: `1`,
        b: `2`,
        c: `None`,
        d: `0`,
        correct: "d",
    },
    
    {
        question: `How many stars will the following snippet print to the monitor?

        1: data = [[x for x in range(y)] for y in range(3)]
        2:  
        3: for d in data:
        4:     if len(d) < 2:
        5:         print('*') `,
        a: `two`,
        b: `one`,
        c: `three`,
        d: `zero`,
        correct: "a",
    },
    
    {
        question: `What is the output of the following snippet of code?

        1: def A(a):
        2:     b = a**3
        3:     def B():
        4:         return b+2
        5:     return B
        6:  
        7: x = A(2)
        8: print(x())`,
        a: `10`,
        b: `2`,
        c: `8`,
        d: `An error occurs`,
        correct: "a",
    },
    
    {
        question: `Which of the following statements are false?`,
        a: `The variable named __name__ is a string containing the module name`,
        b: `The extension .pby marks files containing
            Python semi-compiled byte-code`,
        c: `A source file named __init__.py is used to mark a directory/folder as 
            containing a Python package`,
        d: `The variable named __name__ is a string`,
        correct: "b",
    },
    
    {
        question: `The pyc file contains ...`,
        a: `compiled Python bytecode`,
        b: `a Python compiler`,
        c: `a Python interpreter`,
        d: `Python source code`,
        correct: "a",
    },

    {
        question: `What is the default value of encoding in the string function encode()?`,

        a: `utf-16`,
        b: `ascii`,
        c: `qwerty`,
        d: `utf-8`,
        correct: "d",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
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
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})