import React, { FC } from "react";
import { Cell } from "../models/Cell";
import CFigure from "./CFigure";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CCell: FC<CellProps> = ({cell, selected, click}) => {
  return(
    <div
      className={['cell', cell.color, selected ? 'cell--selected' : '', cell.available && cell.figure ? 'cell--available' : ''].join(' ')} 
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className="cell__available" />}
      {cell.figure?.logo && <CFigure src={cell.figure.logo} name={cell.figure.name} />}
    </div>
  )
}

export default CCell;