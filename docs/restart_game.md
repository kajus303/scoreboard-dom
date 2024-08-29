# Restart Game

## Description

The Restart Game feature allows users to reset the game, clearing all scores, resetting the timer, and removing any stored data in local storage, effectively starting the game from scratch.

## How It Works

- **Reset Scores:** Sets both teams' scores back to zero.
- **Reset Timer:** Resets the game timer to its initial value.
- **Clear Local Storage:** Removes all game-related data from local storage to ensure a fresh start.

## Code Example

```javascript
function restartGame() {
  scoreA = 0;
  scoreB = 0;
  time = initialTime;
  localStorage.clear();
  updateUI();
}

function updateUI() {
  document.getElementById("scoreA").textContent = scoreA;
  document.getElementById("time").textContent = formatTime(time);
}
```

## Related Features

- **Local Storage Persistence:** Clears stored data to ensure no residual state affects the new game.
- **End of Game:** Provides a way to start a new game after the previous game concludes.
