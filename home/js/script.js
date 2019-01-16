
$(document).ready(function () {


    var menuElem = document.getElementById('sweeties');
    var titleElem = menuElem.querySelector(`.title`);

    titleElem.onclick = function() {
        menuElem.classList.toggle('open');
    };

    function initMap() {
        var centerLatLng = new google.maps.LatLng(33.7598095,-118.1918179);
        var mapOptions = {
            center: centerLatLng,
            zoom: 8
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
    google.maps.event.addDomListener(window, "load", initMap);

})