FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('notFound');
    }
};

FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/index');
    }
});

FlowRouter.route('/index', {
    action: function() {
        BlazeLayout.render("layout", {content: "index"});
    }
});

