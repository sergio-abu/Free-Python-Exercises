const quizData = [
    {
        question: `The fact that B is able to access the function 
in A in the following snippet of code, depicts what phenomena?

        1: class A:
        2:     def my_func(self):
        3:         pass
        4:  
        5: class B(A):
        6:     pass
        7:  
        8: b = B()
        9: b.my_func()`,

        a: `Polymorphism`,
        b: `Abstraction`,
        c: `Polymorphism`,
        d: `Inheritance`,
        correct: "d",
    },
    {
        question: `What is true about the output of the following snippet of code?

        1: class A:
        2:     pass
        3: print(A.__dict__)`,

        a: `Output is an empty list`,
        b: `Output is a non empty list`,
        c: `Output is a non empty dictionary`,
        d: `Output is an empty dictionary`,
        correct: "c",
    },
    {
        question: `An object is characterized by the following three:`,

        a: `name, properties, activities`,
        b: `properties, estates, lands`,
        c: `name, owner possession`,
        d: `none, class, oop`,
        correct: "a",
    },
    {
        question: `Which of the following statements would 
create an instance of the Computer class correctly?

        1: class Computer:
        2:     def __init__(self, ram):
        3:         self.ram = ram
        4:         self.type = 'server'`,
        a: `computer = Computer('client', 1000)`,
        b: `computer = Computer('server', 1000)`,
        c: `computer = Computer(1000)`,
        d: `computer = Computer()`,
        correct: "c",
    },
    {
        question: `What is the expected output of the following code?

        1: class Example:
        2:     def __str__(self):
        3:         return __name__
        4:  
        5:  
        6: thing = Example()
        7: print(thing) 
    `,
        a: `__main__`,
        b: `None`,
        c: `Example`,
        d: `__name__`,
        correct: "a",
    },
    {
        question: `What will be the result of executing the following code?

        1: class A:
        2:     def __init__(self):
        3:         pass
        4:  
        5:  
        6: a = A(1)
        7: print(hasattr(a, 'A'))`,
        a: `It will print 1`,
        b: `It will print True`,
        c: `It will print Fake`,
        d: `It will raise an exception`,
        correct: "a",
    },
    {
        question: `What statements is true about object-oriented programming?`,
        a: `Polymorphism is a phenomenon allowing you to have many classes
        of the same name`,
        b: `Encapsulation is a phenomenon which allows
        you to hide some class traits from the outer world`,
        c: `In the hierarchy diagram,
        a subclass of a class is located above the class`,
        d: `A class is an instance of an object which is a representation
        of something in the real world`,
        correct: "b",
    },
    {
        question: `If you want an object to be able to present its contents as a string,
you should equip its class with a method name:`,
        a: `str()`,
        b: `__tostring__()`,
        c: `string()`,
        d: `__str__()`,
        correct: "d",
    },
    {
        question: `What is true about object-oriented programming (OOP)?`,
        a: `A part of a class designed to build new objects is called constructor`,
        b: `A superclass of a class is located below the class in the hierarchy diagram.`,
        c: `All objects of the same class have exactly the same set of attributes.`,
        d: `All of the above`,
        correct: "a",
    },
    {
        question: `Which of the following statements is true?`,
        a: `Variables with names starting with two underscoresare
        considered private inside their home module.`,
        b: `The directory from which the code is run is never searched through.`,
        c: `Variables with names ending with two underscores
        are considered private inside their home module.`,
        d: `None of the statements above is true`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?

        1: class A:
        2:  
        3:     A = 23
        4:  
        5:     def __init__(self):
        6:         self.a = 42
        7: 
        8:  
        9: print(hasattr(A, 'a'))`,

        a: `True`,
        b: `False`,
        c: `1`,
        d: `The code is erroneous`,
        correct: "b",
    },
    {
        question: `If the class constructor is declared as below,
        which one of the assignments is valid?
        
            1: class Test:
            2:     def __init__(self):
            3:         pass`,
        a: `obj = Test()`,
        b: `obj = Test(1, 2)`,
        c: `obj = Test(1)`,
        d: `obj = Test('1')`,
        correct: "a",
    },
    {
        question: `A variable that exists as a separate being 
in separate objects is called:`,
        a: `An instance variable`,
        b: `A separate variable`,
        c: `An objective variable`,
        d: `A global variable`,
        correct: "a",
    },
    {
        question: `A function able to check if an object is
        equipped with a given property is named:`,

        a: `hasprop()`,
        b: `hasvar()`,
        c: `has()`,
        d: `hasattr()`,
        correct: "d",
    },
    
    {
        question: `If the class constructor is declared in the following way:

        1: class Class:
        2:     def __init__(self, val=0):
        3:         pass
      
Which one of the assignments is invalid?`,
        
        a: `object = Class(None)`,
        b: `object = Class()`,
        c: `object = Class(1)`,
        d: `object = Class(1, 2)`,
        correct: "d",
    },
    
    {
        question: `A is a subclass of B
You want to invoke the __init__() method in B from A
Which of the following statements do you choose?`,
        a: `B.__init__()`,
        b: `super().__init__()`,
        c: `mainclass.__init__()`,
        d: `super_class(B).init()`,
        correct: "b",
    },
    
    {
        question: `A user defined exception:`,
        a: `Must be derived from the Exception class.`,
        b: `Must not be derived from the Exception class.`,
        c: `Must be derived from the Except class`,
        d: `May be derived from the Except class.`,
        correct: "a",
    },
    
    {
        question: `What is the expected result of executing the following code?

        1: class A:
        2:   def __init__(self):
        3:         pass
        4:  
        5:  
        6: a = A()
        7: print(hasattr(a, 'A'))`,
        a: `False`,
        b: `True`,
        c: `0`,
        d: `1`,
        correct: "a",
    },
    
    {
        question: `The function named super() may be used to:`,
        a: `Make a class super`,
        b: `Make a class better`,
        c: `Make a class a super class`,
        d: `Access a super class's attributes and/or methods`,
        correct: "d",
    },

    {
        question: `What is INCORRECT about the variable 'a' in the following class?
        
        1: class B:
        2: def __init__(self, a):
        3:    self.a = a`,

        a: `'a' is a public variable`,
        b: `'a' is an instance variable`,
        c: `'a' will be unique to each object of class B`,
        d: `'a' is a class variable`,
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