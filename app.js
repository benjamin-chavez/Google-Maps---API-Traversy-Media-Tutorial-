function initMap() {
  // Map Options
  var options = {
    zoom:8,
    center: {lat:19.4326,lng:-99.1332}
  }

  // New Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(e) {
    // Add Marker
    addMarker({coords:e.latLng});
  })

  // Create an array of markers
  var markers = [
    {
      coords:{lat:19.4150,lng:-99.1774},
      iconImage: 'https://img.icons8.com/emoji/48/000000/mouth-emoji.png',
      content: '<h1>Le Condesa, MX</h1>'
    },
    {
      coords:{lat:19.2826,lng:-99.6557},
    },
    {
      coords:{lat:19.7060,lng:-101.1950},
      content: '<h1>Morelia, MX</h1>'
    }
  ]
  // Loop through markers
  for(var i = 0; i< markers.length;i++){
    // Add Marker 
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      // icon: props.iconImage
    });

    // Check for custom icon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check for content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }

}
