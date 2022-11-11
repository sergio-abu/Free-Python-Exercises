const quizData = [
    {
        question: `What is the output of the following snippet of code?

        1: a = lambda x,y: x+y
        2: b = lambda x: x*2
        3: 
        4: def func(a,b,c):
        5:     return a(b(c[0]),b(c[1]))
        6: 
        7: print(func(a,b,[2,3]))`,

        a: `9`,
        b: `18`,
        c: `13`,
        d: `10`,
        correct: "d",
    },
    {
        question: `What is the output of the following snippet of code?

        1: a = ['a','A','B','C','q','w','p']
        2: b = list(filter(lambda x: x.isupper(), a))
        3: print(len(b))`,

        a: `[A, B, C]`,
        b: `[a, q, w, p]`,
        c: `3`,
        d: `4`,
        correct: "c",
    },
    {
        question: `What is the expected output of the following code?

        1: s = lambda x: 0 if x == 0 else 1 if x > 0 else -1
        2: 
        3: print(s(-273.15))
    `,

        a: `0`,
        b: `None`,
        c: `1`,
        d: `-1`,
        correct: "d",
    },
    {
        question: `What is the expected output of the following code?


        1: vect = ["alpha", "bravo", "charlie"]
        2: new_vect = map(lambda s: s[0].upper(), vect)
        3: print(list(new_vect)[1])`,
        a: `A`,
        b: `B`,
        c: `C`,
        d: `ABC`,
        correct: "b",
    },
    {
        question: `Consider the following code.
        
            1: def function(x=0):
            2:     return x
        
        
With sentence describes the function the best?
    
A function defined like function() ...`,
        a: `may be called without arguments`,
        b: `may be called with exatly one argument`,
        c: `may be called with any number of arguments`,
        d: `may be called without any argument, or with just one`,
        correct: "d",
    },
    {
        question: `What is the expected result of executing the following code?

        1: def o(p):
        2:     def q():
        3:         return '*' * p
        4:     return q
        5: 
        6: 
        7: r = o(1)
        8: s = o(2)
        9: print(r() + s())
    `,
        a: `****`,
        b: `***`,
        c: `**`,
        d: `*`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?


        1: data = [1, 2, 3, 4]
        2: data = list(map(lambda x: x*2, data))
        3: print(data)`,
        a: `An error occurs`,
        b: `[1, 2, 3, 4]`,
        c: `[10]`,
        d: `[2, 4, 6, 8]`,
        correct: "d",
    },
    {
        question: `What is the expected result of executing the following code?

        1: def I():
        2:     s = 'abcdef'
        3:     for c in s[::2]:
        4:         yield c
        5:  
        6: 
        7: for x in I():
        8:     print(x, end='')`,
        a: `abcdef`,
        b: `bdf`,
        c: `ace`,
        d: `aabbccee`,
        correct: "c",
    },
    {
        question: `What is the expected output of the following code?

     1: def func1(param):
     2:        return param
     3:     
     4:     
     5: def func2(param):
     6:        return param * 2
     7:     
     8:     
     9:    def func3(param):
    10:         return param + 3
    11:      
    12:  
    13: print(func1(func2(func3(1))))`,
        a: `3`,
        b: `1`,
        c: `8`,
        d: `6`,
        correct: "c",
    },
    {
        question: `What is the output of the following snippet of code?

        1: a = ['aBc', 'Def', 'gHi']
        2: b = list(map(lambda x: x.capitalize(), a))
        3: print(b)`,
        a: `['Abc', 'Def', 'Ghi']`,
        b: `['Abc']`,
        c: `['Abc', 'Ghi']`,
        d: `['Def']`,
        correct: "a",
    },
    {
        question: `What is the output of the following code:

        1: [print(i, end='-') if i%5 == 0 else print('', end='') for i in range(20)]`,

        a: `0-5-10-15`,
        b: `051015-`,
        c: `0-5-10-15-`,
        d: `01234-`,
        correct: "c",
    },
    {
        question: `What is the output of following code:

        1: a = lambda x,y: x*y
        2: b = lambda n: n+1
        3:  
        4: print(a(b(1), b(2)))`,
        a: `An error occurs`,
        b: `2`,
        c: `3`,
        d: `6`,
        correct: "d",
    },
    {
        question: `Which snippet of code will produce the following output:

        1: *
        2: **
        3: ***
        4: ****
        5: *****
    `,
        a: `[print('*' * i) for i in range(1,6)]`,
        b: `[print('*' * i) for i in range(6)]`,
        c: `[print('*' * i) for i in range(5)]`,
        d: `[print('*' * i) for i in range(1,5)]`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?


        1: def func(x=2, y=3):
        2:     return x * y
        3:  
        4: 
        5: print(func(y=2))`,

        a: `2`,
        b: `4`,
        c: `6`,
        d: `An error occurs`,
        correct: "b",
    },
    
    {
        question: `What is the expected output of the following code?

        1: def func():
        2:     text = 'Paul'
        3:     names = lambda x: text + ' ' + x
        4:     return names
        5:  
        6:  
        7: people = func()
        8:  
        9: print(people('Peter'))
    `,
        
        a: `Paul Peter`,
        b: `Peter Paul`,
        c: `Paul`,
        d: `Peter`,
        correct: "a",
    },
    
    {
        question: `What is the expected output of the following code?

        1: def func(x, y):
        2:     if x == y:
        3:         return x
        4:     else:
        5:         return
        6:  
        7:  
        8: func(x, y=1)
        9: print(func(0, 3))
    `,
        a: `1`,
        b: `0`,
        c: `3`,
        d: `An error occurs`,
        correct: "d",
    },
    
    {
        question: `What is the expected output of the following code?

        1: def f(l):
        2:     return l(-3, 3)
        3:  
        4:  
        5: print(f(lambda x,y: x if x > y else y))
    `,
        a: `0`,
        b: `3`,
        c: `-3`,
        d: `None`,
        correct: "b",
    },
    
    {
        question: `Which of the following enclose the input 
parameters or arguments of a function?
        
        `,
        a: `Curly braces`,
        b: `Brackets`,
        c: `Parentheses`,
        d: `Quotation marks`,
        correct: "c",
    },
    
    {
        question: `What is the expected output of the following code?

        1: def func(x):
        2:     if x % 2 == 0:
        3:         return 1
        4:     else:
        5:         return
        6:  
        7:  
        8: print(func(func(2)) + 1)    
    `,
        a: `The code is erroneous`,
        b: `None`,
        c: `2`,
        d: `1`,
        correct: "a",
    },

    {
        question: `A built‑in function is a function which ...`,

        a: `has to be imported before use`,
        b: `has been placed within your code by another programmer`,
        c: `is hidden from programmers`,
        d: `comes with Python, and its an integral part of Python`,
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