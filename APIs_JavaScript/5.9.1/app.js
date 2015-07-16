jQuery(document).ready(function() {
	var map = L.map('map').setView([40.19692, -3.69031], 13);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18
	}).addTo(map);

	var marker = L.marker([40.19692, -3.69031]).addTo(map);

	var circle = L.circle([40.19692, -3.69031], 10, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(map);

	marker.bindPopup("MI CAAAAAAAASA").openPopup();

	var popup = L.popup();

	function onMapClick(e) {
		popup
		    .setLatLng(e.latlng)
		    .setContent("You clicked the map at " + e.latlng.toString())
		    .openOn(map);
		//L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
	}

	map.on('click', onMapClick);
});

	
