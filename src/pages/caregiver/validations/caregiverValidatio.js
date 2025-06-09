document.getElementById("caregiverForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const camposRequeridos = ["nombre", "edad", "calle", "numero", "cp", "municipio", "telefono", "sobreTi"];
  let valido = true;

  // Validar campos obligatorios no vacíos
  camposRequeridos.forEach(id => {
    const campo = document.getElementById(id);
    if (!campo.value.trim()) {
      campo.classList.add("is-invalid");
      valido = false;
    } else {
      campo.classList.remove("is-invalid");
    }
  });

  // Validar edad mínima 18
const edadInput = document.getElementById("edad");
const edad = parseInt(edadInput.value, 10);

if (isNaN(edad) || edad < 18) {
  alert("Debes ser mayor de edad (18 años o más) para registrarte como cuidador.");
  edadInput.classList.add("is-invalid");
  edadInput.focus();    // poner foco para que el usuario corrija
  valido = false;
} else {
  edadInput.classList.remove("is-invalid");
}


  // Validar términos y condiciones aceptados
  const terminos = document.getElementById("terminos");
  if (!terminos.checked) {
    alert("Debes aceptar los términos y condiciones");
    valido = false;
  }

  // Validar experiencia y años de experiencia
  const experienciaSi = document.querySelector('input[name="experiencia"][value="si"]');
  const experienciaNo = document.querySelector('input[name="experiencia"][value="no"]');
  const aniosExp = document.getElementById("aniosExp");

  if (experienciaSi.checked) {
    // Si tiene experiencia, años de experiencia es obligatorio y debe ser >= 0
    if (!aniosExp.value.trim()) {
      alert("Debes ingresar tus años de experiencia.");
      aniosExp.classList.add("is-invalid");
      valido = false;
    } else if (isNaN(aniosExp.value) || Number(aniosExp.value) < 0) {
      alert("Los años de experiencia deben ser un número mayor o igual a 0.");
      aniosExp.classList.add("is-invalid");
      valido = false;
    } else {
      aniosExp.classList.remove("is-invalid");
    }
  } else if (experienciaNo.checked) {
    // Si no tiene experiencia, limpiar años de experiencia y quitar invalid (aún no funciona al 100)
    aniosExp.classList.remove("is-invalid");
    aniosExp.value = "";
  } else {
    // Si no se seleccionó ninguna opción en experiencia
    alert("Por favor, indica si tienes experiencia como cuidador.");
    valido = false;
  }

  if (valido) {
    alert("Formulario enviado correctamente");
    // Aquí puedes enviar los datos al backend o guardarlos localmente
  }
});

const cpInput = document.getElementById("cp");
const cpValue = cpInput.value.trim();

// Validar que CP tenga exactamente 5 dígitos numéricos (aun falta)
if (!/^\d{5}$/.test(cpValue)) {
  alert("El código postal (C.P.) debe contener exactamente 5 dígitos numéricos.");
  cpInput.classList.add("is-invalid");
  cpInput.focus();
  valido = false;
} else {
  cpInput.classList.remove("is-invalid");
}
