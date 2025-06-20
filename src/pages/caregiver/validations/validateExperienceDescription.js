const validateExperienceDescription = (descripcion) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (descripcion.trim().length < 10) {
        result.isValid = false;
        result.errors.push("La descripción debe tener al menos 10 caracteres.");
    } else if (descripcion.length > 500) {
        result.isValid = false;
        result.errors.push("La descripción no debe superar los 500 caracteres.");
    }

    return result;
};
export{validateExperienceDescription};