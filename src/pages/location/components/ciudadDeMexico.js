export function crearMapaCDMX() {
  const box = document.createElement('div');
  box.className = 'map-box';

  box.innerHTML = `
    <svg width="200" height="300" viewBox="0 0 200 300">
      <rect x="10" y="10" width="180" height="280" fill="#b3d9ff" stroke="#000" />
      <!-- Ejemplo de región interactiva -->
      <circle cx="60" cy="80" r="20" fill="#3399ff" class="zona" data-nombre="Azcapotzalco" />
      <circle cx="120" cy="160" r="20" fill="#66ccff" class="zona" data-nombre="Coyoacán" />
    </svg>
    <div class="map-label">Ciudad de México</div>
  `;

  box.querySelectorAll('.zona').forEach(zona => {
    zona.addEventListener('click', () => {
      alert(`Zona seleccionada: ${zona.dataset.nombre}`);
    });
  });

  return box;
}
