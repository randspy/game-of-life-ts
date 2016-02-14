import {Cell, DeadCell} from "./cell";
import {Position} from "./position";

export class Board {

    cells:Cell[][] = [];

    constructor(public dimention:number) {
        for (var idx = 0; idx < dimention; idx++) {
            var row:Cell[] = [];

            for (var idy = 0; idy < dimention; idy++) {
                row.push(new DeadCell());
            }
            this.cells.push(row);
        }
    }


    get(position:Position):Cell {
        return this.cells[position.idx][position.idy];
    }

    getByIndex(index:number):Cell {
        var idx = Math.floor(index / this.dimention);
        var idy = index % this.dimention;
        return this.cells[idx][idy];
    }

    set(position:Position, cell:Cell):void {
        this.cells[position.idx][position.idy] = cell;
    }

    setByIndex(index:number, cell:Cell):void {
        var idx = Math.floor(index / this.dimention);
        var idy = index % this.dimention;
        this.cells[idx][idy] = cell;
    }

    getFlatten():Cell[] {
        return [].concat.apply([], this.cells);
    }

}
