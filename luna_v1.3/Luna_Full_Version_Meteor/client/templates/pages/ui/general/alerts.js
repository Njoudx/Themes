Template.alerts.onRendered(function(){
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-bottom-right",
        "closeButton": true,
        "progressBar": true
    };

});

Template.alerts.events({

   'click .homerDemo1':function(){
        toastr.info('Info - This is a custom LUNA info notification');
    },
    'click .homerDemo2':function(){
        toastr.success('Success - This is a LUNA success notification');
    },
    'click .homerDemo3':function(){
        toastr.warning('Warning - This is a LUNA warning notification');
    },
    'click .homerDemo4':function(){
        toastr.error('Error - This is a LUNA error notification');
    }

});