import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import bLogo from "../../assets/black-rook.png";
import wLogo from "../../assets/white-rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? bLogo : wLogo;
    this.name = FigureNames.ROOK;
  }
}