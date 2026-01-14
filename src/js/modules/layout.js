export function renderHeader(data) {
  const logo = document.getElementById("logo-musica");
  logo.src = data.header.logo;
  logo.alt = data.header.logoAlt;

  document.getElementById("musica-titulo").textContent = data.header.titulo;
  document.getElementById("musica-subtitulo").textContent =
    data.header.subtitulo;

  const source = document.getElementById("audio-source");
  source.src = data.header.audio;
  document.getElementById("audio-player").load();
}

export function renderFooter(data) {
  const blocos = data.footer.creditos.blocos;
  const container = document.getElementById("creditos-conteudo");

  // limpa o container (evita duplicar se chamar de novo)
  container.innerHTML = "";

  blocos.forEach((bloco) => {
    const div = document.createElement("div");
    div.className =
      bloco.tipo === "musica" ? "musica-creditos" : "lista-creditos";

    const p = document.createElement("p");

    if (bloco.autor) {
      p.innerHTML = `
        ${bloco.texto} (
        <a href="${bloco.autor.url}" target="_blank" rel="noopener noreferrer">
          ${bloco.autor.nome}
        </a>
        ${bloco.autor.observacao ? "— " + bloco.autor.observacao : ""}
        )
      `;
    } else {
      p.textContent = bloco.texto;
    }

    div.appendChild(p);

    // 🔹 ITENS (imagens / links)
    if (bloco.itens) {
      const ul = document.createElement("ul");
      ul.className = "lista-imagens";

      bloco.itens.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = item.url;
        a.textContent = item.observacao
          ? `${item.label} (${item.observacao})`
          : item.label;

        li.appendChild(a);
        ul.appendChild(li);
      });

      div.appendChild(ul);
    }

    // 🔹 ÁUDIO
    if (bloco.audio) {
      const a = document.createElement("a");
      a.href = bloco.audio.arquivo;
      a.textContent = bloco.audio.label;
      a.setAttribute("aria-label", bloco.audio.ariaLabel || "");

      div.appendChild(a);
    }

    container.appendChild(div);
  });

  // 🔹 Ano automático
  const anoEl = document.getElementById("ano");
  if (anoEl) anoEl.textContent = new Date().getFullYear();
}
