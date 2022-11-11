const quizData = [
    {
        question: `What is the expected output of the following code?

        1: data = [261, 321]
        2: try:
        3:     print(data[-3])
        4: except Exception as exception:
        5:     print(exception.args)
        6: else:
        7:     print("('success',)")`,

        a: `('list index out of range',)`,
        b: `321`,
        c: `261`,
        d: `('success',)`,
        correct: "a",
    },
    {
        question: `What is the expected behavior of the following program?


        1: try:
        2:     print(5/0)
        3:     break
        4: except:
        5:     print("Sorry, something went wrong...")
        6: except (ValueError, ZeroDivisionError):
        7:     print("Too bad...")`,

        a: `The program will raise an expection handled by the first except block`,
        b: `The program will cause a SyntaxError exception`,
        c: `The program will cause a ZeroDivisionError exception
        and output a default error message.`,
        d: `The program will cause a ZeroDivisionError exception
        and output the following error message: Too bad...`,
        correct: "b",
    },
    {
        question: `What is the output of the following snippet of code?

        1: def func(a):
        2:     print(a)
        3:  
        4: func()`,

        a: `TypeError occurs`,
        b: `AttributeError occurs`,
        c: `ValueError occurs`,
        d: `a`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code?

        1: for i in range(1,-1,-1):
        2:     try:
        3:         print(1/i, end=' ')
        4:     except:
        5:         print("ERROR", end=' ')
        6:     else:
        7:         print("SAFE", end=' ')
        8:     finally:
        9:         print("DONE", end=' ')`,

        a: `1.0 SAFE DONE ERROR DONE`,
        b: `1.0 DONE ERROR DONE`,
        c: `ERROR DONE`,
        d: `1.0 ERROR DONE`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code?

        1: class MyException(Exception):
        2:     pass
        3:  
        4: try:
        5:     raise MyException("A", "B")
        6: except MyException as e:
        7:     print(e.args)`,
        a: `A tuple of length 2`,
        b: `A dictionary with keys A and B`,
        c: `A list of length 2`,
        d: `A string containing A and B`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code?

        1:  class MyException(Exception):
        2:      def __init__(self, message):
        3:          super().__init__(message)
        4:          print("Hello", end=" ")
        5:   
        6:      def __str__(self):
        7:          return "A"
        8:  
        9:  try:
        10:    raise MyException("B")
        11: except Exception as e:
        12:     print(e)`,
        a: `The code breaks due to unhandled exception`,
        b: `Hello B`,
        c: `Hello B A`,
        d: `Hello A`,
        correct: "d",
    },
    {
        question: `What is the output of the following snippet of code?

        1: print(int("abc")) `,
        a: `abc`,
        b: `The code breaks due to unhandled exception`,
        c: `Hi!`,
        d: `Hi! Bye!`,
        correct: "b",
    },
    {
        question: `What is true about the assert keyword?`,
        a: `assert can cause an AssertionError`,
        b: `assert can cause a ValueError`,
        c: `assert is an alternative to try/except blocks`,
        d: `assert can cause a TypeError`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?


        1: num = '7' * '7'
        2: print(num)`,
        a: `49`,
        b: `77`,
        c: `7777777`,
        d: `The code is erroneous`,
        correct: "d",
    },
    {
        question: `The system that allows you to diagnose
input/output errors in Python is called:`,
        a: `errno`,
        b: `errcode`,
        c: `error_number`,
        d: `error_string`,
        correct: "a",
    },
    {
        question: `The part of your code where you think an exception
may occur should be placed inside:`,

        a: `the exception branch`,
        b: `the try branch`,
        c: `the except branch`,
        d: `as an assertion`,
        correct: "b",
    },
    {
        question: `Entering the try: block implies that:`,
        a: `the block will be omitted.`,
        b: `some of the instructions from this block may not be executed`,
        c: `all of the instructions from this block will be executed`,
        d: `none of the instructions from this block will be executed`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?


        1: def func():
        2:     try:
        3:         print(23)
        4:     finally:
        5:         print(42)
        6:  
        7:  
        8: func()`,
        a: `23`,
        b: `42`,
        c: `1: 23
            2: 42`,
        d: `1: 42
            2: 23`,
        correct: "c",
    },
    {
        question: `Which of the following is false?`,

        a: `A try statement can have one or more finally clauses`,
        b: `A try statement can have a finally clause and an except clause`,
        c: `A try statement can have one or more except clauses`,
        d: `A try statement can have a finally clause without an except clause`,
        correct: "a",
    },
    
    {
        question: `The errno.ENOENT symbol refers to an error described as:`,
        
        a: `No such file or directory`,
        b: `Permission denied`,
        c: `No child precesses`,
        d: `Operation not permitted`,
        correct: "a",
    },
    
    {
        question: `
        What is the expected behavior of the following program?
        
        
        1:     foo = (1, 2, 3)
        2:     foo.index(0)
        `,
        a: `The program will cause a TypeError exception`,
        b: `The program will cause a SyntaxError exception`,
        c: `The program will cause a ValueError exception`,
        d: `The program will cause a AttributeError exception`,
        correct: "b",
    },
    
    {
        question: `What is the expected output of the following code?


        1: try:
        2:     raise Exception(1, 2, 3)
        3: except Exception as e:
        4:     print(len(e.args))`,
        a: `3`,
        b: `2`,
        c: `1`,
        d: `The code is erroneous`,
        correct: "a",
    },
    
    {
        question: `What is the expected output of the following code?

        1: try:
        2:     print('try')
        3: except:
        4:     print('except')
        5: finally:
        6:     print('finally')`,
        a: `1: try
            2: finally`,
        b: `1: except
            2: finally`,
        c: `1: finally
            2: except`,
        d: `1: finally
            2: try`,
        correct: "a",
    },
    
    {
        question: `The part of your code where the handling
of an exception takes place should be placed inside:`,
        a: `the except: branch`,
        b: `the finally: branch`,
        c: `the try: branch`,
        d: `the exception: branch`,
        correct: "a",
    },

    {
        question: `Which of the following is an example
of a Python built-in concrete exception?`,

        a: `ImportError`,
        b: `IndexError`,
        c: `BaseException`,
        d: `AritheticError`,
        correct: "b",
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