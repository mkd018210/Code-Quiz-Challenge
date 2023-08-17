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
    { text: "2. curly brackets", isCorrect: false },
    { text: "3. parentheses", isCorrect: false },
    { text: "4. square brackets", isCorrect: true }
    ]

},
{
    q: "Arrays in JavaScript can be used to store _______.",
    a: [{ text: "1. numbers & strings", isCorrect: false },
    { text: "2. other arrays", isCorrect: false },
    { text: "3. booleans", isCorrect: false },
    { text: "4. all of the above", isCorrect: true }
    ]
},
{
    q: "Sting values must be enclosed within ______ when being assigned to variables?",
    a: [{ text: "1. commas", isCorrect: false },
    { text: "2. curly brackets", isCorrect: false },
    { text: "3. quotes", isCorrect: true },
    { text: "4. parentheses", isCorrect: false }
    ]
},
{
    q: "A very useful tool used during development and debugging for printing content to the debugger it:",
        a: [{ text: "1 .JavaScript", isCorrect: false },
        { text: "2. terminal/bash", isCorrect: false },
        { text: "3. for looping", isCorrect: false },
        { text: "4. console log", isCorrect: true }
        ]
},


]


  