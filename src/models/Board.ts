import { Queen } from './figures/Queen';
import { Bishop } from './figures/Bishop';
import { Colors } from './Colors';
import { Cell } from "./Cell";

export class Board {
  cells: Cell[][]=[];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row:Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if((i+j) % 2 !== 0) {
          row.push( new Cell(this, i, j, Colors.BLACK, null))
        } else {
          row.push( new Cell(this, i, j, Colors.WHITE, null))
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    new Queen(Colors.BLACK, this.getCell(4,3));
    new Bishop(Colors.BLACK, this.getCell(5,3));
    new Bishop(Colors.BLACK, this.getCell(1,0));
  }
}