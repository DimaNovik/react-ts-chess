import React, { FC } from "react";
import { Cell } from "../models/Cell";
import CFigure from "./CFigure";

interface CellProps {
  cell: Cell,
}

const CCell: FC<CellProps> = ({cell}) => {
  return(
    <div className={['cell', cell.color].join(' ')}>
      {cell.figure?.logo && <CFigure src={cell.figure.logo} name={cell.figure.name} />}
    </div>
  )
}

export default CCell;