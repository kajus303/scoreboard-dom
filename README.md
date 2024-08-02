# Švieslentė - Basketball Scoreboard

A responsive basketball scoreboard web application for tracking team scores, game time, and statistics.

## Features

- Track scores for two teams (Komanda A and Komanda B)
- Adjustable game timer with multiple speed options
- Automatic quarter management (up to 4 quarters)
- Persistent game state using `localStorage`
- Real-time score and statistics display
- Sound effects for button clicks, buzzer, and game win
- Restart game functionality

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

- **Start Game**: The game starts automatically when the page loads.
- **Add Points**: Click the buttons under each team to add points (1, 2, or 3 points).
- **Adjust Timer Speed**: Click the speed buttons (1x, 2x, 5x, etc.) to adjust the timer speed.
- **Restart Game**: Click the "Pradėti iš naujo" button to reset the game.
- **View Statistics**: Statistics for each quarter are displayed in the table below the scoreboard.

## File Structure

- `index.html`: Main HTML file that defines the structure of the scoreboard.
- `scoreboard.css`: CSS file for styling the scoreboard.
- `scoreboard.js`: JavaScript file for handling game logic and interactions.
- `sounds/`: Directory containing sound effect files.

## Sounds

- `mixkit-basketball-ball-hitting-the-net-2084.wav`: Sound for adding points.
- `mixkit-basketball-buzzer-1647.wav`: Buzzer sound for the end of quarters.
- `ERIKA.mp3`: Sound for the game win.
- `mixkit-hand-receiving-a-basketball-2090.wav`: Sound for restarting the game.
