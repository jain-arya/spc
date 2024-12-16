# Stone-Paper-Scissors Game

This project is a web-based implementation of the classic **Stone-Paper-Scissors** game, where a user can play against the computer. It is built using JavaScript for the game logic and DOM manipulation.

## Features

- **Interactive Gameplay**: Choose between Stone, Paper, or Scissors to play against the computer.
- **Dynamic Score Tracking**: Keeps track of the user and computer scores.
- **Real-time Feedback**: Displays the result of each round (Win, Lose, or Draw) with messages and background colors.
- **Randomized Computer Choice**: Ensures fairness by generating random computer moves.

## How It Works

1. The user selects one of the three options (Stone, Paper, Scissors) by clicking on a button.
2. The computer randomly generates its choice.
3. The game determines the winner based on standard rules:
   - **Stone beats Scissors**
   - **Paper beats Stone**
   - **Scissors beat Paper**
   - Identical choices result in a draw.
4. The score is updated, and a message is displayed to indicate the outcome of the round.

## Technologies Used

- **HTML**: For the structure of the game interface.
- **CSS**: For styling the game layout and visual feedback.
- **JavaScript**: For implementing the game logic and interactivity.

## Code Overview

- **`generateChoice`**: Generates a random choice for the computer.
- **`playGame`**: Determines the winner by comparing the user's choice with the computer's choice.
- **`result`**: Updates the scores and displays the result of each round.
- **`draw`**: Handles the draw scenario.
- **Event Listeners**: Captures the user's choice and triggers the game logic.

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo/stone-paper-scissors
