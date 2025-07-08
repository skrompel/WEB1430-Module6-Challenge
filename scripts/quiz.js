/*
    Author: Sahara Krompel
    Date: 7 July 2025
    Assignment: WEB 1430 Module 6 Challenge - Custom Quiz App
*/

'use strict';

// Task 1:  Initialize Variables and Select DOM Elements

// Quiz questions array
const QUIZ = [
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    answer: "// comment"
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var myVar;", "int myVar;", "let = myVar;", "define myVar;"],
    answer: "var myVar;"
  },
  {
    question: "Which symbol is used for assignment in JavaScript?",
    options: ["=", "==", "===", ":"],
    answer: "="
  },
  {
    question: "What will `console.log(5 + 3);` output?",
    options: ["53", "8", "undefined", "NaN"],
    answer: "8"
  },
  {
    question: "Which of these is a correct way to create a function?",
    options: [
      "function myFunction() {}",
      "function:myFunction() {}",
      "create function myFunction() {}",
      "myFunction = function {}"
    ],
    answer: "function myFunction() {}"
  },
  {
    question: "Which keyword is used to declare a constant value?",
    options: ["let", "const", "var", "constant"],
    answer: "const"
  },
  {
    question: "Which of the following is used to output data to the console?",
    options: ["print()", "console.log()", "write()", "alert()"],
    answer: "console.log()"
  },
  {
    question: "Which data type is used to store text?",
    options: ["String", "Number", "Boolean", "Array"],
    answer: "String"
  },
  {
    question: "How do you start a `for` loop in JavaScript?",
    options: [
      "for (let i = 0; i < 5; i++)",
      "loop i from 1 to 5",
      "for i = 1 to 5",
      "repeat 5 times"
    ],
    answer: "for (let i = 0; i < 5; i++)"
  },
  {
    question: "Which keyword is used to declare a variable that can change value?",
    options: ["const", "let", "var", "static"],
    answer: "let"
    }
];

let currentIndex = 0;
let correctAnswers = 0;

const QUESTION = document.querySelector('.question');
const OPTIONS = document.querySelector('.options');
const NEXTBTN = document.querySelector('#nextButton');
const SCORE =  document.querySelector('#score');
SCORE.textContent = `0 out of ${QUIZ.length} correct`; // Make score initially visible

// Task 2: Write a function to Render the Current Question

function renderQuestion() {
    // Display the current question and its answer options on the screen
    const CURRENTQ = QUIZ[currentIndex];
    QUESTION.textContent = CURRENTQ.question;
    OPTIONS.innerHTML = ''; // Clear previous set of options
    // For each option, create a button, and add a click event listener to each one
    CURRENTQ.options.forEach(opt => {
        // <li><button class="option-btn">option</button></li>
        const LI = document.createElement('li');
        const BTN = document.createElement('button');
        BTN.textContent = opt;
        BTN.classList.add('option-btn'); // To be able to select all option buttons
        BTN.addEventListener('click', () => handleAnswer(opt)); // Passes opt to handleAnswer(selectedOption)
        LI.appendChild(BTN);
        OPTIONS.appendChild(LI);
    });
}

// Task 3: Write a function to Handle the Option Selected
 
function handleAnswer(selectedOption) {
    const CORRECT = QUIZ[currentIndex].answer;
    const BUTTONS = document.querySelectorAll('.option-btn');
    // For each button, compare the button option to the correct answer
    BUTTONS.forEach(btn => {
        // Change styles for the correct/incorrect answers
        if (btn.textContent === CORRECT) {
            btn.style.backgroundColor = 'green';
        } else {
            btn.style.backgroundColor = 'red';
        }
        btn.disabled = true;
    });

    if (selectedOption === CORRECT) {
        correctAnswers++;
    }

    // Update score
    SCORE.textContent = `${correctAnswers} out of ${QUIZ.length} correct`;
}

// Task 4: Write a function to Handle the Next Question Logic

function nextQuestion() {
    currentIndex++;
    // Display each question and options until no more questions/options
    if (currentIndex < QUIZ.length) {
        renderQuestion();
    } else {
        QUESTION.textContent = "Quiz complete!";
        OPTIONS.innerHTML = ''; // Clear the options from the screen
        NEXTBTN.style.display = 'none'; // Hide the Next Question button
    }
}

// Add click Event Listener for the Next Question button
NEXTBTN.addEventListener('click', nextQuestion);

// Display the current question based on the currentIndex
renderQuestion();
