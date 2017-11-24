Template.metrics.onRendered(function(){

    var data = [],
        totalPoints = 300;

    function getRandomData() {

        if (data.length > 0)
            data = data.slice(1);

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5.6;

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }

            data.push(y);

        }

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    var updateInterval = 120;
    $("#updateInterval").val(updateInterval).change(function () {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            if (updateInterval < 1) {
                updateInterval = 1;
            } else if (updateInterval > 2000) {
                updateInterval = 2000;
            }
            $(this).val("" + updateInterval);
        }
    });


    var data1 = [ [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 4], [6, 5], [7, 6],
        [8, 5], [9, 4], [10, 5], [11, 4], [12, 5], [13, 6], [14, 7], [15, 6],
        [16, 7], [17, 15], [18, 8], [19, 7], [20, 6], [21, 6], [22, 5], [23, 6],
        [24, 7], [25, 6], [26, 7], [27, 5], [28, 6], [29, 5], [30, 4], [31, 5]];

    var data2 = [ [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 6],
        [8, 5], [9, 4], [10, 5], [11, 4], [12, 5], [13, 6], [14, 7], [15, 6],
        [16, 7], [17, 4], [18, 4], [19, 5], [20, 6], [21, 6], [22, 5], [23, 6],
        [24, 7], [25, 6], [26, 3], [27, 4], [28, 5], [29, 5], [30, 4], [31, 4]];

    var data3 = [ [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 4], [6, 5], [7, 6],
        [8, 5], [9, 4], [10, 5], [11, 4], [12, 5], [13, 6], [14, 7], [15, 6],
        [16, 7], [17, 3], [18, 8], [19, 7], [20, 6], [21, 6], [22, 5], [23, 6],
        [24, 7], [25, 6], [26, 7], [27, 5], [28, 6], [29, 5], [30, 4], [31, 22]];

    var data4 = [ [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 4], [6, 5], [7, 6],
        [8, 3], [9, 5], [10, 6], [11,7], [12, 8], [13, 6], [14, 7], [15, 8],
        [16, 9], [17, 21], [18, 20], [19, 21], [20, 21], [21, 23], [22, 22], [23, 24],
        [24, 22], [25, 21], [26, 22], [27, 21], [28, 20], [29, 19], [30, 20], [31, 21]];

    var chartUsersOptions = {
        lines: {
            show: true,
            fill: false,
            lineWidth: 2,
        },
        yaxis:
        {
            min:0, max: 70,  tickSize: 20
        },
        grid: {
            borderWidth: 0
        }
    };

    var chartUsersOptions5 = {
        lines: {
            show: true,
            fill: false,
            lineWidth: 2
        },
        yaxis:
        {
            min:0, max: 100,  tickSize: 20
        },
        grid: {
            tickColor: "#484C5A",
            borderWidth: 0
        },
    };

    $.plot($("#metric1"), [data1], chartUsersOptions);
    $.plot($("#metric2"), [data2], chartUsersOptions);
    $.plot($("#metric3"), [data3], chartUsersOptions);
    $.plot($("#metric4"), [data4], chartUsersOptions);

    var plot5 = $.plot($("#metric5"), [getRandomData()], chartUsersOptions5);
    $.plot($("#metric6"), [data2], chartUsersOptions);
    $.plot($("#metric7"), [data1], chartUsersOptions);
    $.plot($("#metric7"), [data1], chartUsersOptions);
    $.plot($("#metric8"), [data3], chartUsersOptions);
    $.plot($("#metric9"), [data4], chartUsersOptions);

    function update() {

        plot5.setData([getRandomData()]);
        plot5.draw();

        setTimeout(update, updateInterval);


    }



    update();

});