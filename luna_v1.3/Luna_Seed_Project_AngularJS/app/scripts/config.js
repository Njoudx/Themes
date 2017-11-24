/**
 * LUNA - Responsive Admin Theme
 * version 1.2
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/main/main");
    $stateProvider

        // Main content
        .state('main', {
            abstract: true,
            url: "/main",
            templateUrl: "views/common/content.html"

        })
        .state('main.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: {
                pageTitle: 'Main'
            }
        })
}

angular
    .module('luna')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });