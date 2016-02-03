///<reference path="../../../../node_modules/karma-typescript-preprocessor/typings/jasmine/jasmine.d.ts"/>

import {Cell} from "../cell";
import {Move} from "../move";
import {Board} from "../board";

describe('Game of lives moves', function () {
    it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function () {

        var board = new Move().playRound(new Board());
        expect(board.get(5).isAlive()).toBeFalsy();
    });
});

