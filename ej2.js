// 1. Función callback independiente para enviar Email
function enviarNotificacionEmail(destinatario, mensaje) {
  console.log(`[EMAIL A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}

// 2. Función callback independiente para enviar SMS
function enviarNotificacionSMS(destinatario, mensaje) {
  console.log(`[SMS A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}

// 3. Función principal que procesa la alerta y delega la salida al callback recibido
function procesarAlerta(usuario, tipoAlerta, callbackElegido) {
  let mensaje = "";

  // Generación de texto según el tipo de alerta
  if (tipoAlerta === "seguridad") {
    mensaje = "Alerta de seguridad: Se detectó un acceso inusual en tu cuenta.";
  } else if (tipoAlerta === "bienvenida") {
    mensaje = "Bienvenida al sistema: Tu cuenta ha sido configurada exitosamente.";
  } else {
    mensaje = "Tienes una nueva notificación general.";
  }

  // Ejecución de la función callback pasada por referencia
  callbackElegido(usuario, mensaje);
}

// 4. Pruebas ejecutando procesarAlerta con los callbacks por referencia (sin paréntesis)
procesarAlerta("CarlosPerez", "seguridad", enviarNotificacionEmail);
procesarAlerta("MariaGomez", "bienvenida", enviarNotificacionSMS);