
/* config.js */
// CONFIGURAÇÃO DO JOGO: preencha e salve.
window.CONFIG = {
  // Supabase > Project Settings > API
  SUPABASE_URL: "https://sbkurnxgrkuabhrghrjt.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_46XjHkoZstFyVp2ZaBxUNA_MhZQvxdP", // chave pública; acesso limitado por RLS

  NOME_DO_JOGO: "Arena das Torcidas",
  INSTAGRAM: "arenadastorcidas2026",   // @ do Instagram do jogo, sem o @
  POST_TESTE: "https://www.instagram.com/p/DemUULtJNxm/", // piloto; não inicia a temporada oficial
  POST_OFICIAL: "https://www.instagram.com/reel/Dep_ZgSP8qm/",                  // link do post oficial no Instagram

  // Cadeiras que a torcida precisa somar pra cada nível do estádio
  NIVEIS: [0, 25, 200, 1000, 5000]
};
// Sem Supabase preenchido, o site abre em modo de demonstração com torcedores fictícios.


;

/* teams-seed.js */
// Catálogo editorial; coordenadas aproximadas da cidade.
window.TEAMS_SEED=[
  {
    "id": "flamengo",
    "name": "Flamengo",
    "short": "FLA",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.912,
    "lon": -43.23,
    "color1": "#d7172b",
    "color2": "#111111",
    "aliases": [
      "fla",
      "mengo",
      "mengão",
      "mengao",
      "urubu"
    ]
  },
  {
    "id": "fluminense",
    "name": "Fluminense",
    "short": "FLU",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.912,
    "lon": -43.23,
    "color1": "#8a1c3a",
    "color2": "#1f7a4c",
    "aliases": [
      "flu",
      "fluzão",
      "fluzao",
      "tricolor carioca"
    ]
  },
  {
    "id": "vasco",
    "name": "Vasco",
    "short": "VAS",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.891,
    "lon": -43.228,
    "color1": "#f2f2f2",
    "color2": "#111111",
    "aliases": [
      "vasco da gama",
      "vascão",
      "vascao",
      "gigante da colina"
    ]
  },
  {
    "id": "botafogo",
    "name": "Botafogo",
    "short": "BOT",
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "country": "BR",
    "lat": -22.893,
    "lon": -43.292,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "fogão",
      "fogao",
      "glorioso"
    ]
  },
  {
    "id": "corinthians",
    "name": "Corinthians",
    "short": "COR",
    "city": "São Paulo",
    "uf": "SP",
    "country": "BR",
    "lat": -23.545,
    "lon": -46.474,
    "color1": "#f2f2f2",
    "color2": "#111111",
    "aliases": [
      "timão",
      "timao",
      "coringão",
      "coringao",
      "sccp"
    ]
  },
  {
    "id": "palmeiras",
    "name": "Palmeiras",
    "short": "PAL",
    "city": "São Paulo",
    "uf": "SP",
    "country": "BR",
    "lat": -23.527,
    "lon": -46.678,
    "color1": "#0b6b3a",
    "color2": "#f2f2f2",
    "aliases": [
      "verdão",
      "verdao",
      "porco",
      "sep"
    ]
  },
  {
    "id": "sao-paulo",
    "name": "São Paulo",
    "short": "SAO",
    "city": "São Paulo",
    "uf": "SP",
    "country": "BR",
    "lat": -23.6,
    "lon": -46.72,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "spfc",
      "tricolor paulista",
      "soberano"
    ]
  },
  {
    "id": "santos",
    "name": "Santos",
    "short": "SAN",
    "city": "Santos",
    "uf": "SP",
    "country": "BR",
    "lat": -23.951,
    "lon": -46.339,
    "color1": "#f2f2f2",
    "color2": "#111111",
    "aliases": [
      "peixe",
      "santos fc"
    ]
  },
  {
    "id": "bragantino",
    "name": "Bragantino",
    "short": "RBB",
    "city": "Bragança Paulista",
    "uf": "SP",
    "country": "BR",
    "lat": -22.953,
    "lon": -46.542,
    "color1": "#f2f2f2",
    "color2": "#c8102e",
    "aliases": [
      "red bull bragantino",
      "massa bruta"
    ]
  },
  {
    "id": "mirassol",
    "name": "Mirassol",
    "short": "MIR",
    "city": "Mirassol",
    "uf": "SP",
    "country": "BR",
    "lat": -20.82,
    "lon": -49.52,
    "color1": "#f6c400",
    "color2": "#0a8f4a",
    "aliases": [
      "leão caipira"
    ]
  },
  {
    "id": "guarani",
    "name": "Guarani",
    "short": "GUA",
    "city": "Campinas",
    "uf": "SP",
    "country": "BR",
    "lat": -22.9,
    "lon": -47.07,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "bugre"
    ]
  },
  {
    "id": "ponte-preta",
    "name": "Ponte Preta",
    "short": "PON",
    "city": "Campinas",
    "uf": "SP",
    "country": "BR",
    "lat": -22.912,
    "lon": -47.051,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "macaca"
    ]
  },
  {
    "id": "novorizontino",
    "name": "Novorizontino",
    "short": "NOV",
    "city": "Novo Horizonte",
    "uf": "SP",
    "country": "BR",
    "lat": -21.47,
    "lon": -49.22,
    "color1": "#f6c400",
    "color2": "#111111",
    "aliases": [
      "tigre do vale"
    ]
  },
  {
    "id": "botafogo-sp",
    "name": "Botafogo-SP",
    "short": "BFS",
    "city": "Ribeirão Preto",
    "uf": "SP",
    "country": "BR",
    "lat": -21.18,
    "lon": -47.81,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "pantera"
    ]
  },
  {
    "id": "gremio",
    "name": "Grêmio",
    "short": "GRE",
    "city": "Porto Alegre",
    "uf": "RS",
    "country": "BR",
    "lat": -29.974,
    "lon": -51.195,
    "color1": "#1a8fd6",
    "color2": "#111111",
    "aliases": [
      "gremio",
      "tricolor gaúcho",
      "imortal"
    ]
  },
  {
    "id": "internacional",
    "name": "Internacional",
    "short": "INT",
    "city": "Porto Alegre",
    "uf": "RS",
    "country": "BR",
    "lat": -30.065,
    "lon": -51.236,
    "color1": "#e30613",
    "color2": "#f2f2f2",
    "aliases": [
      "inter",
      "colorado",
      "sci"
    ]
  },
  {
    "id": "juventude",
    "name": "Juventude",
    "short": "JUV",
    "city": "Caxias do Sul",
    "uf": "RS",
    "country": "BR",
    "lat": -29.168,
    "lon": -51.179,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "ju",
      "papo"
    ]
  },
  {
    "id": "atletico-mg",
    "name": "Atlético Mineiro",
    "short": "CAM",
    "city": "Belo Horizonte",
    "uf": "MG",
    "country": "BR",
    "lat": -19.916,
    "lon": -43.97,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "atletico mineiro",
      "galo",
      "cam",
      "atlético-mg",
      "atletico-mg"
    ]
  },
  {
    "id": "cruzeiro",
    "name": "Cruzeiro",
    "short": "CRU",
    "city": "Belo Horizonte",
    "uf": "MG",
    "country": "BR",
    "lat": -19.866,
    "lon": -43.971,
    "color1": "#1d4fd1",
    "color2": "#f2f2f2",
    "aliases": [
      "raposa",
      "cabuloso"
    ]
  },
  {
    "id": "america-mg",
    "name": "América-MG",
    "short": "AME",
    "city": "Belo Horizonte",
    "uf": "MG",
    "country": "BR",
    "lat": -19.88,
    "lon": -43.93,
    "color1": "#0a8f4a",
    "color2": "#111111",
    "aliases": [
      "america mineiro",
      "coelho"
    ]
  },
  {
    "id": "bahia",
    "name": "Bahia",
    "short": "BAH",
    "city": "Salvador",
    "uf": "BA",
    "country": "BR",
    "lat": -12.979,
    "lon": -38.504,
    "color1": "#1453a3",
    "color2": "#e3171f",
    "aliases": [
      "bahêa",
      "baea",
      "esquadrão",
      "esquadrao"
    ]
  },
  {
    "id": "vitoria",
    "name": "Vitória",
    "short": "VIT",
    "city": "Salvador",
    "uf": "BA",
    "country": "BR",
    "lat": -12.94,
    "lon": -38.43,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "vitoria",
      "leão da barra"
    ]
  },
  {
    "id": "fortaleza",
    "name": "Fortaleza",
    "short": "FOR",
    "city": "Fortaleza",
    "uf": "CE",
    "country": "BR",
    "lat": -3.807,
    "lon": -38.522,
    "color1": "#1453a3",
    "color2": "#e3171f",
    "aliases": [
      "leão do pici",
      "tricolor de aço"
    ]
  },
  {
    "id": "ceara",
    "name": "Ceará",
    "short": "CEA",
    "city": "Fortaleza",
    "uf": "CE",
    "country": "BR",
    "lat": -3.807,
    "lon": -38.522,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "ceara",
      "vozão",
      "vozao"
    ]
  },
  {
    "id": "sport",
    "name": "Sport",
    "short": "SPT",
    "city": "Recife",
    "uf": "PE",
    "country": "BR",
    "lat": -8.063,
    "lon": -34.903,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "sport recife",
      "leão da ilha"
    ]
  },
  {
    "id": "nautico",
    "name": "Náutico",
    "short": "NAU",
    "city": "Recife",
    "uf": "PE",
    "country": "BR",
    "lat": -8.04,
    "lon": -34.9,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "nautico",
      "timbu"
    ]
  },
  {
    "id": "santa-cruz",
    "name": "Santa Cruz",
    "short": "STA",
    "city": "Recife",
    "uf": "PE",
    "country": "BR",
    "lat": -8.03,
    "lon": -34.89,
    "color1": "#f2f2f2",
    "color2": "#e3171f",
    "aliases": [
      "cobra coral",
      "santinha"
    ]
  },
  {
    "id": "athletico-pr",
    "name": "Athletico Paranaense",
    "short": "CAP",
    "city": "Curitiba",
    "uf": "PR",
    "country": "BR",
    "lat": -25.448,
    "lon": -49.277,
    "color1": "#c8102e",
    "color2": "#111111",
    "aliases": [
      "athletico",
      "furacão",
      "furacao",
      "cap",
      "atletico paranaense"
    ]
  },
  {
    "id": "coritiba",
    "name": "Coritiba",
    "short": "CFC",
    "city": "Curitiba",
    "uf": "PR",
    "country": "BR",
    "lat": -25.421,
    "lon": -49.259,
    "color1": "#0a6e3c",
    "color2": "#f2f2f2",
    "aliases": [
      "coxa",
      "coxa branca"
    ]
  },
  {
    "id": "operario",
    "name": "Operário",
    "short": "OPE",
    "city": "Ponta Grossa",
    "uf": "PR",
    "country": "BR",
    "lat": -25.09,
    "lon": -50.16,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "operario",
      "fantasma"
    ]
  },
  {
    "id": "goias",
    "name": "Goiás",
    "short": "GOI",
    "city": "Goiânia",
    "uf": "GO",
    "country": "BR",
    "lat": -16.69,
    "lon": -49.23,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "goias",
      "verdão do serra"
    ]
  },
  {
    "id": "atletico-go",
    "name": "Atlético Goianiense",
    "short": "ACG",
    "city": "Goiânia",
    "uf": "GO",
    "country": "BR",
    "lat": -16.66,
    "lon": -49.27,
    "color1": "#e3171f",
    "color2": "#111111",
    "aliases": [
      "atletico goianiense",
      "dragão",
      "dragao"
    ]
  },
  {
    "id": "vila-nova",
    "name": "Vila Nova",
    "short": "VIL",
    "city": "Goiânia",
    "uf": "GO",
    "country": "BR",
    "lat": -16.7,
    "lon": -49.26,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "tigrão",
      "tigrao"
    ]
  },
  {
    "id": "cuiaba",
    "name": "Cuiabá",
    "short": "CUI",
    "city": "Cuiabá",
    "uf": "MT",
    "country": "BR",
    "lat": -15.6,
    "lon": -56.1,
    "color1": "#f6c400",
    "color2": "#0a8f4a",
    "aliases": [
      "cuiaba",
      "dourado"
    ]
  },
  {
    "id": "chapecoense",
    "name": "Chapecoense",
    "short": "CHA",
    "city": "Chapecó",
    "uf": "SC",
    "country": "BR",
    "lat": -27.1,
    "lon": -52.62,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "chape",
      "verdão do oeste"
    ]
  },
  {
    "id": "criciuma",
    "name": "Criciúma",
    "short": "CRI",
    "city": "Criciúma",
    "uf": "SC",
    "country": "BR",
    "lat": -28.68,
    "lon": -49.37,
    "color1": "#f6c400",
    "color2": "#111111",
    "aliases": [
      "criciuma",
      "tigre"
    ]
  },
  {
    "id": "avai",
    "name": "Avaí",
    "short": "AVA",
    "city": "Florianópolis",
    "uf": "SC",
    "country": "BR",
    "lat": -27.6,
    "lon": -48.55,
    "color1": "#1453a3",
    "color2": "#f2f2f2",
    "aliases": [
      "avai",
      "leão da ilha sc"
    ]
  },
  {
    "id": "figueirense",
    "name": "Figueirense",
    "short": "FIG",
    "city": "Florianópolis",
    "uf": "SC",
    "country": "BR",
    "lat": -27.59,
    "lon": -48.56,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "figueira"
    ]
  },
  {
    "id": "remo",
    "name": "Remo",
    "short": "REM",
    "city": "Belém",
    "uf": "PA",
    "country": "BR",
    "lat": -1.45,
    "lon": -48.48,
    "color1": "#0d2a6e",
    "color2": "#f2f2f2",
    "aliases": [
      "leão azul",
      "clube do remo"
    ]
  },
  {
    "id": "paysandu",
    "name": "Paysandu",
    "short": "PAY",
    "city": "Belém",
    "uf": "PA",
    "country": "BR",
    "lat": -1.44,
    "lon": -48.49,
    "color1": "#36a9e1",
    "color2": "#f2f2f2",
    "aliases": [
      "papão",
      "papao"
    ]
  },
  {
    "id": "crb",
    "name": "CRB",
    "short": "CRB",
    "city": "Maceió",
    "uf": "AL",
    "country": "BR",
    "lat": -9.66,
    "lon": -35.73,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "galo da praia"
    ]
  },
  {
    "id": "csa",
    "name": "CSA",
    "short": "CSA",
    "city": "Maceió",
    "uf": "AL",
    "country": "BR",
    "lat": -9.65,
    "lon": -35.72,
    "color1": "#1453a3",
    "color2": "#f2f2f2",
    "aliases": [
      "azulão"
    ]
  },
  {
    "id": "abc",
    "name": "ABC",
    "short": "ABC",
    "city": "Natal",
    "uf": "RN",
    "country": "BR",
    "lat": -5.79,
    "lon": -35.21,
    "color1": "#1a1a1a",
    "color2": "#f2f2f2",
    "aliases": [
      "abc natal"
    ]
  },
  {
    "id": "amazonas",
    "name": "Amazonas",
    "short": "AMZ",
    "city": "Manaus",
    "uf": "AM",
    "country": "BR",
    "lat": -3.1,
    "lon": -60.02,
    "color1": "#f6c400",
    "color2": "#111111",
    "aliases": [
      "amazonas fc",
      "onça"
    ]
  },
  {
    "id": "real-madrid",
    "name": "Real Madrid",
    "short": "RMA",
    "city": "Madri",
    "uf": "ESP",
    "country": "ES",
    "lat": 40.453,
    "lon": -3.688,
    "color1": "#f2f2f2",
    "color2": "#d4af37",
    "aliases": [
      "real",
      "merengues"
    ]
  },
  {
    "id": "barcelona",
    "name": "Barcelona",
    "short": "BAR",
    "city": "Barcelona",
    "uf": "ESP",
    "country": "ES",
    "lat": 41.381,
    "lon": 2.123,
    "color1": "#a50044",
    "color2": "#004d98",
    "aliases": [
      "barça",
      "barca",
      "fc barcelona"
    ]
  },
  {
    "id": "atletico-madrid",
    "name": "Atlético de Madrid",
    "short": "ATM",
    "city": "Madri",
    "uf": "ESP",
    "country": "ES",
    "lat": 40.436,
    "lon": -3.599,
    "color1": "#cb3524",
    "color2": "#f2f2f2",
    "aliases": [
      "atletico madrid",
      "atleti",
      "colchoneros"
    ]
  },
  {
    "id": "sevilla",
    "name": "Sevilla",
    "short": "SEV",
    "city": "Sevilha",
    "uf": "ESP",
    "country": "ES",
    "lat": 37.384,
    "lon": -5.971,
    "color1": "#f2f2f2",
    "color2": "#d4021d",
    "aliases": [
      "sevilha"
    ]
  },
  {
    "id": "manchester-united",
    "name": "Manchester United",
    "short": "MUN",
    "city": "Manchester",
    "uf": "ING",
    "country": "GB",
    "lat": 53.463,
    "lon": -2.291,
    "color1": "#da291c",
    "color2": "#111111",
    "aliases": [
      "man united",
      "united",
      "manchester utd"
    ]
  },
  {
    "id": "manchester-city",
    "name": "Manchester City",
    "short": "MCI",
    "city": "Manchester",
    "uf": "ING",
    "country": "GB",
    "lat": 53.483,
    "lon": -2.2,
    "color1": "#6cabdd",
    "color2": "#1c2c5b",
    "aliases": [
      "man city",
      "city"
    ]
  },
  {
    "id": "liverpool",
    "name": "Liverpool",
    "short": "LIV",
    "city": "Liverpool",
    "uf": "ING",
    "country": "GB",
    "lat": 53.431,
    "lon": -2.961,
    "color1": "#c8102e",
    "color2": "#f2f2f2",
    "aliases": [
      "reds"
    ]
  },
  {
    "id": "arsenal",
    "name": "Arsenal",
    "short": "ARS",
    "city": "Londres",
    "uf": "ING",
    "country": "GB",
    "lat": 51.555,
    "lon": -0.108,
    "color1": "#ef0107",
    "color2": "#f2f2f2",
    "aliases": [
      "gunners"
    ]
  },
  {
    "id": "chelsea",
    "name": "Chelsea",
    "short": "CHE",
    "city": "Londres",
    "uf": "ING",
    "country": "GB",
    "lat": 51.482,
    "lon": -0.191,
    "color1": "#034694",
    "color2": "#f2f2f2",
    "aliases": [
      "blues"
    ]
  },
  {
    "id": "tottenham",
    "name": "Tottenham",
    "short": "TOT",
    "city": "Londres",
    "uf": "ING",
    "country": "GB",
    "lat": 51.604,
    "lon": -0.066,
    "color1": "#f2f2f2",
    "color2": "#132257",
    "aliases": [
      "spurs"
    ]
  },
  {
    "id": "newcastle",
    "name": "Newcastle",
    "short": "NEW",
    "city": "Newcastle",
    "uf": "ING",
    "country": "GB",
    "lat": 54.976,
    "lon": -1.622,
    "color1": "#111111",
    "color2": "#f2f2f2",
    "aliases": [
      "magpies"
    ]
  },
  {
    "id": "juventus",
    "name": "Juventus",
    "short": "JUVE",
    "city": "Turim",
    "uf": "ITA",
    "country": "IT",
    "lat": 45.11,
    "lon": 7.641,
    "color1": "#111111",
    "color2": "#f2f2f2",
    "aliases": [
      "juve"
    ]
  },
  {
    "id": "milan",
    "name": "Milan",
    "short": "MIL",
    "city": "Milão",
    "uf": "ITA",
    "country": "IT",
    "lat": 45.478,
    "lon": 9.124,
    "color1": "#fb090b",
    "color2": "#111111",
    "aliases": [
      "ac milan",
      "rossoneri"
    ]
  },
  {
    "id": "inter-milao",
    "name": "Inter de Milão",
    "short": "INM",
    "city": "Milão",
    "uf": "ITA",
    "country": "IT",
    "lat": 45.478,
    "lon": 9.124,
    "color1": "#0068a8",
    "color2": "#111111",
    "aliases": [
      "inter de milao",
      "internazionale",
      "nerazzurri"
    ]
  },
  {
    "id": "napoli",
    "name": "Napoli",
    "short": "NAP",
    "city": "Nápoles",
    "uf": "ITA",
    "country": "IT",
    "lat": 40.828,
    "lon": 14.193,
    "color1": "#12a0d7",
    "color2": "#f2f2f2",
    "aliases": [
      "napoles"
    ]
  },
  {
    "id": "roma",
    "name": "Roma",
    "short": "ROM",
    "city": "Roma",
    "uf": "ITA",
    "country": "IT",
    "lat": 41.934,
    "lon": 12.455,
    "color1": "#8e1f2f",
    "color2": "#f0bc42",
    "aliases": [
      "as roma",
      "giallorossi"
    ]
  },
  {
    "id": "bayern",
    "name": "Bayern de Munique",
    "short": "BAY",
    "city": "Munique",
    "uf": "ALE",
    "country": "DE",
    "lat": 48.219,
    "lon": 11.625,
    "color1": "#dc052d",
    "color2": "#f2f2f2",
    "aliases": [
      "bayern munique",
      "bayern"
    ]
  },
  {
    "id": "dortmund",
    "name": "Borussia Dortmund",
    "short": "BVB",
    "city": "Dortmund",
    "uf": "ALE",
    "country": "DE",
    "lat": 51.493,
    "lon": 7.452,
    "color1": "#fde100",
    "color2": "#111111",
    "aliases": [
      "borussia",
      "bvb"
    ]
  },
  {
    "id": "psg",
    "name": "Paris Saint-Germain",
    "short": "PSG",
    "city": "Paris",
    "uf": "FRA",
    "country": "FR",
    "lat": 48.841,
    "lon": 2.253,
    "color1": "#004170",
    "color2": "#da291c",
    "aliases": [
      "paris",
      "paris saint germain"
    ]
  },
  {
    "id": "marseille",
    "name": "Olympique de Marseille",
    "short": "OM",
    "city": "Marselha",
    "uf": "FRA",
    "country": "FR",
    "lat": 43.27,
    "lon": 5.396,
    "color1": "#2faee0",
    "color2": "#f2f2f2",
    "aliases": [
      "marselha",
      "om"
    ]
  },
  {
    "id": "benfica",
    "name": "Benfica",
    "short": "BEN",
    "city": "Lisboa",
    "uf": "POR",
    "country": "PT",
    "lat": 38.753,
    "lon": -9.185,
    "color1": "#e3171f",
    "color2": "#f2f2f2",
    "aliases": [
      "slb",
      "encarnados"
    ]
  },
  {
    "id": "sporting",
    "name": "Sporting",
    "short": "SCP",
    "city": "Lisboa",
    "uf": "POR",
    "country": "PT",
    "lat": 38.761,
    "lon": -9.161,
    "color1": "#0a8f4a",
    "color2": "#f2f2f2",
    "aliases": [
      "sporting lisboa",
      "leões"
    ]
  },
  {
    "id": "porto",
    "name": "Porto",
    "short": "FCP",
    "city": "Porto",
    "uf": "POR",
    "country": "PT",
    "lat": 41.162,
    "lon": -8.584,
    "color1": "#003893",
    "color2": "#f2f2f2",
    "aliases": [
      "fc porto",
      "dragões"
    ]
  },
  {
    "id": "aston-villa",
    "name": "Aston Villa",
    "short": "AVL",
    "city": "Birmingham",
    "uf": "GB",
    "country": "GB",
    "lat": 52.486,
    "lon": -1.89,
    "color1": "#670e36",
    "color2": "#95bfe5",
    "aliases": [
      "villa"
    ],
    "location_precision": "city"
  },
  {
    "id": "west-ham",
    "name": "West Ham United",
    "short": "WHU",
    "city": "Londres",
    "uf": "GB",
    "country": "GB",
    "lat": 51.507,
    "lon": -0.128,
    "color1": "#7a263a",
    "color2": "#1bb1e7",
    "aliases": [
      "west ham",
      "hammers"
    ],
    "location_precision": "city"
  },
  {
    "id": "nottingham-forest",
    "name": "Nottingham Forest",
    "short": "NFO",
    "city": "Nottingham",
    "uf": "GB",
    "country": "GB",
    "lat": 52.954,
    "lon": -1.158,
    "color1": "#dd0000",
    "color2": "#ffffff",
    "aliases": [
      "nottingham",
      "forest"
    ],
    "location_precision": "city"
  },
  {
    "id": "brighton",
    "name": "Brighton & Hove Albion",
    "short": "BHA",
    "city": "Brighton",
    "uf": "GB",
    "country": "GB",
    "lat": 50.823,
    "lon": -0.137,
    "color1": "#0057b8",
    "color2": "#ffffff",
    "aliases": [
      "brighton"
    ],
    "location_precision": "city"
  },
  {
    "id": "athletic-bilbao",
    "name": "Athletic Bilbao",
    "short": "ATH",
    "city": "Bilbao",
    "uf": "ES",
    "country": "ES",
    "lat": 43.263,
    "lon": -2.935,
    "color1": "#ee2523",
    "color2": "#ffffff",
    "aliases": [
      "athletic club",
      "bilbao"
    ],
    "location_precision": "city"
  },
  {
    "id": "real-sociedad",
    "name": "Real Sociedad",
    "short": "RSO",
    "city": "San Sebastián",
    "uf": "ES",
    "country": "ES",
    "lat": 43.318,
    "lon": -1.981,
    "color1": "#0067b1",
    "color2": "#ffffff",
    "aliases": [
      "sociedad"
    ],
    "location_precision": "city"
  },
  {
    "id": "real-betis",
    "name": "Real Betis",
    "short": "BET",
    "city": "Sevilha",
    "uf": "ES",
    "country": "ES",
    "lat": 37.389,
    "lon": -5.984,
    "color1": "#00954c",
    "color2": "#ffffff",
    "aliases": [
      "betis"
    ],
    "location_precision": "city"
  },
  {
    "id": "valencia",
    "name": "Valencia",
    "short": "VAL",
    "city": "Valência",
    "uf": "ES",
    "country": "ES",
    "lat": 39.47,
    "lon": -0.376,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "valencia cf"
    ],
    "location_precision": "city"
  },
  {
    "id": "villarreal",
    "name": "Villarreal",
    "short": "VIL",
    "city": "Vila-real",
    "uf": "ES",
    "country": "ES",
    "lat": 39.938,
    "lon": -0.102,
    "color1": "#ffe667",
    "color2": "#005187",
    "aliases": [
      "submarino amarelo"
    ],
    "location_precision": "city"
  },
  {
    "id": "atalanta",
    "name": "Atalanta",
    "short": "ATA",
    "city": "Bérgamo",
    "uf": "IT",
    "country": "IT",
    "lat": 45.698,
    "lon": 9.677,
    "color1": "#1e71b8",
    "color2": "#111111",
    "aliases": [
      "atalanta bergamo"
    ],
    "location_precision": "city"
  },
  {
    "id": "lazio",
    "name": "Lazio",
    "short": "LAZ",
    "city": "Roma",
    "uf": "IT",
    "country": "IT",
    "lat": 41.903,
    "lon": 12.496,
    "color1": "#87d8f7",
    "color2": "#ffffff",
    "aliases": [
      "ss lazio"
    ],
    "location_precision": "city"
  },
  {
    "id": "fiorentina",
    "name": "Fiorentina",
    "short": "FIO",
    "city": "Florença",
    "uf": "IT",
    "country": "IT",
    "lat": 43.77,
    "lon": 11.256,
    "color1": "#5f259f",
    "color2": "#ffffff",
    "aliases": [
      "viola"
    ],
    "location_precision": "city"
  },
  {
    "id": "bologna",
    "name": "Bologna",
    "short": "BOL",
    "city": "Bolonha",
    "uf": "IT",
    "country": "IT",
    "lat": 44.494,
    "lon": 11.343,
    "color1": "#a21c26",
    "color2": "#1a2f48",
    "aliases": [
      "bolonha"
    ],
    "location_precision": "city"
  },
  {
    "id": "bayer-leverkusen",
    "name": "Bayer Leverkusen",
    "short": "B04",
    "city": "Leverkusen",
    "uf": "DE",
    "country": "DE",
    "lat": 51.045,
    "lon": 7.02,
    "color1": "#e32221",
    "color2": "#111111",
    "aliases": [
      "leverkusen",
      "bayer 04"
    ],
    "location_precision": "city"
  },
  {
    "id": "rb-leipzig",
    "name": "RB Leipzig",
    "short": "RBL",
    "city": "Leipzig",
    "uf": "DE",
    "country": "DE",
    "lat": 51.34,
    "lon": 12.373,
    "color1": "#dd0741",
    "color2": "#ffffff",
    "aliases": [
      "leipzig"
    ],
    "location_precision": "city"
  },
  {
    "id": "frankfurt",
    "name": "Eintracht Frankfurt",
    "short": "SGE",
    "city": "Frankfurt",
    "uf": "DE",
    "country": "DE",
    "lat": 50.111,
    "lon": 8.682,
    "color1": "#e1000f",
    "color2": "#111111",
    "aliases": [
      "eintracht",
      "frankfurt"
    ],
    "location_precision": "city"
  },
  {
    "id": "stuttgart",
    "name": "Stuttgart",
    "short": "VFB",
    "city": "Stuttgart",
    "uf": "DE",
    "country": "DE",
    "lat": 48.775,
    "lon": 9.182,
    "color1": "#ffffff",
    "color2": "#e32219",
    "aliases": [
      "vfb stuttgart"
    ],
    "location_precision": "city"
  },
  {
    "id": "lyon",
    "name": "Olympique Lyonnais",
    "short": "OL",
    "city": "Lyon",
    "uf": "FR",
    "country": "FR",
    "lat": 45.764,
    "lon": 4.835,
    "color1": "#ffffff",
    "color2": "#da001a",
    "aliases": [
      "lyon"
    ],
    "location_precision": "city"
  },
  {
    "id": "monaco",
    "name": "Monaco",
    "short": "ASM",
    "city": "Mônaco",
    "uf": "MC",
    "country": "MC",
    "lat": 43.738,
    "lon": 7.425,
    "color1": "#e31b23",
    "color2": "#ffffff",
    "aliases": [
      "as monaco"
    ],
    "location_precision": "city"
  },
  {
    "id": "lille",
    "name": "Lille",
    "short": "LOSC",
    "city": "Lille",
    "uf": "FR",
    "country": "FR",
    "lat": 50.629,
    "lon": 3.057,
    "color1": "#e01e13",
    "color2": "#172a53",
    "aliases": [
      "losc"
    ],
    "location_precision": "city"
  },
  {
    "id": "nice",
    "name": "Nice",
    "short": "OGCN",
    "city": "Nice",
    "uf": "FR",
    "country": "FR",
    "lat": 43.71,
    "lon": 7.262,
    "color1": "#ed1c24",
    "color2": "#111111",
    "aliases": [
      "ogc nice"
    ],
    "location_precision": "city"
  },
  {
    "id": "braga",
    "name": "Braga",
    "short": "SCB",
    "city": "Braga",
    "uf": "PT",
    "country": "PT",
    "lat": 41.551,
    "lon": -8.426,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "sporting braga",
      "sc braga"
    ],
    "location_precision": "city"
  },
  {
    "id": "vitoria-guimaraes",
    "name": "Vitória de Guimarães",
    "short": "VSC",
    "city": "Guimarães",
    "uf": "PT",
    "country": "PT",
    "lat": 41.443,
    "lon": -8.293,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "vitoria guimaraes",
      "vitoria sc"
    ],
    "location_precision": "city"
  },
  {
    "id": "ajax",
    "name": "Ajax",
    "short": "AJA",
    "city": "Amsterdã",
    "uf": "NL",
    "country": "NL",
    "lat": 52.367,
    "lon": 4.904,
    "color1": "#d2122e",
    "color2": "#ffffff",
    "aliases": [
      "ajax amsterdam"
    ],
    "location_precision": "city"
  },
  {
    "id": "psv",
    "name": "PSV Eindhoven",
    "short": "PSV",
    "city": "Eindhoven",
    "uf": "NL",
    "country": "NL",
    "lat": 51.441,
    "lon": 5.469,
    "color1": "#ed1c24",
    "color2": "#ffffff",
    "aliases": [
      "psv eindhoven"
    ],
    "location_precision": "city"
  },
  {
    "id": "feyenoord",
    "name": "Feyenoord",
    "short": "FEY",
    "city": "Roterdã",
    "uf": "NL",
    "country": "NL",
    "lat": 51.924,
    "lon": 4.478,
    "color1": "#ffffff",
    "color2": "#e31e24",
    "aliases": [
      "feyenoord rotterdam"
    ],
    "location_precision": "city"
  },
  {
    "id": "celtic",
    "name": "Celtic",
    "short": "CEL",
    "city": "Glasgow",
    "uf": "GB",
    "country": "GB",
    "lat": 55.864,
    "lon": -4.252,
    "color1": "#018749",
    "color2": "#ffffff",
    "aliases": [
      "celtic glasgow"
    ],
    "location_precision": "city"
  },
  {
    "id": "rangers",
    "name": "Rangers",
    "short": "RAN",
    "city": "Glasgow",
    "uf": "GB",
    "country": "GB",
    "lat": 55.864,
    "lon": -4.252,
    "color1": "#0033a0",
    "color2": "#ffffff",
    "aliases": [
      "glasgow rangers"
    ],
    "location_precision": "city"
  },
  {
    "id": "boca-juniors",
    "name": "Boca Juniors",
    "short": "BOC",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#003b7a",
    "color2": "#f7b600",
    "aliases": [
      "boca",
      "xeneize"
    ],
    "location_precision": "city"
  },
  {
    "id": "river-plate",
    "name": "River Plate",
    "short": "RIV",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#ffffff",
    "color2": "#ed1c24",
    "aliases": [
      "river",
      "millonarios"
    ],
    "location_precision": "city"
  },
  {
    "id": "racing-argentina",
    "name": "Racing Club",
    "short": "RAC",
    "city": "Avellaneda",
    "uf": "AR",
    "country": "AR",
    "lat": -34.662,
    "lon": -58.365,
    "color1": "#75aadb",
    "color2": "#ffffff",
    "aliases": [
      "racing",
      "racing avellaneda"
    ],
    "location_precision": "city"
  },
  {
    "id": "independiente",
    "name": "Independiente",
    "short": "IND",
    "city": "Avellaneda",
    "uf": "AR",
    "country": "AR",
    "lat": -34.662,
    "lon": -58.365,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "independiente avellaneda",
      "rojo"
    ],
    "location_precision": "city"
  },
  {
    "id": "san-lorenzo",
    "name": "San Lorenzo",
    "short": "SLO",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#173b79",
    "color2": "#e31b23",
    "aliases": [
      "san lorenzo",
      "cuervo"
    ],
    "location_precision": "city"
  },
  {
    "id": "estudiantes",
    "name": "Estudiantes de La Plata",
    "short": "EST",
    "city": "La Plata",
    "uf": "AR",
    "country": "AR",
    "lat": -34.921,
    "lon": -57.954,
    "color1": "#e31b23",
    "color2": "#ffffff",
    "aliases": [
      "estudiantes",
      "pincha"
    ],
    "location_precision": "city"
  },
  {
    "id": "velez",
    "name": "Vélez Sarsfield",
    "short": "VEL",
    "city": "Buenos Aires",
    "uf": "AR",
    "country": "AR",
    "lat": -34.604,
    "lon": -58.382,
    "color1": "#ffffff",
    "color2": "#003b7a",
    "aliases": [
      "velez",
      "velez sarsfield"
    ],
    "location_precision": "city"
  },
  {
    "id": "rosario-central",
    "name": "Rosario Central",
    "short": "ROS",
    "city": "Rosário",
    "uf": "AR",
    "country": "AR",
    "lat": -32.947,
    "lon": -60.639,
    "color1": "#004b8d",
    "color2": "#ffdd00",
    "aliases": [
      "rosario central",
      "canalla"
    ],
    "location_precision": "city"
  },
  {
    "id": "newells",
    "name": "Newell's Old Boys",
    "short": "NOB",
    "city": "Rosário",
    "uf": "AR",
    "country": "AR",
    "lat": -32.947,
    "lon": -60.639,
    "color1": "#e30613",
    "color2": "#111111",
    "aliases": [
      "newells",
      "newells old boys"
    ],
    "location_precision": "city"
  },
  {
    "id": "penarol",
    "name": "Peñarol",
    "short": "PEN",
    "city": "Montevidéu",
    "uf": "UY",
    "country": "UY",
    "lat": -34.901,
    "lon": -56.165,
    "color1": "#ffcf00",
    "color2": "#111111",
    "aliases": [
      "penarol",
      "manya"
    ],
    "location_precision": "city"
  },
  {
    "id": "nacional-uruguai",
    "name": "Nacional do Uruguai",
    "short": "NAC",
    "city": "Montevidéu",
    "uf": "UY",
    "country": "UY",
    "lat": -34.901,
    "lon": -56.165,
    "color1": "#ffffff",
    "color2": "#003b7a",
    "aliases": [
      "nacional uruguai",
      "nacional montevideo"
    ],
    "location_precision": "city"
  },
  {
    "id": "olimpia",
    "name": "Olimpia",
    "short": "OLI",
    "city": "Assunção",
    "uf": "PY",
    "country": "PY",
    "lat": -25.264,
    "lon": -57.575,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "olimpia asuncion",
      "olimpia paraguai"
    ],
    "location_precision": "city"
  },
  {
    "id": "cerro-porteno",
    "name": "Cerro Porteño",
    "short": "CCP",
    "city": "Assunção",
    "uf": "PY",
    "country": "PY",
    "lat": -25.264,
    "lon": -57.575,
    "color1": "#003b7a",
    "color2": "#e31b23",
    "aliases": [
      "cerro porteno",
      "cerro"
    ],
    "location_precision": "city"
  },
  {
    "id": "libertad",
    "name": "Libertad",
    "short": "LIB",
    "city": "Assunção",
    "uf": "PY",
    "country": "PY",
    "lat": -25.264,
    "lon": -57.575,
    "color1": "#111111",
    "color2": "#ffffff",
    "aliases": [
      "libertad paraguai"
    ],
    "location_precision": "city"
  },
  {
    "id": "colo-colo",
    "name": "Colo-Colo",
    "short": "COL",
    "city": "Santiago",
    "uf": "CL",
    "country": "CL",
    "lat": -33.449,
    "lon": -70.669,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "colo colo",
      "colocolo"
    ],
    "location_precision": "city"
  },
  {
    "id": "universidad-chile",
    "name": "Universidad de Chile",
    "short": "UCH",
    "city": "Santiago",
    "uf": "CL",
    "country": "CL",
    "lat": -33.449,
    "lon": -70.669,
    "color1": "#003b7a",
    "color2": "#e31b23",
    "aliases": [
      "universidad de chile",
      "la u chile"
    ],
    "location_precision": "city"
  },
  {
    "id": "universidad-catolica",
    "name": "Universidad Católica",
    "short": "UC",
    "city": "Santiago",
    "uf": "CL",
    "country": "CL",
    "lat": -33.449,
    "lon": -70.669,
    "color1": "#ffffff",
    "color2": "#003b7a",
    "aliases": [
      "universidad catolica",
      "catolica chile"
    ],
    "location_precision": "city"
  },
  {
    "id": "atletico-nacional",
    "name": "Atlético Nacional",
    "short": "ATN",
    "city": "Medellín",
    "uf": "CO",
    "country": "CO",
    "lat": 6.244,
    "lon": -75.581,
    "color1": "#008c45",
    "color2": "#ffffff",
    "aliases": [
      "atletico nacional",
      "nacional medellin"
    ],
    "location_precision": "city"
  },
  {
    "id": "millonarios",
    "name": "Millonarios",
    "short": "MIL",
    "city": "Bogotá",
    "uf": "CO",
    "country": "CO",
    "lat": 4.711,
    "lon": -74.072,
    "color1": "#0052a4",
    "color2": "#ffffff",
    "aliases": [
      "millonarios bogota"
    ],
    "location_precision": "city"
  },
  {
    "id": "america-cali",
    "name": "América de Cali",
    "short": "ADC",
    "city": "Cali",
    "uf": "CO",
    "country": "CO",
    "lat": 3.452,
    "lon": -76.532,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "america de cali"
    ],
    "location_precision": "city"
  },
  {
    "id": "junior",
    "name": "Junior Barranquilla",
    "short": "JUN",
    "city": "Barranquilla",
    "uf": "CO",
    "country": "CO",
    "lat": 10.964,
    "lon": -74.796,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "junior barranquilla",
      "junior de barranquilla"
    ],
    "location_precision": "city"
  },
  {
    "id": "ldu",
    "name": "LDU Quito",
    "short": "LDU",
    "city": "Quito",
    "uf": "EC",
    "country": "EC",
    "lat": -0.181,
    "lon": -78.468,
    "color1": "#ffffff",
    "color2": "#e30613",
    "aliases": [
      "liga de quito",
      "ldu quito"
    ],
    "location_precision": "city"
  },
  {
    "id": "barcelona-equador",
    "name": "Barcelona de Guayaquil",
    "short": "BSC",
    "city": "Guayaquil",
    "uf": "EC",
    "country": "EC",
    "lat": -2.171,
    "lon": -79.922,
    "color1": "#ffdf00",
    "color2": "#111111",
    "aliases": [
      "barcelona guayaquil",
      "barcelona equador"
    ],
    "location_precision": "city"
  },
  {
    "id": "independiente-del-valle",
    "name": "Independiente del Valle",
    "short": "IDV",
    "city": "Sangolquí",
    "uf": "EC",
    "country": "EC",
    "lat": -0.334,
    "lon": -78.452,
    "color1": "#003b7a",
    "color2": "#111111",
    "aliases": [
      "independiente del valle",
      "idv"
    ],
    "location_precision": "city"
  },
  {
    "id": "alianza-lima",
    "name": "Alianza Lima",
    "short": "ALI",
    "city": "Lima",
    "uf": "PE",
    "country": "PE",
    "lat": -12.046,
    "lon": -77.043,
    "color1": "#002b5c",
    "color2": "#ffffff",
    "aliases": [
      "alianza lima"
    ],
    "location_precision": "city"
  },
  {
    "id": "universitario",
    "name": "Universitario",
    "short": "UNI",
    "city": "Lima",
    "uf": "PE",
    "country": "PE",
    "lat": -12.046,
    "lon": -77.043,
    "color1": "#fff4d6",
    "color2": "#8a1538",
    "aliases": [
      "universitario de deportes"
    ],
    "location_precision": "city"
  },
  {
    "id": "sporting-cristal",
    "name": "Sporting Cristal",
    "short": "SCR",
    "city": "Lima",
    "uf": "PE",
    "country": "PE",
    "lat": -12.046,
    "lon": -77.043,
    "color1": "#71c5e8",
    "color2": "#ffffff",
    "aliases": [
      "sporting cristal"
    ],
    "location_precision": "city"
  },
  {
    "id": "bolivar",
    "name": "Bolívar",
    "short": "BOL",
    "city": "La Paz",
    "uf": "BO",
    "country": "BO",
    "lat": -16.49,
    "lon": -68.119,
    "color1": "#71c5e8",
    "color2": "#ffffff",
    "aliases": [
      "bolivar"
    ],
    "location_precision": "city"
  },
  {
    "id": "strongest",
    "name": "The Strongest",
    "short": "STR",
    "city": "La Paz",
    "uf": "BO",
    "country": "BO",
    "lat": -16.49,
    "lon": -68.119,
    "color1": "#ffcf00",
    "color2": "#111111",
    "aliases": [
      "the strongest"
    ],
    "location_precision": "city"
  },
  {
    "id": "caracas",
    "name": "Caracas FC",
    "short": "CAR",
    "city": "Caracas",
    "uf": "VE",
    "country": "VE",
    "lat": 10.48,
    "lon": -66.904,
    "color1": "#e30613",
    "color2": "#111111",
    "aliases": [
      "caracas fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "america-mexico",
    "name": "América do México",
    "short": "AME",
    "city": "Cidade do México",
    "uf": "MX",
    "country": "MX",
    "lat": 19.433,
    "lon": -99.133,
    "color1": "#fff4b8",
    "color2": "#002b5c",
    "aliases": [
      "club america",
      "america mexico",
      "america do mexico"
    ],
    "location_precision": "city"
  },
  {
    "id": "chivas",
    "name": "Chivas Guadalajara",
    "short": "CHI",
    "city": "Guadalajara",
    "uf": "MX",
    "country": "MX",
    "lat": 20.66,
    "lon": -103.35,
    "color1": "#e30613",
    "color2": "#ffffff",
    "aliases": [
      "chivas",
      "guadalajara"
    ],
    "location_precision": "city"
  },
  {
    "id": "cruz-azul",
    "name": "Cruz Azul",
    "short": "CAZ",
    "city": "Cidade do México",
    "uf": "MX",
    "country": "MX",
    "lat": 19.433,
    "lon": -99.133,
    "color1": "#0052a4",
    "color2": "#ffffff",
    "aliases": [
      "cruz azul"
    ],
    "location_precision": "city"
  },
  {
    "id": "pumas",
    "name": "Pumas UNAM",
    "short": "PUM",
    "city": "Cidade do México",
    "uf": "MX",
    "country": "MX",
    "lat": 19.433,
    "lon": -99.133,
    "color1": "#002b5c",
    "color2": "#c6a664",
    "aliases": [
      "pumas",
      "pumas unam"
    ],
    "location_precision": "city"
  },
  {
    "id": "monterrey",
    "name": "Monterrey",
    "short": "MTY",
    "city": "Monterrey",
    "uf": "MX",
    "country": "MX",
    "lat": 25.687,
    "lon": -100.316,
    "color1": "#002b5c",
    "color2": "#ffffff",
    "aliases": [
      "rayados",
      "monterrey"
    ],
    "location_precision": "city"
  },
  {
    "id": "tigres",
    "name": "Tigres UANL",
    "short": "TIG",
    "city": "San Nicolás de los Garza",
    "uf": "MX",
    "country": "MX",
    "lat": 25.75,
    "lon": -100.283,
    "color1": "#ffcf00",
    "color2": "#0052a4",
    "aliases": [
      "tigres",
      "tigres uanl"
    ],
    "location_precision": "city"
  },
  {
    "id": "inter-miami",
    "name": "Inter Miami",
    "short": "MIA",
    "city": "Miami",
    "uf": "US",
    "country": "US",
    "lat": 25.762,
    "lon": -80.192,
    "color1": "#f7b5cd",
    "color2": "#111111",
    "aliases": [
      "inter miami",
      "inter de miami"
    ],
    "location_precision": "city"
  },
  {
    "id": "la-galaxy",
    "name": "LA Galaxy",
    "short": "LAG",
    "city": "Los Angeles",
    "uf": "US",
    "country": "US",
    "lat": 34.052,
    "lon": -118.244,
    "color1": "#ffffff",
    "color2": "#002b5c",
    "aliases": [
      "la galaxy",
      "los angeles galaxy"
    ],
    "location_precision": "city"
  },
  {
    "id": "lafc",
    "name": "Los Angeles FC",
    "short": "LAFC",
    "city": "Los Angeles",
    "uf": "US",
    "country": "US",
    "lat": 34.052,
    "lon": -118.244,
    "color1": "#111111",
    "color2": "#c6a664",
    "aliases": [
      "lafc",
      "los angeles fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "orlando-city",
    "name": "Orlando City",
    "short": "ORL",
    "city": "Orlando",
    "uf": "US",
    "country": "US",
    "lat": 28.538,
    "lon": -81.379,
    "color1": "#61259e",
    "color2": "#ffffff",
    "aliases": [
      "orlando city"
    ],
    "location_precision": "city"
  },
  {
    "id": "seattle-sounders",
    "name": "Seattle Sounders",
    "short": "SEA",
    "city": "Seattle",
    "uf": "US",
    "country": "US",
    "lat": 47.606,
    "lon": -122.332,
    "color1": "#5d9741",
    "color2": "#005695",
    "aliases": [
      "seattle sounders"
    ],
    "location_precision": "city"
  },
  {
    "id": "atlanta-united",
    "name": "Atlanta United",
    "short": "ATL",
    "city": "Atlanta",
    "uf": "US",
    "country": "US",
    "lat": 33.749,
    "lon": -84.388,
    "color1": "#80000a",
    "color2": "#111111",
    "aliases": [
      "atlanta united"
    ],
    "location_precision": "city"
  },
  {
    "id": "toronto-fc",
    "name": "Toronto FC",
    "short": "TFC",
    "city": "Toronto",
    "uf": "CA",
    "country": "CA",
    "lat": 43.653,
    "lon": -79.383,
    "color1": "#e31937",
    "color2": "#ffffff",
    "aliases": [
      "toronto fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "vancouver-whitecaps",
    "name": "Vancouver Whitecaps",
    "short": "VAN",
    "city": "Vancouver",
    "uf": "CA",
    "country": "CA",
    "lat": 49.283,
    "lon": -123.121,
    "color1": "#ffffff",
    "color2": "#002b5c",
    "aliases": [
      "vancouver whitecaps"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-nassr",
    "name": "Al Nassr",
    "short": "NAS",
    "city": "Riad",
    "uf": "SA",
    "country": "SA",
    "lat": 24.7136,
    "lon": 46.6753,
    "color1": "#f4d431",
    "color2": "#153b8e",
    "aliases": [
      "al nassr",
      "al-nassr",
      "al nasr"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-hilal",
    "name": "Al Hilal",
    "short": "HIL",
    "city": "Riad",
    "uf": "SA",
    "country": "SA",
    "lat": 24.7136,
    "lon": 46.6753,
    "color1": "#1750c4",
    "color2": "#ffffff",
    "aliases": [
      "al hilal",
      "al-hilal"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-ittihad",
    "name": "Al Ittihad",
    "short": "ITT",
    "city": "Jidá",
    "uf": "SA",
    "country": "SA",
    "lat": 21.5433,
    "lon": 39.1728,
    "color1": "#f6ca24",
    "color2": "#141414",
    "aliases": [
      "al ittihad",
      "al-ittihad"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-ahli-saudi",
    "name": "Al Ahli Saudi",
    "short": "AHL",
    "city": "Jidá",
    "uf": "SA",
    "country": "SA",
    "lat": 21.5433,
    "lon": 39.1728,
    "color1": "#078144",
    "color2": "#ffffff",
    "aliases": [
      "al ahli saudi",
      "al ahli saudita"
    ],
    "location_precision": "city"
  },
  {
    "id": "al-ahly",
    "name": "Al Ahly",
    "short": "AHY",
    "city": "Cairo",
    "uf": "EG",
    "country": "EG",
    "lat": 30.0444,
    "lon": 31.2357,
    "color1": "#c92028",
    "color2": "#ffffff",
    "aliases": [
      "al ahly",
      "al-ahly",
      "al ahly cairo"
    ],
    "location_precision": "city"
  },
  {
    "id": "zamalek",
    "name": "Zamalek",
    "short": "ZAM",
    "city": "Gizé",
    "uf": "EG",
    "country": "EG",
    "lat": 30.0131,
    "lon": 31.2089,
    "color1": "#ffffff",
    "color2": "#d4212a",
    "aliases": [
      "zamalek"
    ],
    "location_precision": "city"
  },
  {
    "id": "mamelodi-sundowns",
    "name": "Mamelodi Sundowns",
    "short": "SUN",
    "city": "Pretória",
    "uf": "ZA",
    "country": "ZA",
    "lat": -25.7479,
    "lon": 28.2293,
    "color1": "#f4da1d",
    "color2": "#087842",
    "aliases": [
      "mamelodi",
      "sundowns",
      "mamelodi sundowns"
    ],
    "location_precision": "city"
  },
  {
    "id": "orlando-pirates",
    "name": "Orlando Pirates",
    "short": "PIR",
    "city": "Joanesburgo",
    "uf": "ZA",
    "country": "ZA",
    "lat": -26.2041,
    "lon": 28.0473,
    "color1": "#111111",
    "color2": "#ffffff",
    "aliases": [
      "orlando pirates",
      "pirates"
    ],
    "location_precision": "city"
  },
  {
    "id": "kaizer-chiefs",
    "name": "Kaizer Chiefs",
    "short": "KAI",
    "city": "Joanesburgo",
    "uf": "ZA",
    "country": "ZA",
    "lat": -26.2041,
    "lon": 28.0473,
    "color1": "#f6bd20",
    "color2": "#111111",
    "aliases": [
      "kaizer chiefs",
      "kaizer"
    ],
    "location_precision": "city"
  },
  {
    "id": "galatasaray",
    "name": "Galatasaray",
    "short": "GAL",
    "city": "Istambul",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0082,
    "lon": 28.9784,
    "color1": "#ab1830",
    "color2": "#f6ac27",
    "aliases": [
      "galatasaray",
      "gala"
    ],
    "location_precision": "city"
  },
  {
    "id": "fenerbahce",
    "name": "Fenerbahçe",
    "short": "FEN",
    "city": "Istambul",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0082,
    "lon": 28.9784,
    "color1": "#f4d832",
    "color2": "#132b55",
    "aliases": [
      "fenerbahce",
      "fenerbahçe",
      "fener"
    ],
    "location_precision": "city"
  },
  {
    "id": "besiktas",
    "name": "Beşiktaş",
    "short": "BES",
    "city": "Istambul",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0082,
    "lon": 28.9784,
    "color1": "#111111",
    "color2": "#ffffff",
    "aliases": [
      "besiktas",
      "beşiktaş"
    ],
    "location_precision": "city"
  },
  {
    "id": "trabzonspor",
    "name": "Trabzonspor",
    "short": "TRA",
    "city": "Trebizonda",
    "uf": "TR",
    "country": "TR",
    "lat": 41.0027,
    "lon": 39.7168,
    "color1": "#6f1634",
    "color2": "#62b7dc",
    "aliases": [
      "trabzonspor",
      "trabzon"
    ],
    "location_precision": "city"
  },
  {
    "id": "club-brugge",
    "name": "Club Brugge",
    "short": "BRU",
    "city": "Bruges",
    "uf": "BE",
    "country": "BE",
    "lat": 51.2093,
    "lon": 3.2247,
    "color1": "#1764b3",
    "color2": "#111111",
    "aliases": [
      "club brugge",
      "brugge",
      "bruges"
    ],
    "location_precision": "city"
  },
  {
    "id": "anderlecht",
    "name": "Anderlecht",
    "short": "AND",
    "city": "Bruxelas",
    "uf": "BE",
    "country": "BE",
    "lat": 50.8503,
    "lon": 4.3517,
    "color1": "#69348b",
    "color2": "#ffffff",
    "aliases": [
      "anderlecht"
    ],
    "location_precision": "city"
  },
  {
    "id": "genk",
    "name": "Genk",
    "short": "GNK",
    "city": "Genk",
    "uf": "BE",
    "country": "BE",
    "lat": 50.964,
    "lon": 5.5001,
    "color1": "#1764bc",
    "color2": "#ffffff",
    "aliases": [
      "genk",
      "racing genk"
    ],
    "location_precision": "city"
  },
  {
    "id": "bodo-glimt",
    "name": "Bodø/Glimt",
    "short": "BOD",
    "city": "Bodø",
    "uf": "NO",
    "country": "NO",
    "lat": 67.2804,
    "lon": 14.4049,
    "color1": "#f6d622",
    "color2": "#111111",
    "aliases": [
      "bodo glimt",
      "bodø/glimt",
      "bodo",
      "glimt"
    ],
    "location_precision": "city"
  },
  {
    "id": "rosenborg",
    "name": "Rosenborg",
    "short": "ROS",
    "city": "Trondheim",
    "uf": "NO",
    "country": "NO",
    "lat": 63.4305,
    "lon": 10.3951,
    "color1": "#ffffff",
    "color2": "#111111",
    "aliases": [
      "rosenborg"
    ],
    "location_precision": "city"
  },
  {
    "id": "molde",
    "name": "Molde",
    "short": "MOL",
    "city": "Molde",
    "uf": "NO",
    "country": "NO",
    "lat": 62.7375,
    "lon": 7.1607,
    "color1": "#1763bd",
    "color2": "#ffffff",
    "aliases": [
      "molde"
    ],
    "location_precision": "city"
  },
  {
    "id": "olympiacos",
    "name": "Olympiacos",
    "short": "OLY",
    "city": "Pireu",
    "uf": "GR",
    "country": "GR",
    "lat": 37.942,
    "lon": 23.6469,
    "color1": "#d51b2b",
    "color2": "#ffffff",
    "aliases": [
      "olympiacos",
      "olympiakos"
    ],
    "location_precision": "city"
  },
  {
    "id": "panathinaikos",
    "name": "Panathinaikos",
    "short": "PAN",
    "city": "Atenas",
    "uf": "GR",
    "country": "GR",
    "lat": 37.9838,
    "lon": 23.7275,
    "color1": "#00884b",
    "color2": "#ffffff",
    "aliases": [
      "panathinaikos"
    ],
    "location_precision": "city"
  },
  {
    "id": "aek-athens",
    "name": "AEK Atenas",
    "short": "AEK",
    "city": "Atenas",
    "uf": "GR",
    "country": "GR",
    "lat": 37.9838,
    "lon": 23.7275,
    "color1": "#f3c72a",
    "color2": "#111111",
    "aliases": [
      "aek",
      "aek athens",
      "aek atenas"
    ],
    "location_precision": "city"
  },
  {
    "id": "raja-casablanca",
    "name": "Raja Casablanca",
    "short": "RAJ",
    "city": "Casablanca",
    "uf": "MA",
    "country": "MA",
    "lat": 33.5731,
    "lon": -7.5898,
    "color1": "#07804c",
    "color2": "#ffffff",
    "aliases": [
      "raja",
      "raja casablanca"
    ],
    "location_precision": "city"
  },
  {
    "id": "wydad-casablanca",
    "name": "Wydad Casablanca",
    "short": "WYD",
    "city": "Casablanca",
    "uf": "MA",
    "country": "MA",
    "lat": 33.5731,
    "lon": -7.5898,
    "color1": "#d2222c",
    "color2": "#ffffff",
    "aliases": [
      "wydad",
      "wydad casablanca"
    ],
    "location_precision": "city"
  },
  {
    "id": "esperance",
    "name": "Espérance de Tunis",
    "short": "EST",
    "city": "Túnis",
    "uf": "TN",
    "country": "TN",
    "lat": 36.8065,
    "lon": 10.1815,
    "color1": "#dd222b",
    "color2": "#f5cc26",
    "aliases": [
      "esperance",
      "espérance",
      "esperance tunis"
    ],
    "location_precision": "city"
  },
  {
    "id": "club-africain",
    "name": "Club Africain",
    "short": "CAF",
    "city": "Túnis",
    "uf": "TN",
    "country": "TN",
    "lat": 36.8065,
    "lon": 10.1815,
    "color1": "#dc202b",
    "color2": "#ffffff",
    "aliases": [
      "club africain"
    ],
    "location_precision": "city"
  },
  {
    "id": "urawa-reds",
    "name": "Urawa Red Diamonds",
    "short": "URA",
    "city": "Saitama",
    "uf": "JP",
    "country": "JP",
    "lat": 35.8617,
    "lon": 139.6455,
    "color1": "#d9222b",
    "color2": "#111111",
    "aliases": [
      "urawa",
      "urawa reds",
      "urawa red diamonds"
    ],
    "location_precision": "city"
  },
  {
    "id": "yokohama-marinos",
    "name": "Yokohama F. Marinos",
    "short": "YFM",
    "city": "Yokohama",
    "uf": "JP",
    "country": "JP",
    "lat": 35.4437,
    "lon": 139.638,
    "color1": "#1758ac",
    "color2": "#ffffff",
    "aliases": [
      "yokohama marinos",
      "yokohama f marinos",
      "marinos"
    ],
    "location_precision": "city"
  },
  {
    "id": "ulsan-hd",
    "name": "Ulsan HD",
    "short": "ULS",
    "city": "Ulsan",
    "uf": "KR",
    "country": "KR",
    "lat": 35.5384,
    "lon": 129.3114,
    "color1": "#1764b5",
    "color2": "#f1ce2b",
    "aliases": [
      "ulsan",
      "ulsan hd",
      "ulsan hyundai"
    ],
    "location_precision": "city"
  },
  {
    "id": "jeonbuk",
    "name": "Jeonbuk Hyundai Motors",
    "short": "JEO",
    "city": "Jeonju",
    "uf": "KR",
    "country": "KR",
    "lat": 35.8242,
    "lon": 127.148,
    "color1": "#078347",
    "color2": "#c5df31",
    "aliases": [
      "jeonbuk",
      "jeonbuk hyundai motors"
    ],
    "location_precision": "city"
  },
  {
    "id": "melbourne-victory",
    "name": "Melbourne Victory",
    "short": "MVC",
    "city": "Melbourne",
    "uf": "AU",
    "country": "AU",
    "lat": -37.8136,
    "lon": 144.9631,
    "color1": "#122e59",
    "color2": "#ffffff",
    "aliases": [
      "melbourne victory"
    ],
    "location_precision": "city"
  },
  {
    "id": "sydney-fc",
    "name": "Sydney FC",
    "short": "SYD",
    "city": "Sydney",
    "uf": "AU",
    "country": "AU",
    "lat": -33.8688,
    "lon": 151.2093,
    "color1": "#72bde8",
    "color2": "#183452",
    "aliases": [
      "sydney fc"
    ],
    "location_precision": "city"
  },
  {
    "id": "copenhagen",
    "name": "FC Copenhagen",
    "short": "FCK",
    "city": "Copenhague",
    "uf": "DK",
    "country": "DK",
    "lat": 55.6761,
    "lon": 12.5683,
    "color1": "#ffffff",
    "color2": "#1e428a",
    "aliases": [
      "copenhagen",
      "kobenhavn",
      "fc copenhagen"
    ],
    "location_precision": "city"
  },
  {
    "id": "brondby",
    "name": "Brøndby",
    "short": "BIF",
    "city": "Brøndby",
    "uf": "DK",
    "country": "DK",
    "lat": 55.645,
    "lon": 12.411,
    "color1": "#f5d225",
    "color2": "#16438e",
    "aliases": [
      "brondby",
      "brøndby"
    ],
    "location_precision": "city"
  },
  {
    "id": "rapid-vienna",
    "name": "Rapid Viena",
    "short": "RAP",
    "city": "Viena",
    "uf": "AT",
    "country": "AT",
    "lat": 48.2082,
    "lon": 16.3738,
    "color1": "#168149",
    "color2": "#ffffff",
    "aliases": [
      "rapid vienna",
      "rapid viena",
      "rapid wien"
    ],
    "location_precision": "city"
  },
  {
    "id": "salzburg",
    "name": "Red Bull Salzburg",
    "short": "RBS",
    "city": "Salzburgo",
    "uf": "AT",
    "country": "AT",
    "lat": 47.8095,
    "lon": 13.055,
    "color1": "#dd2234",
    "color2": "#ffffff",
    "aliases": [
      "salzburg",
      "red bull salzburg"
    ],
    "location_precision": "city"
  },
  {
    "id": "basel",
    "name": "Basel",
    "short": "BAS",
    "city": "Basileia",
    "uf": "CH",
    "country": "CH",
    "lat": 47.5596,
    "lon": 7.5886,
    "color1": "#17469a",
    "color2": "#cf2436",
    "aliases": [
      "basel",
      "basileia"
    ],
    "location_precision": "city"
  },
  {
    "id": "young-boys",
    "name": "Young Boys",
    "short": "YB",
    "city": "Berna",
    "uf": "CH",
    "country": "CH",
    "lat": 46.948,
    "lon": 7.4474,
    "color1": "#f5ca25",
    "color2": "#111111",
    "aliases": [
      "young boys"
    ],
    "location_precision": "city"
  }
];

;

/* crest-map.js */
window.CRESTS = {
  "flamengo": "assets/escudos/flamengo.png",
  "fluminense": "assets/escudos/fluminense.png",
  "vasco": "assets/escudos/vasco.png",
  "botafogo": "assets/escudos/botafogo.png",
  "corinthians": "assets/escudos/corinthians.png",
  "palmeiras": "assets/escudos/palmeiras.png",
  "sao-paulo": "assets/escudos/sao-paulo.png",
  "santos": "assets/escudos/santos.png",
  "bragantino": "assets/escudos/bragantino.png",
  "mirassol": "assets/escudos/mirassol.png",
  "guarani": "assets/escudos/guarani.png",
  "ponte-preta": "assets/escudos/ponte-preta.png",
  "novorizontino": "assets/escudos/novorizontino.png",
  "botafogo-sp": "assets/escudos/botafogo-sp.png",
  "gremio": "assets/escudos/gremio.png",
  "internacional": "assets/escudos/internacional.png",
  "juventude": "assets/escudos/juventude.png",
  "atletico-mg": "assets/escudos/atletico-mg.png",
  "cruzeiro": "assets/escudos/cruzeiro.png",
  "america-mg": "assets/escudos/america-mg.png",
  "bahia": "assets/escudos/bahia.png",
  "vitoria": "assets/escudos/vitoria.png",
  "fortaleza": "assets/escudos/fortaleza.png",
  "ceara": "assets/escudos/ceara.png",
  "sport": "assets/escudos/sport.png",
  "nautico": "assets/escudos/nautico.png",
  "santa-cruz": "assets/escudos/santa-cruz.png",
  "athletico-pr": "assets/escudos/athletico-pr.png",
  "coritiba": "assets/escudos/coritiba.png",
  "operario": "assets/escudos/operario.png",
  "goias": "assets/escudos/goias.png",
  "atletico-go": "assets/escudos/atletico-go.png",
  "vila-nova": "assets/escudos/vila-nova.png",
  "cuiaba": "assets/escudos/cuiaba.png",
  "chapecoense": "assets/escudos/chapecoense.png",
  "criciuma": "assets/escudos/criciuma.png",
  "avai": "assets/escudos/avai.png",
  "figueirense": "assets/escudos/figueirense.png",
  "remo": "assets/escudos/remo.png",
  "paysandu": "assets/escudos/paysandu.png",
  "crb": "assets/escudos/crb.png",
  "csa": "assets/escudos/csa.png",
  "abc": "assets/escudos/abc.png",
  "amazonas": "assets/escudos/amazonas.png",
  "real-madrid": "assets/escudos/real-madrid.png",
  "barcelona": "assets/escudos/barcelona.png",
  "atletico-madrid": "assets/escudos/atletico-madrid.png",
  "sevilla": "assets/escudos/sevilla.png",
  "manchester-united": "assets/escudos/manchester-united.png",
  "manchester-city": "assets/escudos/manchester-city.png",
  "liverpool": "assets/escudos/liverpool.png",
  "arsenal": "assets/escudos/arsenal.png",
  "chelsea": "assets/escudos/chelsea.png",
  "tottenham": "assets/escudos/tottenham.png",
  "newcastle": "assets/escudos/newcastle.png",
  "juventus": "assets/escudos/juventus.png",
  "milan": "assets/escudos/milan.png",
  "inter-milao": "assets/escudos/inter-milao.png",
  "napoli": "assets/escudos/napoli.png",
  "roma": "assets/escudos/roma.png",
  "bayern": "assets/escudos/bayern.png",
  "dortmund": "assets/escudos/dortmund.png",
  "psg": "assets/escudos/psg.png",
  "marseille": "assets/escudos/marseille.png",
  "benfica": "assets/escudos/benfica.png",
  "sporting": "assets/escudos/sporting.png",
  "porto": "assets/escudos/porto.png",
  "aston-villa": "assets/escudos/aston-villa.png",
  "west-ham": "assets/escudos/west-ham.png",
  "nottingham-forest": "assets/escudos/nottingham-forest.png",
  "brighton": "assets/escudos/brighton.png",
  "athletic-bilbao": "assets/escudos/athletic-bilbao.png",
  "real-sociedad": "assets/escudos/real-sociedad.png",
  "real-betis": "assets/escudos/real-betis.png",
  "valencia": "assets/escudos/valencia.png",
  "villarreal": "assets/escudos/villarreal.png",
  "atalanta": "assets/escudos/atalanta.png",
  "lazio": "assets/escudos/lazio.png",
  "fiorentina": "assets/escudos/fiorentina.png",
  "bologna": "assets/escudos/bologna.png",
  "bayer-leverkusen": "assets/escudos/bayer-leverkusen.png",
  "rb-leipzig": "assets/escudos/rb-leipzig.png",
  "frankfurt": "assets/escudos/frankfurt.png",
  "stuttgart": "assets/escudos/stuttgart.png",
  "lyon": "assets/escudos/lyon.png",
  "monaco": "assets/escudos/monaco.png",
  "lille": "assets/escudos/lille.png",
  "nice": "assets/escudos/nice.png",
  "braga": "assets/escudos/braga.png",
  "vitoria-guimaraes": "assets/escudos/vitoria-guimaraes.png",
  "ajax": "assets/escudos/ajax.png",
  "psv": "assets/escudos/psv.png",
  "feyenoord": "assets/escudos/feyenoord.png",
  "celtic": "assets/escudos/celtic.png",
  "rangers": "assets/escudos/rangers.png",
  "boca-juniors": "assets/escudos/boca-juniors.png",
  "river-plate": "assets/escudos/river-plate.png",
  "racing-argentina": "assets/escudos/racing-argentina.png",
  "independiente": "assets/escudos/independiente.png",
  "san-lorenzo": "assets/escudos/san-lorenzo.png",
  "estudiantes": "assets/escudos/estudiantes.png",
  "velez": "assets/escudos/velez.png",
  "rosario-central": "assets/escudos/rosario-central.png",
  "newells": "assets/escudos/newells.png",
  "penarol": "assets/escudos/penarol.png",
  "nacional-uruguai": "assets/escudos/nacional-uruguai.png",
  "olimpia": "assets/escudos/olimpia.png",
  "cerro-porteno": "assets/escudos/cerro-porteno.png",
  "libertad": "assets/escudos/libertad.png",
  "colo-colo": "assets/escudos/colo-colo.png",
  "universidad-chile": "assets/escudos/universidad-chile.png",
  "universidad-catolica": "assets/escudos/universidad-catolica.png",
  "atletico-nacional": "assets/escudos/atletico-nacional.png",
  "millonarios": "assets/escudos/millonarios.png",
  "america-cali": "assets/escudos/america-cali.png",
  "junior": "assets/escudos/junior.png",
  "ldu": "assets/escudos/ldu.png",
  "barcelona-equador": "assets/escudos/barcelona-equador.png",
  "independiente-del-valle": "assets/escudos/independiente-del-valle.png",
  "alianza-lima": "assets/escudos/alianza-lima.png",
  "universitario": "assets/escudos/universitario.png",
  "sporting-cristal": "assets/escudos/sporting-cristal.png",
  "bolivar": "assets/escudos/bolivar.png",
  "strongest": "assets/escudos/strongest.png",
  "caracas": "assets/escudos/caracas.png",
  "america-mexico": "assets/escudos/america-mexico.png",
  "chivas": "assets/escudos/chivas.png",
  "cruz-azul": "assets/escudos/cruz-azul.png",
  "pumas": "assets/escudos/pumas.png",
  "monterrey": "assets/escudos/monterrey.png",
  "tigres": "assets/escudos/tigres.png",
  "inter-miami": "assets/escudos/inter-miami.png",
  "la-galaxy": "assets/escudos/la-galaxy.png",
  "lafc": "assets/escudos/lafc.png",
  "orlando-city": "assets/escudos/orlando-city.png",
  "seattle-sounders": "assets/escudos/seattle-sounders.png",
  "atlanta-united": "assets/escudos/atlanta-united.png",
  "toronto-fc": "assets/escudos/toronto-fc.png",
  "vancouver-whitecaps": "assets/escudos/vancouver-whitecaps.png",
  "al-nassr": "assets/escudos/al-nassr.png",
  "al-hilal": "assets/escudos/al-hilal.png",
  "al-ittihad": "assets/escudos/al-ittihad.png",
  "al-ahli-saudi": "assets/escudos/al-ahli-saudi.png",
  "al-ahly": "assets/escudos/al-ahly.png",
  "mamelodi-sundowns": "assets/escudos/mamelodi-sundowns.png",
  "orlando-pirates": "assets/escudos/orlando-pirates.png",
  "kaizer-chiefs": "assets/escudos/kaizer-chiefs.png",
  "galatasaray": "assets/escudos/galatasaray.png",
  "fenerbahce": "assets/escudos/fenerbahce.png",
  "besiktas": "assets/escudos/besiktas.png",
  "trabzonspor": "assets/escudos/trabzonspor.png",
  "club-brugge": "assets/escudos/club-brugge.png",
  "anderlecht": "assets/escudos/anderlecht.png",
  "genk": "assets/escudos/genk.png",
  "bodo-glimt": "assets/escudos/bodo-glimt.png",
  "rosenborg": "assets/escudos/rosenborg.png",
  "molde": "assets/escudos/molde.png",
  "olympiacos": "assets/escudos/olympiacos.png",
  "panathinaikos": "assets/escudos/panathinaikos.png",
  "aek-athens": "assets/escudos/aek-athens.png",
  "wydad-casablanca": "assets/escudos/wydad-casablanca.png",
  "esperance": "assets/escudos/esperance.png",
  "urawa-reds": "assets/escudos/urawa-reds.png",
  "yokohama-marinos": "assets/escudos/yokohama-marinos.png",
  "ulsan-hd": "assets/escudos/ulsan-hd.png",
  "melbourne-victory": "assets/escudos/melbourne-victory.png",
  "sydney-fc": "assets/escudos/sydney-fc.png",
  "copenhagen": "assets/escudos/copenhagen.png",
  "brondby": "assets/escudos/brondby.png",
  "rapid-vienna": "assets/escudos/rapid-vienna.png",
  "salzburg": "assets/escudos/salzburg.png",
  "basel": "assets/escudos/basel.png",
  "young-boys": "assets/escudos/young-boys.png",
  "zamalek": "assets/escudos/zamalek.png",
  "raja-casablanca": "assets/escudos/raja-casablanca.png",
  "jeonbuk": "assets/escudos/jeonbuk.png",
  "club-africain": "assets/escudos/club-africain.png"
};

;

/* core.js */
// Núcleo do jogo: carrega dados e calcula cadeiras, níveis e cargos.
(function () {
  const C = window.CONFIG;
  const LEVEL_NAMES = ["Campinho de várzea", "Arquibancada", "Estádio", "Arena", "Mega arena"];
  const LEVELS = LEVEL_NAMES.map((name, i) => ({ name, min: C.NIVEIS[i] }));
  const DEMO = !C.SUPABASE_URL || !C.SUPABASE_ANON_KEY || (typeof location !== "undefined" && new URLSearchParams(location.search).get("demo") === "1");
  // Public pages need only RLS-protected reads, not the full auth SDK.
  function publicReader(){
    async function read(path,body,headers={}){try{
      const r=await fetch(C.SUPABASE_URL+'/rest/v1/'+path,{method:body===undefined?'GET':'POST',headers:{apikey:C.SUPABASE_ANON_KEY,Authorization:'Bearer '+C.SUPABASE_ANON_KEY,'Content-Type':'application/json',...headers},...(body===undefined?{}:{body:JSON.stringify(body)}),signal:AbortSignal.timeout(15000)});
      if(!r.ok)return {data:null,error:new Error('Não foi possível atualizar os dados')};
      return {data:await r.json(),error:null};
    }catch(error){return {data:null,error};}}
    return {rpc:(name,args={})=>read('rpc/'+encodeURIComponent(name),args),from:table=>({select:cols=>({range:(from,to)=>read(encodeURIComponent(table)+'?select='+encodeURIComponent(cols),undefined,{Range:from+'-'+to})})})};
  }
  const sb = DEMO?null:window.supabase?window.supabase.createClient(C.SUPABASE_URL, C.SUPABASE_ANON_KEY):publicReader();

  const EUROPE = new Set(['ES','GB','IT','DE','FR','PT','NL','MC','BE','TR','GR','AT','CH','DK','NO','SE','PL','CZ','HR','RS','UA']);
  const ASIA = new Set(['SA','JP','KR','AE','QA','IR']);
  const AFRICA = new Set(['EG','ZA','MA','TN']);
  const AMERICAS = new Set(['BR','AR','UY','PY','CL','CO','EC','PE','BO','VE','MX','US','CA','CR']);
  const regionOf = (t) => EUROPE.has(t.country) ? 'EU' : AMERICAS.has(t.country) ? 'AM' : ASIA.has(t.country) ? 'AS' : AFRICA.has(t.country) ? 'AF' : t.country==='AU' ? 'OC' : 'OTHER';
  const groupOf = (t) => t.country === 'BR' ? 'BR:' + t.uf : t.country;
  // ---------- datas no horário de Brasília ----------
  function todayBR() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" }).format(new Date());
  }
  const dnum = (s) => Math.floor(Date.parse(s + "T00:00:00Z") / 86400000);
  const dstr = (n) => new Date(n * 86400000).toISOString().slice(0, 10);
  function weekStart(today) { // segunda-feira da rodada atual
    const n = dnum(today); const dow = (new Date(n * 86400000).getUTCDay() + 6) % 7;
    return dstr(n - dow);
  }

  // ---------- carregamento ----------
  async function fetchAll(table, cols) {
    const out = []; let from = 0; const step = 1000;
    for (;;) {
      const { data, error } = await sb.from(table).select(cols).range(from, from + step - 1);
      if (error) throw error;
      out.push(...data); if (data.length < step) break; from += step;
    }
    return out;
  }
  let catalog=null,settingsCache=null;
  async function load() {
    if (DEMO) return demoData();
    const [teams, scoreResult, settings, seasonResult, governanceResult] = await Promise.all([
      catalog||fetchAll("teams", "*"), sb.rpc("public_fan_scores"), settingsCache||fetchAll("settings", "key,value"),sb.rpc('public_season_info'),sb.rpc('public_season_governance')
    ]);
    if(scoreResult.error) throw scoreResult.error;
    const set = Object.fromEntries(settings.map(s=>[s.key,s.value]));
    if(seasonResult.error)throw seasonResult.error;
    if(governanceResult.error)throw governanceResult.error;
    catalog=teams;settingsCache=null;
    const season=seasonResult.data.season;
    const thresholds=season&&season.status==='active'?season.thresholds:set.niveis_estadio;
    if(Array.isArray(thresholds)&&thresholds.length===5&&thresholds[0]===0&&thresholds.every((v,i)=>Number.isInteger(v)&&v>=0&&(!i||v>thresholds[i-1]))) thresholds.forEach((min,i)=>{LEVELS[i].min=min;});
    const equipment=set.stadium_equipment?.[String(season?.id)]||{};
    return {teams:teams.filter(t=>t.active!==false).map(t=>({...t,stadium_items:Array.isArray(equipment[t.id])?equipment[t.id].filter(id=>typeof id==='string'):[]})),fans:scoreResult.data.fans,scores:true,team_bonuses:scoreResult.data.team_bonuses||[],comments:[],today:scoreResult.data.today,inactivity:Number(season&&season.status==='active'?season.inactivity_days:set.inatividade_dias||5),season,governance:governanceResult.data,history:seasonResult.data.history||[],team_honors:seasonResult.data.team_honors||[]};
  }

  // ---------- regras de pontuação ----------
  // +1 por dia com comentário (o primeiro dia é a entrada), +2 ao chegar a 3 dias seguidos,
  // +5 a cada 7 dias seguidos e +1 por novo amigo confirmado. Curtidas somam apenas ao time.
  function compute(raw, inactivity, today = raw.today || todayBR()) {
    const ws = weekStart(today), tN = dnum(today);
    const teams = raw.teams.map((t) => ({ ...t, crest_url: t.crest_url || (window.CRESTS || {})[t.id] || null, fans: [] }));
    const byId = Object.fromEntries(teams.map((t) => [t.id, t]));
    const days = {};
    raw.comments.filter((c) => c.comment_day <= today).forEach((c) => (days[c.handle] = days[c.handle] || []).push(c.comment_day));
    const refCount = {};
    raw.fans.forEach((f) => { if (f.referred_by && f.referred_by !== f.handle && f.first_day <= today) (refCount[f.referred_by] = refCount[f.referred_by] || []).push(f.first_day); });
    const fans = [];
    raw.fans.forEach((f) => {
      const team = byId[f.team_id]; if (!team || f.first_day > today) return;
      const ds = [...new Set(days[f.handle] || [f.first_day])].sort();
      const events = []; // [dia, cadeiras]
      let run = 0, prev = null;
      ds.forEach((d) => {
        const n = dnum(d); run = prev !== null && n === prev + 1 ? run + 1 : 1; prev = n;
        events.push([d, 1]);
        if (run === 3) events.push([d, 2]);
        if (run % 7 === 0) events.push([d, 5]);
      });
      (refCount[f.handle] || []).forEach((d) => events.push([d, 1]));
      const cad = events.reduce((a, e) => a + e[1], 0);
      const week = events.filter((e) => e[0] >= ws).reduce((a, e) => a + e[1], 0);
      const last = ds[ds.length - 1];
      const fan = { h: f.handle, team, cad, week, idle: tN - dnum(last), first: f.first_day, referred: (refCount[f.handle] || []).length, streak: run && tN - prev <= 1 ? run : 0 };
      if(raw.scores){Object.assign(fan,{cad:f.cad,week:f.week,idle:f.idle,streak:f.streak,referred:f.referred,founderOrder:f.founder_order});}
      team.fans.push(fan); fans.push(fan);
    });
    teams.forEach((t) => {
      const bonus=(raw.team_bonuses||[]).find(b=>b.team_id===t.id)||{cad:0,week:0};
      t.bonusCurtidas=Number(bonus.cad)||0;
      const honor=(raw.team_honors||[]).find(h=>h.team_id===t.id);
      t.stars=honor?honor.stars:0;t.championships=honor?honor.seasons:[];
      t.n = t.fans.length;
      [...t.fans].sort((a,b)=>a.first.localeCompare(b.first)||(a.founderOrder||0)-(b.founderOrder||0)||a.h.localeCompare(b.h)).forEach((f,i)=>{f.entryNumber=i+1;});
      t.cadeiras = t.fans.reduce((a, f) => a + f.cad, 0)+t.bonusCurtidas;
      t.semana = t.fans.reduce((a, f) => a + f.week, 0)+(Number(bonus.week)||0);
      t.level = LEVELS.reduce((acc, l, i) => (t.cadeiras >= l.min ? i : acc), 0);
      t.rolesPending=!!(raw.season&&raw.season.status==='active'&&raw.season.roles_released!==true);
      const elig = (t.rolesPending?[]:t.fans).filter((f) => f.idle < inactivity && f.cad >= 3).sort((a, b) => b.cad - a.cad || (a.founderOrder||0)-(b.founderOrder||0) || a.h.localeCompare(b.h));
      // Official roles come only from the once-a-day server snapshot, never a live browser election.
      if(raw.season){
        const roles=t.rolesPending?[]:(raw.governance?.roles||[]).filter(r=>r.team_id===t.id);
        const resolve=r=>{const f=t.fans.find(f=>f.h===r.handle);return f?{...f,roleChairs:r.chairs}:null;};
        t.presidente=resolve(roles.find(r=>r.position===1)||{})||null;
        t.lideres=roles.filter(r=>r.position>1&&r.position<=21).sort((a,b)=>a.position-b.position).map(resolve).filter(Boolean);
      }else{t.presidente=elig[0]?.cad>=5?elig[0]:null;t.lideres=elig.filter(f=>f!==t.presidente).slice(0,20);}
      t.pendingChoices=(raw.governance?.choices||[]).filter(c=>c.team_id===t.id&&!c.item_id);
      t.fundador = [...t.fans].sort((a, b) => (a.first < b.first ? -1 : a.first > b.first ? 1 : (a.founderOrder || 0) - (b.founderOrder || 0) || a.h.localeCompare(b.h)))[0] || null;
      t.lostRole = (t.rolesPending?[]:t.fans).filter((f) => f.cad > 0 && f.idle >= inactivity).sort((a, b) => b.cad - a.cad)[0] || null;
    });
    [...teams].sort((a, b) => b.cadeiras - a.cadeiras || (a.name||a.id).localeCompare(b.name||b.id,'pt-BR')).forEach((t, i) => (t.rankAll = i + 1));
    const groups = {};
    teams.forEach((t) => (groups[groupOf(t)] = groups[groupOf(t)] || []).push(t));
    Object.values(groups).forEach((arr) => { arr.sort((a, b) => b.cadeiras - a.cadeiras || (a.name||a.id).localeCompare(b.name||b.id,'pt-BR')); arr.forEach((t, i) => { t.rankUF = i + 1; t.ufCount = arr.length; }); });
    return { teams, fans, inactivity, today, weekStart: ws,season:raw.season||null,governance:raw.governance||null,history:raw.history||[] };
  }

  function seasonBadge(season,now=Date.now()){
    const title='Temporada '+(season?season.number:1);
    if(!season||!season.ends_at||season.status==='draft')return {title,detail:''};
    const remaining=Date.parse(season.ends_at)-now;
    if(remaining<=0)return {title,detail:season.status==='closed'?'Encerrada':'Apuração final'};
    const minutes=Math.ceil(remaining/60000);
    return {title,detail:remaining>=86400000?'Faltam '+Math.ceil(remaining/86400000)+' dias':'Faltam '+Math.floor(minutes/60)+'h '+minutes%60+'min'};
  }

  // ---------- modo demonstração ----------
  function rng(seed) { return function () { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function demoData() {
    const R = rng(7), today = todayBR(), tN = dnum(today);
    const FN = ["joao", "maria", "pedro", "ana", "lucas", "julia", "gabriel", "bia", "rafa", "leo", "duda", "caio", "nanda", "vini", "manu", "gui", "lari", "theo", "bruno", "carol", "davi", "isa", "enzo", "lu", "matheus", "clara", "felipe", "nina", "tiago", "sofia"];
    const SN = ["silva", "souza", "costa", "lima", "alves", "rocha", "dias", "melo", "nunes", "pires", "reis", "ramos"];
    const size = { flamengo: 260, corinthians: 210, palmeiras: 180, "sao-paulo": 130, gremio: 150, internacional: 140, "atletico-mg": 110, cruzeiro: 105, vasco: 100, bahia: 90, fortaleza: 70, santos: 70, botafogo: 65, fluminense: 60, sport: 50, "real-madrid": 45, barcelona: 40, "manchester-city": 18, liverpool: 22, psg: 15, benfica: 20 };
    const used = new Set(), fans = [], comments = [];
    window.TEAMS_SEED.forEach((t) => {
      const n = size[t.id] ?? Math.floor(R() * 25);
      for (let k = 0; k < n; k++) {
        let h; do { h = FN[Math.floor(R() * FN.length)] + [".", "_", ""][Math.floor(R() * 3)] + SN[Math.floor(R() * SN.length)] + (R() < 0.5 ? Math.floor(R() * 99) : ""); } while (used.has(h)); used.add(h);
        const start = tN - Math.floor(R() * 20), first = dstr(start);
        fans.push({ handle: h, team_id: t.id, first_day: first, referred_by: R() < 0.12 && fans.length ? fans[Math.floor(R() * fans.length)].handle : null });
        const p = 0.25 + R() * 0.7;
        for (let d = start; d <= tN; d++) if (d === start || R() < p) comments.push({ handle: h, comment_day: dstr(d) });
      }
    });
    return { teams: window.TEAMS_SEED, fans, comments, inactivity: 5 };
  }

  function fanProgress(f){
    const run=Number(f.idle)<=1?Math.max(0,Number(f.streak)||0):0;
    const target=run<3?3:(Math.floor(run/7)+1)*7;
    return {todayDone:Number(f.idle)===0,run,target,remaining:target-run,bonus:target===3?2:5};
  }
  window.GAME = { regionOf, groupOf, CONFIG: C, LEVELS, DEMO, sb, load, compute, todayBR, weekStart,seasonBadge,fanProgress };
})();

;

/* start-data.js */
// Begin public reads while the browser downloads/parses the map engine.
window.ARENA_DATA=window.GAME.load();
window.ARENA_DATA.catch(()=>{});
