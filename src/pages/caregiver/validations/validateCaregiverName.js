const validateCaregiverName = (nombre) => {
    const result = {
        isValid: true,
        errors: []
    };

    if (nombre.length < 3) {
        const errorMsg = "El nombre debe tener al menos 3 caracteres";
        result.isValid = false;
        result.errors.push(errorMsg);

    } else if (nombre.length > 30) {
        const errorMsg = "El nombre no debe tener más de 30 caracteres";
        result.isValid = false;
        result.errors.push(errorMsg);

    } else if (!/^[a-zA-Z0-9]+$/.test(nombre)) {
        const errorMsg = "El nombre no debe contener caracteres especiales";
        result.isValid = false;
        result.errors.push(errorMsg);
    }

    return result;
};

const inputNombre = document.getElementById('nombre');
const nombreError = document.getElementById('nombreError');

inputNombre.addEventListener('blur', () => {
    const nombre = inputNombre.value.trim();
    const validation = validateCaregiverName(nombre);

    if (!validation.isValid) {
        inputNombre.classList.add('is-invalid');
        nombreError.textContent = validation.errors.join('\n');
    } else {
        inputNombre.classList.remove('is-invalid');
        nombreError.textContent = '';
    }
});

