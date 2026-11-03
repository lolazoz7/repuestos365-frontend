// ============================================
// CHATBOT REPUESTOS 365 - ASISTENTE VIRTUAL
// ============================================

const respuestasBot = {
  'hola': '¡Hola! 👋 Soy el asistente de Repuestos 365. ¿En qué puedo ayudarte?',
  'buenas': '¡Buenas! 👋 ¿En qué puedo ayudarte hoy?',
  
  'proveedor': '🏪 Para registrarte como proveedor:\n\n1️⃣ Haz clic en "Soy Proveedor" en el menú superior\n2️⃣ Completa el formulario con tus datos\n3️⃣ Espera la aprobación del administrador (24-48h)\n4️⃣ ¡Listo! Ya puedes subir tus productos\n\n¿Necesitas más ayuda?',
  
  'registro': '📝 El registro es GRATIS. Solo necesitas:\n\n• Correo electrónico válido\n• Número de teléfono\n• RIF de tu empresa\n• Nombre de tu tienda\n• Zona de cobertura\n\n¿Quieres registrarte ahora?',
  
  'costo': '💰 Publicar productos en Repuestos 365 es GRATIS para proveedores.\n\nSolo cobramos una comisión del 5% sobre cada venta realizada. ¡Si no vendes, no pagas nada!\n\n¿Tienes otra duda?',
  
  'comision': '💵 La comisión es del 5% sobre el precio de venta.\n\nEjemplo: Si vendes un repuesto a €100, recibes €95 y €5 van a la plataforma por el servicio.\n\n¿Algo más?',
  
  'pago': '💳 Aceptamos los siguientes métodos de pago:\n\n• 💛 Binance Pay (USD/USDT)\n• 💵 Pago Móvil (Bs)\n• 🏦 Transferencia bancaria\n• 💶 Zelle (proveedores seleccionados)\n\n¿Necesitas detalles de alguno?',
  
  'envio': '🚚 El envío lo realizan nuestras empresas delivery asociadas:\n\n• Entrega en Valencia: 24-48 horas\n• Otras zonas de Carabobo: 2-3 días\n• Envíos nacionales: 3-5 días\n\nLos costos de envío los calcula el sistema según tu ubicación.',
  
  'devolucion': '🔄 Política de devoluciones:\n\n• Tienes 7 días para reportar fallas\n• El producto debe estar sin uso\n• Se reembolsa el 100% del valor\n• El envío de devolución corre por cuenta del proveedor si el producto tiene falla\n\n¿Necesitas iniciar una devolución?',
  
  'garantia': '🛡️ Todos los productos tienen garantía del proveedor:\n\n• Repuestos nuevos: 3-12 meses\n• Repuestos usados: 30-90 días\n• La garantía la respalda directamente el proveedor\n\n¿Sobre qué producto necesitas información?',
  
  'contacto': '📞 Puedes contactarnos por:\n\n• 💬 Este chat (respuestas inmediatas)\n• 📱 WhatsApp: +58 412-000-0000\n• 📧 Email: soporte@repuestos365vzla.com\n• 🕐 Horario: Lun-Vie 8am-6pm\n\n¿Cómo prefieres contactarnos?',
  
  'whatsapp': '📱 Escríbenos por WhatsApp al +58 412-000-0000\n\nHorario de atención: Lun-Vie 8am-6pm\n\n¿Algo más en lo que pueda ayudarte?',
  
  'horario': '🕐 Nuestro horario de atención es:\n\n• Lunes a Viernes: 8:00 AM - 6:00 PM\n• Sábados: 9:00 AM - 1:00 PM\n• Domingos: Cerrado\n\nLos proveedores tienen sus propios horarios de atención.',
  
  'ubicacion': '📍 Estamos ubicados en:\n\nValencia, Carabobo, Venezuela\nCubrimos: Naguanagua, Valencia y San Diego\n\nPróximamente en más ciudades de Venezuela.',
  
  'producto': '🔧 Para buscar un repuesto:\n\n1️⃣ Usa el buscador en la página principal\n2️⃣ Filtra por categoría, marca o precio\n3️⃣ Selecciona el producto que necesitas\n4️⃣ Haz clic en "Comprar" o "Añadir" al carrito\n\n¿Necesitas ayuda con algo específico?',
  
  'carrito': '🛒 Tu carrito de compras:\n\n• Puedes añadir múltiples productos\n• Se calcula el total automáticamente\n• El envío se suma al finalizar la compra\n• Puedes pagar todo junto o por separado\n\n¿Quieres ver tu carrito ahora?',
  
  'seguridad': '🔒 Tu seguridad es nuestra prioridad:\n\n• Todos los proveedores son verificados\n• Pagos protegidos por la plataforma\n• Tus datos están encriptados\n• Soporte ante cualquier problema\n\n¿Tienes alguna preocupación específica?',
  
  'gracias': '¡Con gusto! 😊 Estoy aquí para ayudarte. ¿Hay algo más en lo que pueda asistirte?',
  
  'adios': '¡Hasta luego! 👋 Gracias por usar Repuestos 365. ¡Vuelve pronto!',
  
  'default': '🤔 No estoy seguro de entender tu pregunta. ¿Podrías reformularla?\n\nTambién puedes:\n• Ver las preguntas frecuentes abajo\n• Contactar a un asesor por WhatsApp\n• Escribir "ayuda" para ver las opciones'
};

