module GameOfLife.Core {
    'use strict';

    var core = angular.module('gameOfLife.core');

    var config = {
        appErrorPrefix: '[gameOfLife Error] ',
        appTitle: 'gameOfLife'
    };

    core.value('config', config);
}
