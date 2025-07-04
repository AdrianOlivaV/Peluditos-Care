const validateTelephone = (telephone) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( telephone === "" ){
        result.isValid = false;
        alert("Ingresa un número de teléfono");
    }else if (/^\d{10}$/.test(telephone)) {
    } else{
    alert ( "Número inválido. Debe tener exactamente 10 dígitos.");
    }
    return result;
}
export { validateTelephone };

