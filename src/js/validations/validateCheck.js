const validateTerminosCondiciones = (check) => {
    const result = {
        isValid: true,
        errors: []
    };

    if( check === false ){
        result.isValid = false;
        alert("Acepta los términos y condiciones");
    }
    return result;
}
export { validateTerminosCondiciones };