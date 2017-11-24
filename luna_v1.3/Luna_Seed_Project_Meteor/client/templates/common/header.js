Template.header.events({

    // Toggle left navigation
    'click .left-nav-toggle a': function(event) {
        event.preventDefault();
        $("body").toggleClass("nav-toggle");
    }

});