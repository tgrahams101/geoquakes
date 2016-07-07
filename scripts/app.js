// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;
var source = $("#earthquakelist").html();
//var template = Handlebars.compile(source);


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.78,
            lng: -122.44
        },
        zoom: 8
    });



    var marker = new google.maps.Marker({
        position: {
            lat: 37.78,
            lng: -122.44
        },
        map: map,
        title: 'Hello World!'
    });
}

function onSuccess(json) {
    //console.log(json.features[0].properties.title);
    console.log(json);

    json.features.forEach(function(object) {
        console.log(object.properties.title);
        console.log("" + object.geometry.coordinates[1] + " is the Latitude. " + object.geometry.coordinates[0] + " is the Longitude.");

        var marker = new google.maps.Marker({
            position: {
                lat: object.geometry.coordinates[1],
                lng: object.geometry.coordinates[0]
            },
            map: map,
            title: 'Hello World!'



    });
    });
    // celebrate!
    // });
}





$(document).on("ready", function() {
    initMap();

    $.ajax({
        // What kind of request
        method: 'GET',

        // The URL for the request
        url: weekly_quakes_endpoint,

        // The type of data we want back
        dataType: 'json',

        // Code to run if the request succeeds; the JSON
        // response is passed to the function as an argument.
        success: onSuccess
    });

    // defining the callback function that will happen
    // if the request succeeds.


});
