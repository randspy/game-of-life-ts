import {Board} from "./board";
import {DeadCell, AliveCell} from "./cell";
import {Position} from "./position";


export class Move {

    private inputBoard:Board;
    private outputBoard:Board;

    playRound(board:Board):Board {
        this.inputBoard = angular.copy(board);
        this.outputBoard = angular.copy(board);

        for (var idx = 0; idx < board.dimention; idx++) {
            for (var idy = 0; idy < board.dimention; idy++) {
                this.updateBoard(
                    this.getNumberOfNeighbors(idx, idy), idx, idy);
            }
        }

        return this.outputBoard;
    }

    private getNumberOfNeighbors(idx:number, idy:number) {

        var numberOfNeighbors = 0;

        if (idx > 0 && this.isCellAlive(idx - 1, idy)) {
            numberOfNeighbors++;
        }
        if (idx < this.inputBoard.dimention - 1 &&
            this.isCellAlive(idx + 1, idy)) {
            numberOfNeighbors++;
        }
        if (idy > 0 && this.isCellAlive(idx, idy - 1)) {
            numberOfNeighbors++;
        }
        if (idy < this.inputBoard.dimention - 1 &&
            this.isCellAlive(idx, idy + 1)) {
            numberOfNeighbors++;
        }
        return numberOfNeighbors;
    };

    private isCellAlive(idx:number, idy:number) {
        return this.inputBoard.get(new Position(idx, idy)).isAlive();
    };

    private updateBoard(numberOfNeighbors:number, idx:number, idy:number) {
        if (numberOfNeighbors > 1 && numberOfNeighbors <= 3) {
            this.outputBoard.set(new Position(idx, idy), new AliveCell())
        }
        else {
            this.outputBoard.set(new Position(idx, idy), new DeadCell())
        }
    };

}
