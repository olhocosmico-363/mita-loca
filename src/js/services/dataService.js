export async function getData(personagem) {
  const response = await fetch(`./src/data/${personagem}.json`);
  return await response.json();
}