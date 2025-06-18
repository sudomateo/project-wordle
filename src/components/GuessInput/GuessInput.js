import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  return <>
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== "running"}
        required
        value={guess}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }} />
    </form>
  </>;
}

export default GuessInput;
