const quizData = [
    {
        question: `Consider the following Python code:

        1: name = 'Peter'
        2: age = 23
        3: flag = True
    
What are the types of the variables name, age and flag?`,

        a: `str, int, bool`,
        b: `float, bool, str`,
        c: `str, int, int`,
        d: `int, bool char`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?

        1: strng = '\''.join(("Mary", "had", "21", "sheep"))
        2: print(strng[0:1].islower())`,

        a: `M`,
        b: `Mary`,
        c: `False`,
        d: `True`,
        correct: "c",
    },
    {
        question: `How many arguments can the print() function take?`,

        a: `Any number of args excluding zero`,
        b: `Any number of args incuding zero`,
        c: `Just one argument`,
        d: `Just one argument that has to be a string`,
        correct: "b",
    },
    {
        question: `WWhat is the expected output of the following code?

        1: x = '\\\\\\'
        2: print(len(x))`,
        a: `1`,
        b: `3`,
        c: `0`,
        d: `An error will occur`,
        correct: "d",
    },
    {
        question: `What is the output of the following snippet of code?

        1: a = [1,2,3,4,5,6,7,8,9]
        2: b = [i if i%3==0 else 0 for i in a]
        3: print(b)`,
        a: `[1, 2, 0, 4, 5, 0, 7, 8, 0]`,
        b: `[0, 0, 3, 0, 0, 6, 0, 0, 9]`,
        c: `[3, 6, 9]`,
        d: `[1, 2, 3, 4, 5, 6, 7, 8, 9]`,
        correct: "b",
    },
    {
        question: `What is the output of the following snippet of code?

        1: a = [1,2,3]
        2: b = [[j for j in range(i)] for i in a]
        3: print(b[1][1])`,
        a: `1`,
        b: `2`,
        c: `0`,
        d: `[0, 1]`,
        correct: "a",
    },
    {
        question: `You execute the following command in the terminal.

        >> python index.py Hello

        You want the command to print out Hello
        What has to be inside of index.py?
        `,
        a: `from sys import argv
            print(argv[0])`,
        b: `from sys import argv
            print(argv[1])`,
        c: `from sys import argv
            argv()`,
        d: `from sys import argv
            argv(1)`,
        correct: "b",
    },
    {
        question: `What is the output of the following snippet of code:

        1: a = "edge"
        2: print(a.find('e'))`,
        a: `0`,
        b: `3`,
        c: `[1, 4]`,
        d: `(1, 4)`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?

        1: print('Mike' > 'Mikey')`,
        a: `True`,
        b: `False`,
        c: `1`,
        d: `0`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?
        1: x = 28
        2: y = 8
        3: print(x / y)
        4: print(x // y)
        5: print(x % y)`,
        a: `1: 3.0
            2: 3
            3: 2`,
        b: `1: 3.5
            2: 3
            3: 4`,
        c: `1: 3.5
            2: 3.5
            3: 2`,
        d: `1: 3
            2: 3.5
            3: 4`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?

        1: res = str(bool(1) + float(12) / float(2))
        2: print(res)`,

        a: `7.0`,
        b: `6.0`,
        c: `7`,
        d: `6`,
        correct: "a",
    },
    {
        question: `Which expression evaluates to 7?`,
        a: `9 % 3 + 7`,
        b: `9 // 3 - 7`,
        c: `9 - 3 * 7`,
        d: `9 / 3 * 7`,
        correct: "a",
    },
    {
        question: `What cannot be the output of the following snippet of code?

        1: from platform import python_implementation
        2: print(python_implementation())`,
        a: `PyPy`,
        b: `Python 3.8.4`,
        c: `IronPython`,
        d: `CPython`,
        correct: "b",
    },
    {
        question: `What is the output of the following snippet of code?

        print(float("abc")) `,

        a: `IndexError occurs`,
        b: `AttributeError occurs`,
        c: `ValueError occurs`,
        d: `abc`,
        correct: "c",
    },
    
    {
        question: `What is INCORRECT about the following snippet of code?

        1: import random as r
        2: print(r.sample([2,3], 2))`,
        
        a: `The output will be [2, 3]`,
        b: `The output must have length 2`,
        c: `The output is a list`,
        d: `The output can be [3, 2]`,
        correct: "a",
    },
    
    {
        question: `Both file1.py and file2.py are in the same directory.
Content of file1.py is:
        print(__name__)
        
Content of file2.py is:
        import file1
        
What is the output when file2.py is run followed by file1.py?`,
        a: `__main__
            file1`,
        b: `__main__
            __file1__`,
        c: `file1
            __main__`,
        d: `__file2__
            __file1__`,
        correct: "c",
    },
    
    {
        question: `What is False about the assert keyword?`,
        a: `assert can cause an AssertionError`,
        b: `assert is an alternative to try/except blocks`,
        c: `The assert keyword is used when debugging code`,
        d: `assert stops program execution if unhandled
        when codition with it is False`,
        correct: "b",
    },
    
    {
        question: `What is the output of the following snippet of code?

        1: a = "abcdef"
        2: b = a[::3]
        3: print(b)`,
        a: `ab`,
        b: `ac`,
        c: `ad`,
        d: `ace`,
        correct: "a",
    },
    
    {
        question: `What is the output of the following code:

        1: a = "qwecvxqwe"
        2: print(a.index('qwe') - a.rfind('qwe'))`,
        a: `0`,
        b: `6`,
        c: `-7`,
        d: `-6`,
        correct: "d",
    },

    {
        question: `Which of the following is correct:`,

        a: `Dictionaries, lists and tuples are all of the same type in Python`,
        b: `Strings in Python are  immutable
            and are not possible to append nor concatenate`,
        c: `Python is a compiled language`,
        d: `Python is a dynamically typed language`,
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