module GameOfLife.Home {
    'use strict';

    var home = angular.module('gameOfLife.home');

    home.run(appRun);

    function appRun(routerHelper : Blocks.Router.IRouterHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    title: 'Home',
                    controller: 'homeController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
}
