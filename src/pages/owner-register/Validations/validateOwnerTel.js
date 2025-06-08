const validateOwnerTel = (telefono) => {
    const result = {
        isValid: true,
        errors: []
    };
    if (/^\d{10}$/.test(telefono)) {
        
    }else{
        result.isValid=false;
        result.errors.push("Número de telefono inválido. Debe ingresar un número de 10 dígitos.");
         alert ("Número de telefono inválido. Debe ingresar un número de 10 dígitos.");
    }
    return result;
}
export { validateOwnerTel };
