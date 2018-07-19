// Initialize and add the map
function initMap() {
    var uluru = { lat: 34.026715, lng: -118.393846 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}
