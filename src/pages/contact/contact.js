import header from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import { leerInputsFormulario } from "./leerInputFormularios.js";
import { isUserValid } from "../../js/validations/isValidUser.js";

header(document.getElementById("header"));
footer(document.getElementById("footer"));

//---------------------------------------------

const registerForm = document.getElementById("form");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");

    // Obtener los datos del formulario.
    const newConsult = leerInputsFormulario(registerForm);
    const validatedUser = isUserValid(newConsult);
     console.log(newConsult);

    
});