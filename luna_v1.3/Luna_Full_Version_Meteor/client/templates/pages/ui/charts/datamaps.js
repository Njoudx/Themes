Template.datamaps.onRendered(function() {

    var arc_map = new Datamap({
        element: document.getElementById("arc_map"),
        responsive: true,
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900",
            usa: "#F8A900"
        },
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0
        },
        data: {
            USA: {fillKey: "usa"},
            RUS: {fillKey: "active"},
            DEU: {fillKey: "active"},
            POL: {fillKey: "active"},
            JAP: {fillKey: "active"},
            AUS: {fillKey: "active"},
            BRA: {fillKey: "active"}
        }
    });
//
    arc_map.arc(
        [
            { origin: 'USA', destination: 'RUS'},
            { origin: 'USA', destination: 'DEU'},
            { origin: 'USA', destination: 'POL'},
            { origin: 'USA', destination: 'JAP'},
            { origin: 'USA', destination: 'AUS'},
            { origin: 'USA', destination: 'BRA'}
        ],
        { strokeColor: '#F8A900', strokeWidth: 1, arcSharpness: 2}
    );

    var select_map = new Datamap({
        element: document.getElementById("select_map"),
        responsive: true,
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0
        },
        data: {
            USA: {fillKey: "active"},
            RUS: {fillKey: "active"},
            DEU: {fillKey: "active"},
            BRA: {fillKey: "active"}
        }
    });

    var bubble_map = new Datamap({
        element: document.getElementById("bubble_map"),
        responsive: true,
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0
        },
        data: {
            USA: {fillKey: "active"},
            RUS: {fillKey: "active"},
            DEU: {fillKey: "active"},
            BRA: {fillKey: "active"}
        }
    });

    bubble_map.bubbles([
        {
            name: 'Area 1',
            radius: 23,
            centered: 'BRA'
        },
        {
            name: 'Area 2',
            radius: 15,
            centered: 'USA'
        },{
            name: 'Area 3',
            radius: 50,
            latitude: 73.482,
            longitude: 54.5854
        }
    ], {
        highlightBorderColor: '#FFFFFF',
        highlightFillColor: '#F8A900',
        popupTemplate: function(geo, data) {
            return '<div class="hoverinfo">' + data.name + ' | Radius ' + data.radius + ''
        }
    });

    // Resize map on window resize
    $(window).on('resize', function() {
        setTimeout(function(){
            arc_map.resize();
            select_map.resize();
            bubble_map.resize();
        },100)
    });

});