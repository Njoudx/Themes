Template.flotCharts.onRendered(function(){

    var data1 = [ [0, 3], [1, 6], [2, 8], [3, 9], [4, 12], [5, 14], [6, 15], [7, 12],
                  [8, 14], [9, 12], [10, 11], [11, 10], [12, 14], [13, 16], [14, 15], [15, 15],
                  [16, 16], [17, 12], [18, 13], [19, 15], [20, 16], [21, 18], [22, 20], [23, 23],
                  [24, 22], [25, 21], [26, 20], [27, 17], [28, 15], [29, 14], [30, 13], [31, 10]];

    var chartUsersOptions = {
        points: {
            show: true,
            fill: true,
            lineWidth: 1,
            fillColor: "#f6a821"
        },
        grid: {
            borderWidth: 0
        }
    };

    $.plot($("#flotExample1"), [data1], chartUsersOptions);


    var chartUsersOptions = {
        lines: {
            show: true,
            fill: false,
            lineWidth: 2,
            fillColor: "#f6a821"
        },
        grid: {
            borderWidth: 0
        }
    };

    $.plot($("#flotExample2"), [data1], chartUsersOptions);

    var data2 = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 28], [6, 22],[7, 20], [8, 18], [9, 17], [10, 13], [11, 15], [12, 17] ]
        }
    ];

    var chartUsersOptions2 = {
        bars: {
            show: true,
            fill: false,
            lineWidth: 2,
            fillColor: "#f6a821"
        },
        legend: {
            show: false
        },
        grid: {
            borderWidth: 0
        }
    };

    $.plot($("#flotExample3"), data2, chartUsersOptions2);


    var chartUsersOptions2 = {
        lines: {
            show: true,
            steps: true
        },
        grid: {
            borderWidth: 0
        }
    };

    $.plot($("#flotExample4"), data2, chartUsersOptions2);

    var data2 = [
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

    $.plot($("#flotExample5"), data2, chartUsersOptions2);

    var data2 = [
        {
            data: [ [1, 4], [2, 5], [3, 7], [4, 4], [5, 8], [6, 9],[7, 11], [8, 10], [9, 8], [10, 5], [11, 4], [12, 3] ]
        }
    ];

    var chartUsersOptions2 = {
        lines: {
            show: true,
            fill: 0.1
        },
        grid: {
            borderWidth: 0
        }
    };

    $.plot($("#flotExample6"), data2, chartUsersOptions2);

});