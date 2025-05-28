
const validateLastName = (apellido) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( nombre === "" ){
        result.isValid = false;
        alert("El apellido no debe estar vacío");
    } else if (apellido.length < 3) {
        result.isValid = false;
        alert("El apellido debe tener al menos 3 caracteres");
    }else if(apellido.length > 40){
        result.isValid = false;
        alert("El apellido no debe tener mas de 20 caracteres");
    } 

    return result;

}

export { validateLastName };
