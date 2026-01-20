import { wikiPages } from "./wiki-pages.js";

// Função para renderizar uma página pelo ID
export function renderWikiPage(pageId) {
  const page = wikiPages.find(p => p.id === pageId);
  if (!page) return console.error("Página não encontrada:", pageId);

  const main = document.querySelector("main.wiki-page");
  if (!main) return;

  main.innerHTML = ""; // Limpa o main

  // GIF
  if (page.gif && page.gif.src) {
    const figure = document.createElement("figure");
    figure.className = "gif-figure";
    figure.innerHTML = `
      <img src="${page.gif.src}" alt="${page.gif.caption}" />
      <figcaption>${page.gif.caption}</figcaption>
    `;
    main.appendChild(figure);
  }

  // Título
  const h1 = document.createElement("h1");
  h1.textContent = page.title;
  main.appendChild(h1);

  // Introdução
  page.introduction.forEach(pText => {
    const p = document.createElement("p");
    p.textContent = pText;
    main.appendChild(p);
  });

  // Sumário
  if (page.toc && page.toc.length) {
    const toc = document.createElement("section");
    toc.className = "wiki-toc";
    toc.innerHTML = `<h2>Sumário</h2>`;
    const ol = document.createElement("ol");
    page.toc.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${item.id}">${item.label}</a>`;
      ol.appendChild(li);
    });
    toc.appendChild(ol);
    main.appendChild(toc);
  }

  // Seções
  page.sections.forEach(sec => {
    const section = document.createElement("section");
    section.id = sec.id;

    const h2 = document.createElement("h2");
    h2.textContent = sec.title;
    section.appendChild(h2);

    sec.content.forEach(item => {
      if (typeof item === "string") {
        const p = document.createElement("p");
        p.textContent = item;
        section.appendChild(p);
      } else if (typeof item === "object" && item.name && item.description) {
        const h3 = document.createElement("h3");
        h3.textContent = item.name;
        section.appendChild(h3);

        const p = document.createElement("p");
        p.textContent = item.description;
        section.appendChild(p);
      }
    });

    main.appendChild(section);
  });

  // Referências
  if (page.references && page.references.length) {
    const refSec = document.createElement("section");
    refSec.id = "referencias";

    const h2 = document.createElement("h2");
    h2.textContent = "Referências";
    refSec.appendChild(h2);

    const ul = document.createElement("ul");
    page.references.forEach(ref => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${ref.label}</a>`;
      ul.appendChild(li);
    });
    refSec.appendChild(ul);
    main.appendChild(refSec);
  }
}

// Carregar página automaticamente
// Ex: usar o ID "miside"
document.addEventListener("DOMContentLoaded", () => {
  renderWikiPage("miside");
});
