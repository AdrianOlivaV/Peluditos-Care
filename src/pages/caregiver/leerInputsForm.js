const leerInputsForm = (formulario) => {
  const newCaregiverRegister = {
    firstName: formulario.elements["caregiverName"].value.trim(),
    lastName: formulario.elements["caregiverLastName"].value.trim(),
    birthDate: formulario.elements["caregiverBirthDate"].value,
    email: formulario.elements["caregiverEmail"].value.trim().toLowerCase(),
    phone: formulario.elements["caregiverPhone"].value.trim(),
    password: formulario.elements["caregiverPassword"].value.trim(),
    confirmPassword: formulario.elements["confirmCaregiverPassword"].value.trim(),

    address: formulario.elements["caregiverAdress"].value.trim(),
    city: formulario.elements["caregiverCity"].value.trim(),
    zipCode: formulario.elements["caregiverZipCode"].value.trim(),

    about: formulario.elements["caregiverAbout"].value.trim(),

    hasExperience: formulario.querySelector('input[name="experienciaCuidador"]:checked')?.value || "",
    yearsOfExperience: formulario.elements["aniosExperiencia"].value.trim(),
    experienceDescription: formulario.elements["descripcionExperiencia"].value.trim(),
    availability: formulario.elements["disponibilidad"].value.trim(),

    walkRate: formulario.elements["tarifaPaseos"].value.trim(),
    hostingRate: formulario.elements["tarifaHospedaje"].value.trim(),
    homeCareRate: formulario.elements["tarifaDomicilio"].value.trim(),
    homeVisitRate: formulario.elements["tarifaVisitas"].value.trim(),
    specialPetsRate: formulario.elements["tarifaEspeciales"].value.trim(),

    certificate: formulario.elements["certificado"].files[0] || null,
    servicePhotos: Array.from(formulario.elements["fotosServicios"].files),

    termsAccepted: formulario.elements["ownerTerms"].checked
  };

  console.table(newCaregiverRegister);
  return newCaregiverRegister;
};

export { leerInputsForm };
