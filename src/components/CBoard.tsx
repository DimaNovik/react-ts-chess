import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import CCell from "./CCell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
  
}

const CBoard: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    availableCells();
  }, [selectedCell]);

  function click(cell: Cell) {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      updateBoard();
    } else {
      if(cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  function availableCells() {
      board.availableCells(selectedCell);
      updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return(
    <div className="board">
      { board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {
            row.map(cell => 
              <CCell 
              cell={cell} 
              key={cell.id} 
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} 
              click={click}/>
            )
          }
        </React.Fragment>
    )}
    </div>
  )
}

export default CBoard;