
const validateUserName = (name) => {
    const result = { isValid: true, errors: [] };
    if (!name.trim()) {
        result.isValid = false;
        result.errors.push("El nombre es obligatorio.");
    }
    return result;
};

export { validateUserName };
