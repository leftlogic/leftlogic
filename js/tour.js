var markersData = [
      [54.397, -0.644],
      [57.397, -6.644],
      [56.397, -0.644],
      [50.397, -9.644],
      [51.397, -2.644],
      [-51.397, -2.644]
    ],
    markers = [],
    //usersMarkers = [],
    locationsInput = document.getElementById('tour-locations');

window.onload = function () {
  var map = new google.maps.Map(document.getElementById('tour-map'), {
    zoom: 5,
    center: new google.maps.LatLng(54.5593, -4.1748),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var clickHandler = google.maps.event.addListener(map, 'click', function (event) {
    var marker = new google.maps.Marker({
      position: event.latLng, 
      map: map,
      clickable: false,
      draggable: true
    });
    //usersMarkers.push([event.latLng.xa, event.latLng.za]);
    //locationsInput.value = JSON.stringify(usersMarkers);
    locationsInput.value = '[' + event.latLng.xa + ', ' + event.latLng.za +']';
    google.maps.event.removeListener(clickHandler);
    google.maps.event.addListener(marker, 'dragend', function (event) {
      console.log('[' + event.latLng.xa + ', ' + event.latLng.za +']');
      locationsInput.value = '[' + event.latLng.xa + ', ' + event.latLng.za +']';
    });
  });
  
  var icon = new google.maps.MarkerImage(
    '/assets/images/pin.png',
    new google.maps.Size(16,16),
    new google.maps.Point(0,0),
    new google.maps.Point(16,16)
  );
  
  var bounds = new google.maps.LatLngBounds();
  
  var markersDataLength = markersData.length;
  for (var i = 0; i < markersDataLength; i++) {
    var markerLatLong = new google.maps.LatLng(markersData[i][0], markersData[i][1]);
    var marker = new google.maps.Marker({
      position: markerLatLong, 
      map: map,
      icon: icon,
      clickable: false
    });
    markers.push(marker);
    bounds.extend(markerLatLong);
  }
  
  map.fitBounds(bounds);
  
  var clusterer = new MarkerClusterer(map, markers);
};