Template.blankLayout.onCreated(function () {

    $('body').addClass('blank');

});

Template.blankLayout.onDestroyed(function () {

    $('body').removeClass('blank');

});