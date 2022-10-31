const quizData = [
    {
        question: `Which of the following commands is used to open a file in binary format for writing only?`,

        a: `open('data.txt', 'wb')`,
        b: `open('data.txt', 'w')`,
        c: `open('data.txt', 'w+')`,
        d: `open('data.txt', 'wb+')`,
        correct: "a",
    },
    {
        question: `Which of the following open modes allow you to perform read operations?`,

        a: `r`,
        b: `w`,
        c: `a`,
        d: `None of the above`,
        correct: "a",
    },
    {
        question: `Which of the following statements are true regarding the opening modes of a file?`,

        a: `When you open a file for writing,
        if the file does not exist, an error occurs.`,
        b: `When you open a file for reading,
        if the file does not exist, an error occurs.`,
        c: `When you open a file for reading,
        if the file does not exist, the program will open an empty file.`,
        d: `There are no True statements`,
        correct: "b",
    },
    {
        question: `Which method will you use to read one line from a text file?`,
        a: `readlines()`,
        b: `readline()`,
        c: `readln()`,
        d: `readstr()`,
        correct: "b",
    },
    {
        question: `You want to write a new player to a file and print the whole file content to the monitor.
        What snippet would you insert in the line indicated below:
        
        
        1:    customer = 'Peter Wellert'
        2:    with open('customers.txt', 'a+') as f:
        3:        f.write(customer)
        4:        # insert your code here
        5:        data = f.read()
        6:        print(data)`,

        a: `f.begin()`,
        b: `f.flush()`,
        c: `f.close()`,
        d: `f.seek(0)`,
        correct: "d",
    },
    {
        question: `Which of the following commands can be used to read the next line from a file?`,
        a: `readlines()`,
        b: `read()`,
        c: `readline()`,
        d: `read(n)`,
        correct: "c",
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
        question: `You want to be able to read and write data to a file.
        The file needs to be automatically created, if it doesn't exist.
        If the file does already exist, you want to override the existing content.
        Which of the following commands do you have to choose?`,

        a: `open('data.txt', 'w')`,
        b: `open('data.txt', 'r+')`,
        c: `open('data.txt', 'r')`,
        d: `open('data.txt', 'w+')`,
        correct: "d",
    },
    {
        question: `The following line of code ...
        1: for line in open('data.txt', 'r'):`,

        a: `is valid as open returns an iterable object`,
        b: `is invalid as open returns nothing`,
        c: `may be valid if line is a list`,
        d: `is invalid as open returns a non-iterable object`,
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
        question: `If x is a file opened in read mode, what will the following line do?

        1: data = x.read(1)`,

        a: `Read 1 kilobyte from the file`,
        b: `Read 1 buffer from the file`,
        c: `Read 1 character from the file`,
        d: `Read 1 line from the file`,
        correct: "c",
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
        question: `The two basic, mutually exclusive, file open modes are named:`,

        a: `binary and text`,
        b: `binary and ternary`,
        c: `text and image`,
        d: `binary and binary`,
        correct: "a",
    },
    
    {
        question: `What does the readline() method return, when the end of the file is reached?`,
        
        a: `An empty string`,
        b: `-1`,
        c: `An exception`,
        d: `E0F`,
        correct: "a",
    },
    
    {
        question: `You want to write more text into an already existing file.
        Which of the modes below do you have to use to only open the file for writing?`,
        a: `at`,
        b: `at+`,
        c: `ab`,
        d: `at+`,
        correct: "a",
    },
    
    {
        question: `You want to access the test.txt file and retrieve each line in it.

        1: file = open('test.txt')
        2: # insert code here
        3: file.close()
    
        Which option will you use?`,
        a: `print(file.read())`,
        b: `print(file.lines())`,
        c: `print(read.file(test.txt))`,
        d: `print(file.readlines(all))`,
        correct: "a",
    },
    
    {
        question: `You want to access the test.txt file and retrieve each line in it.

        1: file = open('test.txt')
        2: # insert code here
        3: file.close()
    
        Which option will you use?`,
        a: `print(read.file(test.txt))`,
        b: `print(readlines(file))`,
        c: `print(file.all)`,
        d: `1: for f in file:
            2:    print(f)`,
        correct: "d",
    },
    
    {
        question: `You want to access the test.txt file and retrieve each line in it.

        1: file = open('test.txt')
        2: # insert code here
        3: file.close()
    
        Which option will you use?`,
        a: `print(file.read)`,
        b: `print(file.readlines())`,
        c: `print(file.lines(all))`,
        d: `print(read.file)`,
        correct: "b",
    },

    {
        question: `Presume f is a file opened in read mode.
        What will be the type of data after the following line?
        
        1: data = f.readlines()`,

        a: `list`,
        b: `string`,
        c: `tuple`,
        d: `dict`,
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