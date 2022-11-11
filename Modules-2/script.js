const quizData = [
    {
        question: `A programmer needs to use the following functions:

        machine(), choice(), and system().
        
Which modules have to be imported to make this possible?
        `,

        a: `platform, random`,
        b: `math, platform`,
        c: `math, tkinter`,
        d: `math, random`,
        correct: "a",
    },
    {
        question: `A list of package's dependencies can be obtained 
from pip using its command named:`,

        a: `deps`,
        b: `shows`,
        c: `list`,
        d: `dir`,
        correct: "b",
    },
    {
        question: `If you want to import pi from math, which line will you use?`,

        a: `from math import pi`,
        b: `from pi import math`,
        c: `import pi from math`,
        d: `import pi`,
        correct: "a",
    },
    {
        question: `Consider the following code.

        1: import random
        2: data = [10, 20, 30]
        3: random.shuffle(data)
        4: print(data) 
    
Which of the following statements best describes the behavior
of the random.shuffle() method?`,
        a: `It shuffles the elements of the list in-place`,
        b: `It returns a list where the elements 10, 20 and 30 would be at a random positions`,
        c: `It will not modify the list`,
        d: `It shuffles the elements for the number of times equal to the size of the list`,
        correct: "a",
    },
    {
        question: `Which of the following is a correct way to open a file in read mode?`,
        a: `file = open('abc.txt', 'r')`,
        b: `file = open('abc.txt', 'w')`,
        c: `file = open('abc.txt', 'read')`,
        d: `file = stream('abc.txt')`,
        correct: "a",
    },
    {
        question: `Which of the following functions immediately terminates a program?`,
        a: `sys.stop()`,
        b: `sys.terminate()`,
        c: `sys.exit()`,
        d: `None`,
        correct: "c",
    },
    {
        question: `Consider the following code.

        from x.y import z
        
        The code causes the import of ...`,
        a: `entity x from module z from package y`,
        b: `entity x from module y from package z`,
        c: `entity y from module z from package x`,
        d: `entity z from module y from package x`,
        correct: "d",
    },
    {
        question: `PyPI is often referred to as:`,
        a: `Py Software Store`,
        b: `Python Play`,
        c: `Cheese Shop`,
        d: `pyTT`,
        correct: "c",
    },
    {
        question: `You know that a function named func() resides in a module named mod

The module has been imported using the following line:
        
        import mod
        
How can you invoke the function?`,
        a: `mod.func()`,
        b: `mod::func()`,
        c: `func()`,
        d: `mod->func()`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?

        1: import math
        2:  
        3: x = -1.7
        4: print(-abs(math.floor(x) + math.ceil(x)))`,
        a: `-3`,
        b: `-2`,
        c: `2`,
        d: `3`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code?

        1: import math as m
        2:  
        3: print(m.floor(-3.3) - m.trunc(-3.9))`,

        a: `-1`,
        b: `Error`,
        c: `0`,
        d: `1`,
        correct: "b",
    },
    {
        question: `What is the output when the file, abc.py, containing the following code is run?

        1: if(__name__=='abc'):
        2:     print("Hello!")
        3: elif(__name__=='__main__'):
        4:     print("Hi!")
        5: elif(__name__=='main'):
        6:     print("Aloha!")
        7: else:
        8:     print("Bye!")`,
        a: `Hello!`,
        b: `Aloha!`,
        c: `Hi!`,
        d: `Bye!`,
        correct: "b",
    },
    {
        question: `Which of the following commands
        can be used to read n characters from a file?`,
        a: `n = file.readline()`,
        b: `n = file.read()`,
        c: `file.readline(n)`,
        d: `file.read(n)`,
        correct: "d",
    },
    {
        question: `Assuming that the open() invocation
         has gone successfully, the following snippet will:


        1: for x in open('file', 'rt'):
        2:    print(x)`,

        a: `read the whole file at once`,
        b: `read the file character by character`,
        c: `read the file line by line`,
        d: `cause an exception`,
        correct: "c",
    },
    
    {
        question: `import calendar
         
        1: c = calendar.Calendar()
        2:  
        3: for weekday in c.iterweekdays():
        4:     print(weekday, end=" ")`,
        
        a: `1 2 3 4 5 6 7`,
        b: `Mo Tu We Th Fr Sa Su`,
        c: `0 1 2 3 4 5 6 7`,
        d: `Su Mo Tu We Th Fr Sa`,
        correct: "c",
    },
    
    {
        question: `What is true about how Python looks for modules/packages?`,
        a: `The directory from which the code has been run is never searched through`,
        b: `The directory from which the code has been run is always searched through`,
        c: `The directory from which the code has been run must not contain any modules`,
        d: `The directory from which the code has been run is searched through only the users request`,
        correct: "b",
    },
    
    {
        question: `A predefined Python variable, storing the module name, is called:`,
        a: `__module__`,
        b: `__name__`,
        c: `__mod__`,
        d: `__modname__`,
        correct: "b",
    },
    
    {
        question: `How to use pip to remove an installed package?`,
        a: `pip remove package`,
        b: `pip --uninstall package`,
        c: `pip install --uninstall package`,
        d: `pip uninstall package`,
        correct: "d",
    },
    
    {
        question: `What is the expected output of the following code?

        1: from random import randint
        2:  
        3: for i in range(2):
        4:     print(randint(1, 2), end='')
    `,
        a: `11, 12, 21 or 22`,
        b: `12`,
        c: `12 or 21`,
        d: `There are millions of possible combinations`,
        correct: "a",
    },

    {
        question: `The name pip comes from:`,

        a: `peripheral interchange program`,
        b: `pip installs packages`,
        c: `package inside package`,
        d: `python internal packager`,
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