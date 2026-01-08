fetch("./src/data/header.json")
  .then(response => response.json())
  .then(data => {
    const header = data.header;

    // Títulos
    document.getElementById("musica-titulo").textContent = header.titulo;
    document.getElementById("musica-subtitulo").textContent = header.subtitulo;

    // Logo
    const logo = document.getElementById("musica-logo");
    logo.src = header.logo.src;
    logo.alt = header.logo.alt;

    // Áudio
    const audioSource = document.getElementById("audio-source");
    audioSource.src = header.audio.src;
    audioSource.type = header.audio.type;

    // força recarregar o áudio
    document.getElementById("audio-player").load();
  })
  .catch(err => console.error("Erro ao carregar header:", err));
