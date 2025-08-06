const frases = [
  "✨ Hoy es un buen día para sonreír.",
  "🌸 Eres luz, nunca lo olvides.",
  "💖 Lo que haces con amor, brilla más.",
  "🌞 Tu energía alegra todo a tu alrededor.",
  "🌷 Nunca dejes de creer en ti.",
  "🦋 Eres hermosa sipote bollito oyo joa.",
  "🌷 Eres arte puro.",
  "🎀 Hoy mereces todo lo bonito del mundo.",
  "🌼 Gracias a Dios por semejante Creación."
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
  }, 5000);
}

setInterval(crearFrase, 1000);
