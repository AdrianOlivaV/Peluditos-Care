
const readInputsLogin = ( formularioLogin )=>{
    const newSesion = {
        email : formularioLogin.elements["email"].value,
        password : formularioLogin.elements["password"].value
    }
    console.table(newSesion);
    return newSesion;
}

export { readInputsLogin };