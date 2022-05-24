import React, { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CCell from "./CCell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const CBoard: FC<BoardProps> = ({ board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    availableCells();
  }, [selectedCell]);

  function click(cell: Cell) {
    console.log(cell);
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      updateBoard();
    } else {
      setSelectedCell(cell)
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