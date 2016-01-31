module GameOfLife {
    'use strict';

    export var app: angular.IModule =
        angular.module('gameOfLife', [
            'ngMaterial',
            'gameOfLife.core',
            'gameOfLife.home',
            'blocks.log',
            'blocks.exception',
            'blocks.router']);
}
