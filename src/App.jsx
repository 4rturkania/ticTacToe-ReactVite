import './styles.scss';
import { useState } from 'react';
import StatusMessage from './components/StatusMessage';
import Board from './components/Board';

import { calculateWinner } from './winner';

function App() {
  //empty squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  //state for switching between X and O
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

  //Write X or O on a clicked square
  const handleSquareClick = clickedPosition => {
    //don't change squares with something in them already
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    //switch X and O
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage isXNext={isXNext} winner={winner} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
