import {AliveCell, Cell, DeadCell} from "../rules/cell";
import {Move} from "../rules/move";
import {Board} from "../rules/board";
import {Position} from "../rules/position";

module GameOfLife.Home {
    'use strict';

    var home = angular.module('gameOfLife.home');

    export class HomeController {
        static $inject = ['moment'];

        public gridSize:number;
        public cells:Cell[];
        public board:Board;

        public calculateGrid() {

            this.board = new Board(this.gridSize);

            this.cells = this.board.getFlatten();
        };

        public getGridSize() {
            return this.gridSize ? this.gridSize : 0;
        }

        public gridElementClicked(index:number) {
            if (this.board.getByIndex(index).isAlive()){
                this.board.setByIndex(index, new DeadCell());
            }
            else{
                this.board.setByIndex(index, new AliveCell());
            }

            this.cells = this.board.getFlatten();
        }
    }

    home.controller('homeController', HomeController);
}
