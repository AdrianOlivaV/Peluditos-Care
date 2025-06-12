import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";
import { leerInputsForm } from "./leerinputsform.js";
import { isNewRegisterValid } from "./Validations/validateOwnerRegister.js"; 
import { postNewRegister } from "./postNewRegister.js";
insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));

//----------------------------------------------------------------
//Vista previa de imagen de mascota

const inputFoto = document.getElementById("petPhoto");
const previewImg = document.getElementById("previewPetPhoto");

inputFoto.addEventListener("change", () => {
  const archivo = inputFoto.files[0];

  if (archivo) {
    const lector = new FileReader();

    lector.onload = function (e) {
      previewImg.src = e.target.result;
      previewImg.style.display = "block"; // mostrar la imagen
    };

    lector.readAsDataURL(archivo); // lee el archivo como URL base64
  } else {
    previewImg.src = "";
    previewImg.style.display = "none"; // oculta si no hay imagen
  }
});
//-------------------------------------------------------------------
// envio del formulario
const ownerRegisterForm = document.getElementById("ownerForm");


ownerRegisterForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita que se envíe el formulario

    // Obtener los datos del formulario.
    const newRegister = leerInputsForm(ownerRegisterForm);
    const validateRegister = isNewRegisterValid(newRegister);


    //esta condicion evalua si los datos ingesados por el usuario son validos
    if(validateRegister.isValid){
         //si los datos son validos, se envia el formulario usando el api fetch
        try{
        //hacer el envio del formulario
            const response = await postNewRegister(newRegister, "https://reqres.in/api/users"); 
            alert("Formulario enviado correctamente " + response.createdAt);  
        }catch(error){
        //-Enviar al usuario el error del servidor en caso de que no se haya podido enviar el formulario
            alert("Error al enviar el formulario: " + error.message);
        }  

    }else{
        //Si los datos no son válidos, muestran los errores al usuario

        // Referencia al contenedor de errores
      const errorContainer = document.getElementById("alertError");

      // Limpiar errores anteriores
      alertError.innerHTML = "";

      // Si hay errores, los mostramos en pantalla con el formato de alerta de Bootstrap
      if (!validateRegister.isValid) {
        validateRegister.errors.forEach(error => {
          const errorDiv = document.createElement("div");
          errorDiv.className = "alert alert-danger";
          errorDiv.role = "alert";
          errorDiv.textContent = error;
          errorContainer.appendChild(errorDiv);
        });
      }
    }
});

