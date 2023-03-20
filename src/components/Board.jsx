import { useState } from 'react';
import Square from './Square';

const Board = () => {
  //empty squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  //state for switching between X and O
  const [isXNext, setIsXNext] = useState(false);

  //Write X or O on a clicked square
  const handleSquareClick = clickedPosition => {
    //don't change squares with something in them already
    if (squares[clickedPosition]) {
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

  //Rendering the board more concise
  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  //Render board
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
