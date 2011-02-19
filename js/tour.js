var markers = [],
    usersMarkers = [],
    locationsInput = document.getElementById('tour-locations');

function setupTour() {

  // var osmMapType = new google.maps.ImageMapType({
  //   getTileUrl: function(coord, zoom) {
  //     return "http://tile.openstreetmap.org/" +
  //     zoom + "/" + coord.x + "/" + coord.y + ".png";
  //   },
  //   tileSize: new google.maps.Size(256, 256),
  //   isPng: true,
  //   alt: "OpenStreetMap layer",
  //   name: "OpenStreetMap",
  //   maxZoom: 19
  // });
  var center = new google.maps.LatLng(51.5001524, -0.1262362);
  if (google.loader && google.loader.ClientLocation) {
    center = new google.maps.LatLng(google.loader.ClientLocation.latitude, google.loader.ClientLocation.longitude);
  }

  var map = new google.maps.Map(document.getElementById('tour-map'), {
    zoom: 7,
    // yep - geolocation without asking the user for their geo position, nifty, eh?
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // mapTypeId: 'OSM',
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false
  });
  
  // map.mapTypes.set('OSM',osmMapType);
  // map.setMapTypeId('OSM');
  
  // map.overlayMapTypes.insertAt(0, osmMapType);
  //map1.mapTypes.set('OpenStreetMap', osmMapType);
  // map.setMapTypeId('OpenStreetMap');
  
  // FB3600
  // FB3200
  // 
  //   
  
  var dropIcon = new google.maps.MarkerImage(
    'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=|FB3600|000000',
    new google.maps.Size(21,34),
    new google.maps.Point(0,0),
    new google.maps.Point(10,34)
  );
  
  var shadow = new google.maps.MarkerImage(
      'http://chart.apis.google.com/chart?chst=d_map_pin_shadow',
      // The shadow image is larger in the horizontal dimension
      // while the position and offset are the same as for the main image.
      new google.maps.Size(40, 37),
      new google.maps.Point(0,3),
      new google.maps.Point(10,34));
      // Shapes define the clickable region of the icon.
      // The type defines an HTML <area> element 'poly' which
      // traces out a polygon as a series of X,Y points. The final
      // coordinate closes the poly by connecting to the first
      // coordinate.
  
  
  var clickHandler = google.maps.event.addListener(map, 'click', function (event) {
    var marker = new google.maps.Marker({
      position: event.latLng, 
      map: map,
      icon: dropIcon,
      shadow: shadow,
      clickable: false,
      draggable: true
    });
    usersMarkers.push(marker);
    google.maps.event.addListener(marker, 'dblclick', function (event) {
      marker.setMap(null);
    });
  });
  
  var icon = new google.maps.MarkerImage(
    '/assets/images/pin.png',
    new google.maps.Size(42,42),
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
    // bounds.extend(markerLatLong);
  }
  
  // map.fitBounds(bounds);
  var clusterStyle = {
    url: '/assets/images/pin.png',
    height: 42,
    width: 42,
    textSize: 9,
    anchor: [25, 24],
    zoomOnClick: false,
    textColor: '#FAFAFA'
  };
  
  var clusterer = new MarkerClusterer(map, markers, { gridSize: 45, styles: [clusterStyle]});
  
  ev(document.getElementById('tourinterest')).on('submit', function (event) {
    var i = usersMarkers.length,
        markers = [],
        tmp;
    while (i--) {
      tmp = usersMarkers[i].getPosition();
      markers.push([tmp.lat(), tmp.lng()]);
    }
    locationsInput.value = JSON.stringify(markers);
  });
}

google.load("maps", "3", {"callback" : setupTour, other_params:"sensor=false" });
