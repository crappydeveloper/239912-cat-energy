function initMap() {
  var centerLatLng = new google.maps.LatLng(59.938880, 30.323176);

  var mapOptions = {
        center: centerLatLng,
        zoom: 17
    };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

google.maps.event.addDomListener(window, "load", initMap);
