/**
 *
 * datamapsCtrl
 *
 */

angular
    .module('luna')
    .controller('datamapsCtrl', datamapsCtrl);

function datamapsCtrl($scope){

    // Set map options and data
    $scope.arc_map = {
        scope: 'world',
        responsive: true,
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900",
            usa: "#F8A900"
        },
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0
        },
        data: {
            USA: {fillKey: "usa"},
            RUS: {fillKey: "active"},
            DEU: {fillKey: "active"},
            POL: {fillKey: "active"},
            JAP: {fillKey: "active"},
            AUS: {fillKey: "active"},
            BRA: {fillKey: "active"}
        }
    };

    $scope.mapPlugins = {
        arc: null
    };

    $scope.arcPlugin = {
        arc: [
            { origin: 'USA', destination: 'RUS', strokeColor: '#F8A900', strokeWidth: 1, arcSharpness: 2},
            { origin: 'USA', destination: 'DEU', strokeColor: '#F8A900', strokeWidth: 1, arcSharpness: 2},
            { origin: 'USA', destination: 'POL', strokeColor: '#F8A900', strokeWidth: 1, arcSharpness: 2},
            { origin: 'USA', destination: 'JAP', strokeColor: '#F8A900', strokeWidth: 1, arcSharpness: 2},
            { origin: 'USA', destination: 'AUS', strokeColor: '#F8A900', strokeWidth: 1, arcSharpness: 2},
            { origin: 'USA', destination: 'BRA', strokeColor: '#F8A900', strokeWidth: 1, arcSharpness: 2}
        ]
    };

    // Set map options and data
    $scope.select_map = {
        scope: 'world',
        responsive: true,
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0
        },
        data: {
            USA: {fillKey: "active"},
            RUS: {fillKey: "active"},
            DEU: {fillKey: "active"},
            BRA: {fillKey: "active"}
        }
    };


    $scope.bubble_map = {
        scope: 'world',
        responsive: true,
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0
        },
        data: {
            USA: {fillKey: "active"},
            RUS: {fillKey: "active"},
            DEU: {fillKey: "active"},
            BRA: {fillKey: "active"}
        }
    };

    $scope.bubblemapPlugins = {
        bubbles: null
    };

    $scope.bubblePlugin = {
        bubbles: [
            {
                name: 'Area 1',
                radius: 23,
                centered: 'BRA',
                highlightBorderColor: '#FFFFFF',
                highlightFillColor: '#F8A900'
            },
            {
                name: 'Area 2',
                radius: 15,
                centered: 'USA',
                highlightBorderColor: '#FFFFFF',
                highlightFillColor: '#F8A900'
            },{
                name: 'Area 3',
                radius: 50,
                latitude: 73.482,
                longitude: 54.5854,
                highlightBorderColor: '#FFFFFF',
                highlightFillColor: '#F8A900'
            }
        ]
    };

}
