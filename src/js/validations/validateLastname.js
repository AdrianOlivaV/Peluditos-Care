
const validateLastName = (lastName) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( lastName === "" ){
        result.isValid = false;
        alert("El apellido no debe estar vacío");
    } else if (lastName.length < 3) {
        result.isValid = false;
        alert("El apellido debe tener al menos 3 caracteres");
    }else if(lastName.length > 40){
        result.isValid = false;
        alert("El apellido no debe tener mas de 20 caracteres");
    } 

    return result;

}

export { validateLastName };
