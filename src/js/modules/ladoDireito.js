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

    aplicarAjusteImagem(getPersonagem());
  }, 2000);

  // ================= DESCRIÇÃO =================
  const box = document.getElementById("descricao-conteudo");

  // Limpa conteúdo antigo
  box.innerHTML = "";

  descricao.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "descricao-item";

    const h4 = document.createElement("h4");
    h4.textContent = item.topico;

    const p = document.createElement("p");
    p.textContent = item.texto;

    wrapper.appendChild(h4);
    wrapper.appendChild(p);
    box.appendChild(wrapper);
  });
}
