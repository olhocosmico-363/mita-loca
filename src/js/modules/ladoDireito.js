export function renderLadoDireito(data) {
  const { imagem, descricao } = data.ladoDireito;

  // ================= IMAGEM =================
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

  // ================= DESCRIÇÃO =================
  const box = document.getElementById("descricao-conteudo");

  // Limpa conteúdo antigo
  box.innerHTML = "";

  descricao.itens.forEach((item) => {
    const p = document.createElement("p");

    p.innerHTML = `
    <strong class="topico">${item.topico}:</strong>
    ${item.texto}
  `;

    box.appendChild(p);
  })
}