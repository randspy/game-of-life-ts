module GameOfLife.Core {
    'use strict';

    var core = angular.module('gameOfLife.core');

    core.run(appRun);

    function appRun(routerHelper: any) {
        var otherwise = '404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404:origin',
                    templateUrl: 'app/core/notFound.html',
                    title: '404',
                    controller: 'notFoundController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
}
