export async function loadMusicaHTML() {
  const load = async (id, file) => {
    const el = document.getElementById(id);
    if (!el) return;

    const res = await fetch(file);
    el.innerHTML = await res.text();
  };

  await load("js-letra", "./src/html/letra.html");
  await load("js-descricao", "./src/html/descricao.html");
  await load("js-footer", "./src/html/footer.html");
}
