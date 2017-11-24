/**
 *
 * chartjsCtrl
 *
 */

angular
    .module('luna')
    .controller('chartjsCtrl', chartjsCtrl);

function chartjsCtrl($scope) {


    $scope.globalOptions = {
        responsive: true,
        legend: {
            labels: {
                fontColor: "#90969D"
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: "#90969D"
                },
                gridLines: {
                    color: "#37393F"
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: "#90969D"
                },
                gridLines: {
                    color: "#37393F"
                }
            }]
        }
    };

    $scope.barLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.barData = [
            [9, 8, 5, 6, 3, 2, 16],
            [5, 5, 5, 4, 5, 2, 23]
    ];
    $scope.barSeries = ['Data 1', 'Data 2'];
    $scope.bardatasetOverride = [
        {
            label: "Data 1",
            backgroundColor: 'transparent',
            borderColor: "#f6a821",
            borderWidth: 1
        },
        {
            label: "Data 2",
            backgroundColor: 'transparent',
            borderColor: "#676B73",
            borderWidth: 1
        }
    ];


    $scope.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.lineData = [
        [16, 32, 18, 26, 42, 33, 44],
        [22, 44, 67, 43, 76, 45, 12]
    ];
    $scope.lineSeries = ['Data 1', 'Data 2'];
    $scope.linedatasetOverride = [
        {
            label: "Data 1",
            backgroundColor: 'transparent',
            borderColor: "#f6a821",
            pointBorderWidth: 0,
            pointRadius: 2,
            pointBorderColor: '#f6a821',
            borderWidth: 1,
        },
        {
            label: "Data 2",
            backgroundColor: 'transparent',
            borderColor: "#676B73",
            pointBorderWidth: 0,
            pointRadius: 2,
            pointBorderColor: '#676B73',
            borderWidth: 1,
        }
    ];



    $scope.singlebarLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.singlebarData = [
        [15, 20, 30, 40, 30, 50, 60]
    ];
    $scope.singlebarSeries = ['Data 0'];
    $scope.singlebardatasetOverride = [
        {
            label: "Data 0",
            backgroundColor: 'transparent',
            borderColor: "#f6a821",
            borderWidth: 1
        }
    ];


    $scope.sharplineLabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.sharplineData = [
        [33, 48, 40, 19, 54, 27, 54]
    ];
    $scope.sharplineSeries = ['Example dataset'];
    $scope.sharplinedatasetOverride = [
        {
            label: "Example dataset",
            backgroundColor: 'rgba(246,168,33, 0.1)',
            borderColor: "#f6a821",
            pointBorderWidth: 0,
            pointRadius: 2,
            pointBorderColor: '#f6a821',
            borderWidth: 1,
            lineTension: 0
        }
    ];

    $scope.polarLabels = ["Homer", "Inspinia", "Luna"];
    $scope.polarData = [[120, 130, 100]];
    $scope.polardatasetOverride = [
        {
            borderWidth: 0,
            backgroundColor: [
                "rgba(246,168,33, 0.1)",
                "rgba(246,168,33, 0.4)",
                "rgba(246,168,33, 0.8)"
            ],
            label: 'My dataset'
        }
    ];


    $scope.doughnutLabels = ["App", "Software", "Laptop"];
    $scope.doughnutData =
        [[20, 120, 100]];
    $scope.doughnutdatasetOverride = [
        {
            borderWidth: 0,
            backgroundColor: [
                "rgba(246,168,33, 0.1)",
                "rgba(246,168,33, 0.4)",
                "rgba(246,168,33, 0.8)"
            ],
            hoverBackgroundColor: [
                "#F6A821",
                "#F6A821",
                "#F6A821"
            ]
        }
    ];


}
