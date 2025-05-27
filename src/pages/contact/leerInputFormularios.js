const leerInputsFormulario = ( formulario )=>{
    const newConsult = {
        nombre : formulario.elements["nombre"].value,
        apellido : formulario.elements["apellido"].value,
        celular : formulario.elements["telefono"].value,
        motivo : formulario.elements["motivo"].value,
        descripcion : formulario.elements["descripcion"].value
    }
    console.table(newConsult);
    return newConsult;
}
export { leerInputsFormulario };