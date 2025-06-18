const validateServicePrice = (precio) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (precio === "" || isNaN(precio)) {
        result.isValid = false;
        result.errors.push("La tarifa debe ser un número.");
    } else if (precio < 0 || precio > 10000) {
        result.isValid = false;
        result.errors.push("La tarifa debe estar entre 0 y 10000.");
    }

    return result;
};
export{validateServicePrice};