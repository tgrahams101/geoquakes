// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {

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
  function onSuccess(json) {
      console.log(json.features[0].properties.title);
      // celebrate!
  };
});
