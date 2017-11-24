Template.usage.onRendered(function(){

    function setUsage(selector){

        var usage1 = Math.floor(Math.random() * 100) + 1;
        $(selector).text(usage1 + '%');
        if (usage1 > 40) {
            $(selector).addClass('c-accent');
        } else {
            $(selector).removeClass('c-accent')
        }

    }

    function generate() {

        setUsage('.usage1');
        setUsage('.usage2');
        setUsage('.usage3');
        setUsage('.usage4');
        setUsage('.usage5');
        setUsage('.usage6');
        setUsage('.usage7');
        setUsage('.usage8');
        setUsage('.usage9');
        setUsage('.usage10');

        setUsage('.usage11');
        setUsage('.usage12');
        setUsage('.usage13');
        setUsage('.usage14');
        setUsage('.usage15');
        setUsage('.usage16');
        setUsage('.usage17');
        setUsage('.usage18');
        setUsage('.usage19');


    }
    usageInterval = setInterval(generate, 800);

});

Template.usage.onDestroyed(function(){

    clearInterval(usageInterval);

});