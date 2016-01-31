module GameOfLife.Home {
    'use strict';

    var home = angular.module('gameOfLife.home');

    export class HomeController {
        static $inject = ['moment'];

        public gridSize:number;
        public cells:string[];

        constructor() {
        }


        public calculateGrid() {
            this.cells = [];

            for (var idx = 0; idx < this.gridSize; idx++) {
                for (var idy = 0; idy < this.gridSize; idy++) {
                    this.cells.push('1');
                }
            }
        };

        public getGridSize(){
            return this.gridSize ? this.gridSize : 0;
        }
    }

    home.controller('homeController', HomeController);
}
