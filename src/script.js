const video = document.getElementById("video");
const temperatura = document.getElementById("temperatura");
const tempo = document.getElementById("tempo");
const dia = document.getElementById("dia");

const random = Math.floor(Math.random() * 10) + 20;
temperatura.innerText = `${random}°`;
tempo.innerHTML = random < 25 ? `🌧️ ${random + 5}%` : `☀️`;

const date = new Date();
dia.innerText = date
  .toLocaleDateString("pt-BR", {
    weekday: "long",
  })
  .replace("-feira", "");

video.src = random < 25 ? `./img/video_chuva.mp4` : `./img/video_sol.mp4`;

const mobileButton = document.getElementById("mobile-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
});
