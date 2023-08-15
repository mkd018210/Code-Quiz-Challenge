var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

function init() {
    getWins();
    getlosses();
  }

  function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }

  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }

  function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
  }

  function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }

  function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
      loseCounter = 0;
    } else {
      loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
  }

  startButton.addEventListener("click", startGame);

  init();

  const Questions = [{
    q: "Commonly used data types DO NOT Include:",
    a: [{ text: "1. strings", isCorrect: false },
    { text: "2. booleans", isCorrect: false },
    { text: "3. alerts", isCorrect: true },
    { text: "4. numbers", isCorrect: false }
    ]

},
{
    q: "The condition in an if/else statement is enclosed within_____.",
    a: [{ text: "1. quotes", isCorrect: false, isSelected: false },
    { text: "2. curly brackets", isCorrect: true },
    { text: "3. parentheses", isCorrect: false },
    { text: "4. square brackets", isCorrect: false }
    ]

},
{
    q: "Arrays in JavaScript can be used to store _______.",
    a: [{ text: "numbers & strings", isCorrect: false },
    { text: "other arrays", isCorrect: false },
    { text: "booleans", isCorrect: false },
    { text: "all of the above", isCorrect: true }
    ]
},
{
    q: "Sting values must be enclosed within ______ when being assigned to variables?",
    a: [{ text: "commas", isCorrect: false },
    { text: "curly brackets", isCorrect: false },
    { text: "quotes", isCorrect: true },
    { text: "parentheses", isCorrect: false }
    ]
},
{
    q: "A very useful tool used during development and debugging for printing content to the debugger it:",
        a: [{ text: "JavaScript", isCorrect: false },
        { text: "terminal/bash", isCorrect: false },
        { text: "for looping", isCorrect: false },
        { text: "console log", isCorrect: true }
        ]
},


]

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}

  