const validateAvailability = (disponibilidad) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (disponibilidad.trim().length < 5) {
        result.isValid = false;
        result.errors.push("Debes especificar tu disponibilidad.");
    }

    return result;
};
export { validateAvailability };