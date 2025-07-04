import { validateOwnerName } from "./validateOwnerName.js";
import { validateOwnerLastName } from "./validateOwnerLastName.js";
import { validateOwnerBirthDate } from "./validateOwnerBirthDate.js";
import { validateOwnerEmail } from "./validateOwnerEmail.js";
import { validateOwnerTel } from "./validateOwnerTel.js";
import { validateOwnerPassword } from "./validateOwnerPassword.js";
import { validateExtraFields } from "./ValidateExtraFields.js";
import { validatePetPhoto } from "./validatePetPhoto.js";

/**
 * Valida que los datos ingresados al formulario sean correctos
 * @param {*} user 
 */
const isNewRegisterValid = (user) => {
    const result = {
        isValid: true,
        errors: []
    };

    // validación del nombre
    const nameValidation = validateOwnerName(user.name);
    if (nameValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...nameValidation.errors);
    }

    // validación del apellido
    const lastNameValidation = validateOwnerLastName(user.last_name);
    if (lastNameValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...lastNameValidation.errors);
    }

    // validación de fecha de nacimiento
    const birthDateValidation = validateOwnerBirthDate(user.birthdate);
    if (birthDateValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...birthDateValidation.errors);
    }

    // validación del correo
    const ownerEmailValidation = validateOwnerEmail(user.email);
    if (ownerEmailValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...ownerEmailValidation.errors);
    }

    // validación del teléfono
    const ownerTelValidation = validateOwnerTel(user.phone_number);
    if (ownerTelValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...ownerTelValidation.errors);
    }

    // validación de contraseña
    const passwordValidation = validateOwnerPassword(user.password, user.passwordconf);
    if (passwordValidation.isValid === false) {
        result.isValid = false;
        result.errors.push(...passwordValidation.errors);
    }

    // validación de campos extra
    const extraFieldsValidation = validateExtraFields(user);
    if (!extraFieldsValidation.isValid) {
        result.isValid = false;
        result.errors.push(...extraFieldsValidation.errors);
    }

    // validación de foto de la mascota (protegido para evitar errores)
    if (user.pets && user.pets.length > 0) {
        const pet = user.pets[0];
        const petPhotoValidation = validatePetPhoto(pet.picture);
        if (!petPhotoValidation.isValid) {
            result.isValid = false;
            result.errors.push(...petPhotoValidation.errors);
        }
    } else {
        // Si no hay mascotas, opcional: puedes decidir si es error o no
        // result.isValid = false;
        // result.errors.push("No hay datos de mascotas para validar la foto.");
    }

    return result;
};

export { isNewRegisterValid };