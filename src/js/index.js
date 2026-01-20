// ================= IMPORTAÇÕES =================
import { getData } from "./services/dataService.js";
import { getPersonagem, aplicarAjusteFrame } from "./utils/character.js";

import { renderFooter, renderHeader } from "./modules/layout.js";
import { renderLadoEsquerdo } from "./modules/ladoEsquerdo.js";
import { renderLadoDireito } from "./modules/ladoDireito.js";
import { initMenuLateral } from "./modules/menuLateral.js";
import { initAno } from "./modules/ano.js";

// ================= INICIALIZAÇÃO =================
async function init() {
  const personagem = getPersonagem();
  const data = await getData(personagem);

  renderFooter(data);
  renderHeader(data);
  renderLadoEsquerdo(data);
  renderLadoDireito(data);

  aplicarAjusteFrame(personagem);
  initMenuLateral();
  initAno();
}

init();
