export async function loadMusicaHTML() {
  const load = async (id, file) => {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
  };

  await load("letra", "./src/html/letra.html");
  await load("musica-layout", "./src/html/musica-layout.html");
}
