let scoreA = 0;
let scoreB = 0;
let time = 600;
let currentQuarter = 1;
let interval = null;
let speed = 1;

function addPoints(team, points) {
  if (team === "A") {
    scoreA += points;
    document.getElementById("scoreA").textContent = scoreA;
  } else if (team === "B") {
    scoreB += points;
    document.getElementById("scoreB").textContent = scoreB;
  }
  addStats(currentQuarter, team, points);
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
    currentQuarter++;
    if (currentQuarter <= 4) {
      document.getElementById(
        "quarter"
      ).textContent = `${currentQuarter} kėlinys`;
      time = 600;
    } else {
      clearInterval(interval);
      showWinner();
    }
  }
}

function showWinner() {
  const winner = scoreA > scoreB ? "Komanda A" : "Komanda B";
  document.getElementById("winnerMessage").textContent = `${winner} laimėjo!`;
  document.getElementById("winnerModal").style.display = "flex";

  const winSound = document.getElementById("winSound");
  winSound.currentTime = 48;
  winSound.play();
}

function closeModal() {
  document.getElementById("winnerModal").style.display = "none";
}

startTimer();
