const INITIAL_TIME = 600;
const MAX_QUARTERS = 4;

let scoreA = 0;
let scoreB = 0;
let time = INITIAL_TIME;
let currentQuarter = 1;
let interval = null;
let speed = 1;
let gameOver = false;

function addPoints(team, points) {
  if (gameOver) return;
  playSound("clickSound");

  if (team === "A") {
    scoreA += points;
    updateScore("scoreA", scoreA);
  } else if (team === "B") {
    scoreB += points;
    updateScore("scoreB", scoreB);
  }
  addStats(currentQuarter, team, points);
}

function updateScore(elementId, score) {
  document.getElementById(elementId).textContent = score;
}

function playSound(soundId) {
  const sound = document.getElementById(soundId);
  sound.currentTime = 0;
  sound.play();
}

function addStats(quarter, team, points) {
  const table = document
    .getElementById("statsTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(0);
  const cellQuarter = newRow.insertCell(0);
  const cellTeam = newRow.insertCell(1);
  const cellPoints = newRow.insertCell(2);

  cellQuarter.textContent = quarter;
  cellTeam.textContent = team === "A" ? "Komanda A" : "Komanda B";
  cellPoints.textContent = points;
}

function setSpeed(newSpeed) {
  if (gameOver) return;
  speed = newSpeed;
  restartInterval();
}

function restartInterval() {
  clearInterval(interval);
  interval = setInterval(updateTimer, 1000 / speed);
}

function startTimer() {
  interval = setInterval(updateTimer, 1000 / speed);
}

function updateTimer() {
  if (time > 0) {
    updateTime();
  } else {
    handleEndOfQuarter();
  }
}

function updateTime() {
  time--;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("time").textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function handleEndOfQuarter() {
  if (currentQuarter <= MAX_QUARTERS) {
    playSound("buzzerSound");
  }
  currentQuarter++;
  if (currentQuarter <= MAX_QUARTERS) {
    resetQuarter();
  } else {
    endGame();
  }
}

function resetQuarter() {
  document.getElementById("quarter").textContent = `${currentQuarter} kėlinys`;
  time = INITIAL_TIME;
}

function endGame() {
  clearInterval(interval);
  gameOver = true;
  showWinner();
}

function showWinner() {
  let winnerMessage = "";
  if (scoreA > scoreB) {
    winnerMessage = "Komanda A laimėjo!";
  } else if (scoreA < scoreB) {
    winnerMessage = "Komanda B laimėjo!";
  } else {
    winnerMessage = "Lygiosios!";
  }
  document.getElementById("winnerMessage").textContent = winnerMessage;
  document.getElementById("winnerModal").style.display = "flex";

  setTimeout(() => playSound("winSound"), 1000);
}

function restartGame() {
  playSound("resetSound");

  scoreA = 0;
  scoreB = 0;
  time = INITIAL_TIME;
  currentQuarter = 1;
  speed = 1;
  gameOver = false;

  updateScore("scoreA", scoreA);
  updateScore("scoreB", scoreB);
  document.getElementById("quarter").textContent = `${currentQuarter} kėlinys`;
  document.getElementById("time").textContent = "10:00";

  clearStatsTable();
  stopSound("winSound");

  closeModal();
  restartInterval();
}

function clearStatsTable() {
  const table = document
    .getElementById("statsTable")
    .getElementsByTagName("tbody")[0];
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

function stopSound(soundId) {
  const sound = document.getElementById(soundId);
  sound.pause();
  sound.currentTime = 0;
}

function closeModal() {
  document.getElementById("winnerModal").style.display = "none";
}

startTimer();
