export function renderFooter(data) {
  const ul = document.getElementById("footer-creditos");

  data.footer.creditos.forEach(item => {
    const li = document.createElement("li");

    if (item.link) {
      li.innerHTML = `${item.texto} <a href="${item.link}" target="_blank">${item.autor}</a>`;
    } else if (item.destaque) {
      li.innerHTML = `${item.texto} <strong>${item.destaque}</strong>; ${item.extra}`;
    } else {
      li.textContent = item.texto;
    }

    ul.appendChild(li);
  });
}
