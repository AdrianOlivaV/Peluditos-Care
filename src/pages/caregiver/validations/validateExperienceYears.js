const validateExperienceYears = (anios) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (anios === "" || isNaN(anios)) {
        result.isValid = false;
        result.errors.push("Debes ingresar un número válido.");
    } else if (anios < 0 || anios > 50) {
        result.isValid = false;
        result.errors.push("Los años de experiencia deben estar entre 0 y 50.");
    }

    return result;
};
export{validateExperienceYears};