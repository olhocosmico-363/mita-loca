export function renderHeader(data) {
  document.getElementById("musica-titulo").textContent = data.header.titulo;
  document.getElementById("musica-subtitulo").textContent = data.header.subtitulo;

  const source = document.getElementById("audio-source");
  source.src = data.header.audio;
  document.getElementById("audio-player").load();
}
