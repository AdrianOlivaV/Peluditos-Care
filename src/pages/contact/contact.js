import header from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import { leerInputsFormulario } from "./leerInputFormularios.js";

header(document.getElementById("header"));
footer(document.getElementById("footer"));

//---------------------------------------------

const registerFrom = document.getElementById("formulario");

registerFrom.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");

    // Obtener los datos del formulario.
    const newConsult = leerInputsFormulario(registerFrom);
    //const validatedUser = isUserValid(newConsult);
     console.log(newConsult);

    
});