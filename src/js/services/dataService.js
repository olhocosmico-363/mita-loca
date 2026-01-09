let cache = null;

export async function getData(personagem) {
  if (cache) return cache;

  const response = await fetch(`./src/data/${personagem}.json`);
  cache = await response.json();
  return cache;
}
