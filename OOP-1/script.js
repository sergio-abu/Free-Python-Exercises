const quizData = [
    {
        question: `What is the expected output of the following code?

        1: class Content:
        2:     title = "None"
        3:  
        4:     def __init__(self, this):
        5:         self.name = this + " than " + Content.title
        6:  
        7: text_1 = Content("Paper")
        8: text_2 = Content("Article")
        9: print(text_1.title == text_2.name)`,

        a: `It outputs None`,
        b: `It outputs True`,
        c: `It outputs False`,
        d: `This code will raise an exception`,
        correct: "d",
    },
    {
        question: `Which of the following variables will Python 
consider to be private?`,

        a: `__privatedata`,
        b: `_privatedata_`,
        c: `_private_data`,
        d: `__private_data__`,
        correct: "a",
    },
    {
        question: `You want to check,
        
whether the variable obj contains an object of the class A
        
Which of the following statements can you use?`,

        a: `isinstance(obj, A)`,
        b: `isinstance(A, obj)`,
        c: `A.isinstance(obj)`,
        d: `obj.isinstance(A)`,
        correct: "a",
    },
    {
        question: `indicate a method which will correctly provide 
the value of the rack field?

        1: class Storage:
        2:     def __init__(self):
        3:         self.rack = 1
        4:  
        5:     # Insert a method here
        6:  
        7:  
        8: stuff = Storage()
        9: print(stuff.get())
    `,
        a: `5: def get(self):
            6:     return rack`,
        b: `5: def get():
            6:     return rack`,
        c: `5: def get():
            6:     return self.rack`,
        d: `5: def get(self):
            6:     return self.rack`,
        correct: "d",
    },
    {
        question: `What is the expected output of the following code?
        
            1: class Test:
            2:     def __init__(self, id):
            3:         self.id = id
            4:         id = 100
            5:  
            6:  
            7: x = Test(23)
            8: 
            9: print(x.id)`,
        a: `23`,
        b: `100`,
        c: `The code is erroneus`,
        d: `None of the above`,
        correct: "a",
    },
    {
        question: `A subclass is usually:`,
        a: `A twin of its superclass`,
        b: `More general than its superclass`,
        c: `More specialized than its superclass`,
        d: `None of the above`,
        correct: "c",
    },
    {
        question: `What is the expected output of the following code?

        1: class Test:
        2:     def __init__(self, s='Welcome'):
        3:         self.s = s
        4:  
        5:     def print(self):
        6:         print(self.s)
        7:  
        8:  
        9: x = Test()
        10: x.print()`,
        a: `The code is erroneous,
        because the print method is called without an argument`,
        b: `The code is erroneous,
        because the constructor is called without an argument`,
        c: `Welcome`,
        d: `Nothing`,
        correct: "c",
    },
    {
        question: `What is the expected output of the following code?

        1: class A:
        2:     def __init__(self, x):
        3:         self.__a = x + 1
        4:  
        5:  
        6: a = A(0)
        7: print(a.__a)`,
        a: `1`,
        b: `2`,
        c: `0`,
        d: `The code will raise an AttributeError exception`,
        correct: "d",
    },
    {
        question: `What is the output of the following snippet of code?

        1: class A:
        2:     def func():
        3:         print("Hello!")
        4:  
        5: a = A()
        6: a.func()`,
        a: `None`,
        b: `TypeError`,
        c: `AttributeError`,
        d: `Hello!`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?

        1: class A:
        2:     def __init__(self, name):
        3:         self.name = name
        4:  
        5:  
        6: a = A('class')
        7:  
        8: print(a)`,
        a: `name`,
        b: `class`,
        c: `A number`,
        d: `A string endign with a long hexadecimal number`,
        correct: "a",
    },
    {
        question: `What is True about the following snippet of code?

        1: class A:
        2:     def __init__(self, a=1):
        3:         self.__var = a
        4:  
        5: a = A(5)
        6: print(a._A__var)`,

        a: `It's output is 1`,
        b: `It results in an error because there is no such variable in the class`,
        c: `It's output is None`,
        d: `It's output is 5`,
        correct: "d",
    },
    {
        question: `If the following piece of code resides inside the abc.py file,
what is the output when the file is run?

        1: class A:
        2:     pass
        3:  
        4: print(A.__module__)`,
        a: `main`,
        b: `__main__`,
        c: `None`,
        d: `A`,
        correct: "b",
    },
    {
        question: `Given the following snippet of code, select which evaluate as true:

        1: class A:
        2:    var = 1
        3:     def __init__(self):
        4:         self.x = 1
        5:  
        6: class B(A):
        7:     def __init__(self):
        8:         super().__init__()
        9:  
       10: b = B()`,
        a: `hasattr(B, '__init__')`,
        b: `hasattr(B, '__super__')`,
        c: `hasattr(B, 'A')`,
        d: `hasattr(B, 'new_var')`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code?

        1: class A:
        2:     var = 100
        3:     def __init__(self):
        4:         pass
        5: a = A()
        6: print(a.__dict__)`,

        a: `[]`,
        b: `[100]`,
        c: `{}`,
        d: `100`,
        correct: "c",
    },
    
    {
        question: `Given the following snippet of code:

        1: class A:
        2:     pass
        3: class B(A):
        4:     pass
    
How are the two classes, A and B, related?`,
        
        a: `B is a super class of A`,
        b: `B is the base class of A`,
        c: `A is a super class of B and B is the sub class of A`,
        d: `B is a super class of A and A is the sub class of B`,
        correct: "c",
    },
    
    {
        question: `The fact that the following snippet of 
code throws an Attribute error depicts which phenomena of OOP?

        1: class B:
        2:     def __init__(self):
        3:        self.__var = 1
        4:  
        5: b = B()
        6: print(b.__var)`,
        a: `Encapsulation`,
        b: `Inheritance`,
        c: `Polymorphism`,
        d: `Abstraction`,
        correct: "a",
    },
    
    {
        question: `What is true about the variable 'var' in the following class?
        
        1: class A:
        2: var = 10
        3: def __init__(self):
        4:     pass`,
        a: `'var' is a instance variable`,
        b: `'var' is a global variable`,
        c: `'var' is a class variable`,
        d: `'var' is a private variable`,
        correct: "c",
    },
    
    {
        question: `Is there a way to check if a class is a subclass of another class?`,
        a: `No`,
        b: `Yes, but only is possible if a special method is implemented in the class`,
        c: `Yes, there is a function to do that`,
        d: `It may be possible under special conditions of the class type`,
        correct: "c",
    },
    
    {
        question: `What can you do to indicate that a module entity 
should be treated as private?`,
        a: `You can mark the entity with the # prefix`,
        b: `You can mark the entity with the _ or __ prefix`,
        c: `They are already private by default in Python`,
        d: `There are no private attributes in Python and is not possible to indicate`,
        correct: "b",
    },

    {
        question: `Given the following snippet of code:

        1: class A:
        2:     var = 1
        3:     def __init__(self):
        4:         self.x = 1
        5:  
        6: a = A()`,

        a: `hasttr(a, 'self')`,
        b: `hasttr(a, 'x')`,
        c: `hasttr(a, 'A')`,
        d: `hasttr(a, 'init')`,
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