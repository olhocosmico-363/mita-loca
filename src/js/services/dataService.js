// Para página principal / Musicais
export async function getData(personagem) {
  try {
    const response = await fetch(`./src/data/personagens/${personagem}.json`);
    if (!response.ok) throw new Error(`Arquivo ${personagem}.json não encontrado`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao carregar personagem:", error);
    return null; // Retorna nulo se der erro
  }
}

// Para página Wiki
export async function getDataWiki(wikipersona) {
  try {
    const response = await fetch(`./src/data/personagens/wiki/${wikipersona}.json`);
    if (!response.ok) throw new Error(`Arquivo wiki/${wikipersona}.json não encontrado`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao carregar personagem Wiki:", error);
    return null; // Retorna nulo se der erro
  }
}
