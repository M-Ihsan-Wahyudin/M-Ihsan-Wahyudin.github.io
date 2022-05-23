import generateQuestion from "./generate-question.js";
import Games from "./games.js";

const game = new Games();
const gameData = JSON.parse(localStorage.getItem("GameData")) || [];
let selectedGameData = {}
const answerItems = document.querySelectorAll(".puzzle-answer-item");
const questionItems = document.querySelectorAll(".puzzle-question-item");
const puzzleAnswer = document.getElementById("puzzle-answer");
const back = document.querySelectorAll(".back-to-lobby");
const endScore = document.querySelectorAll(".end-score");
const outGame = document.getElementById('out-game')
const popoverToggle = document.querySelector('[data-popover-toggle="false"]')
// const exit = document.getElementById("exit")
const user = JSON.parse(localStorage.getItem("DataUser"));
const username = document.getElementById("username");
let isCorrect = false;

username.innerHTML = user?.name;

for (const item of questionItems) {
  item.addEventListener("dragover", function (e) {
    e.preventDefault();
    console.log("over");
  });
  item.addEventListener("dragenter", function (e) {
    e.preventDefault();
    if (this.getAttribute("answered")) return (isCorrect = false);
    this.classList.add("bg-gray-500");
  });
  item.addEventListener("dragleave", function () {
    console.log("leave");
    this.classList.remove("bg-gray-500");
  });
  item.addEventListener("drop", checkAnswer);
}

let answerItemsTemp;

for (const item of answerItems) {
  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("answer", this.dataset.answer);
    answerItemsTemp = this;
    setTimeout(() => this.remove(), 0);
  });
  item.addEventListener("dragend", function () {
    const position = this.dataset.position;
    if (!isCorrect && !this.getAttribute("answered"))
      puzzleAnswer.insertBefore(
        answerItemsTemp,
        puzzleAnswer.children[position]
      );
  });

  item.addEventListener('touchstart', function(e){
    console.log(e)
    e.dataTransfer.setData("answer", this.dataset.answer);
    answerItemsTemp = this;
    setTimeout(() => this.remove(), 0);
  })
  item.addEventListener('touchend', function(){
    const position = this.dataset.position;
    if (!isCorrect && !this.getAttribute("answered"))
      puzzleAnswer.insertBefore(
        answerItemsTemp,
        puzzleAnswer.children[position]
      );
  })

  item.addEventListener('touchmove', function(e){
    console.log(e);
  })
}

function updateGameData(selectedGameData) {
  const index = gameData.findIndex((item) => item.game_id === selectedGameData.game_id);
  gameData[index] = selectedGameData;
  localStorage.setItem("GameData", JSON.stringify(gameData));
}

function suffleAnswer(questions) {
  const array = [...questions];
  for (var i = 0; i < array.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (array.length - i));

    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

function checkAnswer(e) {
  if (this.getAttribute("answered")) return (isCorrect = false);

  this.classList.remove("bg-gray-500");
  const answer = e.dataTransfer.getData("answer");
  if (answer === this.dataset.answer) {
    isCorrect = true;
    this.classList.add("bg-emerald-500");
    this.setAttribute("answered", true);
    game.addScore();
    selectedGameData.score = game.getScore()
    selectedGameData.answers = [
      ...selectedGameData.answers,
      selectedGameData.questions.find((item) => item.id === parseInt(this.dataset.id))
    ]
    updateGameData(selectedGameData)
  } else {
    isCorrect = false;
    this.classList.add("bg-red-500");
    game.removeHealth();
    selectedGameData.health = game.getHealth()
    updateGameData(selectedGameData)
    setTimeout(() => {
      this.classList.remove("bg-red-500");
    }, 1000);
  }

  if (game.getHealth() === 0) {
    endScore[0].innerHTML = game.getScore();
    toggleModal("modal-game-over");
  }

  if(selectedGameData.answers.length === selectedGameData.questions.length) {
    endScore[1].innerHTML = game.getScore();
    toggleModal("modal-game-end");
  }

}

function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.querySelector(".modal-toggle").click();
}

function checkGameHistory() {
  return gameData.find((game) => game.game_status === "progress" || game.game_status === "start");
}

function renderQuestion(questions) {
  questions.forEach((item, index) => {
    const answered = selectedGameData.answers.find((answer) => answer.id === item.id);
    if (answered) {
      questionItems[index].setAttribute("answered", true)
      questionItems[index].classList.add("bg-emerald-500");
    };
    questionItems[index].innerHTML = item.question;
    questionItems[index].dataset.answer = item.answer;
    questionItems[index].dataset.id = item.id;
  });
}

function renderAnswer(suffledAnswer) {
  suffledAnswer.map((item, index) => {
    const answered = selectedGameData.answers.find((answer) => answer.id === item.id);
    if (answered) answerItems[index].remove();
    else {
      answerItems[index].innerHTML = item.answer;
      answerItems[index].dataset.answer = item.answer;
      answerItems[index].dataset.position = index;
    }
  });
}

function createNewQuestion(gameData) {
  const questions = [];
  const totalQuestion = 9;
  for (let i = 0; i < totalQuestion; i++) {
    const result = generateQuestion(parseInt(gameData.level), gameData.type);
    questions.push({
      id: i + 1,
      ...result,
    });
  }
  return questions;
}

function setupContinuedGame(selectedGameData) {
  game.setScore(parseInt(selectedGameData.score));
  game.setHealth(parseInt(selectedGameData.health));
  game.init()

  if (game.getHealth() === 0) {
    endScore[0].innerHTML = game.getScore();
    toggleModal("modal-game-over");
  }
  
  if(selectedGameData.answers.length === selectedGameData.questions.length) {
    endScore[1].innerHTML = game.getScore();
    toggleModal("modal-game-end");
  }
}

function startGames() {
  const history = checkGameHistory()
  if (history.game_status === "progress") {
    selectedGameData = history;
    const data = gameData.find(item => item.game_id === history.game_id)
    renderQuestion(data.questions)
    const suffled = suffleAnswer(data.questions);
    renderAnswer(suffled);
    setupContinuedGame(data)
  } else if(history.game_status === "start") {
    let data = gameData.find(item => item.game_id === history.game_id);
    data = {
      ...data,
      game_status: "progress",
      questions: createNewQuestion(data),
    }
    selectedGameData = data;
    let gameDataIndex = gameData.findIndex(item => item.game_id === history.game_id);
    gameData[gameDataIndex] = data;
    localStorage.setItem("GameData", JSON.stringify(gameData));
    renderQuestion(data.questions)
    const suffled = suffleAnswer(data.questions);
    renderAnswer(suffled);
  }
}

function endGames() {
  selectedGameData.game_status = "end"
  selectedGameData.end_date = new Date();
  updateGameData(selectedGameData)
  window.location.href = "./lobby.html";
}

back.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    endGames()
  });
})

outGame.addEventListener('click', function (e) {
  e.preventDefault();
  endGames()
})

popoverToggle.addEventListener('click', function(e) {
  e.preventDefault()
  const popup = this.querySelector('.popup')
  popup.classList.toggle('invisible')
})


// exit.addEventListener('click', function(e) {
//   e.preventDefault()
//   toggleModal("modal-game-over")
//   window.location.href = './login.html'
// })
// toggleModal("modal-game-over")

startGames()