const frases = [
  "Eres una mujer maravillosa, fuerte y capaz de todo.",
  "Hoy será un gran día porque tú lo haces especial.",
  "Tu sonrisa ilumina más que el sol 🌞",
  "Nada puede detener tu brillo. ¡Sigue adelante!",
  "Tienes un corazón hermoso y un alma brillante ✨"
];

let index = 0;
setInterval(() => {
  const frase = document.getElementById("fraseBonita");
  frase.textContent = frases[index];
  index = (index + 1) % frases.length;
}, 6000);
