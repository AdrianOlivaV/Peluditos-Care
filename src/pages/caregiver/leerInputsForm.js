const leerInputsForm = (formulario) => {
    const newCaregiverData= {
        nombre: formulario.elements["nombre"].value.trim(),
        fechaNacimiento: formulario.elements["fechaNacimiento"].value,
        idioma: formulario.elements["idioma"].value.trim(),
        email: formulario.elements["email"].value.trim().toLowerCase(),
        password: formulario.elements["password"].value.trim(),
        confirmPassword: formulario.elements["confirmPassword"].value.trim(),
        calle: formulario.elements["calle"].value.trim(),
        numero: formulario.elements["numero"].value.trim(),
        cp: formulario.elements["cp"].value.trim(),
        municipio: formulario.elements["municipio"].value.trim(),
        telefono: formulario.elements["telefono"].value.trim(),
        sobreTi: formulario.elements["sobreTi"].value.trim(),

        experiencia: formulario.elements["experiencia"].value,
        aniosExp: formulario.elements["aniosExp"].value,

        servicios: {
            paseos: formulario.elements["paseos"].checked ? formulario.elements["tarifaPaseos"].value.trim() : null,
            hospedaje: formulario.elements["hospedaje"].checked ? formulario.elements["tarifaHospedaje"].value.trim() : null,
            cuidado: formulario.elements["cuidado"].checked ? formulario.elements["tarifaCuidado"].value.trim() : null,
            visitas: formulario.elements["visitas"].checked ? formulario.elements["tarifaVisitas"].value.trim() : null,
            especiales: formulario.elements["especiales"].checked ? formulario.elements["tarifaEspecial"].value.trim() : null,
        },

        descripcionExp: formulario.elements["descripcionExp"].value.trim(),
        disponibilidad: formulario.elements["disponibilidad"].value.trim(),
        certificado: formulario.elements["certificado"].files[0] || null,
        fotosServicios: formulario.elements["fotosServicios"].files || [],
        terminos: formulario.elements["terminos"].checked
    };

    console.table(newCaregiverData);
    return newCaregiverData;
};

export default leerInputsForm;