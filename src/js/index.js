// ================= IMPORTAÇÕES =================

// Busca os dados do personagem (JSON) com base no nome/rota
import { getData } from "./services/dataService.js";
// Lê o personagem atual (ex: mita-loca) da URL ou parâmetro
import { getPersonagem } from "./utils/params.js";

// Módulos responsáveis por renderizar cada parte da página
import { renderHeader } from "./modules/header.js";
import { renderLadoEsquerdo} from "./modules/ladoEsquerdo.js";
import { renderLadoDireito } from "./modules/ladoDireito.js";
import { renderFooter } from "./modules/footer.js";

// ================= MENU LATERAL (LAYOUT GLOBAL) =================
const openBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar-menu");

// Abre / fecha o menu ao clicar no botão ☰
openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Fecha o menu ao clicar no botão ✖
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// ================= INICIALIZAÇÃO DA PÁGINA =================
async function init() {
  const personagem = getPersonagem();
  const data = await getData(personagem);

  // Renderiza cada seção da página
  renderHeader(data);
  renderLadoEsquerdo(data);
  renderLadoDireito(data);
  renderFooter(data);
}

init();
