const validateCaregiverBirthDate = (fecha) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (!fecha) {
        const errorMsg = "Debes ingresar una fecha de nacimiento.";
        alert(errorMsg);
        return {
            isValid: false,
            errors: [errorMsg]
        };
    }

    const fechaNac = new Date(fecha);
    const hoy = new Date();

    // Calcular edad
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    if (edad < 18) {
        const errorMsg = "Debes ser mayor de edad (mínimo 18 años).";
        alert(errorMsg);
        result.isValid = false;
        result.errors.push(errorMsg);
    }

    return result;
};

export { validateCaregiverBirthDate };
