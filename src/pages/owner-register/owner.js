import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        const get = (id) => document.getElementById(id).value.trim();
        const getFileCount = (id) => document.getElementById(id).files.length;
        const isChecked = (id) => document.getElementById(id).checked;

        // Datos del dueño
        const ownerName = get("ownerName");
        const ownerPhone = get("ownerPhone");
        const ownerEmail = get("ownerEmail");
        const ownerPassword = get("ownerPassword");
        const ownerAdress = get("ownerAdress");
        const ownerCity = get("ownerCity");
        const ownerZipCode = get("ownerZipCode");
        const ownerAbout = get("ownerAbout");
        const ownerTerms = isChecked("ownerTerms");

        // Datos de la mascota
        const petName = get("petName");
        const petSpecies = get("petSpecies");
        const petAttitude = get("petAttitude");
        const petAge = get("petAge");
        const petDescription = get("petDescription");
        const petPhoto = getFileCount("petPhoto");

        // Validaciones detalladas
        if (!ownerName) {
            alert("Por favor, ingresa tu nombre.");
            e.preventDefault();
            return;
        }

        if (!ownerPhone || isNaN(ownerPhone) || ownerPhone.length < 7) {
            alert("Ingresa un número de teléfono válido (solo números, mínimo 7 dígitos).");
            e.preventDefault();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!ownerEmail || !emailPattern.test(ownerEmail)) {
            alert("Ingresa un correo electrónico válido (ej: ejemplo@correo.com).");
            e.preventDefault();
            return;
        }

        if (!ownerPassword || ownerPassword.length < 6) {
            alert("Ingresa una contraseña de al menos 6 caracteres.");
            e.preventDefault();
            return;
        }

        if (!ownerAdress) {
            alert("Por favor, ingresa tu dirección (calle y número).");
            e.preventDefault();
            return;
        }

        if (!ownerCity) {
            alert("Por favor, ingresa tu ciudad.");
            e.preventDefault();
            return;
        }

        if (!ownerZipCode || isNaN(ownerZipCode) || ownerZipCode.length < 4) {
            alert("Ingresa un código postal válido (solo números, mínimo 4 dígitos).");
            e.preventDefault();
            return;
        }

        if (!ownerAbout) {
            alert("Cuéntanos algo sobre ti.");
            e.preventDefault();
            return;
        }

        if (!ownerTerms) {
            alert("Debes aceptar los Términos y Condiciones.");
            e.preventDefault();
            return;
        }

        if (!petName) {
            alert("Ingresa el nombre de tu mascota.");
            e.preventDefault();
            return;
        }

        if (!petSpecies) {
            alert("Ingresa la especie de tu mascota (ej: Perro, Gato, Otro).");
            e.preventDefault();
            return;
        }

        if (!petAttitude) {
            alert("Describe el comportamiento de tu mascota.");
            e.preventDefault();
            return;
        }

        if (!petAge || isNaN(petAge) || parseInt(petAge) < 0) {
            alert("Ingresa una edad válida para la mascota.");
            e.preventDefault();
            return;
        }

        if (!petDescription) {
            alert("Agrega una descripción de tu mascota.");
            e.preventDefault();
            return;
        }

        if (!petPhoto) {
            alert("Por favor, sube una foto de tu mascota.");
            e.preventDefault();
            return;
        }
    });
});