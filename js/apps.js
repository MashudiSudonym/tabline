// inisialisasi peta
function inisialMap() {
    var myLatLng = new google.maps.LatLng(-6.6411, 110.7132); // atur LatLng ke Kabupaten Jepara
    // map properti
    var mapProp = {
        center: myLatLng,
        zoom: 11,
        panControl: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        overviewMapControl: true,
        rotateControl: true,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    // array data lokasi
    tambalban = [
        {
            "judul": "Tambal Ban Jl. Pemuda",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Pemuda</h3>" +
            "Alamat: Jl. Pemuda. Jepara",
            "lat": -6.597080,
            "lng": 110.673251
        },
        {
            "judul": "Tambal Ban Jl. Kyai H. Wahid Hasyim",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Kyai H. Wahid Hasyim</h3>" +
            "Alamat: Jl. Kyai H. Wahid Hasyim. Jepara",
            "lat": -6.597877,
            "lng": 110.677313
        },
        {
            "judul": "Tambal Ban Jl. Kyai H. Wahid Hasyim",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Kyai H. Wahid Hasyim</h3>" +
            "Alamat: Jl. Kyai H. Wahid Hasyim. Jepara",
            "lat": -6.599265,
            "lng": 110.678220
        },
        {
            "judul": "Tambal Ban Jl. Kyai H. Wahid Hasyim",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Kyai H. Wahid Hasyim</h3>" +
            "Alamat: Jl. Kyai H. Wahid Hasyim. Jepara",
            "lat": -6.601838,
            "lng": 110.677771
        },
        {
            "judul": "Tambal Ban Jl. Kyai H. Wahid Hasyim",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Kyai H. Wahid Hasyim</h3>" +
            "Alamat: Jl. Kyai H. Wahid Hasyim. Jepara",
            "lat": -6.602596,
            "lng": 110.678089
        },
        {
            "judul": "Tambal Ban Jl. Soekarno - Hatta",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Soekarno - Hatta</h3>" +
            "Alamat: Jl. Soekarno - Hatta. Tahunan. Jepara",
            "lat": -6.607386,
            "lng": 110.682447
        },
        {
            "judul": "Tambal Ban Jl. Soekarno - Hatta",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Soekarno - Hatta</h3>" +
            "Alamat: Jl. Soekarno - Hatta. Tahunan. Jepara",
            "lat": -6.614612,
            "lng": 110.688832
        },
        {
            "judul": "Tambal Ban Jl. Taman Siswa",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Planet Ban Jl. Taman Siswa</h3>" +
            "Alamat: Jl. Taman Siswa. Tahunan. Jepara",
            "lat": -6.616491,
            "lng": 110.691009
        },
        {
            "judul": "Tambal Ban Jl. Taman Siswa",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Taman Siswa</h3>" +
            "Alamat: Jl. Taman Siswa. Tahunan. Jepara",
            "lat": -6.616960,
            "lng": 110.692272
        },
        {
            "judul": "Tambal Ban Jl. Soekarno - Hatta",
            "kontenInfo": "<h3 id='firstHeading' class='firstHeading'>Tambal Ban Semua Kendaraan kecuali Bus dan Truck Jl. Soekarno - Hatta</h3>" +
            "Alamat: Jl. Soekarno - Hatta. Tahunan. Jepara",
            "lat": -6.621880,
            "lng": 110.695724
        }
    ];
    // cetak array ke marker
    for (var i = 0; i < tambalban.length; ++i) {
        // variable function infoWindow
        var infoWindow = new google.maps.InfoWindow();
        // marker
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(tambalban[i].lat, tambalban[i].lng),
            title: tambalban[i].judul,
            map: map
        });
        // print marker, info window ke map
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                // info window
                infoWindow.setContent(tambalban[i].kontenInfo);
                infoWindow.open(map, marker);
                // zoom on click
                map.setZoom(17);
                map.setCenter(marker.getPosition());
            }
        })(marker, i));
    }
    // get location
    var GeoMarker = new GeolocationMarker();
    GeoMarker.setCircleOptions({ fillColor: 'transparent' });
    google.maps.event.addListenerOnce(GeoMarker, 'position_changed', function () {
        map.setCenter(this.getPosition());
        map.fitBounds(this.getBounds());
    });
    google.maps.event.addListener(GeoMarker, 'geolocation_error', function (e) {
        alert('There was an error obtaining your position. Message: ' + e.message);
    });
    GeoMarker.setMap(map);
}
// load map
google.maps.event.addDomListener(window, 'load', inisialMap);
// jika lokasi tidak ditemukan atau browser tidak support geoLocation
if (!navigator.geolocation) {
    alert('Your browser does not support geolocation');
}