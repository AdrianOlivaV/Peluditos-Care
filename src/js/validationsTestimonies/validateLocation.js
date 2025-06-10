
const validateLocation = (location) => {
    const result = { isValid: true, errors: [] };
    if (!location.trim()) {
        result.isValid = false;
        result.errors.push("La ubicación es obligatoria.");
    }
    return result;
};

export { validateLocation };
