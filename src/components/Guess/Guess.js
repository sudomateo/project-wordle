import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return <>
    <p className="guess">
      {range(0, 5).map((idx) => {
        const status = result ? result[idx].status : undefined;
        const className = status ? `cell ${status}` : "cell";

        return (
          <span key={idx} className={className}>
            {result ? result[idx].letter : undefined}
          </span>
        )
      })}
    </p>
  </>;
}

export default Guess;
