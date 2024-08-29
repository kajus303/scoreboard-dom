# Test Scenarios for Scoreboard Application

## Overview

This document outlines the test scenarios for the scoreboard application. The scenarios cover the core functionalities, including score incrementing, timer countdown, and sound effects. Each scenario includes steps to reproduce, expected outcomes, and space for documenting actual results.

---

## Test Scenario 1: Score Increment

### Description

This test verifies that the score increment functionality works correctly for both Team A and Team B. The scenario ensures that the score updates in the UI and persists after a page refresh.

### Steps to Reproduce

1. Open the scoreboard application in a web browser.
2. Click the "+1" button under the score display for Team A.
3. Observe the updated score for Team A.
4. Refresh the browser.
5. Check if the score for Team A persists after the refresh.
6. Repeat steps 2-5 for Team B using the "+2" and "+3" buttons.

### Expected Outcome

- The score for the selected team should increment by the appropriate amount (+1, +2, or +3) when the corresponding button is clicked.
- The updated score should persist after refreshing the browser.

### Actual Results

(Record the actual outcome here after testing)

---

## Test Scenario 2: Timer Countdown

### Description

This test ensures that the timer counts down correctly from its initial value, triggers the end of the quarter when it reaches zero, and resets for the next quarter.

### Steps to Reproduce

1. Start the scoreboard application.
2. Observe the timer as it counts down from the initial value (e.g., 10:00).
3. Allow the timer to reach zero.
4. Observe what happens when the timer hits zero (e.g., sound triggers, quarter changes).
5. Verify that the timer resets to the initial value for the next quarter.

### Expected Outcome

- The timer should decrement accurately, second by second.
- When the timer reaches zero, a buzzer sound should play, the current quarter should end, and the timer should reset for the next quarter.

### Actual Results

(Record the actual outcome here after testing)

---

## Test Scenario 3: Sound Effects

### Description

This test verifies that sound effects play correctly in response to user actions, such as incrementing scores and the timer reaching zero.

### Steps to Reproduce

1. Ensure that your device’s sound is on.
2. Perform a score increment for Team A by clicking the "+1" button.
3. Listen for the sound effect associated with the score increment.
4. Allow the timer to reach zero and listen for the buzzer sound.
5. Repeat the score increment for Team B and verify the corresponding sound.

### Expected Outcome

- A sound effect should play immediately when a score is incremented.
- A buzzer sound should play when the timer reaches zero.

### Actual Results

(Record the actual outcome here after testing)

---

## Test Scenario 4: Local Storage Persistence

### Description

This test ensures that the application correctly stores the scores and the current time in local storage so that data persists across page reloads.

### Steps to Reproduce

1. Open the scoreboard application in a web browser.
2. Increment the score for both Team A and Team B.
3. Refresh the browser page.
4. Verify that the scores for both teams persist and are correctly displayed after the refresh.
5. Allow the timer to count down for a few seconds, then refresh the browser.
6. Verify that the remaining time is correctly displayed after the refresh.

### Expected Outcome

- The scores for both teams should persist in local storage and be displayed correctly after a page refresh.
- The remaining time on the timer should persist and be displayed correctly after a page refresh.

### Actual Results

(Record the actual outcome here after testing)

---

## Test Scenario 5: End of Game

### Description

This test verifies that the application correctly handles the end of the game, including the display of the winner and stopping the timer.

### Steps to Reproduce

1. Start the scoreboard application.
2. Allow the timer to count down to zero for the final quarter.
3. Observe the application’s behavior when the final quarter ends.
4. Verify that the winner is correctly displayed based on the final scores.
5. Ensure that the timer stops and does not reset after the game ends.

### Expected Outcome

- When the final quarter ends, the application should display the winning team (or a message for a tie).
- The timer should stop and not reset after the game ends.

### Actual Results

(Record the actual outcome here after testing)

---

## Test Scenario 6: Restart Game

### Description

This test ensures that the application resets correctly when the user chooses to restart the game, clearing all scores, resetting the timer, and clearing any stored data.

### Steps to Reproduce

1. Start the scoreboard application and increment scores for both teams.
2. Let the timer count down for a few seconds.
3. Click the "Restart Game" button.
4. Verify that all scores are reset to zero.
5. Verify that the timer is reset to the initial value.
6. Check that any data stored in local storage is cleared.

### Expected Outcome

- All scores should reset to zero.
- The timer should reset to its initial value.
- Local storage should be cleared, removing any previously stored scores and time.

### Actual Results

(Record the actual outcome here after testing)
