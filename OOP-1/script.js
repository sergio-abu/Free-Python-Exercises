const quizData = [
    {
        question: ``,

        a: ``,
        b: ``,
        c: ``,
        d: ``,
        correct: "d",
    },
    {
        question: `The file abc.txt contains the following 3 lines of text:

        1: abc
        2: def
        3: ghi
    
    What is the output of the following snippet of code in abc.py file?
    
        1: file = open('abc.txt')
        2: a = [i for i in file]
        3: print(a)`,

        a: `['abcdefghi']`,
        b: `['a', 'b', 'c', '\\n', 'd', 'e', 'f', '\\n', 'g', 'h', 'i']`,
        c: `['abc\\n', 'def\\n', 'ghi']`,
        d: `['abc', 'def', 'ghi']`,
        correct: "c",
    },
    {
        question: `The file abc.txt contains the following 3 lines of text:

        1: abc
        2: def
        3: ghi
    
    What is the output of the following snippet of code in abc.py file?
    
        1: file = open('abc.txt', 'w')
        2: file.close()
        3: file = open('abc.txt')
        4: print(file.read())`,

        a: `An empty string is output`,
        b: `An error occurs`,
        c: `1: abc`,
        d: `1: abc
            2: def
            3: ghi`,
        correct: "a",
    },
    {
        question: `The file abc.txt contains the following 1 line of text:

        1: Hello World
        
        What is the output of the following snippet of code in abc.py file?
        
            1: file = open('abc.txt')
            2: print(file.read(4))`,
        a: `1: Hello World`,
        b: `1: Hell`,
        c: `1: Hello`,
        d: `A ValueError occurs`,
        correct: "b",
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
        question: `Which of the following statements is true?`,
        a: `When opening a file in write mode,
             it deletes all previous content in that file`,
        b: `When opening a file in write mode,
             if it doesn't exist, an error is thrown`,
        c: `It is not possible to open a file in both read
             and write mode simultaneosly`,
        d: `When opening a file in read mode, if it doesn't exist,
             an empty file will be created`,
        correct: "a",
    },
    {
        question: `What is the content of the file xyz.txt after the following code is run?

        1: file = open('xyz.txt', 'w')
        2: a = [1,2,3,4,5]
        3: for i in a:
        4:     file.write(str(i))`,
        a: `An error occurs`,
        b: `1: 1, 2, 3, 4, 5`,
        c: `1: 1
            2: 2
            3: 3
            4: 4
            5: 5`,
        d: `1: 12345`,
        correct: "d",
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
        question: `Which of the following statements is true?`,
        a: `Opening a file with ‘a’ mode will set the current file
         position (the virtual reading/writing head)
          before the first byte of the file`,
        b: `Opening the file in 'rb' mode,
         opens it in binary read only mode`,
        c: `Opening the file in 'b' mode is valid`,
        d: `Opening a file with 'w' mode will set the current file
        position (the virtual reading/writing head) after
        the last byte of file`,
        correct: "b",
    },
    {
        question: `Which of the following statements is true`,
        a: `errno.ENOSPC constant refers to no space on disk error`,
        b: `errno.EFBIG constant refers to large font error in file`,
        c: `errno.ENOENT constant refers to large file error`,
        d: `errno.EEXIST constant refers to error when we try to open
        a file that doesn't exist`,
        correct: "a",
    },
    {
        question: `The file abc.txt contains the following 3 lines of text:

        1: abc
        2: def
        3: ghi
    
    What is the output of the following snippet of code in the abc.py file?
    
        1: file = open('abc.txt')
        2: print(len(file.readlines()))`,

        a: `An error occurs`,
        b: `1: 3`,
        c: `1: 2`,
        d: `1: 4`,
        correct: "b",
    },
    {
        question: `Which of the following statements is true?`,
        a: `Opening a file in 'a' mode allows writing to
        the end of the file, preserving the previous content`,
        b: `'w+' and 'r+' modes of opening a file are essentially the same`,
        c: `It is possible to open a read only file in 'r+' mode`,
        d: `Opening a file in 'a' mode allows reading and writing both`,
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
        question: `You want to write a code snippet to read the
        total data from a text file and print it to the monitor.
        What snippet would you insert in the line
        indicated below:
        
        
        1:    try:
        2:        file = open('data.txt', 'r')
        3:        # insert your code here
        4:        print(data)
        5:    except:
        6:        print('Something went wrong!')`,
        
        a: `data = file.readline()`,
        b: `data = file.load()`,
        c: `data - file.readlines()`,
        d: `data = file.read()`,
        correct: "d",
    },
    
    {
        question: `Which method is used to break the connection
        between the file handle and a physical file?`,
        a: `close()`,
        b: `shutup()`,
        c: `disconnect()`,
        d: `lock()`,
        correct: "a",
    },
    
    {
        question: `
        What is the expected output of the following code?

        1:  file = open('data.txt', 'w+')
        2:  print('Name of the file: ', file.name)
        3:  
        4:  s = 'Peter Wellert\nHello everybody'
        5:  file.write(s)
        6:  file.seek(0)
        7:  for line in file:
        8:      print(line)
        9:  
        10: file.close()`,
        a: `1: Peter Wellert
            2: Hello everybody`,
        b: `The code is erroneous`,
        c: `1: Name of the file: data.txt
            2: Peter Wellert
            3: 
            4: Hello everybody`,
        d: `1: Peter Wellert Hello everybody`,
        correct: "c",
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
        question: `What is the expected result
        of the following code?


        1: b = bytearray(3)
        2: print(b)`,
        a: `3`,
        b: `bytearray(b'3')`,
        c: `bytearray(0, 0, 0)`,
        d: `bytearray(b'\\x00\\x00z\\x00')`,
        correct: "d",
    },

    {
        question: `What is the expected output of the following code?


        1: colors = ['red\\n', 'yellow\\n', 'blue\\n']
        2: file = open('wellert.txt', 'w+')
        3: file.writelines(colors)
        4: file.close()
        5: file.seek(0)
        6: for line in file:
        7:    print(line)`,

        a: `The code is erroneous`,
        b: `redyellowblue`,
        c: `['red\\n', 'yellow\\n', 'blue\\n']`,
        d: `1: red
            2:
            3: yellow
            4:
            5: blue`,
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