'use strict';


function initMap() {
  var params = $('#params');

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -25.448686, lng: -49.282927},
    scrollwheel: true,
    zoom: 15
  });

  google.maps.event.addListener(map, "click", function (event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    console.log( latitude + ', ' + longitude );

    $.post('/api/geolocation', {'latitude':latitude,'longitude':longitude}, function(res){
    	console.log(res);
    });
	}); 
}