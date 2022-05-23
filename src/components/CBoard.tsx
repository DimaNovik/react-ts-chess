import React, { FC } from "react";
import { Board } from "../models/Board";
import CCell from "./CCell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const CBoard: FC<BoardProps> = ({ board, setBoard}) => {
  return(
    <div className="board">
      { board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {
            row.map(cell => 
              <CCell cell={cell} key={cell.id}/>
            )
          }
        </React.Fragment>
    )}
    </div>
  )
}

export default CBoard;