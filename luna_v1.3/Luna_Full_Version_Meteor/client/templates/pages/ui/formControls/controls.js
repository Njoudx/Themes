Template.controls.onRendered(function(){

    var elem1 = document.querySelector('.js-switch1');
    var elem1 = new Switchery(elem1);

    var elem2 = document.querySelector('.js-switch2');
    var elem2 = new Switchery(elem2);

    var elem3 = document.querySelector('.js-switch3');
    var elem3 = new Switchery(elem3, { color: '#7c8bc7'});

    var elem4 = document.querySelector('.js-switch4');
    var elem4 = new Switchery(elem4, { color: '#f6a821'});

    var elem5 = document.querySelector('.js-switch5');
    var elem5 = new Switchery(elem5, { color: '#1bbf89'});

    var elem6 = document.querySelector('.js-switch6');
    var elem6 = new Switchery(elem6, { color: '#db524b'});

    var elem7 = document.querySelector('.js-switch7');
    var elem7 = new Switchery(elem7, { color: '#f6a821',size: 'small'});

    var elem8 = document.querySelector('.js-switch8');
    var elem8 = new Switchery(elem8, { color: '#f6a821', size: 'small'});

});