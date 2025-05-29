

const validateName = (nombre) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( nombre === "" ){
        result.isValid = false;
        alert("El nombre no debe estar vacío");
    } else if (nombre.length < 3) {
        result.isValid = false;
        alert("El nombre debe tener al menos 3 caracteres");
    }else if(nombre.length > 20){
        result.isValid = false;
        alert("El nombre no debe tener mas de 20 caracteres");
    }else if (!/^[a-zA-Z0-9]+$/.test(nombre)) {
        result.isValid = false;
        result.errors.push("El nombre no debe contener caracteres especiales");
    } else if(nombre.charAt(0) !== nombre.charAt(0).toUpperCase()){
        result.isValid = false;
        result.errors.push("La primera letra debe estar en mayúscula");
    }

    return result;

}

export { validateName };

