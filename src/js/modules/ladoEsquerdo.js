// ================= FUNÇÃO PRINCIPAL =================
export function renderLadoEsquerdo(data) {
  const {letra, genero } = data.ladoEsquerdo;

  // ================= LETRA =================
  const boxLetra = document.getElementById("letra-conteudo");
  boxLetra.innerHTML = "";

  letra.forEach((secao) => {
    const h4 = document.createElement("h4");
    h4.textContent = secao.titulo;
    boxLetra.appendChild(h4);

    secao.paragrafos.forEach((bloco) => {
      const p = document.createElement("p");
      p.innerHTML = bloco.join("<br>");
      boxLetra.appendChild(p);
    });
  });

  // ================= GÊNERO =================
  if (genero) {
    renderListaTags(genero.principal, "genero-principal");
    renderListaTags(genero.subgeneros, "subgeneros");
  }
}

// ================= FUNÇÃO AUXILIAR (INTERNA) =================
function renderListaTags(lista, containerId) {
  const ul = document.getElementById(containerId);
  if (!ul || !Array.isArray(lista)) return;

  ul.innerHTML = "";

  lista.forEach(tag => {
    const li = document.createElement("li");
    li.textContent = tag;
    ul.appendChild(li);
  });
}
