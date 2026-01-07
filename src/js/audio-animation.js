export function initAudioAnimation() {
  const audio = document.getElementById("audio-player");
  const image = document.getElementById("mita-image");

  if (!audio || !image) return;

  const frames = [
    "./src/assets/images/mita-1.png",
    "./src/assets/images/mita-2.png",
    "./src/assets/images/mita-3.png"
  ];

  audio.addEventListener("play", () => {
    let currentFrame = 0;

    const interval = setInterval(() => {
      if (audio.paused || audio.ended) {
        clearInterval(interval);
        return;
      }

      image.src = frames[currentFrame];
      currentFrame = (currentFrame + 1) % frames.length;
    }, 2000);
  });
}