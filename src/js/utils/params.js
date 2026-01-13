export function getPersonagem() {
  const params = new URLSearchParams(window.location.search);
  return params.get("p") || "mita-loca";
}

export function aplicarAjusteImagem(personagem) {
  const img = document.querySelector(".imagem-box img");
  if (!img) return;

  img.classList.remove("limite-mita");

  if (personagem === "mita-loca") {
    img.classList.add("limite-mita");
  }
}
