const initialTime = 600;
const maxQuarters = 4;

let scoreA = 0;
let scoreB = 0;
let time = initialTime;
let currentQuarter = 1;
let interval = null;
let speed = 1;
let gameOver = false;

function addPoints(team, points) {
  if (gameOver) return;
  playSound("clickSound");

  if (team === "A") {
    scoreA += points;
    localStorage.setItem("scoreA", scoreA);
    updateScore("scoreA", scoreA);
  } else if (team === "B") {
    scoreB += points;
    localStorage.setItem("scoreB", scoreB);
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

  let stats = JSON.parse(localStorage.getItem("stats")) || [];
  stats.unshift({ quarter, team, points });
  localStorage.setItem("stats", JSON.stringify(stats));
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
  scoreA = parseInt(localStorage.getItem("scoreA")) || 0;
  scoreB = parseInt(localStorage.getItem("scoreB")) || 0;
  time = parseInt(localStorage.getItem("time"));
  if (isNaN(time)) {
    time = initialTime;
  }
  currentQuarter = parseInt(localStorage.getItem("currentQuarter")) || 1;
  gameOver = JSON.parse(localStorage.getItem("gameOver")) || false;

  updateScore("scoreA", scoreA);
  updateScore("scoreB", scoreB);
  document.getElementById("quarter").textContent = `${currentQuarter} kėlinys`;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("time").textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  let stats = JSON.parse(localStorage.getItem("stats")) || [];
  stats.forEach((stat) => addStatsRow(stat.quarter, stat.team, stat.points));

  if (!gameOver) {
    interval = setInterval(updateTimer, 1000 / speed);
  } else {
    clearInterval(interval);
  }
}

function addStatsRow(quarter, team, points) {
  const table = document
    .getElementById("statsTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  const cellQuarter = newRow.insertCell(0);
  const cellTeam = newRow.insertCell(1);
  const cellPoints = newRow.insertCell(2);

  cellQuarter.textContent = quarter;
  cellTeam.textContent = team === "A" ? "Komanda A" : "Komanda B";
  cellPoints.textContent = points;
}

function updateTimer() {
  if (time > 0) {
    updateTime();
  } else {
    handleEndOfQuarter();
    localStorage.setItem("time", time);
  }
}

function updateTime() {
  time--;
  localStorage.setItem("time", time);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("time").textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function handleEndOfQuarter() {
  if (currentQuarter <= maxQuarters) {
    playSound("buzzerSound");
  }
  currentQuarter++;
  if (currentQuarter <= maxQuarters) {
    resetQuarter();
  } else {
    time = 0;
    localStorage.setItem("time", time);
    endGame();
  }
}

function resetQuarter() {
  if (!gameOver) {
    document.getElementById(
      "quarter"
    ).textContent = `${currentQuarter} kėlinys`;
    localStorage.setItem("currentQuarter", currentQuarter);
    time = initialTime;
    localStorage.setItem("time", time);
  }
}

function endGame() {
  clearInterval(interval);
  gameOver = true;
  localStorage.setItem("gameOver", gameOver);
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

  const restartButton = document.querySelector(".restart-button");
  restartButton.disabled = true;

  setTimeout(() => {
    restartButton.disabled = false;
    restartButton.focus();
  }, 1001);

  setTimeout(() => playSound("winSound"), 1000);
}

function restartGame() {
  playSound("resetSound");

  scoreA = 0;
  scoreB = 0;
  time = initialTime;
  currentQuarter = 1;
  speed = 1;
  gameOver = false;
  localStorage.setItem("gameOver", gameOver);

  updateScore("scoreA", scoreA);
  updateScore("scoreB", scoreB);
  document.getElementById("quarter").textContent = `${currentQuarter} kėlinys`;
  localStorage.setItem("currentQuarter", currentQuarter);
  document.getElementById("time").textContent = "10:00";

  localStorage.removeItem("scoreA");
  localStorage.removeItem("scoreB");
  localStorage.removeItem("time");
  localStorage.removeItem("stats");

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
