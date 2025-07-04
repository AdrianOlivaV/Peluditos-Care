

const validateName = (name) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( name === "" ){
        result.isValid = false;
        alert("El nombre no debe estar vacío");
    } else if (name.length < 3) {
        result.isValid = false;
        alert("El nombre debe tener al menos 3 caracteres");
    }else if(name.length > 20){
        result.isValid = false;
        alert("El nombre no debe tener mas de 20 caracteres");
    }else if (!/^[a-zA-Z0-9]+$/.test(name)) {
        result.isValid = false;
        result.errors.push("El nombre no debe contener caracteres especiales");
    } else if(name.charAt(0) !== name.charAt(0).toUpperCase()){
        result.isValid = false;
        result.errors.push("La primera letra debe estar en mayúscula");
    }

    return result;

}

export { validateName };

