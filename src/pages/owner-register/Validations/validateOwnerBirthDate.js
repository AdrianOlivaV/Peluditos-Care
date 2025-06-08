const validateOwnerBirthDate = (fecha) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (!fecha) {
        result.isValid = false;
        result.errors.push("Debes ingresar una fecha de nacimiento.")
        alert("Debes ingresar una fecha de nacimiento.");
        return result;
    } 

    const fechaNac = new Date(fecha);
    const hoy = new Date();

    // Calcular edad
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    // Ajustar si aún no ha cumplido años este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    if (edad < 18) {
        result.isValid = false;
        result.errors.push("Debes ser mayor de edad (mínimo 18 años).")
        alert("Debes ser mayor de edad (mínimo 18 años).");
    }

    return result;
};

export { validateOwnerBirthDate };