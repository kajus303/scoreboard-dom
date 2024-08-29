# End of Game

## Description

The End of Game feature handles the logic for determining and displaying the winner when the final quarter ends. It stops the timer, announces the winner, and disables further interaction until the game is restarted.

## How It Works

- **Game Conclusion:** When the timer reaches zero in the final quarter, the game concludes.
- **Winner Announcement:** The application compares the scores and displays a message announcing the winner or declaring a tie.
- **Disabling Controls:** After the game ends, all interactive elements (e.g., buttons) are disabled to prevent further changes.

## Code Example

```javascript
function endGame() {
  clearInterval(timer);
  gameOver = true;
  announceWinner();
}

function announceWinner() {
  let winner = "";
  if (scoreA > scoreB) {
    winner = "Team A Wins!";
  } else if (scoreB > scoreA) {
    winner = "Team B Wins!";
  } else {
    winner = "It's a Tie!";
  }
  document.getElementById("winnerMessage").textContent = winner;
}
```

## Related Features

- **Timer Functionality:** Triggers the end of game logic when the final quarter's timer reaches zero.
- **Score Increment:** The scores determine the outcome of the game.