const preguntasFrecuentes = [
  { texto: '🏪 ¿Cómo me registro como proveedor?', key: 'proveedor' },
  { texto: '💰 ¿Cuánto cuesta publicar?', key: 'costo' },
  { texto: '💳 ¿Qué métodos de pago aceptan?', key: 'pago' },
  { texto: '🚚 ¿Cómo funciona el envío?', key: 'envio' },
  { texto: '🔄 ¿Puedo devolver un producto?', key: 'devolucion' },
  { texto: '📞 ¿Cómo contacto soporte?', key: 'contacto' }
];

function detectarIntencion(mensaje) {
  const msg = mensaje.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  for (const key in respuestasBot) {
    if (key === 'default') continue;
    if (msg.includes(key)) return respuestasBot[key];
  }
  
  return respuestasBot['default'];
}

function crearMensaje(texto, esBot) {
  const div = document.createElement('div');
  div.className = `chat-mensaje ${esBot ? 'bot' : 'user'}`;
  div.textContent = texto;
  return div;
}

function agregarBotonesRapidos() {
  const contenedor = document.getElementById('chat-botones');
  contenedor.innerHTML = '';
  
  preguntasFrecuentes.forEach(preg => {
    const btn = document.createElement('button');
    btn.className = 'chat-btn-rapido';
    btn.textContent = preg.texto;
    btn.onclick = () => enviarMensaje(preg.texto, preg.key);
    contenedor.appendChild(btn);
  });
}

function enviarMensaje(texto, keyDirecta = null) {
  const chatBody = document.getElementById('chat-body');
  const input = document.getElementById('chat-input');
  
  // Agregar mensaje del usuario
  chatBody.appendChild(crearMensaje(texto, false));
  
  // Respuesta del bot
  setTimeout(() => {
    const respuesta = keyDirecta ? respuestasBot[keyDirecta] : detectarIntencion(texto);
    chatBody.appendChild(crearMensaje(respuesta, true));
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
  
  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
}

function toggleChat() {
  const chat = document.getElementById('chatbot-container');
  chat.classList.toggle('activo');
  
  if (chat.classList.contains('activo')) {
    setTimeout(() => {
      const chatBody = document.getElementById('chat-body');
      chatBody.appendChild(crearMensaje('¡Hola! 👋 Soy el asistente virtual de Repuestos 365. ¿En qué puedo ayudarte hoy?', true));
      agregarBotonesRapidos();
    }, 300);
  }
}

function cerrarChat() {
  document.getElementById('chatbot-container').classList.remove('activo');
}

// Enviar con Enter
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chat-input');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.value.trim()) {
        enviarMensaje(input.value.trim());
      }
    });
  }
});