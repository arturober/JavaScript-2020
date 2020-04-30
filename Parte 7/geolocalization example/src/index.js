import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            pos => resolve(pos),
            error => reject(error));
    });
}

function createMarker(color, lngLat) {
    new mapboxgl.Marker({color})
        .setLngLat(lngLat)
        .addTo(map);
}

const token = "YOUR TOKEN GOES HERE!";
mapboxgl.accessToken = token; // VERY IMPORTANT
let divMap = null;
let map = null;

document.addEventListener("DOMContentLoaded", async e => {
    let pos = await getPosition();
    
    let img = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/" +
        "pin-s+f00(" + pos.coords.longitude + "," + pos.coords.latitude + ")/" +
        pos.coords.longitude + "," + pos.coords.latitude + ",15,0,0/480x240?access_token=" + token;

    document.getElementById("imgMap").src = img;

    divMap = document.getElementById("map");
    const lngLat = new mapboxgl.LngLat(pos.coords.longitude, pos.coords.latitude);
    map = new mapboxgl.Map({
        container: divMap,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: lngLat,
        zoom: 15,
    });
    createMarker('green', lngLat);

    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl,
        marker: {
            color: 'red'
        }
    });
    map.addControl(geocoder);

    let popup = null;

    geocoder.on('result', e => {
        if(popup) {
            popup.remove();
        }
        popup = new mapboxgl.Popup()
        .setLngLat(e.result.center)
        .setHTML(`${e.result.text}<br>
            ${e.result.properties.address}<br>
            Latitude: ${e.result.center[1]}<br>
            Longitude: ${e.result.center[0]}`)
        .addTo(map);
    });

    map.on('click', e => {
        map.panTo(e.lngLat);
        createMarker('red', e.lngLat);
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`Latitude: ${e.lngLat.lat}<br>Longitude: ${e.lngLat.lng}`)
            .addTo(map);
    });
});

