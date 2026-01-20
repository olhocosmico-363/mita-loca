// Simulação de JSON, pode depois mover para um arquivo .json e usar fetch()
export const wikiPages = [
  {
    id: "miside",
    title: "MiSide",
    gif: {
      src: "",
      caption: "GIF ilustrativo da Mita"
    },
    introduction: [
      "Texto introdutório sobre o jogo MiSide.",
      "Segunda linha de introdução, destacando pontos importantes."
    ],
    toc: [
      { id: "jogabilidade", label: "Jogabilidade" },
      { id: "enredo", label: "Enredo" },
      { id: "personagens", label: "Personagens" },
      { id: "finais", label: "Finais" },
      { id: "lancamento", label: "Lançamento e recepção" }
    ],
    sections: [
      {
        id: "jogabilidade",
        title: "Jogabilidade",
        content: [
          "Descrição da jogabilidade do jogo.",
          "Detalhes de mecânicas, estilo e abordagem de terror psicológico."
        ]
      },
      {
        id: "enredo",
        title: "Enredo",
        content: [
          "Resumo do enredo do jogo.",
          "Informações sobre personagens e narrativa principal."
        ]
      },
      {
        id: "personagens",
        title: "Personagens",
        content: [
          {
            name: "Mita",
            description: "Descrição da personagem Mita, personalidade, aparências e evolução durante o jogo."
          }
        ]
      },
      {
        id: "finais",
        title: "Finais",
        content: [
          "Descrição sobre os múltiplos finais do jogo e suas variações."
        ]
      },
      {
        id: "lancamento",
        title: "Lançamento e recepção",
        content: [
          "Data de lançamento do jogo.",
          "Recepção do público e críticas recebidas."
        ]
      }
    ],
    references: [
      { label: "Wikipédia — MiSide", url: "https://pt.wikipedia.org/wiki/MiSide" },
      { label: "Steam — Página oficial de MiSide", url: "https://store.steampowered.com/app/2527500/MiSide/" },
      { label: "MiSide — Site oficial", url: "https://miside.click/pt/" },
      { label: "MiSide — Informações adicionais", url: "https://playmiside.com/pt" },
      { label: "MiSide — Página de descrição do jogo", url: "https://miside.games/" }
    ]
  }
];
