const frases = [
  "¡Buenos días, hermosa!",
  "Hoy es un gran día para sonreír 💖",
  "Eres más fuerte de lo que crees",
  "Tu luz ilumina a todos 🌟",
  "Confía en ti, bonita 🌈",
  "Hoy es tu día para brillar ✨",
  "Nada puede detenerte",
  "Tu sonrisa cambia el mundo 😊",
  "Eres magia pura 💫"
];

function crearBurbuja() {
  const burbuja = document.createElement("div");
  burbuja.className = "burbuja";
  burbuja.textContent = frases[Math.floor(Math.random() * frases.length)];

  const contenedor = document.getElementById("contenedor-frases");
  const tamaño = Math.random() * 20 + 14; // Tamaño entre 14px y 34px
  const left = Math.random() * 100; // Porcentaje

  burbuja.style.fontSize = `${tamaño}px`;
  burbuja.style.left = `${left}vw`;

  contenedor.appendChild(burbuja);

  setTimeout(() => {
    burbuja.remove();
  }, 6000);
}

// Crear una burbuja cada 2 segundos
setInterval(crearBurbuja, 2000);
