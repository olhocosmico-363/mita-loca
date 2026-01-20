export function initAno() {
  // 🔹 Ano automático
  const anoEl = document.getElementById("ano");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }
}
