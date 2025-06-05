import { crearMapaCDMX } from './components/ciudadDeMexico.js';
import { crearMapaGuadalajara } from './components/guadalajara.js';

const container = document.getElementById('mapContainer');

// Agrega ambos mapas al DOM
container.appendChild(crearMapaCDMX());
container.appendChild(crearMapaGuadalajara());

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
