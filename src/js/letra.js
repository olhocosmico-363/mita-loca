fetch("./src/data/mita-loca/letra.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("letra-conteudo");

    data.letra.forEach(bloco => {
      // Título (h4)
      const h4 = document.createElement("h4");
      h4.textContent = bloco.titulo;
      container.appendChild(h4);

      // Parágrafos
      bloco.paragrafos.forEach(paragrafo => {
        const p = document.createElement("p");
        p.innerHTML = paragrafo.join("<br>");
        container.appendChild(p);
      });
    });
  })
  .catch(err => console.error("Erro ao carregar letra:", err));
