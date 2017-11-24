Template.nestableList.onRendered(function(){


    // Log for nestable list
    var updateOutput = function (e) {
        var list = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };

    // Activate Nestable for list 1
    $('#nestable').nestable({
        group: 1
    }).on('change', updateOutput);


    // Output initial serialised data
    updateOutput($('#nestable').data('output', $('#nestable-output')));

});