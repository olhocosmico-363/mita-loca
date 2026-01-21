// Aplica o ajuste do frame/imagem
export function getPersonagem() {
  const params = new URLSearchParams(window.location.search);
  return params.get("p") || "mita-louca";
}

export function aplicarAjusteFrame(personagem) {
  const img = document.querySelector(".imagem-box img");
  if (!img) return;

  // Remove todas as classes de limite antes de aplicar a correta
  img.classList.remove(
    "limite-mita",
    "limite-monika",
    "limite-ayano",
    "limite-saiko"
  );

  // Todos que seguem o mesmo estilo da Monika
  const classesLimite = {
    "mita-louca": "limite-mita",
    "monika-ddlc": "limite-monika",
    "ayano-aishi": "limite-monika", // mesmo estilo da Monika
    "saiko-chan": "limite-monika"   // mesmo estilo da Monika
  };

  img.classList.add(classesLimite[personagem] || "limite-mita");
}

