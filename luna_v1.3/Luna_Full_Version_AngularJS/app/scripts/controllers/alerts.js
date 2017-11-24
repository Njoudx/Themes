/**
 *
 * alertsCtrl
 *
 */

angular
    .module('luna')
    .controller('alertsCtrl', alertsCtrl);

function alertsCtrl($scope, toastr, toastrConfig){

    angular.extend(toastrConfig, {
        newestOnTop: false,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        progressBar: true
    });

    $scope.pop2 = function () {
        toastr.info('Info - This is a custom LUNA info notification', {});
    };

    $scope.pop3 = function () {
        toastr.success('Success - This is a LUNA success notification', {});
    };

    $scope.pop1 = function () {
        toastr.warning('Warning - This is a LUNA warning notification', {});
    };

    $scope.pop4 = function () {
        toastr.error('Error - This is a LUNA error notification', {});
    };



}
