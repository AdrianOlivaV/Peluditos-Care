
const validateOwnerLastName = (apellido) => {
    const result = {
        isValid: true,
        errors: []
    };
    
    if (apellido.length < 3) {
        result.isValid = false;
        result.errors.push("El apellido debe tener al menos 3 caracteres");
/*         alert("El apellido debe tener al menos 3 caracteres"); */
    }else if(apellido.length > 40){
        result.isValid = false;
        result.errors.push("El apellido no debe tener mas de 20 caracteres");
/*         alert("El apellido no debe tener mas de 20 caracteres"); */
    } else if (!/^[a-zA-Z0-9]+$/.test(apellido)) {
        result.isValid = false;
        result.errors.push("El apellido no debe contener caracteres especiales");
/*         alert("El apellido no debe contener caracteres especiales"); */
    }

    return result;

}

export { validateOwnerLastName };
