import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import bLogo from "../../assets/black-pawn.png";
import wLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? bLogo : wLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) {
      return false;
    }

    if(this.cell.isEmptyVertical(target)) {
      return true;
    }
    return false;
  }
}