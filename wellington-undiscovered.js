
var map;
var geocoder;
var markers = [];
var backgrounds = [];
var currentBackground = 0;

function onLoad(){
	loadBackgrounds();
}

function loadBackgrounds(){
	backgrounds = [{
		loc: "resources/site-images/wellington-background.jpg"	
	},

	{
		loc: "resources/site-images/wellington-background-1.jpg"
	},

	{
		loc: "resources/site-images/wellington_night_1.jpg"
	}

	];

	alternate_images();	
}

function initialize()
{
  var mapProp = {
    center: new google.maps.LatLng(-41.2865,174.7762),
    zoom:18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var locations = [
  	{
  	  title: "Hataitai Shop",
  	  lat: -41.304199,
  	  lng: 174.79483
  	},

  	{
	  title: "Petone Store",
	  lat: -41.224220,
	  lng: 174.882146
	},

	{
	  title: 'Te Papa',
	  lat: -41.290501,
	  lng: 174.782102
	}
  ];

  for( var i=0; i<locations.length; i++ ) {

		// Create a new marker
		var marker = new google.maps.Marker({
			position: {
				lat: locations[i].lat,
				lng: locations[i].lng
			},
			map: map,
			title: locations[i].title,
			//icon: 'http://placehold.it/50x50',
			id: i
		});

		// Store this marker in the collection
		markers.push(marker);

	}

	// Show the contents of the allMarkers array
	console.log(markers);
	map.setCenter(markers[0].getPosition());
}

function loadScript()
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
  document.body.appendChild(script);
}

function codeAddress() {
	var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
}

function alternate_images(){
	var max = backgrounds.length - 1;
	if (currentBackground < max){
		currentBackground++;
	}
	else {
		currentBackground = 0;
	}

	console.log(document.getElementById('cover-image'));
	document.getElementById('cover-image').src = backgrounds[currentBackground].loc;

	console.log("backgrounds: " + backgrounds[currentBackground]);

	setTimeout(alternate_images, 5000);
}

window.onload = loadScript;
