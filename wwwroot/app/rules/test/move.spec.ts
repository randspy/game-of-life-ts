///<reference path="../../../../node_modules/karma-typescript-preprocessor/typings/jasmine/jasmine.d.ts"/>

import Cell = require('../cell.ts')

describe('Game of lives moves', function () {
    it('Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.', function () {
        var cell = new Cell();
        expect(cell.isAlive()).toBeFalsy();
    });
});

