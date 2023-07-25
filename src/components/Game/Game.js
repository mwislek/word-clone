import React, { useState } from "react";

import GuessForm from "../GuessForm";
import PreviousGuesses from "../PreviousGuesses";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  };

  const isGameOver = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GameResults answer={answer} guesses={guesses} isGameOver={isGameOver} />
      <PreviousGuesses answer={answer} guesses={guesses} />
      <GuessForm addGuess={addGuess} gameOver={isGameOver} />
    </>
  );
}

export default Game;

function GameResults({ answer, guesses, isGameOver }) {
  if (isGameOver) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  const isWinner = guesses.at(-1) === answer;
  if (isWinner) {
    const totalGuesses = guesses.length;

    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {totalGuesses === 1 ? "1 guess" : `${totalGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  }

  return null;
}
