/**
 *
 * selectCtrl
 *
 */

angular
    .module('luna')
    .controller('selectCtrl', selectCtrl);

function selectCtrl($scope){

    $scope.option = {};
    $scope.options = [
        { number: '1',      text: 'Option 1' },
        { number: '2',      text: 'Option 2' },
        { number: '3',      text: 'Option 3' },
        { number: '4',      text: 'Option 4' },
        { number: '5',      text: 'Option 5' },
        { number: '6',      text: 'Option 6' }
    ];


    $scope.state = {};
    $scope.states = [
        { number: '1',      text: 'Bahamas' },
        { number: '2',      text: 'Bahrain' },
        { number: '3',      text: 'Bangladesh' },
        { number: '4',      text: 'Belarus' },
        { number: '5',      text: 'Belgium' },
        { number: '6',      text: 'Benin' }
    ];

    $scope.multistates = ['Mayotte', 'Mexico', 'Monaco', 'Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Nepal'];

    $scope.multiplestates = {};
    $scope.multiplestates = ['Mexico', 'Nepal'];

}