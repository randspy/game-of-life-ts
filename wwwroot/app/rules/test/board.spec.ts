import {Board} from "../board";

describe('Game of lives moves', function () {
    it('Flattens board.', function () {

        var board = new Board(3);
        expect(board.getFlatten().length).toEqual(9);
    });
});
