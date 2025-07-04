const leerInputsFormulario = ( form )=>{
    const newConsult = {
        name : form.elements["name"].value,
        lastName : form.elements["lastName"].value,
        mail : form.elements["mail"].value,
        telephone : form.elements["telephone"].value,
        reason : form.elements["reason"].value,
        description : form.elements["description"].value, 
        check: form.elements["termsAndConditions"].checked
    }
    console.table(newConsult);
    return newConsult;
}
export { leerInputsFormulario };