// Función de flecha auxiliar que evalúa si la longitud es de al menos 8 caracteres
const tieneLongitudValida = (password) => password.length >= 8;

// Función tradicional principal que procesa el registro del usuario
function registrarUsuario(usuario, password) {
  // Operador ternario para evaluar la contraseña y retornar el mensaje correspondiente
  return tieneLongitudValida(password)
    ? `Registro exitoso para ${usuario}`
    : "Error: La contraseña es demasiado corta";
}

// Pruebas en consola con contraseña corta y contraseña segura
console.log(registrarUsuario("AnaLopez", "clave12"));          // Contraseña corta (falla)
console.log(registrarUsuario("JuanPerez", "Segura2026*"));      // Contraseña segura (pasa)