import React from "react";

import Guess from "../Guess";
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function PreviousGuesses({ answer, guesses = [] }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => (
        <Guess key={index} answer={answer} guess={guesses[guess]} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
