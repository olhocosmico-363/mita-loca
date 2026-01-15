// ================= IMPORTAÇÕES =================
import { getData } from "./services/dataService.js";
import { getPersonagem, aplicarAjusteImagem } from "./utils/character.js";

import { renderFooter, renderHeader } from "./modules/layout.js";
import { renderLadoEsquerdo } from "./modules/ladoEsquerdo.js";
import { renderLadoDireito } from "./modules/ladoDireito.js";

// ================= MENU LATERAL =================
const openBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar-menu");

openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// ================= INICIALIZAÇÃO =================
async function init() {
  const personagem = getPersonagem();
  const data = await getData(personagem);

  renderFooter(data);
  renderHeader(data);
  renderLadoEsquerdo(data);
  renderLadoDireito(data);

  aplicarAjusteImagem(personagem);
}

init();
