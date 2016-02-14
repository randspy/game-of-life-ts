///<reference path="../../../../node_modules/karma-typescript-preprocessor/typings/jasmine/jasmine.d.ts"/>

import {AliveCell} from "../cell";
import {Move} from "../move";
import {Board} from "../board";
import {Position} from "../position";

describe('Game of lives moves', function () {
    it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function () {

        var boardBeforeMove = new Board(3);
        boardBeforeMove.set(new Position(1, 1), new AliveCell());

        var boardAfterMove = new Move().playRound(boardBeforeMove);
        expect(boardAfterMove.get(new Position(1, 1)).isAlive()).toBeFalsy();
    });

    it('Any live cell with more than three live neighbours dies, as if by overcrowding.', function () {

        var boardBeforeMove = new Board(3);

        boardBeforeMove.set(new Position(0, 1), new AliveCell());
        boardBeforeMove.set(new Position(1, 0), new AliveCell());
        boardBeforeMove.set(new Position(1, 1), new AliveCell());
        boardBeforeMove.set(new Position(1, 2), new AliveCell());
        boardBeforeMove.set(new Position(2, 1), new AliveCell());

        var board = new Move().playRound(boardBeforeMove);
        expect(board.get(new Position(1, 1)).isAlive()).toBeFalsy();
    });

    it('Any live cell with two or three live neighbours lives on to the next generation.', function () {

        var boardBeforeMove = new Board(3);

        boardBeforeMove.set(new Position(0, 1), new AliveCell());
        boardBeforeMove.set(new Position(1, 1), new AliveCell());
        boardBeforeMove.set(new Position(2, 1), new AliveCell());

        var board = new Move().playRound(boardBeforeMove);
        expect(board.get(new Position(1, 1)).isAlive()).toBeTruthy();
    });

    it('Any dead cell with exactly three live neighbours becomes a live cell.', function () {

        var boardBeforeMove = new Board(3);

        boardBeforeMove.set(new Position(0, 1), new AliveCell());
        boardBeforeMove.set(new Position(1, 0), new AliveCell());
        boardBeforeMove.set(new Position(2, 1), new AliveCell());

        var board = new Move().playRound(boardBeforeMove);
        expect(board.get(new Position(1, 1)).isAlive()).toBeTruthy();
    });
});
