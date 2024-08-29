# Timer Functionality

## Description

The Timer Functionality feature manages the countdown of game time for each quarter. The timer starts at a predefined value (e.g., 10 minutes) and counts down to zero. When the timer reaches zero, the quarter ends, and the next quarter begins, or the game ends if all quarters are completed.

## How It Works

- **UI Interaction:**

  - The timer is displayed prominently in the middle of the scoreboard.
  - The user can adjust the speed of the timer using buttons with predefined speed multipliers (e.g., 1x, 2x, 5x).

- **JavaScript Logic:**

  - The timer is controlled by the `setInterval` function, which updates the displayed time every second (or faster, depending on the selected speed).
  - When the timer reaches zero, the `handleEndOfQuarter()` function is triggered, which plays a buzzer sound and resets the timer for the next quarter or ends the game.

- **LocalStorage Persistence:**
  - The remaining time is saved in `localStorage` so that if the page is refreshed, the timer can resume from where it left off.

## Code Example

```javascript
function updateTimer() {
  if (time > 0) {
    time--;
    localStorage.setItem("time", time);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("time").textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  } else {
    handleEndOfQuarter();
  }
}

function handleEndOfQuarter() {
  playSound("buzzerSound");
  currentQuarter++;
  if (currentQuarter <= maxQuarters) {
    resetQuarter();
  } else {
    endGame();
  }
}
```

## UI Elements

- **Timer Display:** The current time remaining in the quarter is displayed in a central, prominent position on the scoreboard.
- **Speed Control Buttons:** Buttons allow the user to adjust the speed of the countdown.

## Related Features

- **Score Increment:** The timer often works alongside the Score Increment feature to update scores based on time-related events.
