import React from "react";

function PreviousGuesses({ guesses = [] }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={index}>{guess}</p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
