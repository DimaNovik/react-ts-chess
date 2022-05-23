import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FigureNames } from './Figure';
import bLogo from "../../assets/black-queen.png";
import wLogo from "../../assets/white-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? bLogo : wLogo;
    this.name = FigureNames.QUEEN;
  }
}