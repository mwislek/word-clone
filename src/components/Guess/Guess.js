import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guess }) {
  const guessResults = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((value) => {
        const guessResult = guessResults?.at(value) ?? {};

        return (
          <Cell
            key={value}
            letter={guessResult.letter}
            status={guessResult.status}
          />
        );
      })}
    </p>
  );
}

export default Guess;

function Cell({ letter, status }) {
  const cellClasses = status ? `cell ${status}` : "cell";

  return <span className={cellClasses}>{letter}</span>;
}
