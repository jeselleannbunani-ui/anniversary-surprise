window.onload = function () {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3500);
};

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();

  const btn = document.getElementById("musicBtn");
  btn.innerText = "Music playing 💖";
  btn.disabled = true;
  btn.style.opacity = "0.7";
}

function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}
