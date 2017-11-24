Template.formElements.onRendered(function(){

    $(".select2_demo_1").select2();
    $(".select2_demo_2").select2({
        placeholder: "Select a state",
        allowClear: true
    });
    $(".select2_demo_3").select2();

});