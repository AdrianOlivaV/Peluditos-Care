const leerInputsForm = (formulario) => {
  const newOwnerRegister = {
    name: formulario.elements["ownerName"].value.trim().toLowerCase(),
    last_name: formulario.elements["ownerLastName"].value.trim().toLowerCase(),
    birthdate: formulario.elements["ownerBirthDate"].value,
    email: formulario.elements["ownerEmail"].value.trim().toLowerCase(),
    phone_number: formulario.elements["ownerPhone"].value.trim(),
    password: formulario.elements["ownerPassword"].value.trim(),
    passwordconf: formulario.elements["confirmOwnerPassword"].value.trim(),
    street: formulario.elements["ownerAdress"].value.trim().toLowerCase(),
    city: formulario.elements["ownerCity"].value.trim().toLowerCase(),
    zip_code: formulario.elements["ownerZipCode"].value.trim(),
    about_me: formulario.elements["ownerAbout"].value.trim().toLowerCase(),
        pets: [
            {
                name: formulario.elements["petName"].value.trim(),
                behavior: formulario.elements["petAttitude"].value.trim(),
                age: parseInt(formulario.elements["petAge"].value),
                description: formulario.elements["petDescription"].value.trim(),
                picture: formulario.elements["petPhoto"].value
            }
        ]
  };

  console.table(newOwnerRegister);
  return newOwnerRegister;
};

export { leerInputsForm };