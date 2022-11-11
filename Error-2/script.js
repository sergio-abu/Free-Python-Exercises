const quizData = [
    {
        question: `The following statement ...


        1: assert x == 0`,

        a: `will stop the program if x is not equal to 0`,
        b: `has no effect`,
        c: `is erroneous`,
        d: `will stop the program if x is equal to 0`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code:

        1: a = [1,2,3]
        2: print(a[3])`,

        a: `ValueError occurs`,
        b: `AttributeError occurs`,
        c: `IndexError occurs`,
        d: `3`,
        correct: "c",
    },
    {
        question: `What is the output of the following snippet of code?

        1: class MyException(Exception):
        2:     pass
        3:  
        4: try:
        5:     raise Exception("A", "B")
        6: except MyException:
        7:     print("Hello", end=" ")
        8: finally:
        9:     print("Bye")`,

        a: `Hello Bye`,
        b: `Bye`,
        c: `[A, B]`,
        d: `The code breaks due to unhandled exception`,
        correct: "d",
    },
    {
        question: `When an exception occurs, we say that it has been:`,
        a: `raised`,
        b: `dropped`,
        c: `thrown`,
        d: `made`,
        correct: "a",
    },
    {
        question: `What is the expected behavior of the following
program if the user enters 0?

        1: value = input("Enter a value: ")
        2: print(10/value)`,
        a: `The program will raise the ZeroDivisionError execption`,
        b: `The program will raise the TypeError exception`,
        c: `The program will raise the ValueError exception`,
        d: `The program will run correctly`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?


        1: try:
        2:     file = open('data.txt', 'r')
        3:     file.write('Hello file!')
        4: except:
        5:     print('An error occurred.')
        6: else:
        7:     print('The content is written successfully.')`,
        a: `An error occurred`,
        b: `Hello file`,
        c: `The content is written successfully`,
        d: `The code is erroneous.`,
        correct: "a",
    },
    {
        question: `Which of the following is the name of a built-in
Python exceptions?`,
        a: `KeyError`,
        b: `LookupException`,
        c: `AssertError`,
        d: `WrongError`,
        correct: "a",
    },
    {
        question: `What is the expected output of the following code?

        1: try:
        2:     raise Exception
        3: except BaseException:
        4:     print('1')
        5: except Exception:
        6:     print('2')
        7: except:
        8:     print('3')`,
        a: `3`,
        b: `1`,
        c: `2`,
        d: `123`,
        correct: "b",
    },
    {
        question: `What is the expected output of the following code?


        1: data = ['peter', 'paul', 'mary']
        2: for d in data:
        3:     data.append(d.upper())
        4: print(data)`,
        a: `The code will enter an infinite loop`,
        b: `The code is erroneus`,
        c: `['PETER', 'PAUL', 'MARY']`,
        d: `['Peter', 'Paul', 'Mary']`,
        correct: "a",
    },
    {
        question: `Which of the following operations may raise an exception?`,
        a: `Indexing a list`,
        b: `Slicing a string`,
        c: `Incrementing an integer variable by one`,
        d: `Decrementing an integer variable by one`,
        correct: "a",
    },
    {
        question: `An assertion can be used to:`,

        a: `Import a module`,
        b: `Stop the program when some data have improper values`,
        c: `Make the code prettier`,
        d: `Make a variable more assertive`,
        correct: "b",
    },
    {
        question: `Which of the approachable except: branches
is taken into consideration when an exception occurs?`,
        a: `Any of the matching branches`,
        b: `The last matching branch`,
        c: `Any of the non matching branches`,
        d: `The first matching branch`,
        correct: "d",
    },
    {
        question: `The following statement ...

        assert x != 0`,
        a: `will stop the program if x is equal to 0`,
        b: `will stop the program if x is not equal to 0`,
        c: `will stop the program if x is bigger to 0`,
        d: `will stop the program if x`,
        correct: "a",
    },
    {
        question: `What is the output of the following snippet of code:

        1: my_dict = {'a':1, 'b':2}
        2: try:
        3:     my_dict['c']
        4: except IndexError:
        5:     print('A', end=' ')
        6: except Exception:
        7:     print("B", end=' ')
        8: except KeyError:
        9:     print("C", end=' ')`,

        a: `B C`,
        b: `A`,
        c: `B`,
        d: `C`,
        correct: "c",
    },
    
    {
        question: `What is the expected output of the following code?

        1: consts = (3.141592, 2.718282)
        2: try:
        3:     print(consts.index(314e-2))
        4: except Exception as exception:
        5:     print(exception.args)
        6: else:
        7:     print("('success')")`,
        
        a: `-1`,
        b: `False`,
        c: `('success')`,
        d: `('tuple.index(x): x not in tuple',)`,
        correct: "d",
    },
    
    {
        question: `What is the expected output of the following code?
        
        1:     try:
        2:         raise Exception
        3:     except:
        4:         print('c')
        5:     except BaseException:
        6:         print('a')
        7:     except Exception:
        8:         print('b')`,
        a: `a`,
        b: `b`,
        c: `c`,
        d: `The code is erroneous`,
        correct: "d",
    },
    
    {
        question: `The top-most Python exception is named:`,
        a: `BaseException`,
        b: `Exception`,
        c: `PythonException`,
        d: `MainException`,
        correct: "a",
    },
    
    {
        question: `Which of the following statements is true?`,
        a: `The open() function raises an execption when its
         operation fails`,
        b: `Trying to write a file opened in read-only mode
        removes its contents`,
        c: `read, write, and delete are the names of file
        open modes`,
        d: `read, open, and erase are the names of file
        open modes`,
        correct: "a",
    },
    
    {
        question: `What is the meaning of the value represented by errno.EEXIST?`,
        a: `File exists`,
        b: `Permission denied`,
        c: `File does not exists`,
        d: `Bad file number`,
        correct: "a",
    },

    {
        question: `What is the output of the following code:

        1: def func(a):
        2:     print(a)
        3:  
        4: func()
    
    `,

        a: `TypeError occurs`,
        b: `a`,
        c: `AttributeError occurs`,
        d: `ValueError occurs`,
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