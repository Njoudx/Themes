FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('notFound');
    }
};

FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/dashboard');
    }
});

FlowRouter.route('/dashboard', {
    action: function() {
        BlazeLayout.render("layout", {content: "dashboard"});
    }
});


FlowRouter.route('/metrics', {
    name: 'metrics',
    action: function() {
        BlazeLayout.render("layout", {content: "metrics"});
    }
});

// UI Elements
// General

FlowRouter.route('/panels', {
    name: 'Panels',
    action: function() {
        BlazeLayout.render("layout", {content: "panels"});
    }
});

FlowRouter.route('/icons', {
    name: 'Icons',
    action: function() {
        BlazeLayout.render("layout", {content: "icons"});
    }
});

FlowRouter.route('/gridSystem', {
    name: 'gridSystem',
    action: function() {
        BlazeLayout.render("layout", {content: "gridSystem"});
    }
});

FlowRouter.route('/tabs', {
    name: 'tabs',
    action: function() {
        BlazeLayout.render("layout", {content: "tabs"});
    }
});

FlowRouter.route('/typography', {
    name: 'typography',
    action: function() {
        BlazeLayout.render("layout", {content: "typography"});
    }
});

FlowRouter.route('/alerts', {
    name: 'alerts',
    action: function() {
        BlazeLayout.render("layout", {content: "alerts"});
    }
});

FlowRouter.route('/loaders', {
    name: 'loaders',
    action: function() {
        BlazeLayout.render("layout", {content: "loaders"});
    }
});

FlowRouter.route('/buttons', {
    name: 'buttons',
    action: function() {
        BlazeLayout.render("layout", {content: "buttons"});
    }
});

FlowRouter.route('/modals', {
    name: 'modals',
    action: function() {
        BlazeLayout.render("layout", {content: "modals"});
    }
});

FlowRouter.route('/starterPage', {
    name: 'starterPage',
    action: function() {
        BlazeLayout.render("layout", {content: "starterPage"});
    }
});

FlowRouter.route('/formElements', {
    name: 'formElements',
    action: function() {
        BlazeLayout.render("layout", {content: "formElements"});
    }
});

FlowRouter.route('/autocomplete', {
    name: 'autocomplete',
    action: function() {
        BlazeLayout.render("layout", {content: "autocomplete"});
    }
});

FlowRouter.route('/controls', {
    name: 'controls',
    action: function() {
        BlazeLayout.render("layout", {content: "controls"});
    }
});

FlowRouter.route('/textEditor', {
    name: 'textEditor',
    action: function() {
        BlazeLayout.render("layout", {content: "textEditor"});
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render("blankLayout", {content: "login"});
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action: function() {
        BlazeLayout.render("blankLayout", {content: "register"});
    }
});

FlowRouter.route('/forgotPassword', {
    name: 'forgotPassword',
    action: function() {
        BlazeLayout.render("blankLayout", {content: "forgotPassword"});
    }
});

FlowRouter.route('/error', {
    name: 'error',
    action: function() {
        BlazeLayout.render("blankLayout", {content: "error"});
    }
});

FlowRouter.route('/tableStyles', {
    name: 'tableStyles',
    action: function() {
        BlazeLayout.render("layout", {content: "tableStyles"});
    }
});

FlowRouter.route('/dataTables', {
    name: 'dataTables',
    action: function() {
        BlazeLayout.render("layout", {content: "dataTables"});
    }
});

FlowRouter.route('/flotCharts', {
    name: 'flotCharts',
    action: function() {
        BlazeLayout.render("layout", {content: "flotCharts"});
    }
});

FlowRouter.route('/sparkline', {
    name: 'sparkline',
    action: function() {
        BlazeLayout.render("layout", {content: "sparkline"});
    }
});

FlowRouter.route('/chartJS', {
    name: 'chartJS',
    action: function() {
        BlazeLayout.render("layout", {content: "chartJS"});
    }
});

FlowRouter.route('/datamaps', {
    name: 'datamaps',
    action: function() {
        BlazeLayout.render("layout", {content: "datamaps"});
    }
});

FlowRouter.route('/timeline', {
    name: 'timeline',
    action: function() {
        BlazeLayout.render("layout", {content: "timeline"});
    }
});

FlowRouter.route('/nestableList', {
    name: 'nestableList',
    action: function() {
        BlazeLayout.render("layout", {content: "nestableList"});
    }
});


FlowRouter.route('/draggable', {
    name: 'draggable',
    action: function() {
        BlazeLayout.render("layout", {content: "draggable"});
    }
});

FlowRouter.route('/versions', {
    name: 'versions',
    action: function() {
        BlazeLayout.render("layout", {content: "versions"});
    }
});

FlowRouter.route('/profile', {
    name: 'versions',
    action: function() {
        BlazeLayout.render("layout", {content: "profile"});
    }
});

FlowRouter.route('/contacts', {
    name: 'contacts',
    action: function() {
        BlazeLayout.render("layout", {content: "contacts"});
    }
});

FlowRouter.route('/projects', {
    name: 'projects',
    action: function() {
        BlazeLayout.render("layout", {content: "projects"});
    }
});

FlowRouter.route('/projects', {
    name: 'projects',
    action: function() {
        BlazeLayout.render("layout", {content: "projects"});
    }
});

FlowRouter.route('/support', {
    name: 'support',
    action: function() {
        BlazeLayout.render("layout", {content: "support"});
    }
});

FlowRouter.route('/usage', {
    name: 'usage',
    action: function() {
        BlazeLayout.render("layout", {content: "usage"});
    }
});

FlowRouter.route('/activity', {
    name: 'activity',
    action: function() {
        BlazeLayout.render("layout", {content: "activity"});
    }
});


