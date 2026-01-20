export function initMenuLateral() {
  const openBtn = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close-sidebar");
  const sidebar = document.querySelector(".sidebar-menu");

  if (!openBtn || !closeBtn || !sidebar) return;

  openBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
}

