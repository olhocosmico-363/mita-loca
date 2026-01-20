export function getPersonagem() {
  const params = new URLSearchParams(window.location.search);
  return params.get("p") || "mita-louca";
}

export function aplicarAjusteFrame(personagem) {
  const img = document.querySelector(".imagem-box img");
  if (!img) return;

  img.classList.remove(
    "limite-mita",
    "limite-monika"
  );

  if (personagem === "mita-louca") {
    img.classList.add("limite-mita");
  }

  if (personagem === "monika-ddlc") {
    img.classList.add("limite-monika");
  }

  if (personagem === "ayano") {
    img.classList.add("limite-ayano");
  }

  if (personagem === "") {
    img.classList.add("limite-");
  }
}

export function aplicarAjusteImagem(personagem) {
  
}