export function renderLetra(data) {
  const box = document.getElementById("letra-conteudo");

  data.letra.forEach(secao => {
    const h4 = document.createElement("h4");
    h4.textContent = secao.titulo;
    box.appendChild(h4);

    secao.paragrafos.forEach(p => {
      const el = document.createElement("p");
      el.innerHTML = p.join("<br>");
      box.appendChild(el);
    });
  });
}
