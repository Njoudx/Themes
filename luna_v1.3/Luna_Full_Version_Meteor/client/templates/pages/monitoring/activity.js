Template.activity.onRendered(function(){

    function simpleText()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }


    function generate() {

        var now = new moment();
        var endTime = now.format("HH:mm:ss a");

         var number0 = Math.floor(Math.random() * 100) + 1;
         var number1 = Math.floor(Math.random() * 100) + 1;
         var number2 = Math.floor(Math.random() * 100) + 1;
         var number3 = Math.floor(Math.random() * 100) + 1;
         var number4 = Math.floor(Math.random() * 100) + 1;
         var number5 = Math.floor(Math.random() * 100) + 1;
         var number6 = Math.floor(Math.random() * 100) + 1;

        var usage = number6 + '%';

        if (number6 > 50) {
            usage = '<span class="c-accent">' + usage + '%</span>';
        }

        $('#logsTable tbody tr:first').remove();

        $('#logsTable').append('<tr><td>'+ number0 + ' AT_' + simpleText() + '</td><td>' + number1 +'.'+number2 +'.'+number3 +'.' +number4+ '</td><td>' + endTime +'</td>' + '<td>' + number5 +'</td><td>'+ usage + '</td></tr>');

        $('.time').text(endTime);
        $('.server1').text(number1 + '%');
        $('.server2').text(number2);
        $('.server3').text(number3);
        $('.server4').text(number4);

    }
    logsInterval = setInterval(generate, 600);

    var wordmap = new Datamap({
        element: document.getElementById("serverMap"),
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        responsive: true,
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0

        },
        data: {
            USA: { fillKey: "active" },
            RUS: { fillKey: "active" }
        }

    });

    $(window).on('resize', function() {
        setTimeout(function(){
            wordmap.resize();
        },100)
    });

    function mapChanges() {

        var random = Math.floor(Math.random() * 100) + 1;
        var random2 = Math.floor(Math.random() * 100) + 1;
        var random3 = Math.floor(Math.random() * 100) + 1;
        var random4 = Math.floor(Math.random() * 100) + 1;
        var random5 = Math.floor(Math.random() * 100) + 1;

        var usa = "defaultFill",
            rus = "defaultFill",
            aus = "defaultFill",
            bra = "defaultFill",
            ind = "defaultFill";

        if (random > 50) {  usa = 'active'} else { usa = 'defaultFill'}
        if (random2 > 50) { rus = 'active'} else { rus = 'defaultFill'}
        if (random3 > 50) { aus = 'active'} else { aus = 'defaultFill'}
        if (random4 > 50) { bra = 'active'} else { bra = 'defaultFill'}
        if (random5 > 50) { ind = 'active'} else { ind = 'defaultFill'}

        wordmap.updateChoropleth({
            USA: { fillKey: usa },
            RUS: { fillKey: rus },
            AUS: { fillKey: aus },
            BRA: { fillKey: bra },
            IND: { fillKey: ind }

        });

    }

    mapInterval = setInterval(mapChanges, 600);

});

Template.activity.onDestroyed(function(){

    clearInterval(logsInterval);
    clearInterval(mapInterval);

});