function initMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		zoom: 12, // уровень приближения
		center: {lat: 38.907350, lng: -77.036562},
		mapTypeId: google.maps.MapTypeId.ROADMAP, // тип карты ROADMAP, SATELLITE, HYBRID или TERRAIN
		//disableDefaultUI: true,
		// или
		mapTypeControl: true, // переключатель типа карты - ROADMAP, SATELLITE, HYBRID или TERRAIN
		streetViewControl: true, // человечек
		panControl: true, // круг с позиционированием
		zoomControl: true, // ползунок для масштабирования
		scaleControl: true // шкала масштаба
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	

// Маркер
	var marker = new google.maps.Marker({
	map: map,
		// Define the place with a location, and a query string.
		place: {
			location: {lat: 38.907350, lng: -77.036562},
			query: 'Строка для определения'
		}
	});

	// Construct a new InfoWindow.
	var infoWindow = new google.maps.InfoWindow({
		content: 'Hello my friends :)'
	});

	// Opens the InfoWindow when marker is clicked.
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}


// Загружаем карту
google.maps.event.addDomListener(window, 'load', initMap);
