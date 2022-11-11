const quizData = [
    {
        question: `What is true about __init__.py file?`,

        a: `__init__.py is always empty`,
        b: `__init__.py contains bytecode that is not human readable`,
        c: `__init__.py allows you to define any variable at the package level`,
        d: `__init__.py is automatically created by Python`,
        correct: "c",
    },
    {
        question: `Which of the following statements is correct 
about the sys.path variable?`,

        a: `The sys.path variable cannot be modified`,
        b: `The sys.path variable is a list of strings`,
        c: `The sys.path variable can be accessed without importing any module`,
        d: `The sys.path variable is a dict of paths which python uses to look for modules`,
        correct: "c",
    },
    {
        question: `What is true about the following snippet of code?

        1: import random as r
        2: print(r.choice([1,2,3]))`,

        a: `The output can be 2`,
        b: `The output is an integer`,
        c: `The output will be 3`,
        d: `A TypeError will occur`,
        correct: "b",
    },
    {
        question: `What is true about __pycache__?`,
        a: `It contains files with complied Python bytecode`,
        b: `It is created manually by the user`,
        c: `It is cache for storing variables`,
        d: `It contains files with extension ending in .py`,
        correct: "b",
    },
    {
        question: `If the file, abc.py, resides inside the folder xyz, 
what is the correct import statement to load the variable, var, 
which is inside the abc.py module, and assign it a value of 1`,
        a: `from xyz.abc import var`,
        b: `from xyz.abc import var()`,
        c: `from xyz.abc import xyz.abc`,
        d: `from abc.xyz import var`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code?

        1: import math as m
        2: print(m.ceil(-2.3) + m.factorial(3))`,
        a: `3`,
        b: `4`,
        c: `3.0`,
        d: `0`,
        correct: "b",
    },
    {
        question: `Which of the following lines of code can be used to get the python 
version being used?`,
        a: `1: import platform as v
            2: print(v.python)`,
        b: `1: import info
            2: print(info.python)`,
        c: `1: import platform as p
            2: print(p.python_implementation())`,
        d: `1: import platform as p
            2: print(p.python_version())`,
        correct: "d",
    },
    {
        question: `What will be the result of running the following snippet of code?

        1: import math
        2: print(dir(math)) `,
        a: `It will print a list of names of all entities inside the math module`,
        b: `It will print all the functions inside the math module`,
        c: `It will print "math" to the console`,
        d: `It will print the description of the math module`,
        correct: "a",
    },
    {
        question: `When a module is imported, its contents:`,
        a: `are executed depending on the contents`,
        b: `are executed as many times they are imported`,
        c: `are ignored`,
        d: `are executed once`,
        correct: "d",
    },
    {
        question: `What is the correct command to shuffle the following list?
    
            1: import random
            2: people = ['Peter', 'Paul', 'Mary', 'Jane']`,
        a: `shuffle(people)`,
        b: `people.shuffle()`,
        c: `random.shuffle(people)`,
        d: `random.shuffleList(people)`,
        correct: "c",
    },
    {
        question: `Which module in Python supports regular expressions?`,

        a: `regex`,
        b: `re`,
        c: `pyregex`,
        d: `None of the above`,
        correct: "b",
    },
    {
        question: `Knowing that a function named randint()
resides in the module named random
choose the proper way to import it:`,
        a: `import randint from random`,
        b: `from random import randint`,
        c: `import randint`,
        d: `from randint import random`,
        correct: "b",
    },
    {
        question: `Consider the following file module.py.

        1: module.py:
        2: print(__name__)
    
What will be the output, if you run it?`,
        a: `__main__`,
        b: `main`,
        c: `module`,
        d: `__module__`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?

        1: from datetime import datetime
        2:  
        3: datetime = datetime(2019, 11, 27, 11, 27, 22)
        4: print(datetime.strftime('%y/%B/%d %H:%M:%S'))
    `,

        a: `2019/Nov/ 27 11:27:22`,
        b: `2019/11/ 27 11:27:22`,
        c: `19/November/ 27 11:27:22`,
        d: `19/11/ 27 11:27:22`,
        correct: "c",
    },
    
    {
        question: `A PWG-lead repository, collecting open-source Python code, is called:`,
        
        a: `PyPI`,
        b: `PWGR`,
        c: `PyCR`,
        d: `PyRep`,
        correct: "a",
    },
    
    {
        question: `What happens if you run the following code, 
assuming that the d directory already exists?


        1: import os
        2: os.mkdir("a/b/c/d") 
    `,
        a: `Python will overwrite the existing directory`,
        b: `A DirectoryExistsError exception will be raised`,
        c: `A FileExistsError exception will be raised`,
        d: `None of the above`,
        correct: "c",
    },
    
    {
        question: `What is true about updating already installed Python packages?`,
        a: `It's performed by the install command accompanied by the -U option.`,
        b: `It can be done only by uninstalling the package once again`,
        c: `It can be done by reinstalling the package using the reinstall command`,
        d: `Its an automatic process which doesnt require any user attention`,
        correct: "a",
    },
    
    {
        question: `What is the expected output of the following code?

        1: import math
        2:  
        3: result = math.e != math.pow(2, 4)
        4: print(int(result))`,
        a: `0`,
        b: `True`,
        c: `False`,
        d: `1`,
        correct: "d",
    },
    
    {
        question: `What is true about the following snippet of code?`,
        a: `The output can be [3, 2]`,
        b: `The output can be [2, 3]`,
        c: `The output is a list`,
        d: `The output is an integer`,
        correct: "a",
    },

    {
        question: `What is the output of the following snippet of code?

        1: from platform import python_implementation
        2: print(python_implementation())`,

        a: `Possible outputs are CPython, IronPython, PyPy`,
        b: `Possible outputs are numpy, math, random`,
        c: `Possible outputs are Windows, Linux, Java`,
        d: `Possible outputs are 3.4.1, 2.8.2, 3.8.4`,
        correct: "a",
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