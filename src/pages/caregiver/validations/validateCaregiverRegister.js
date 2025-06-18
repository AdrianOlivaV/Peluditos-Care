import { validateCaregiverName } from "./validateCaregiverName.js";
import { validateCaregiverLastName } from "./validateCaregiverLastName.js";
import { validateCaregiverBirthDate } from "./validateCaregiverBirthDate.js";
import { validateCaregiverEmail } from "./validateCaregiverEmail.js";
import { validateCaregiverTel } from "./validateCaregiverTel.js";
import { validateCaregiverPassword } from "./validateCaregiverPassword.js";
import { validateExtraFields } from "./ValidateExtraFields.js";
import { validateCaregiverCertified } from "./validateCaregiverCertified.js";

import { validateExperienceYears } from "./validateExperienceYears.js";
import { validateExperienceDescription } from "./validateExperienceDescription.js";
import { validateAvailability } from "./validateAvailability.js";
import { validateServicePrice } from "./validateServicePrice.js";

// Función principal que valida todo el registro del cuidador
const isNewRegisterValid = (user) => {
  const result = {
    isValid: true,
    errors: []
  };

  // Validar nombre
  const nameValidation = validateCaregiverName(user.firstName);
  if (!nameValidation.isValid) {
    result.isValid = false;
    result.errors.push(...nameValidation.errors);
  }

  // Validar apellido
  const lastNameValidation = validateCaregiverLastName(user.lastName);
  if (!lastNameValidation.isValid) {
    result.isValid = false;
    result.errors.push(...lastNameValidation.errors);
  }

  // Validar fecha de nacimiento
  const birthDateValidation = validateCaregiverBirthDate(user.birthDate);
  if (!birthDateValidation.isValid) {
    result.isValid = false;
    result.errors.push(...birthDateValidation.errors);
  }

  // Validar correo electrónico
  const emailValidation = validateCaregiverEmail(user.email);
  if (!emailValidation.isValid) {
    result.isValid = false;
    result.errors.push(...emailValidation.errors);
  }

  // Validar teléfono
  const telValidation = validateCaregiverTel(user.phone);
  if (!telValidation.isValid) {
    result.isValid = false;
    result.errors.push(...telValidation.errors);
  }

  // Validar contraseña y confirmación
  const passwordValidation = validateCaregiverPassword(user.password, user.confirmPassword);
  if (!passwordValidation.isValid) {
    result.isValid = false;
    result.errors.push(...passwordValidation.errors);
  }

  // Validar años de experiencia
  const experienceValidation = validateExperienceYears(user.yearsOfExperience);
  if (!experienceValidation.isValid) {
    result.isValid = false;
    result.errors.push(...experienceValidation.errors);
  }

  // Validar descripción de experiencia
  const descriptionValidation = validateExperienceDescription(user.experienceDescription);
  if (!descriptionValidation.isValid) {
    result.isValid = false;
    result.errors.push(...descriptionValidation.errors);
  }

  // Validar disponibilidad
  const availabilityValidation = validateAvailability(user.availability);
  if (!availabilityValidation.isValid) {
    result.isValid = false;
    result.errors.push(...availabilityValidation.errors);
  }

  // Validar tarifas de servicios individualmente
  const tarifas = [
    user.walkRate,
    user.hostingRate,
    user.homeCareRate,
    user.homeVisitRate,
    user.specialPetsRate
  ];

  tarifas.forEach((tarifa, index) => {
    const tarifaValidation = validateServicePrice(tarifa);
    if (!tarifaValidation.isValid) {
      result.isValid = false;
      result.errors.push(`Error en la tarifa del servicio ${index + 1}: ${tarifaValidation.errors.join(", ")}`);
    }
  });

  // Validar campos extra adicionales
  const extraFieldsValidation = validateExtraFields(user);
  if (!extraFieldsValidation.isValid) {
    result.isValid = false;
    result.errors.push(...extraFieldsValidation.errors);
  }

  // Validar certificado obligatorio
  const certificateValidation = validateCaregiverCertified(user.certificate);
  if (!certificateValidation.isValid) {
    result.isValid = false;
    result.errors.push(...certificateValidation.errors);
  }

  return result;
};

export { isNewRegisterValid };
