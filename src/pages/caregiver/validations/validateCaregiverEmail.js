
const validateCaregiverEmail = (correo) => {
    const result = {
        isValid: true,
        errors: []
    };

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (correo === "") {
        result.isValid = false;
        result.errors.push("Debes de incluir un correo electrónico.");
        alert("Debes de incluir un correo electrónico.");
    } else if (!correo.includes("@")) {
        result.isValid = false;
        result.errors.push("El correo debe incluir un '@'.");
        alert("El correo debe incluir un '@'.");
    } else if (!correo.includes(".")) {
        result.isValid = false;
        result.errors.push("El correo debe incluir un dominio con '.'");
        alert("El correo debe incluir un dominio con '.'.");
    } else if (!emailRegex.test(correo)) {
        result.isValid = false;
        result.errors.push("Correo electrónico no válido.");
        alert("Correo electrónico no válido.");
    }

    return result;
}

export { validateCaregiverEmail };