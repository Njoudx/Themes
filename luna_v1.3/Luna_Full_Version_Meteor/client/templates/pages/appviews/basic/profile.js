Template.profile.onRendered(function(){

    var data = [
        {
            data: [ [1, 4], [2, 5], [3, 7], [4, 4], [5, 8], [6, 9],[7, 11], [8, 10], [9, 8], [10, 5], [11, 4], [12, 3] ]
        }
    ];

    var chartUsersOptions2 = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 2,
                fill: false
            },
        },
        legend: {
            show: false
        },
        grid: {
            borderWidth: 0
        }
    };

    $.plot($("#flotProfile"), data, chartUsersOptions2);

});