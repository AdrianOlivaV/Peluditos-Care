const validateOwnerName = (nombre) => {
    const result = {
        isValid: true,
        errors: []
    };
   if (nombre.length < 3) {
        result.isValid = false;
        result.errors.push("El nombre debe tener al menos 3 caracteres");

    }else if(nombre.length > 20){
        result.isValid = false;
        result.errors.push("El nombre no debe tener mas de 20 caracteres");

    }else if (!/^[a-zA-Z0-9]+$/.test(nombre)) {
        result.isValid = false;
        result.errors.push("El nombre no debe contener caracteres especiales");

    }

    return result;

}

export { validateOwnerName };
