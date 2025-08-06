const frases = [
  "✨ Hoy es un buen día para sonreír.",
  "🌸 Eres luz, nunca lo olvides.",
  "💖 Lo que haces con amor, brilla más.",
  "🌞 Tu energía alegra todo a tu alrededor.",
  "🌷 Nunca dejes de creer en ti.",
  "🦋 Eres un alma hermosa.",
  "🎀 Hoy mereces todo lo bonito del mundo.",
  "🌼 Gracias por existir."
];

function crearFrase() {
  const contenedor = document.getElementById("contenedor-frases");
  const frase = document.createElement("div");
  frase.classList.add("frase");
  frase.innerText = frases[Math.floor(Math.random() * frases.length)];

  frase.style.left = Math.random() * 90 + "vw";
  frase.style.top = "100vh";

  contenedor.appendChild(frase);

  setTimeout(() => {
    frase.remove();
  }, 5000); // duración de la animación
}

setInterval(crearFrase, 1000); // Frases aparecen más rápido
