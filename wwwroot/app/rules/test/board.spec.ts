import {Board} from "../board";
import {AliveCell} from "../cell";

describe('Game of lives moves', function () {
    it('Flattens board.', function () {

        var board = new Board(3);
        expect(board.getFlatten().length).toEqual(9);
    });

    it('Get from flat index.', function () {

        var board = new Board(3);
        board.setByIndex(1, new AliveCell());
        expect(board.getByIndex(1).isAlive()).toBeTruthy();
    });
});
