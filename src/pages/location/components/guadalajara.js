export function crearMapaGuadalajara() {
  const box = document.createElement('div');
  box.className = 'map-box';

  box.innerHTML = `
    <svg width="200" height="300" viewBox="0 0 200 300">
      <rect x="10" y="10" width="180" height="280" fill="#ffd699" stroke="#000" />
      <!-- Ejemplo de región interactiva -->
      <circle cx="70" cy="100" r="20" fill="#ff9900" class="zona" data-nombre="Zona Minerva" />
      <circle cx="130" cy="180" r="20" fill="#ffcc66" class="zona" data-nombre="Zona Centro" />
    </svg>
    <div class="map-label">Guadalajara</div>
  `;

  box.querySelectorAll('.zona').forEach(zona => {
    zona.addEventListener('click', () => {
      alert(`Zona seleccionada: ${zona.dataset.nombre}`);
    });
  });

  return box;
}

