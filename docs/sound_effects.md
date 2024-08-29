# Sound Effects

## Description

The Sound Effects feature adds audio feedback to user actions within the game. Sounds are triggered when points are scored, when the timer reaches zero, or when the game ends.

## How It Works

- **UI Interaction:**

  - Sounds play automatically in response to user actions (e.g., adding points) or events (e.g., the end of a quarter).

- **JavaScript Logic:**
  - The `playSound(soundId)` function is used to play the corresponding sound effect. This function locates the audio element by its `id`, resets the sound to the beginning, and plays it.
  - Different sounds are assigned to different events (e.g., a buzzer sound for the end of a quarter, a click sound for score increments).

## Code Example

```javascript
function playSound(soundId) {
  const sound = document.getElementById(soundId);
  sound.currentTime = 0;
  sound.play();
}
```

## UI Elements

- **Audio Elements:** Audio elements are embedded in the HTML file, and each has an `id` corresponding to a specific event (e.g., `clickSound`, `buzzerSound`).

## Related Features

- **Score Increment:** The sound effect for scoring is closely related to the Score Increment feature.
- **Timer Functionality:** The buzzer sound is triggered by the Timer Functionality feature when a quarter ends.
