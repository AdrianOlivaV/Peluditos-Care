const validateTelefono = (telefono) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( telefono === "" ){
        result.isValid = false;
        alert("Ingresa un número de teléfono");
    }else if (/^\d{10}$/.test(telefono)) {
    } else{
    alert ( "Número inválido. Debe tener exactamente 10 dígitos.");
    }
    return result;
}
export { validateTelefono };

