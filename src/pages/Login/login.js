import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import { leerInputsLogin } from "./inputsLogin.js";
import { isUserValidLogin } from "../../js/validationsLogin/isValidUserLogin.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));

//---------------------------------------------

const loginForm = document.getElementById("form-login");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");

    // Obtener los datos del formulario.
    const newConsult = leerInputsLogin(loginForm);
    const validatedUser = isUserValidLogin(newConsult);
     console.log(validatedUser);

    
});
