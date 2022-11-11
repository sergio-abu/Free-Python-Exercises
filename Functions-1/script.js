const quizData = [
    {
        question: `Which of the following is the correct way to 
declare a lambda function?`,

        a: `def lambda x,y: x+y`,
        b: `lambda x,y: return x+y`,
        c: `lambda x,y: x+y`,
        d: `lambda (x,y): x+y`,
        correct: "c",
    },
    {
        question: `What is the output of the following snippet of code?

    1: a = ['aBc', 'def', 'gHi']
    2: b = list(map(lambda x: x.capitalize(), filter(lambda y: y[1].isupper(), a)))
    3: print(b)`,

        a: `['Abc', 'Def', 'Ghi']`,
        b: `['Abc', 'Ghi']`,
        c: `['Def']`,
        d: `['abc', 'ghi']`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?

        1: def func(num):
        2:     res = '*'
        3:     for _ in range(num):
        4:         res += res
        5:     return res
        6:  
        7: 
        8: for x in func(2):
        9:     print(x, end='')
    `,

        a: `**`,
        b: `An error occurs`,
        c: `****`,
        d: `*`,
        correct: "c",
    },
    {
        question: `The function body is missing.
        
What snippet would you insert in the line indicated below:
        
        
            1: def func(number):
            2:     # insert your code here
            3:  
            4:  
            5: print(func(7))
        `,
        a: `return number`,
        b: `print(number)`,
        c: `print('number')`,
        d: `return 'number'`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?


    1: v = [1, 2, 3]
    2:     
    3:     
    4: def g(a,b,m):
    5:    return m(a,b)
    6:     
    7:     
    8: print(g(1, 1, lambda x,y: v[ x:y+1 ]))
    `,
        a: `[1]`,
        b: `[2]`,
        c: `[3]`,
        d: `[]`,
        correct: "b",
    },
    {
        question: `What is the expected result of executing the following code?

        1: def fun(n):
        2:     s = '+'
        3:     for i in range(n):
        4:         s += s
        5:         yield s
         
        6: for x in fun(2):
        7:     print(x, end='')`,
        a: `++++++`,
        b: `+++`,
        c: `+`,
        d: `++`,
        correct: "a",
    },
    {
        question: `isalnum() checks if a string contains only 
letters and digits, and this is:`,
        a: `A function`,
        b: `A module`,
        c: `A lambda`,
        d: `A method`,
        correct: "d",
    },
    {
        question: `What is the default return value for a function
that does not explicitly return any value?`,
        a: `Null`,
        b: `int`,
        c: `None`,
        d: `void`,
        correct: "c",
    },
    {
        question: `What is the expected output of the following code?

        1: def quote(quo):
        2:  
        3:     def embed(str):
        4:         return quo + str + quo
        5: 
        6:     return embed
        7:  
        8:  
        9: dblq = quote('"')
       10: print(dblq('Jane Doe'))`,
        a: `1: Jane Doe`,
        b: `1: "Jane Doe"`,
        c: `1: 'Jane Doe'`,
        d: `1: "'Jane Doe'"`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?

        1: x = lambda a, b: a ** b
        2: print(x(2, 10))`,
        a: `1024`,
        b: `2410`,
        c: `2222222222`,
        d: `SyntaxError`,
        correct: "a",
    },
    {
        question: `What is the expected behavior of the following snippet?

        1: x = 1
        2: 
        3: 
        4: def a(x):
        5:    return 2 * x
        6: 
        7: 
        8: x = 2 + a(x)      # Line 8
        9: print(a(x))       # Line 9`,

        a: `It will cause a runtime exception on line 9`,
        b: `It will cause a runtime exception on line 9`,
        c: `It will print 8 `,
        d: `it will print 4`,
        correct: "c",
    },
    {
        question: `Select the true statement about the map() function.
        `,
        a: `The second map() function argument can be a list`,
        b: `The first map() function argument can be a list`,
        c: `The map() function can only accept two arguments`,
        d: `The map() function can only accept one argument`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?

        1: num = 1
         
         
        2: def func():
        3:     num = num + 3
        4:     print(num)
        5:  
        6: 
        7: func()
        8: 
        9: print(num)`,
        a: `4 4`,
        b: `1 4`,
        c: `4 1`,
        d: `The code is erroneous`,
        correct: "d",
    },
    {
        question: `What is the output of the following code snippet?

        1: def test(x=1, y=2):
        2:     x = x + y
        3:     y += 1
        4:     print(x, y)
        5:  
        6: test(2, 1)`,

        a: `3 3`,
        b: `2 3`,
        c: `1 3`,
        d: `3 2`,
        correct: "d",
    },
    
    {
        question: `What is the output of the following snippet of code?

        1: a = [0,1,2,3,4,5,6]
        2: b = list(filter(lambda x: x%3 == 0, a))
        3: print(b)`,
        
        a: `[0, 3, 6]`,
        b: `[1, 3, 5]`,
        c: `[1, 2, 3, 4, 5, 6]`,
        d: `[0, 2, 0, 4, 0, 6]`,
        correct: "a",
    },
    
    {
        question: `Which of the literals below is not a valid function name?`,
        a: `Function_1`,
        b: `_function1`,
        c: `1function`,
        d: `_1Function`,
        correct: "a",
    },
    
    {
        question: `What is the expected output of the following code?

        1: def func1(a):
        2:     return a ** a
        3: 
        4: 
        5: def func2(a):
        6:     return func1(a) * func1(a)
        7:  
        8:  
        9: print(func2(2))
    `,
        a: `2`,
        b: `4`,
        c: `16`,
        d: `The code is erroneous`,
        correct: "c",
    },
    
    {
        question: `Look at the code below:


    1: my_tuple = (0, 1, 2, 3, 4, 5, 6)
    2: # Insert line of code here.
    3: print(foo)
    
    
Which snippet would you insert in order for the program
to output the following result:
    
    [2, 3, 4, 5, 6]`,
        a: `foo = tuple(filter(lambda x: x-0 and x-1, my_tuple))`,
        b: `foo = list(filter(lambda x: x-0 and x-1, my_tuple))`,
        c: `foo = list(filter(lambda x: x == 0 and x == 1, my_tuple))`,
        d: `foo = tuple(filter(lambda x: x > 1, my_tuple))`,
        correct: "b",
    },
    
    {
        question: `What does the following code do?

        1: def a(b, c, d):
        2:     pass
    
    `,
        a: `Defines a method`,
        b: `Defines an empty class`,
        c: `Defines a function, which passes its parameter through`,
        d: `Defines a function, which does nothing`,
        correct: "d",
    },

    {
        question: `What is the expected output of the following code?

        1: def func1(x):
        2:     return str(x)
        3:  
        4:  
        5: def func2(x):
        6:     return str(2 * x)
        7:  
        8:  
        9: print(func1(1) + func2(2))
    `,

        a: `The code is erroneous`,
        b: `3`,
        c: `14`,
        d: `5`,
        correct: "c",
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