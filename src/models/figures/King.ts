import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import bLogo from "../../assets/black-king.png";
import wLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? bLogo : wLogo;
    this.name = FigureNames.KING;
  }
}