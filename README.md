# Guess My Number! README

Welcome to the Guess My Number! game. This simple web-based game allows players to guess a number between 1 and 20 and compete to achieve the highest score.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Game Rules](#game-rules)
- [Development](#development)
- [Styling](#styling)

## Description

Guess My Number! is a fun guessing game where the player's objective is to guess the correct number between 1 and 20. The game provides feedback on each guess, helping players improve their strategy and maximize their score.

## Getting Started

To get started, simply open the `index.html` file in your preferred web browser. The game interface will guide you through the process of making guesses and keeping track of your score.

## Game Rules

1. The "Again" button resets the game, generating a new random number between 1 and 20, resetting the player's score and message, but retaining the highscore.

2. The "Check" button checks the input value against the randomly generated number (using `Math.floor(Math.random() * 20) + 1`).

3. If the input value is not the generated number, the message in the `<p class="message"></p>` element will display either "too low" or "too high," guiding the player on their next guess.

4. After every check, the player's score decreases.

5. The highscore is the best result achieved by the player and persists across game resets.

6. When the player wins by correctly guessing the number, the background color changes to green, providing a visual cue of success.

## Development

The game is developed using HTML, CSS, and JavaScript. The logic is implemented in the `script.js` file, where functions handle initializing the game, checking guesses, and updating the score and highscore.

For debugging purposes, set the `debug` variable to `true` in the script.

## Styling

The game is styled using a custom CSS file (`style.css`) and utilizes the "Press Start 2P" font from Google Fonts for a nostalgic feel. The layout is responsive and provides an enjoyable experience for users on various devices.
