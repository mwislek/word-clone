import React, { useState } from "react";

function GuessForm({ addGuess }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ guess })
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guess"
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess)
        }}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        required
        title="Enter exactly 5 letters"
        type="text"
        value={guess}
      />
    </form>
  );
}

export default GuessForm;
