const validateCaregiverTel = (telefono) => {
    const result = {
        isValid: true,
        errors: []
    };
    if (/^\d{10}$/.test(telefono)) {
        
    }else if (!/^[a-zA-Z0-9]+$/.test(telefono)) {
        result.isValid = false;
        result.errors.push("El numero de telefono no debe contener caracteres especiales");
    
    }else{
        result.isValid=false;
        result.errors.push("Número de telefono inválido. Debe ingresar un número de 10 dígitos.");

    }
    return result;
}
export { validateCaregiverTel };
