const frases = [
  "💖 Eres luz donde hay oscuridad.",
  "🌈 Tu sonrisa ilumina el día.",
  "✨ Cada día es mejor contigo.",
  "🌸 Hoy será un gran día.",
  "🌟 Eres una estrella brillante.",
  "💪 Puedes con todo, confía.",
  "🦋 Tu energía es mágica.",
  "💫 El mundo es mejor contigo.",
  "🌷 Eres arte puro.",
  "🩷 Siempre brillas fuerte.",
  "💐 Hoy mereces lo más bonito.",
  "🌞 Tu alma es sol y alegría.",
  "🎀 Nunca dejes de soñar."
];

// Crear una nueva burbuja con una frase
function crearBurbuja() {
  const burbuja = document.createElement("div");
  burbuja.className = "burbuja";
  burbuja.textContent = frases[Math.floor(Math.random() * frases.length)];

  // Posición horizontal aleatoria
  burbuja.style.left = Math.random() * 90 + "%";

  document.body.appendChild(burbuja);

  // Eliminar burbuja después de animación
  setTimeout(() => {
    burbuja.remove();
  }, 5000);
}

// Generar burbujas cada 800 ms (más rápido)
setInterval(crearBurbuja, 800);
