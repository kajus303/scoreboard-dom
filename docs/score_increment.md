# Score Increment Feature

## Description

The Score Increment feature allows users to increase the score for either Team A or Team B by clicking on the respective buttons. The user can add 1, 2, or 3 points to the score of the selected team. This feature updates the score display in real-time and ensures that the score is saved in the browser's local storage so that it persists across page reloads.

## How It Works

- **UI Interaction:**

  - The user clicks on one of the buttons labeled "+1", "+2", or "+3" under the respective team.
  - Each button is associated with a JavaScript function that handles the score increment.

- **JavaScript Logic:**

  - The function `addPoints(team, points)` is called when a button is clicked.
  - This function takes two arguments: `team` (which is either "A" or "B") and `points` (the number of points to add).
  - Based on the `team` argument, the function increments the corresponding team’s score.
  - The updated score is then saved to `localStorage` using `localStorage.setItem("scoreA", scoreA)` for Team A or `localStorage.setItem("scoreB", scoreB)` for Team B.

- **LocalStorage Persistence:**
  - The score is stored in the browser’s `localStorage`, allowing the application to retain the scores even if the user refreshes the page or closes and reopens the browser.

## Code Example

```javascript
function addPoints(team, points) {
  if (team === "A") {
    scoreA += points;
    localStorage.setItem("scoreA", scoreA);
    updateScore("scoreA", scoreA);
  } else if (team === "B") {
    scoreB += points;
    localStorage.setItem("scoreB", scoreB);
    updateScore("scoreB", scoreB);
  }
}

function updateScore(elementId, score) {
  document.getElementById(elementId).textContent = score;
}
```

## UI Elements

- **Buttons:** The buttons for incrementing the score are located under each team’s score display. Each button is styled and labeled according to the points it adds.
- **Score Display:** The updated score is shown in a designated area on the user interface for each team.

## Related Features

- **Timer Feature:** The Score Increment feature is often used in conjunction with the Timer Feature, where the score increments based on time-bound actions.
