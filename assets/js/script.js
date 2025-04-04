
const carousel = document.getElementById("carousel");
const mobileTextBox = document.getElementById("text-content");
const desktopTextBox = document.getElementById("desktop-text-content");
const musicToggle = document.getElementById("music-toggle");
const backgroundMusic = document.getElementById("background-music");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

// Génération d'images
for (let i = 1; i <= 25; i++) {
  const img = document.createElement("img");
  img.src = `assets/img/${i}.jpg`;
  img.alt = `Image ${i}`;
  img.className = "w-full rounded-md";
  carousel.appendChild(img);
}

// Textes à faire défiler indépendamment
const texts = [
  "👑 Joyeux anniversaire, Ima",
  "🌹 Que cette journée soit aussi lumineuse que ton sourire",
  "🕊️ Merci pour ces moments incroyables, remplis de beaux souvenirs",
  "💫 Tu illumines chaque instant comme une étoile",
  "💖 Aujourd’hui, c’est ta journée — brille de mille feux",
  "🎉 Je suis tellement chanceux d’avoir partagé ces moments avec toi",
  "🌟 Continue d’être cette femme forte, douce et unique",
  "💌 Ce jour est spécial, parce que **toi**, tu es spéciale",
  "🥂 À notre amitié, à nos rires, et à cette belle histoire",
  "🎁 Tu es un cadeau pour le monde, Jeune Reine 👸🏽"
];

let index = 0;

function updateText() {
  const currentText = texts[index];

  // Mise à jour pour mobile
  mobileTextBox.textContent = currentText;
  mobileTextBox.classList.add("opacity-100");
  mobileTextBox.classList.remove("opacity-0");

  // Mise à jour pour desktop
  desktopTextBox.textContent = currentText;
  desktopTextBox.classList.add("opacity-100");
  desktopTextBox.classList.remove("opacity-0");

  index = (index + 1) % texts.length;
  setTimeout(() => {
    mobileTextBox.classList.remove("opacity-100");
    desktopTextBox.classList.remove("opacity-100");
  }, 4000); // Délai avant de masquer le texte
}

setInterval(updateText, 6000); // Changer le texte toutes les 6 secondes

// Gestionnaire d'événements pour le bouton de musique
musicToggle.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  } else {
    backgroundMusic.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  }
});
