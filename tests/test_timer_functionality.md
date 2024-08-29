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
