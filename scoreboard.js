let scoreA = 0;
let scoreB = 0;
let time = 600;
let currentQuarter = 1;
let interval = null;
let speed = 1;
let gameOver = false;

function addPoints(team, points) {
  if (gameOver) return;
  playClickSound();
  if (team === "A") {
    scoreA += points;
    document.getElementById("scoreA").textContent = scoreA;
  } else if (team === "B") {
    scoreB += points;
    document.getElementById("scoreB").textContent = scoreB;
  }
  addStats(currentQuarter, team, points);
}

function playClickSound() {
  const clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();
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
  clearInterval(interval);
  startTimer();
}

function startTimer() {
  interval = setInterval(updateTimer, 1000 / speed);
}

function updateTimer() {
  if (time > 0) {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("time").textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  } else {
    if (currentQuarter < 4) {
      playBuzzerSound();
    }
    currentQuarter++;
    if (currentQuarter <= 4) {
      document.getElementById(
        "quarter"
      ).textContent = `${currentQuarter} kėlinys`;
      time = 600;
    } else {
      clearInterval(interval);
      gameOver = true;
      showWinner();
    }
  }
}

function playBuzzerSound() {
  const buzzerSound = document.getElementById("buzzerSound");
  buzzerSound.currentTime = 0;
  buzzerSound.play();
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

  const winSound = document.getElementById("winSound");
  winSound.currentTime = 0;
  winSound.play();
}

function restartGame() {
  scoreA = 0;
  scoreB = 0;
  time = 600;
  currentQuarter = 1;
  speed = 1;
  gameOver = false;

  document.getElementById("scoreA").textContent = scoreA;
  document.getElementById("scoreB").textContent = scoreB;
  document.getElementById("quarter").textContent = `${currentQuarter} kėlinys`;
  document.getElementById("time").textContent = "10:00";

  const table = document
    .getElementById("statsTable")
    .getElementsByTagName("tbody")[0];
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  const winSound = document.getElementById("winSound");
  winSound.pause();
  winSound.currentTime = 0;

  closeModal();
  clearInterval(interval);
  startTimer();
}

function closeModal() {
  document.getElementById("winnerModal").style.display = "none";
}

startTimer();
