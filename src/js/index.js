const openBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar-menu");

openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});




const audio = document.getElementById("audio-player");
const image = document.getElementById("mita-image");

// array com os frames
const frames = [
  "./src/assets/images/mita-1.jpg",
  "./src/assets/images/mita-2.jpg",
  "./src/assets/images/mita-3.jpg"
];

audio.addEventListener("play", () => {
  let currentFrame = 0;

  // atualiza imagem a cada 2 segundos
  const interval = setInterval(() => {
    if (audio.paused || audio.ended) {
      clearInterval(interval);
      return;
    }

    // troca imagem
    image.src = frames[currentFrame];

    // próximo frame
    currentFrame++;
    if (currentFrame >= frames.length) currentFrame = 0;

  }, 2000); // 2000ms = 2 segundos
});
