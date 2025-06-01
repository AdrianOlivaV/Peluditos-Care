const insertMainHeader = (header) => {

  header.innerHTML = `
    <nav class="navbar navbar-expand-lg py-2"
      style="background-color:#24527A">
      <div class="container-fluid">
        <a class="navbar-brand ms-3" href="#">
          <img  src="/public/images/logo.png" width="150" height="" class="rounded-pill navbar-brand" alt="Logo" />
        </a>
        <div class="d-flex align-items-end">
          <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
            </svg>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav w-100 d-flex justify-content-evenly align-items-center">
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="../../../index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="/src/pages/about/about.html">¿Quiénes somos?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="#">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="/src/pages/contact/contact.html">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="#">Ubicación</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-bold" href="/src/pages/login/login.html">Iniciar sesión / Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     `;
}

export default insertMainHeader;

