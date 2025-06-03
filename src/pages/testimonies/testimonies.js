import insertMainHeader from "../../modules/header/header.js";
import footer from "../../modules/footer/footer.js";

insertMainHeader(document.getElementById("header"));
footer(document.getElementById("footer"));

// ======================================================================================

async function myFunction() { }

const leerProductos = async (url) => {

   try {

      const response = await fetch(url); // Obtener los datos en formato JSON
      console.log(response);
      const datosApi = await response.json(); // Convertir de JSON a objetos de JavaScript
      console.log(datosApi);
      return datosApi;
   } catch (error) {
      console.log("No se pudo obtener los datos", error)
   }
}


