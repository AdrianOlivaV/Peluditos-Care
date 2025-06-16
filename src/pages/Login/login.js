import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import { readInputsLogin } from "./inputsLogin.js";
import { isUserValidLogin } from "../../js/validationsLogin/isValidUserLogin.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));

//---------------------------------------------

const loginForm = document.getElementById("form-login");

// Crear contenedor de alertas si no existe
const alertContainer = document.createElement("div");
alertContainer.id = "alert-container";
alertContainer.className = "my-3";
loginForm.prepend(alertContainer);

// Función de redirección de pag
const redirectPage = (url) => {
    location.assign(url); //solo para pruebas
    // location.replace(url); // para que no pueda volver con "atrás"
};

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");

    // Leer inputs
    const userData = readInputsLogin(loginForm);

    // Validar
    const validationUserData = isUserValidLogin(userData);

    // Limpiar alertas anteriores
    alertContainer.innerHTML = "";

    if (!validationUserData.isValid) {
        validationUserData.errors.forEach(error => {
            const alert = document.createElement("div");
            alert.className = "alert alert-danger alert-dismissible fade show";
            alert.setAttribute("role", "alert");
            alert.innerHTML = `
                ${error}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
            `;
            alertContainer.appendChild(alert);
        });
    } else {
        const alert = document.createElement("div");
        alert.className = "alert alert-success alert-dismissible fade show";
        alert.setAttribute("role", "alert");
        alert.innerHTML = `
            ¡Inicio de sesión exitoso!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        `;
        alertContainer.appendChild(alert);

        // Redirigir después de 2 segundos
        setTimeout(() => {
            redirectPage("../../../index.html");
        }, 2000);
    } 
});
