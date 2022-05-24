import { Board } from './Board';
import { Figure } from './figures/Figure';
import { Colors } from './Colors';

export class Cell {
  readonly x:number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }

  isEmpty() {
    return this.figure === null;
  }

  isEmptyVertical(target: Cell): boolean {
    if(this.y !== target.y) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++) {
      if(!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      } 
    }
    return true;
  }

  isEmptyHorizontal(target: Cell): boolean {
    return true;
  }

  isEmptyDiagonal(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {
    if(this.figure && this.figure.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}