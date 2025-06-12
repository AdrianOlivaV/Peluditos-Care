import { validateCaregiverName } from "./validateCaregiverName.js";
import { validateCaregiverBirthDate } from "./validateCaregiverBirthDate.js";
import { validateCaregiverEmail } from "./validateCaregiverEmail.js";
import { validateCaregiverPhone } from "./validateCaregiverPhone.js";
import { validateCaregiverPassword } from "./validateCaregiverPassword.js";
import { validateExtraFields } from "./validateExtraFields.js";
import { validateCaregiverCertificate } from "./validateCaregiverCertificate.js"; // nuevo validador para certificado

const isNewRegisterValid = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    // Nombre
    const nameValidation = validateCaregiverName(user.nombre);
    if (!nameValidation.isValid) {
        result.isValid = false;
        result.errors.push(...nameValidation.errors);
    }

    // Fecha nacimiento
    const birthDateValidation = validateCaregiverBirthDate(user.fechaNacimiento);
    if (!birthDateValidation.isValid) {
        result.isValid = false;
        result.errors.push(...birthDateValidation.errors);
    }

    // Email
    const emailValidation = validateCaregiverEmail(user.email);
    if (!emailValidation.isValid) {
        result.isValid = false;
        result.errors.push(...emailValidation.errors);
    }

    // Teléfono
    const phoneValidation = validateCaregiverPhone(user.telefono);
    if (!phoneValidation.isValid) {
        result.isValid = false;
        result.errors.push(...phoneValidation.errors);
    }

    // Contraseña
    const passwordValidation = validateCaregiverPassword(user.password, user.confirmPassword);
    if (!passwordValidation.isValid) {
        result.isValid = false;
        result.errors.push(...passwordValidation.errors);
    }

    // Campos extra (calle, número, cp, municipio)
    const extraFieldsValidation = validateExtraFields(user);
    if (!extraFieldsValidation.isValid) {
        result.isValid = false;
        result.errors.push(...extraFieldsValidation.errors);
    }

    // Certificado (validación individual)
    const certificateValidation = validateCaregiverCertificate(user.certificado);
    if (!certificateValidation.isValid) {
        result.isValid = false;
        result.errors.push(...certificateValidation.errors);
    }

    return result;
};

export default isNewRegisterValid;
