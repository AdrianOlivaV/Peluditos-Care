const validateCaregiverEmail = (correo) => {
    const result = {
        isValid: true,
        errors: []
    };

    const email = correo.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        result.isValid = false;
        result.errors.push("Correo electrónico no válido. Asegúrate de incluir '@' y un dominio.");
    }

    return result;
};

export { validateCaregiverEmail };
