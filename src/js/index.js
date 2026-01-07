import { loadMusicaHTML } from "./modules/load-musica_html.js";
import { initAudioAnimation } from "./audio-animation.js";
import "./sidebar.js";

await loadMusicaHTML();

// agora o DOM do main EXISTE
initAudioAnimation();
