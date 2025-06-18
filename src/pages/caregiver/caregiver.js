import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import { leerInputsForm } from "./leerInputsForm.js";
import { isNewRegisterValid } from "./validations/validateCaregiverRegister.js";
import { postNewRegister } from "./postNewRegister.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));



// Envío del formulario
const caregiverRegisterForm = document.getElementById("caregiverform");

caregiverRegisterForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // evita que se envíe el formulario

  // Limpiar errores anteriores en pantalla
  const errorContainer = document.getElementById("alertError");
  errorContainer.innerHTML = "";

  // Obtener los datos del formulario.
  const newRegister = leerInputsForm(caregiverRegisterForm);
  const validateRegister = isNewRegisterValid(newRegister);

  // Esta condición evalúa si los datos ingresados por el usuario son válidos
  if (validateRegister.isValid) {
    // Si los datos son válidos, se envía el formulario usando el API fetch
    try {
      const response = await postNewRegister(newRegister, "https://reqres.in/api/users");
      alert("Formulario enviado correctamente " + response.createdAt);
      //Limpiar formulario después de enviarlo correctamente
      caregiverRegisterForm.reset();
    } catch (error) {
      // Enviar al usuario el error del servidor en caso de fallo
      alert("Error al enviar el formulario: " + error.message);
    }
  } else {
    // Si los datos no son válidos, se muestran los errores al usuario

    // Referencia al contenedor de errores
    const errorContainer = document.getElementById("alertError");

    // Limpiar errores anteriores
    errorContainer.innerHTML = "";

    // Mostrar los errores en pantalla con formato de alerta de Bootstrap
    validateRegister.errors.forEach(error => {
      const errorDiv = document.createElement("div");
      errorDiv.className = "alert alert-danger";
      errorDiv.role = "alert";
      errorDiv.textContent = error;
      errorContainer.appendChild(errorDiv);
    });
  }
});
