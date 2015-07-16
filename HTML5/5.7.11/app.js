jQuery(document).ready(function() {
	var map = L.map('map').setView([40.2838, -3.8215], 13);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18
	}).addTo(map);

	var marker = L.marker([40.2838, -3.8215]).addTo(map);

	var circle = L.circle([40.2838, -3.8215], 200, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(map);

	marker.bindPopup("URJC").openPopup();


	// SHOW POSITION
	var x = document.getElementById("demo");

	function getLocation() {
		if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(showPosition);
		} else {
		    x.innerHTML = "Geolocation is not supported by this browser.";
			console.log("NO HAY GEOLOC");
		}
	}

	function showPosition(position) {
		x.innerHTML = "Latitude: " + position.coords.latitude + 
		"<br>Longitude: " + position.coords.longitude; 
	}

	if(Modernizr.geolocation){
		alert("HAY geolocation");
	}

	console.log("antes de geoloc");

	getLocation();

});
