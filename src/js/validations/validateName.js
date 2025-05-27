

const validateName = (nombre) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( nombre === "" ){
        result.isValid = false;
        alert("El nombre no debe estar vacío");
    } else if (nombre.length < 3 ) {
        result.isValid = false;
        alert("El nombre debe tener al menos 3 caracteres");
    }

    return result;

}

export { validateName };

