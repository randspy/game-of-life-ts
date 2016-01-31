module GameOfLife.Home {
    'use strict';

    var home = angular.module('gameOfLife.home');

    export class HomeController {
        static $inject = ['moment'];

        public msg : string;

        constructor(moment : moment.MomentStatic) {
           this.msg = 'Welcome home to GameOfLife! It is: ' + moment().format('LLLL');
        }
    }

    home.controller('homeController', HomeController);
}
