module GameOfLife.Home {
    'use strict';

    var home = angular.module('gameOfLife.home');

    export class HomeController {
        static $inject = ['moment'];

        public gridSize:number;
        public cells:string[];

        public calculateGrid() {
            this.cells = [];

            for (var idx = 0; idx < this.gridSize; idx++) {
                for (var idy = 0; idy < this.gridSize; idy++) {
                    this.cells.push('0');
                }
            }
        };

        public getGridSize() {
            return this.gridSize ? this.gridSize : 0;
        }

        public gridElementClicked(index:number) {
            this.cells[index] = this.cells[index] === '1' ? '0' : '1';
        }
    }

    home.controller('homeController', HomeController);
}
