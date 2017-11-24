Template.navigation.onRendered(function(){

    // Hide all open sub nav menu list
    $('.nav-second').on('show.bs.collapse', function () {
        $('.nav-second.in').collapse('hide');
    })

});

Template.navigation.events({

    // Colapse menu in mobile mode after click on element
    'click .luna-nav a:not([data-toggle])': function(){
        if ($(window).width() < 768) {
            $("body").toggleClass("nav-toggle");
        }
    }

});