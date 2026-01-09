export function getPersonagem() {
  const params = new URLSearchParams(window.location.search);
  return params.get("p") || "mita-loca";
}
