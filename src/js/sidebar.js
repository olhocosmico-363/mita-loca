const openBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar-menu");

openBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});