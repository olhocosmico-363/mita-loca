export function renderLadoDireito(data) {
  const { imagem, descricao } = data.ladoDireito;

  const img = document.getElementById("imagem-frame");
  const nota = document.getElementById("imagem-nota");

  let i = 0;
  img.src = imagem.frames[0];
  img.alt = imagem.alt;
  nota.textContent = imagem.nota;

  setInterval(() => {
    i = (i + 1) % imagem.frames.length;
    img.src = imagem.frames[i];
  }, 2000);

  document.getElementById("descricao-titulo").textContent = descricao.titulo;

  const box = document.getElementById("descricao-conteudo");
  descricao.paragrafos.forEach(t => {
    const p = document.createElement("p");
    p.innerHTML = t;
    box.appendChild(p);
  });
}
