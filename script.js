const frases = [
  "Eres una mujer maravillosa 🌸",
  "Hoy será un gran día ✨",
  "Tu sonrisa ilumina todo 💖",
  "Nunca dejes de soñar 🌈",
  "Confía en ti, lo estás haciendo bien 💪",
  "Cada paso te acerca a tus metas 🚀",
  "Tu energía es hermosa 🌞",
  "Eres más fuerte de lo que crees 💎"
];

function crearBurbuja(frase) {
  const burbuja = document.createElement("div");
  burbuja.className = "burbuja";
  burbuja.textContent = frase;

  // Posición aleatoria horizontal
  const left = Math.random() * 90;
  burbuja.style.left = `${left}%`;

  // Retardo de animación para que no salgan todas al mismo tiempo
  const delay = Math.random() * 5;
  burbuja.style.animationDelay = `${delay}s`;

  // Agregar al contenedor
  document.getElementById("contenedor-frases").appendChild(burbuja);

  // Eliminar burbuja después de 12s
  setTimeout(() => {
    burbuja.remove();
  }, 12000);
}

// Crear nuevas burbujas cada 3 segundos
setInterval(() => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  crearBurbuja(frase);
}, 3000);

// Cargar una burbuja al inicio
crearBurbuja(frases[0]);
