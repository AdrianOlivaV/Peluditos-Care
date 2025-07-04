
const validateImageUrl = (url) => {
    const result = { isValid: true, errors: [] };
    try {
        new URL(url);
    } catch (_) {
        result.isValid = false;
        result.errors.push("La URL de la imagen no es válida.");
    }
    return result;
};

export { validateImageUrl };
