/**
 * LUNA - Responsive Admin Theme
 * version 1.2
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/main/dashboard");
    $stateProvider

        // Main content
        .state('main', {
            abstract: true,
            url: "/main",
            templateUrl: "views/common/content.html"

        })
        .state('main.dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: 'Dashboard'
            }
        })
        .state('main.monitoring', {
            url: "/monitoring",
            template: "<div ui-view></div>"
        })
        .state('main.monitoring.metrics', {
            url: "/metrics",
            templateUrl: "views/monitoring/metrics.html",
            data: {
                pageTitle: 'Metrics'
            }
        })
        .state('main.monitoring.usage', {
            url: "/usage",
            templateUrl: "views/monitoring/usage.html",
            data: {
                pageTitle: 'Usage'
            }
        })
        .state('main.monitoring.activity', {
            url: "/activity",
            templateUrl: "views/monitoring/activity.html",
            data: {
                pageTitle: 'Activity'
            }
        })
        .state('main.general', {
            url: "/general",
            template: "<div ui-view></div>"
        })
        .state('main.general.panels', {
            url: "/panels",
            templateUrl: "views/general/panels.html",
            data: {
                pageTitle: 'Panels'
            }
        })
        .state('main.general.typography', {
            url: "/typography",
            templateUrl: "views/general/typography.html",
            data: {
                pageTitle: 'Typography'
            }
        })
        .state('main.general.icons', {
            url: "/icons",
            templateUrl: "views/general/icons.html",
            data: {
                pageTitle: 'Icons'
            }
        })
        .state('main.general.buttons', {
            url: "/buttons",
            templateUrl: "views/general/buttons.html",
            data: {
                pageTitle: 'Buttons'
            }
        })
        .state('main.general.tabs', {
            url: "/tabs",
            templateUrl: "views/general/tabs.html",
            data: {
                pageTitle: 'Tabs'
            }
        })
        .state('main.general.modals', {
            url: "/modals",
            templateUrl: "views/general/modals.html",
            data: {
                pageTitle: 'Modals'
            }
        })
        .state('main.general.alerts', {
            url: "/alerts",
            templateUrl: "views/general/alerts.html",
            data: {
                pageTitle: 'Alerts'
            }
        })
        .state('main.general.loaders', {
            url: "/loaders",
            templateUrl: "views/general/loaders.html",
            data: {
                pageTitle: 'Loaders'
            }
        })
        .state('main.general.gridsystem', {
            url: "/gridsystem",
            templateUrl: "views/general/gridsystem.html",
            data: {
                pageTitle: 'Grid system'
            }
        })
        .state('main.general.draggable', {
            url: "/draggable",
            templateUrl: "views/general/draggable.html",
            data: {
                pageTitle: 'Draggable'
            }
        })
        .state('main.tables', {
            url: "/tables",
            template: "<div ui-view></div>"
        })
        .state('main.tables.tablestyles', {
            url: "/pantablestylesels",
            templateUrl: "views/tables/tablestyles.html",
            data: {
                pageTitle: 'Table styles'
            }
        })
        .state('main.tables.datatables', {
            url: "/datatables",
            templateUrl: "views/tables/datatables.html",
            data: {
                pageTitle: 'Datatables'
            }
        })
        .state('main.formcontrols', {
            url: "/formcontrols",
            template: "<div ui-view></div>"
        })
        .state('main.formcontrols.formelements', {
            url: "/formelements",
            templateUrl: "views/form/formelements.html",
            data: {
                pageTitle: 'Form elements'
            }
        })
        .state('main.formcontrols.autocomplete', {
            url: "/autocomplete",
            templateUrl: "views/form/autocomplete.html",
            data: {
                pageTitle: 'Autocomplete'
            }
        })
        .state('main.formcontrols.controls', {
            url: "/controls",
            templateUrl: "views/form/controls.html",
            data: {
                pageTitle: 'Selection controls'
            }
        })
        .state('main.formcontrols.texteditor', {
            url: "/texteditor",
            templateUrl: "views/form/texteditor.html",
            data: {
                pageTitle: 'Text editor'
            }
        })
        .state('main.charts', {
            url: "/charts",
            template: "<div ui-view></div>"
        })
        .state('main.charts.flot', {
            url: "/flot",
            templateUrl: "views/charts/flot.html",
            data: {
                pageTitle: 'Flot'
            }
        })
        .state('main.charts.sparkline', {
            url: "/sparkline",
            templateUrl: "views/charts/sparkline.html",
            data: {
                pageTitle: 'Sparkline'
            }
        })
        .state('main.charts.chartjs', {
            url: "/chartjs",
            templateUrl: "views/charts/chartjs.html",
            data: {
                pageTitle: 'ChartJS'
            }
        })
        .state('main.charts.datamaps', {
            url: "/datamaps",
            templateUrl: "views/charts/datamaps.html",
            data: {
                pageTitle: 'Datamaps'
            }
        })
        .state('main.basic', {
            url: "/basic",
            template: "<div ui-view></div>"
        })
        .state('main.basic.list', {
            url: "/list",
            templateUrl: "views/basic/list.html",
            data: {
                pageTitle: 'List'
            }
        })
        .state('main.basic.profile', {
            url: "/profile",
            templateUrl: "views/basic/profile.html",
            data: {
                pageTitle: 'Profile'
            }
        })
        .state('main.basic.contacts', {
            url: "/contacts",
            templateUrl: "views/basic/contacts.html",
            data: {
                pageTitle: 'Contacts'
            }
        })
        .state('main.basic.projects', {
            url: "/projects",
            templateUrl: "views/basic/Projects.html",
            data: {
                pageTitle: 'Projects'
            }
        })
        .state('main.basic.support', {
            url: "/support",
            templateUrl: "views/basic/support.html",
            data: {
                pageTitle: 'Support'
            }
        })
        .state('main.basic.timeline', {
            url: "/timeline",
            templateUrl: "views/basic/timeline.html",
            data: {
                pageTitle: 'Timeline'
            }
        })
        .state('commonviews', {
            abstract: true,
            url: "/commonviews",
            templateUrl: "views/common/blank.html",
            data: {
                specialClass: 'blank'
            }
        })
        .state('commonviews.login', {
            url: "/login",
            templateUrl: "views/commonviews/login.html",
            data: {
                pageTitle: 'Login'
            }
        })
        .state('commonviews.register', {
            url: "/register",
            templateUrl: "views/commonviews/register.html",
            data: {
                pageTitle: 'Register'
            }
        })
        .state('commonviews.forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/commonviews/forgotpassword.html",
            data: {
                pageTitle: 'Forgot password'
            }
        })
        .state('commonviews.error', {
            url: "/error",
            templateUrl: "views/commonviews/error.html",
            data: {
                pageTitle: 'Error'
            }
        })
        .state('main.versions', {
            url: "/versions",
            templateUrl: "views/versions.html",
            data: {
                pageTitle: 'Versions'
            }
        })
}

angular
    .module('luna')
    .config(configState)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });