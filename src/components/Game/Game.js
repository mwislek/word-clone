import React, { useState } from "react";

import GuessForm from "../GuessForm";
import PreviousGuesses from "../PreviousGuesses";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addGuess = (guess) => {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)
  }

  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <GuessForm addGuess={addGuess} />
    </>
  );
}

export default Game;
