import insertMainHeader from '../../modules/header/header.js';
import insertMainFooter from '../../modules/footer/footer.js';
import leerInputsForm from './leerInputsForm.js';
import isNewRegisterValid from './validations/validateCaregiverRegister.js';
import postNewRegister from './postNewRegister.js';

document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        insertMainHeader(headerContainer);
    } else {
        console.warn('Elemento con id="header" no encontrado en el DOM.');
    }

    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        insertMainFooter(footerContainer);
    } else {
        console.warn('Elemento con id="footer" no encontrado en el DOM.');
    }

    // Preview certificado imagen o nombre archivo
    const inputCertificado = document.getElementById("certificado");
    const previewCertificado = document.getElementById("previewCertificado");

    if (inputCertificado && previewCertificado) {
        inputCertificado.addEventListener("change", () => {
            const archivo = inputCertificado.files[0];
            previewCertificado.innerHTML = ""; // limpiar contenido previo

            if (!archivo) {
                previewCertificado.style.display = "none";
                return;
            }

            if (archivo.type.startsWith("image/")) {
                const lector = new FileReader();
                lector.onload = (e) => {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    img.style.maxWidth = "300px";
                    img.style.maxHeight = "300px";
                    previewCertificado.appendChild(img);
                    previewCertificado.style.display = "block";
                };
                lector.readAsDataURL(archivo);
            } else {
                // Mostrar nombre del archivo si no es imagen
                previewCertificado.textContent = `Archivo seleccionado: ${archivo.name}`;
                previewCertificado.style.display = "block";
            }
        });
    }

    // Manejo del formulario
    const caregiverForm = document.getElementById("caregiverForm");
    const errorContainer = document.getElementById("alertError");

    if (caregiverForm && errorContainer) {
        caregiverForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            errorContainer.innerHTML = ""; // limpiar errores previos

            const caregiverData = leerInputsCaregiverForm(caregiverForm);
            // Asegúrate de importar o definir isNewRegisterValid
            const validationResult = isNewRegisterValid(caregiverData);

            if (validationResult.isValid) {
                try {
                    const response = await postNewRegister(caregiverData, "https://reqres.in/api/users");
                    alert("Formulario enviado correctamente: " + (response.createdAt || ""));
                    caregiverForm.reset();
                    if (previewCertificado) {
                        previewCertificado.innerHTML = "";
                        previewCertificado.style.display = "none";
                    }
                } catch (error) {
                    alert("Error al enviar el formulario: " + error.message);
                }
            } else {
                validationResult.errors.forEach(error => {
                    const divError = document.createElement("div");
                    divError.className = "alert alert-danger";
                    divError.role = "alert";
                    divError.textContent = error;
                    errorContainer.appendChild(divError);
                });
            }
        });
    }
});
