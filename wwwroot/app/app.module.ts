module GameOfLife {
    'use strict';

    export var app: angular.IModule =
        angular.module('gameOfLife', ['gameOfLife.core', 'gameOfLife.home', 'blocks.log', 'blocks.exception', 'blocks.router']);
}
