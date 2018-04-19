function initMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		zoom: 12, // уровень приближения
		center: {lat: 23.0104093, lng: 72.5422244},
		mapTypeId: google.maps.MapTypeId.ROADMAP, // тип карты ROADMAP, SATELLITE, HYBRID или TERRAIN
		//disableDefaultUI: true,
		// или
		mapTypeControl: false, // переключатель типа карты - ROADMAP, SATELLITE, HYBRID или TERRAIN
		streetViewControl: false, // человечек
		panControl: true, // круг с позиционированием
		zoomControl: false, // ползунок для масштабирования
		scaleControl: false, // шкала масштаба
		scrollwheel: false
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	

// Маркер
	// var marker = new google.maps.Marker({
	// map: map,
	// 	// Define the place with a location, and a query string.
	// 	place: {
	// 		location: {lat: 23.0104093, lng: 72.5422244},
	// 		query: 'Строка для определения'
	// 	}
	// });

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
