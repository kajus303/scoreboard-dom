# Local Storage Persistence

## Description

The Local Storage Persistence feature ensures that key data, such as scores and remaining time, are stored in the browser's local storage. This allows the application to restore the state even after a page refresh.

## How It Works

- **Score Storage:** The scores for both teams are stored in local storage whenever they are updated.
- **Timer Storage:** The remaining time on the game clock is saved in local storage periodically.
- **Data Restoration:** When the page is refreshed, the application retrieves the stored data from local storage to restore the state.

## Code Example

```javascript
localStorage.setItem("scoreA", scoreA);
localStorage.setItem("time", time);

function restoreState() {
  scoreA = parseInt(localStorage.getItem("scoreA")) || 0;
  time = parseInt(localStorage.getItem("time")) || initialTime;
}
```

## Related Features

- **Score Increment:** Relies on local storage to maintain score state.
- **Timer Functionality:** Uses local storage to preserve the countdown timer state.
