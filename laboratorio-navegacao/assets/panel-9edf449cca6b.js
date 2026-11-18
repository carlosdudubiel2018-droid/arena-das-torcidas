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
      const elig = (t.rolesPending?[]:t.fans).filter((f) => f.idle < inactivity && f.cad >= 1).sort((a, b) => b.cad - a.cad || (a.founderOrder||0)-(b.founderOrder||0) || a.h.localeCompare(b.h));
      // Official roles come only from the once-a-day server snapshot, never a live browser election.
      if(raw.season){
        const roles=t.rolesPending?[]:(raw.governance?.roles||[]).filter(r=>r.team_id===t.id);
        const resolve=r=>{const f=t.fans.find(f=>f.h===r.handle);return f?{...f,roleChairs:r.chairs}:null;};
        t.presidente=resolve(roles.find(r=>r.position===1)||{})||null;
        t.lideres=roles.filter(r=>r.position>1&&r.position<=21).sort((a,b)=>a.position-b.position).map(resolve).filter(Boolean);
      }else{t.presidente=elig[0]?.cad>=1?elig[0]:null;t.lideres=elig.filter(f=>f!==t.presidente).slice(0,20);}
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
/* Read-only election projections. Official offices still come from server snapshots. */
(()=>{
 const firstAt='2026-10-26T02:59:00.000Z',notice='Eleição da Torcida · apuração domingo 25/10 às 23h59 (Brasília)';
 const compare=(a,b)=>b.cad-a.cad||(a.founderOrder??Number.MAX_SAFE_INTEGER)-(b.founderOrder??Number.MAX_SAFE_INTEGER)||(a.h<b.h?-1:a.h>b.h?1:0);
 function candidates(team,inactivity=5){return [...team.fans].filter(f=>f.cad>=1&&f.idle<inactivity).sort(compare);}
 function personal(f,state){const list=candidates(f.team,state.inactivity),index=list.findIndex(p=>p.h===f.h),ahead=index>0?list[index-1]:null;return {position:index<0?null:index+1,candidate:index>=0&&index<3,ahead,gap:ahead?Math.max(0,ahead.cad-f.cad+1):0,eligible:index>=0};}
 function nextClub(team,state){const next=state.teams.find(t=>t.rankAll===team.rankAll-1);return next?{team:next,gap:Math.max(1,next.cadeiras-team.cadeiras+1)}:null;}
 function firstEvents(events){const entered=[...events].filter(e=>e.role==='president'&&e.action==='entered').sort((a,b)=>String(a.created_at).localeCompare(String(b.created_at))||Number(a.id)-Number(b.id)),seen=new Set();return entered.filter(e=>{if(seen.has(e.team_id))return false;seen.add(e.team_id);return true;});}
 function decorate(state,{simulate=false}={}){state.election={firstAt,notice,simulated:simulate};for(const team of state.teams){team.contestants=candidates(team,state.inactivity);if(simulate){team.presidente=team.contestants[0]||null;team.lideres=team.contestants.slice(1,21);team.rolesPending=false;}}
  if(simulate){state.season={...state.season,roles_released:true};state.governance={...state.governance,events:state.teams.filter(t=>t.presidente).map((t,i)=>({id:i+1,team_id:t.id,handle:t.presidente.h,role:'president',action:'entered',created_at:firstAt,simulation:true}))};}return state;}
 window.ARENA_ELECTION={firstAt,notice,compare,candidates,personal,nextClub,firstEvents,decorate};
})();

;
/* Laboratory-only interface. No database writes, no score or role release requests. */
(()=>{
 const E=window.ARENA_ELECTION,G=window.GAME,simulate=false;
 const compute=G.compute;G.compute=(...args)=>E.decorate(compute(...args),{simulate});
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fmt=n=>Number(n).toLocaleString('pt-BR');
 function clubGap(team,state){const next=E.nextClub(team,state);return next?'<p class="race-club">Faltam <b>'+fmt(next.gap)+' cadeiras</b> para o '+esc(team.name)+' ultrapassar '+esc(next.team.name)+' no ranking geral.</p>':'<p class="race-club"><b>'+esc(team.name)+' lidera o ranking geral.</b> Cada cadeira ajuda a defender a liderança.</p>';}
 function welcome(f,state){const p=G.fanProgress(f),r=E.personal(f,state),before=!state.season?.roles_released;return `<section class="fan-welcome election-personal" aria-label="Sua participação"><span class="fan-welcome-kicker">SUA PARTICIPAÇÃO</span><h3>Bem-vindo, @${esc(f.h)}!</h3><div class="today-chair"><b>${p.todayDone?'✅ Sua cadeira de hoje já está garantida':'Ainda dá tempo: comenta hoje até 23h59'}</b><p>${p.todayDone?'Amanhã tem mais uma cadeira para conquistar.':'Horário de Brasília · participe no Instagram.'}</p></div><p>Sequência atual: <b>${p.run} ${p.run===1?'dia':'dias'}</b>. ${p.remaining===1?'Falta':'Faltam'} <b>${p.remaining} ${p.remaining===1?'dia':'dias'}</b> para o bônus de ${p.target} dias: <b>+${p.bonus} cadeiras</b>.</p><div class="fan-welcome-numbers"><span><b>${fmt(f.cad)}</b> cadeiras de contribuição</span><span><b>${fmt(f.entryNumber)}º</b> a entrar na torcida</span></div><p class="race-position">${!r.eligible?'Você está inelegível por inatividade. Volte a comentar para concorrer na próxima apuração.':before?'Você está em <b>'+r.position+'º na disputa pela presidência</b>.':simulate?'SIMULAÇÃO: você está em <b>'+r.position+'º na apuração de exemplo</b>.':'Sua posição atual entre os elegíveis: <b>'+r.position+'º</b>.'}</p><p>${r.ahead?'Faltam <b>'+r.gap+' cadeiras</b> para passar <b>@'+esc(r.ahead.h)+'</b>.':r.eligible?'Você está na frente! Os cargos são confirmados somente na apuração.':''}</p>${clubGap(f.team,state)}<div class="personal-share"><button class="btn" type="button" id="share-personal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/></svg><span><strong>Compartilhar no Story</strong><small>Instagram, WhatsApp e outros</small></span></button></div><p class="fan-entry-note">Número de entrada é histórico; posição na disputa muda com as contribuições.</p></section>`;}
 function contest(team,state){const before=!state.season?.roles_released;return '<section class="election-contest"><p class="eyebrow">'+(before?'ELEIÇÃO DA TORCIDA':'CARGOS DA TORCIDA')+'</p><h3>'+(before?'Disputa pela presidência':simulate?'Resultado simulado · sem efeito no jogo':'Apuração diária')+'</h3><p class="election-date">'+(before?E.notice:'Depois da primeira eleição: apuração diária às 22h de Brasília.')+'</p>'+(before?'<ol>'+team.contestants.slice(0,3).map((f,i)=>'<li><b>'+ (i+1)+'º</b><span>@'+esc(f.h)+'</span><strong>'+fmt(f.cad)+' cad.</strong></li>').join('')+'</ol><p class="note">'+(team.contestants.length?'Prévia dos elegíveis agora. A apuração confirma os cargos.':'Seja a primeira pessoa a disputar: participe com uma cadeira.')+'</p>':'')+'<p class="note">Sem mínimo adicional: com 1 cadeira e atividade em dia você já concorre. O primeiro é presidente; os próximos, até 20, são líderes. Cinco dias sem comentar deixam a conta inelegível na próxima apuração.</p></section>';}
 window.ARENA_ELECTION_UI={welcome,contest,clubGap,esc,simulate};
})();

;
// Begin public reads while the browser downloads/parses the map engine.
window.ARENA_DATA=window.GAME.load();
window.ARENA_DATA.catch(()=>{});

;
// Geometria em pixels, compartilhada pelos enquadramentos do mapa.
(function(){
  function focusOffset(width,height,area,markerOffset=[0,0]){
    return [(area.left+area.right)/2-width/2-markerOffset[0],(area.top+area.bottom)/2-height/2-markerOffset[1]];
  }
  // Maximum reserved future plot: 900 × 700 m, plus 300 m between plots.
  // Keep this contract when adding Mega Arena items; increase it before adding larger items.
  const MAX_STADIUM_PLOT={width:900,height:700,gap:300};
  function cityOffsets(count,spacing=320){
    if(count===1)return [[0,0]];
    if(count===2)return [[-spacing/2,0],[spacing/2,0]];
    const radius=spacing/(2*Math.sin(Math.PI/count));
    return Array.from({length:count},(_,i)=>{const a=i*2*Math.PI/count-Math.PI/2;return [radius*Math.cos(a),radius*Math.sin(a)];});
  }
  function cityPlots(anchor,count){
    return cityOffsets(count,MAX_STADIUM_PLOT.width+MAX_STADIUM_PLOT.gap).map(([x,y])=>[
      anchor[0]+x/(111320*Math.cos(anchor[1]*Math.PI/180)),anchor[1]+y/111320
    ]);
  }
  function preferLight(device){return !!(device.saveData||(device.memory&&device.memory<=2)||(device.cores&&device.cores<=4));}
  function zoomCamera(center,zoom,step,minZoom,maxZoom){return {center:[...center],zoom:Math.max(minZoom,Math.min(maxZoom,zoom+step)),padding:{top:0,bottom:0,left:0,right:0}};}
  function clusterPoints(points,distance=78){
    const groups=[];
    // Limite de extensão evita uma corrente de cidades juntar Sul e Sudeste inteiros.
    for(const p of points){
      let best=null,nearest=distance;
      for(const g of groups){
        const center={x:g.reduce((n,q)=>n+q.x,0)/g.length,y:g.reduce((n,q)=>n+q.y,0)/g.length};
        const d=Math.hypot(p.x-center.x,p.y-center.y);
        if(d<nearest&&g.every(q=>Math.hypot(p.x-q.x,p.y-q.y)<distance*1.3)){best=g;nearest=d;}
      }
      if(best)best.push(p);else groups.push([p]);
    }
    return groups;
  }
  function clusterSize(count){return Math.min(78,50+Math.round(Math.log2(Math.max(1,count))*5));}
  function spreadClusters(items,area){
    const out=items.map(p=>({...p,dx:0,dy:0}));
    const clamp=p=>{if(area){const half=p.size/2;p.dx=Math.max(area.left+half-p.x,Math.min(area.right-half-p.x,p.dx));p.dy=Math.max(area.top+half-p.y,Math.min(area.bottom-half-p.y,p.dy));}};
    out.forEach(clamp);
    for(let pass=0;pass<24;pass++)for(let i=0;i<out.length;i++)for(let j=0;j<i;j++){
      const a=out[i],b=out[j],x=a.x+a.dx-b.x-b.dx,y=a.y+a.dy-b.y-b.dy;
      const d=Math.hypot(x,y),minimum=(a.size+b.size)/2+7;
      if(d<minimum){const move=(minimum-d)/2,ux=d?x/d:1,uy=d?y/d:0;a.dx+=ux*move;a.dy+=uy*move;b.dx-=ux*move;b.dy-=uy*move;clamp(a);clamp(b);}
    }
    return out;
  }
  // A group represents the most advanced real club, never an invented stadium.
  function spreadGroupCards(items,area){
    const out=items.map(p=>({...p,dx:0,dy:0,width:p.width||p.size+14,height:p.height||p.size*.94+30}));
    const clamp=p=>{if(!area)return;p.dx=Math.max(area.left+p.width/2-p.x,Math.min(area.right-p.width/2-p.x,p.dx));p.dy=Math.max(area.top+p.height/2-p.y,Math.min(area.bottom-p.height/2-p.y,p.dy));};
    out.forEach(clamp);
    for(let pass=0;pass<80;pass++)for(let i=0;i<out.length;i++)for(let j=0;j<i;j++){
      const a=out[i],b=out[j],x=a.x+a.dx-b.x-b.dx,y=a.y+a.dy-b.y-b.dy;
      const ox=(a.width+b.width)/2+8-Math.abs(x),oy=(a.height+b.height)/2+8-Math.abs(y);
      if(ox<=0||oy<=0)continue;
      if(ox<oy){const m=(ox+.1)/2*(x<0?-1:1);a.dx+=m;b.dx-=m;}else{const m=(oy+.1)/2*(y<0?-1:1);a.dy+=m;b.dy-=m;}
      clamp(a);clamp(b);
    }
    return out;
  }
  const groupLevel=teams=>Math.max(0,...teams.map(t=>Math.max(0,Math.min(4,Number(t.level)||0))));
  function landIndex(features){return features.flatMap(f=>(f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.type==='MultiPolygon'?f.geometry.coordinates:[]).map(rings=>{const xs=rings[0].map(p=>p[0]),ys=rings[0].map(p=>p[1]);return {rings,bounds:[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)]};}));}
  function inRing([x,y],ring){let inside=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
  function onLand(p,land){return land.some(({rings,bounds:b})=>p[0]>=b[0]&&p[0]<=b[2]&&p[1]>=b[1]&&p[1]<=b[3]&&inRing(p,rings[0])&&!rings.slice(1).some(r=>inRing(p,r)));}
  function inlandAnchor(points,land,margin=[0,0]){
    const mean=[points.reduce((s,p)=>s+p[0],0)/points.length,points.reduce((s,p)=>s+p[1],0)/points.length];
    if(!land.length)return mean;
    const safe=p=>[-1,0,1].every(x=>[-1,0,1].every(y=>onLand([p[0]+x*margin[0],p[1]+y*margin[1]],land)));
    if(safe(mean))return mean;
    for(let r=.2;r<=12;r+=.2)for(let i=0;i<32;i++){const a=i*Math.PI/16,p=[mean[0]+Math.cos(a)*r,mean[1]+Math.sin(a)*r];if(safe(p))return p;}
    // Narrow islands may not contain the whole marker. Keep its anchor on land.
    return points.filter(p=>onLand(p,land)).sort((a,b)=>Math.hypot(a[0]-mean[0],a[1]-mean[1])-Math.hypot(b[0]-mean[0],b[1]-mean[1]))[0]||mean;
  }
  const chairsFirst=(a,b)=>b.cadeiras-a.cadeiras||(a.name||a.id||'').localeCompare(b.name||b.id||'','pt-BR');
  window.MAP_LAYOUT={zoomCamera,focusOffset,cityOffsets,cityPlots,MAX_STADIUM_PLOT,preferLight,clusterPoints,clusterSize,spreadClusters,spreadGroupCards,groupLevel,landIndex,onLand,inlandAnchor,chairsFirst};
})();

;
/* Device limits reduce work; they never silently press Pause or Leve. */
(()=>{
 function profile({smallScreen=false,touch=false,memory,cores,saveData=false,forceCompact=false}={}){const compact=!!(forceCompact||smallScreen||touch||saveData||memory&&memory<=2||cores&&cores<=4);return {compact,lite:false,animate:true,fps:compact?20:25,visible:compact?12:30,animated:compact?6:30};}
 function active({paused=false,lite=false,hidden=false}={}){return !paused&&!lite&&!hidden;}
 window.ARENA_MOTION_POLICY={profile,active};
})();

;
window.ARENA_COUNTRIES=[{"iso":"FJ","name":"Fiji","location":[177.975427,-17.826099]},{"iso":"TZ","name":"Tanzania","location":[34.959183,-6.051866]},{"iso":"EH","name":"W. Sahara","location":[-12.630304,23.967592]},{"iso":"CA","name":"Canada","location":[-101.9107,60.324287]},{"iso":"US","name":"United States of America","location":[-97.482602,39.538479]},{"iso":"KZ","name":"Kazakhstan","location":[68.685548,49.054149]},{"iso":"UZ","name":"Uzbekistan","location":[64.005429,41.693603]},{"iso":"PG","name":"Papua New Guinea","location":[143.910216,-5.695285]},{"iso":"ID","name":"Indonesia","location":[101.892949,-0.954404]},{"iso":"AR","name":"Argentina","location":[-64.173331,-33.501159]},{"iso":"CL","name":"Chile","location":[-72.318871,-38.151771]},{"iso":"CD","name":"Dem. Rep. Congo","location":[23.458829,-1.858167]},{"iso":"SO","name":"Somalia","location":[45.19238,3.568925]},{"iso":"KE","name":"Kenya","location":[37.907632,0.549043]},{"iso":"SD","name":"Sudan","location":[29.260657,16.330746]},{"iso":"TD","name":"Chad","location":[18.645041,15.142959]},{"iso":"HT","name":"Haiti","location":[-72.224051,19.263784]},{"iso":"DO","name":"Dominican Rep.","location":[-70.653998,19.104137]},{"iso":"RU","name":"Russia","location":[44.686469,58.249357]},{"iso":"BS","name":"Bahamas","location":[-77.146688,26.401789]},{"iso":"FK","name":"Falkland Is.","location":[-58.738602,-51.608913]},{"iso":"NO","name":"Norway","location":[9.679975,61.357092]},{"iso":"GL","name":"Greenland","location":[-39.335251,74.319387]},{"iso":"TF","name":"Fr. S. Antarctic Lands","location":[69.122136,-49.303721]},{"iso":"TL","name":"Timor-Leste","location":[125.854679,-8.803705]},{"iso":"ZA","name":"South Africa","location":[23.665734,-29.708776]},{"iso":"LS","name":"Lesotho","location":[28.246639,-29.480158]},{"iso":"MX","name":"Mexico","location":[-102.289448,23.919988]},{"iso":"UY","name":"Uruguay","location":[-55.966942,-32.961127]},{"iso":"BR","name":"Brazil","location":[-49.55945,-12.098687]},{"iso":"BO","name":"Bolivia","location":[-64.593433,-16.666015]},{"iso":"PE","name":"Peru","location":[-72.90016,-12.976679]},{"iso":"CO","name":"Colombia","location":[-73.174347,3.373111]},{"iso":"PA","name":"Panama","location":[-80.352106,8.72198]},{"iso":"CR","name":"Costa Rica","location":[-84.077922,10.0651]},{"iso":"NI","name":"Nicaragua","location":[-85.069347,12.670697]},{"iso":"HN","name":"Honduras","location":[-86.887604,14.794801]},{"iso":"SV","name":"El Salvador","location":[-88.890124,13.685371]},{"iso":"GT","name":"Guatemala","location":[-90.497134,14.982133]},{"iso":"BZ","name":"Belize","location":[-88.712962,17.202068]},{"iso":"VE","name":"Venezuela","location":[-64.599381,7.182476]},{"iso":"GY","name":"Guyana","location":[-58.942643,5.124317]},{"iso":"SR","name":"Suriname","location":[-55.91094,4.143987]},{"iso":"FR","name":"France","location":[2.552275,46.696113]},{"iso":"EC","name":"Ecuador","location":[-78.188375,-1.259076]},{"iso":"PR","name":"Puerto Rico","location":[-66.481065,18.234668]},{"iso":"JM","name":"Jamaica","location":[-77.318767,18.137124]},{"iso":"CU","name":"Cuba","location":[-77.975855,21.334024]},{"iso":"ZW","name":"Zimbabwe","location":[29.925444,-18.91164]},{"iso":"BW","name":"Botswana","location":[24.179216,-22.102634]},{"iso":"NA","name":"Namibia","location":[17.108166,-20.575298]},{"iso":"SN","name":"Senegal","location":[-14.778586,15.138125]},{"iso":"ML","name":"Mali","location":[-2.038455,18.692713]},{"iso":"MR","name":"Mauritania","location":[-9.740299,19.587062]},{"iso":"BJ","name":"Benin","location":[2.352018,10.324775]},{"iso":"NE","name":"Niger","location":[9.504356,17.446195]},{"iso":"NG","name":"Nigeria","location":[7.50322,9.439799]},{"iso":"CM","name":"Cameroon","location":[12.473488,4.585041]},{"iso":"TG","name":"Togo","location":[1.058113,8.80722]},{"iso":"GH","name":"Ghana","location":[-1.036941,7.717639]},{"iso":"CI","name":"Côte d'Ivoire","location":[-5.568618,7.49139]},{"iso":"GN","name":"Guinea","location":[-10.016402,10.618516]},{"iso":"GW","name":"Guinea-Bissau","location":[-14.52413,12.163712]},{"iso":"LR","name":"Liberia","location":[-9.460379,6.447177]},{"iso":"SL","name":"Sierra Leone","location":[-11.763677,8.617449]},{"iso":"BF","name":"Burkina Faso","location":[-1.36388,12.673048]},{"iso":"CF","name":"Central African Rep.","location":[20.906897,6.989681]},{"iso":"CG","name":"Congo","location":[15.9005,0.142331]},{"iso":"GA","name":"Gabon","location":[11.835939,-0.437739]},{"iso":"GQ","name":"Eq. Guinea","location":[8.9902,2.333]},{"iso":"ZM","name":"Zambia","location":[26.395298,-14.660804]},{"iso":"MW","name":"Malawi","location":[33.608082,-13.386737]},{"iso":"MZ","name":"Mozambique","location":[37.83789,-13.94323]},{"iso":"SZ","name":"eSwatini","location":[31.467264,-26.533676]},{"iso":"AO","name":"Angola","location":[17.984249,-12.182762]},{"iso":"BI","name":"Burundi","location":[29.917086,-3.332836]},{"iso":"IL","name":"Israel","location":[34.847915,30.911148]},{"iso":"LB","name":"Lebanon","location":[35.992892,34.133368]},{"iso":"MG","name":"Madagascar","location":[46.704241,-18.628288]},{"iso":"PS","name":"Palestine","location":[35.291341,32.047431]},{"iso":"GM","name":"Gambia","location":[-14.998318,13.641721]},{"iso":"TN","name":"Tunisia","location":[9.007881,33.687263]},{"iso":"DZ","name":"Algeria","location":[2.808241,27.397406]},{"iso":"JO","name":"Jordan","location":[36.375991,30.805025]},{"iso":"AE","name":"United Arab Emirates","location":[54.547256,23.466285]},{"iso":"QA","name":"Qatar","location":[51.143509,25.237383]},{"iso":"KW","name":"Kuwait","location":[47.313999,29.413628]},{"iso":"IQ","name":"Iraq","location":[43.26181,33.09403]},{"iso":"OM","name":"Oman","location":[57.336553,22.120427]},{"iso":"VU","name":"Vanuatu","location":[166.908762,-15.37153]},{"iso":"KH","name":"Cambodia","location":[104.50487,12.647584]},{"iso":"TH","name":"Thailand","location":[101.073198,15.45974]},{"iso":"LA","name":"Laos","location":[102.533912,19.431821]},{"iso":"MM","name":"Myanmar","location":[95.804497,21.573855]},{"iso":"VN","name":"Vietnam","location":[105.387292,21.715416]},{"iso":"KP","name":"North Korea","location":[126.444516,39.885252]},{"iso":"KR","name":"South Korea","location":[128.129504,36.384924]},{"iso":"MN","name":"Mongolia","location":[104.150405,45.997488]},{"iso":"IN","name":"India","location":[79.358105,22.686852]},{"iso":"BD","name":"Bangladesh","location":[89.684963,24.214956]},{"iso":"BT","name":"Bhutan","location":[90.040294,27.536685]},{"iso":"NP","name":"Nepal","location":[83.639914,28.297925]},{"iso":"PK","name":"Pakistan","location":[68.545632,29.328389]},{"iso":"AF","name":"Afghanistan","location":[66.496586,34.164262]},{"iso":"TJ","name":"Tajikistan","location":[72.587276,38.199835]},{"iso":"KG","name":"Kyrgyzstan","location":[74.532637,41.66854]},{"iso":"TM","name":"Turkmenistan","location":[58.676647,39.855246]},{"iso":"IR","name":"Iran","location":[54.931495,32.166225]},{"iso":"SY","name":"Syria","location":[38.277783,35.006636]},{"iso":"AM","name":"Armenia","location":[44.800564,40.459077]},{"iso":"SE","name":"Sweden","location":[19.01705,65.85918]},{"iso":"BY","name":"Belarus","location":[28.417701,53.821888]},{"iso":"UA","name":"Ukraine","location":[32.140865,49.724739]},{"iso":"PL","name":"Poland","location":[19.490468,51.990316]},{"iso":"AT","name":"Austria","location":[14.130515,47.518859]},{"iso":"HU","name":"Hungary","location":[19.447867,47.086841]},{"iso":"MD","name":"Moldova","location":[28.487904,47.434999]},{"iso":"RO","name":"Romania","location":[24.972624,45.733237]},{"iso":"LT","name":"Lithuania","location":[24.089932,55.103703]},{"iso":"LV","name":"Latvia","location":[25.458723,57.066872]},{"iso":"EE","name":"Estonia","location":[25.867126,58.724865]},{"iso":"DE","name":"Germany","location":[9.678348,50.961733]},{"iso":"BG","name":"Bulgaria","location":[25.15709,42.508785]},{"iso":"GR","name":"Greece","location":[21.72568,39.492763]},{"iso":"TR","name":"Turkey","location":[34.508268,39.345388]},{"iso":"AL","name":"Albania","location":[20.11384,40.654855]},{"iso":"HR","name":"Croatia","location":[16.37241,45.805799]},{"iso":"CH","name":"Switzerland","location":[7.463965,46.719114]},{"iso":"LU","name":"Luxembourg","location":[6.07762,49.733732]},{"iso":"BE","name":"Belgium","location":[4.800448,50.785392]},{"iso":"NL","name":"Netherlands","location":[5.61144,52.422211]},{"iso":"PT","name":"Portugal","location":[-8.271754,39.606675]},{"iso":"ES","name":"Spain","location":[-3.464718,40.090953]},{"iso":"IE","name":"Ireland","location":[-7.798588,53.078726]},{"iso":"NC","name":"New Caledonia","location":[165.084004,-21.064697]},{"iso":"SB","name":"Solomon Is.","location":[159.170468,-8.029548]},{"iso":"NZ","name":"New Zealand","location":[172.787,-39.759]},{"iso":"AU","name":"Australia","location":[134.04972,-24.129522]},{"iso":"LK","name":"Sri Lanka","location":[80.704823,7.581097]},{"iso":"CN","name":"China","location":[106.337289,32.498178]},{"iso":"TW","name":"Taiwan","location":[120.868204,23.652408]},{"iso":"IT","name":"Italy","location":[11.076907,44.732482]},{"iso":"DK","name":"Denmark","location":[9.018163,55.966965]},{"iso":"GB","name":"United Kingdom","location":[-2.116346,54.402739]},{"iso":"IS","name":"Iceland","location":[-18.673711,64.779286]},{"iso":"AZ","name":"Azerbaijan","location":[47.210994,40.402387]},{"iso":"GE","name":"Georgia","location":[43.735724,41.870087]},{"iso":"PH","name":"Philippines","location":[122.465,11.198]},{"iso":"MY","name":"Malaysia","location":[113.83708,2.528667]},{"iso":"BN","name":"Brunei","location":[114.551943,4.448298]},{"iso":"SI","name":"Slovenia","location":[14.915312,46.06076]},{"iso":"FI","name":"Finland","location":[27.276449,63.252361]},{"iso":"SK","name":"Slovakia","location":[19.049868,48.734044]},{"iso":"CZ","name":"Czechia","location":[15.377555,49.882364]},{"iso":"ER","name":"Eritrea","location":[38.285566,15.787401]},{"iso":"JP","name":"Japan","location":[138.44217,36.142538]},{"iso":"PY","name":"Paraguay","location":[-60.146394,-21.674509]},{"iso":"YE","name":"Yemen","location":[45.874383,15.328226]},{"iso":"SA","name":"Saudi Arabia","location":[44.6996,23.806908]},{"iso":"-99","name":"N. Cyprus","location":[33.692434,35.216071]},{"iso":"CY","name":"Cyprus","location":[33.084182,34.913329]},{"iso":"MA","name":"Morocco","location":[-7.187296,31.650723]},{"iso":"EG","name":"Egypt","location":[29.445837,26.186173]},{"iso":"LY","name":"Libya","location":[18.011015,26.638944]},{"iso":"ET","name":"Ethiopia","location":[39.0886,8.032795]},{"iso":"DJ","name":"Djibouti","location":[42.498825,11.976343]},{"iso":"-99","name":"Somaliland","location":[46.731595,9.443889]},{"iso":"UG","name":"Uganda","location":[32.948555,1.972589]},{"iso":"RW","name":"Rwanda","location":[30.103894,-1.897196]},{"iso":"BA","name":"Bosnia and Herz.","location":[18.06841,44.091051]},{"iso":"MK","name":"North Macedonia","location":[21.555839,41.558223]},{"iso":"RS","name":"Serbia","location":[20.787989,44.189919]},{"iso":"ME","name":"Montenegro","location":[19.143727,42.803101]},{"iso":"XK","name":"Kosovo","location":[20.860719,42.593587]},{"iso":"TT","name":"Trinidad and Tobago","location":[-60.9184,10.9989]},{"iso":"SS","name":"S. Sudan","location":[30.390151,7.230477]}];

;
/* Small, immediate neighborhood illustration. Same daylight palette and level silhouettes as the CC0 district. */
(()=>{
 const safe=c=>/^#[a-f\d]{6}$/i.test(c)?c:'#28755d';
 const stages=[[0,0,'Campo de várzea'],[10,0,'Cerca e banco da torcida'],[25,1,'Primeira arquibancada coberta'],[50,1,'Novo módulo da arquibancada'],[100,1,'Arquibancada ampliada'],[150,1,'Arquibancada completa e acesso'],[200,2,'Estádio de quatro lados'],[400,2,'Setores ampliados'],[700,2,'Estrutura preparada para Arena'],[1000,3,'Arena de dois níveis'],[2000,3,'Fachada ampliada'],[3500,3,'Cobertura ampliada'],[5000,4,'Mega Arena de três níveis']].map(([min,level,name])=>({min,level,name,id:'obra-'+min}));
 function construction(t){if(window.ARENA_ART_STATE){const p=window.ARENA_ART_STATE.plan(t);return {id:'obra-'+p.level+'-'+p.phase,name:p.work,chairs:p.chairs,next:p.nextAt?{min:p.nextAt,name:p.nextWork}:null,remaining:p.nextAt?p.nextAt-p.chairs:0};}const level=Math.max(0,Math.min(4,Number(t.level)||0)),chairs=Number(t.cadeiras)||0,at=[...stages].reverse().find(s=>s.min<=chairs),next=stages.find(s=>s.min>chairs);return {...at,chairs,next:next||null,remaining:next?next.min-chairs:0};}
 function svg(t){const level=Math.max(0,Math.min(4,Number(t.level)||0)),club=safe(t.color1),secondary=safe(t.color2),out=[];
  const p=(x,z,h=0)=>[120+(x-z)*.78,85+(x+z)*.35-h*.9],points=coords=>coords.map(a=>p(...a).map(v=>v.toFixed(1)).join(',')).join(' '),poly=(a,c,stroke='')=>out.push('<polygon points="'+points(a)+'" fill="'+c+'"'+(stroke?' stroke="'+stroke+'" stroke-width=".8"':'')+'/>');
  function slab(x,z,w,d,h,c){const a=[x-w/2,z-d/2],b=[x+w/2,z-d/2],cc=[x+w/2,z+d/2],dd=[x-w/2,z+d/2];poly([[...b,0],[...cc,0],[...cc,h],[...b,h]],'#87968a');poly([[...cc,0],[...dd,0],[...dd,h],[...cc,h]],'#94a58e');poly([[...a,h],[...b,h],[...cc,h],[...dd,h]],c);}
  slab(0,0,158,138,3,'#a7ca7c');slab(0,56,156,12,3.3,'#778785');slab(-68,-2,12,128,3.3,'#778785');slab(0,36,54,20,3.4,'#e8dbbd');
  for(let i=0;i<9;i++)slab(-58+i*14,56,6,.8,3.5,'#eff0d9');
  if(level>=1)slab(0,-34,85,13,9,'#c8ccbe');
  if(level>=2){slab(0,26,85,12,10,'#c8ccbe');for(const x of [-48,48])slab(x,-4,12,50,10,'#c8ccbe');}
  slab(0,-4,78,48,3.6,'#46a75e');for(let i=0;i<6;i++)slab(-32+i*13,-4,6.5,47,3.7,'#58b46d');
  poly([[-37,-26,3.9],[37,-26,3.9],[37,18,3.9],[-37,18,3.9]],'none','#f0f7dc');poly([[0,-26,3.9],[0,18,3.9]],'none','#f0f7dc');
  const center=p(0,-4,4);out.push('<ellipse cx="'+center[0]+'" cy="'+center[1]+'" rx="9" ry="4" fill="none" stroke="#f0f7dc"/>');
  if(level>=1){for(let i=0;i<3;i++)slab(0,-31-i*3,80,1.6,6+i,club);slab(0,-34,89,16,13,club);}
  if(level>=2){for(let i=0;i<3;i++){slab(0,26+i*2,80,1.5,6+i,club);for(const x of [-48,48])slab(x+Math.sign(x)*i*2,-4,1.5,48,6+i,club);}}
  if(level>=3){const h=level===4?26:20;slab(0,-38,110,14,h,secondary);slab(0,32,110,14,h,secondary);slab(-54,-3,14,60,h,secondary);slab(54,-3,14,60,h,secondary);for(const z of [-44,38])slab(0,z,110,2,h+.6,club);if(level===4){for(const x of [-63,63])slab(x,-3,5,86,h+3,club);slab(0,40,126,5,h+3,club);}}
  for(const [x,z]of [[-51,35],[55,37],[-52,-50],[62,7]]){const a=p(x,z,4),b=p(x,z,16);out.push('<path d="M'+a+'L'+b+'" stroke="#8d633e" stroke-width="2"/><circle cx="'+b[0]+'" cy="'+b[1]+'" r="5" fill="#43844c"/>');}
  if(level>=2)slab(52,40,13,12,11,secondary);
  return '<svg class="map-stadium neighborhood-marker level-'+level+'" data-visual="neighborhood" viewBox="0 0 240 170" aria-hidden="true">'+out.join('')+'</svg>';
 }
 function marker(t){const plan=window.ARENA_ART_STATE?.plan(t),level=Math.max(0,Math.min(4,Number(t.level)||0)),c=safe(t.color1),s=safe(t.color2);let stands=level?'<path d="M-47-38H47V-26H-47Z" fill="'+c+'" stroke="#bfc5b6" stroke-width="4"/>':'';if(level===1&&plan){if(plan.sides.includes('left'))stands+='<path d="M-48-21V22" stroke="'+c+'" stroke-width="7"/>';if(plan.sides.includes('right'))stands+='<path d="M48-21V22" stroke="'+c+'" stroke-width="7"/>';if(plan.sides.includes('back'))stands+='<path d="M-46 26H46" stroke="'+c+'" stroke-width="7"/>';}if(level>=2)stands+='<path d="M-46 26H46M-48-21V22M48-21V22" stroke="'+c+'" stroke-width="7"/>';if(level>=3)stands='<path d="M-60-46H60V39H-60ZM-38-25V18H38V-25Z" fill="'+s+'" fill-rule="evenodd" stroke="'+c+'" stroke-width="'+(level===4?5:2)+'"/>';
 return '<svg class="map-stadium neighborhood-marker level-'+level+'" data-visual="neighborhood" viewBox="0 0 240 170" aria-hidden="true"><g transform="matrix(.85 .35 -.85 .35 120 80)"><rect x="-85" y="-65" width="170" height="140" rx="8" fill="#a7ca7c" stroke="#7eae6c" stroke-width="3"/><path d="M-72-60V62H80" fill="none" stroke="#758784" stroke-width="12"/><path d="M-72-50V60H72" fill="none" stroke="#f3efd8" stroke-width="1" stroke-dasharray="6 6"/><rect x="-38" y="-25" width="76" height="43" fill="#48a75d" stroke="#f4f8df" stroke-width="1.5"/><path d="M0-25V18M-38-15H-25V8H-38M38-15H25V8H38" fill="none" stroke="#f3f7df"/><circle cy="-4" r="8" fill="none" stroke="#f4f8df"/>'+stands+'<rect x="-20" y="41" width="40" height="13" fill="#e8dbbd"/></g><path d="M40 96v-12m147-14V59" stroke="#8d633e" stroke-width="2"/><path d="M32 82a8 7 0 1 0 16 0a8 7 0 1 0-16 0M179 57a8 7 0 1 0 16 0a8 7 0 1 0-16 0" fill="#43844c"/></svg>';
 }
 window.ARENA_NEIGHBORHOOD={svg,marker,construction};
})();

;
// Local cartography: no remote tile, sprite, font or street requests.
(function(){
 const style={version:8,sources:{world:{type:'geojson',data:'assets/world-110m.json',tolerance:.35}},layers:[
  {id:'sea',type:'background',paint:{'background-color':'#78bfdc'}},
  {id:'land',type:'fill',source:'world',paint:{'fill-color':['case',['==',['get','iso'],'BR'],'#a7cf84','#c0dca3'],'fill-opacity':1}},
  {id:'country-sides',type:'fill-extrusion',source:'world',maxzoom:7,paint:{'fill-extrusion-color':'#719a52','fill-extrusion-height':0,'fill-extrusion-opacity':.9}},
  {id:'country-border',type:'line',source:'world',paint:{'line-color':'#538653','line-width':['interpolate',['linear'],['zoom'],1,.55,7,1.2],'line-opacity':.65}},
  {id:'coast-highlight',type:'line',source:'world',paint:{'line-color':'#edf1cc','line-width':1,'line-opacity':.35}}
 ]};
 const stadium=(level,color1,color2,chairs,id)=>window.ARENA_NEIGHBORHOOD.marker({level,color1,color2,cadeiras:chairs,id});
 const markerSize=level=>[78,98,146,164,184][Math.max(0,Math.min(4,Number(level)||0))];
 const groupSize=(base,level)=>Number(level)===1?Math.round(base*1.25):base+[0,0,38,54,72][Math.max(0,Math.min(4,Number(level)||0))];
 window.ARENA_MAP={style,stadium,markerSize,groupSize};
})();

;
// Headlines from actual public scores; changes require two real observations.
(function(){
 const rivalries=[['gremio','internacional','Gre-Nal'],['palmeiras','corinthians','Derby paulista'],['flamengo','vasco','Clássico dos Milhões'],['atletico-mg','cruzeiro','Clássico mineiro'],['benfica','sporting','Dérbi de Lisboa'],['porto','benfica','O Clássico'],['barcelona','real-madrid','El Clásico']];
 function changes(before,after,levels){
  const events=[],old=new Map(before.teams.map(t=>[t.id,t]));
  after.teams.forEach(t=>{const p=old.get(t.id);if(!p)return;
   if(t.level>p.level)events.push({kind:'level',team:t.id,icon:'▥',label:'ESTÁDIO EVOLUIU',title:t.name+' chegou a '+levels[t.level].name,detail:t.cadeiras+' cadeiras construíram essa conquista.'});
   else if(t.n&&p.n&&t.rankAll<p.rankAll)events.push({kind:'rank',team:t.id,position:t.rankAll,icon:'↗',label:'MUDOU NO RANKING',title:t.name+' subiu '+(p.rankAll-t.rankAll)+' posições: '+p.rankAll+'º → '+t.rankAll+'º',detail:'Mudança confirmada entre duas atualizações.'});
   const P=window.ARENA_ART_STATE;
   if(P&&t.level===p.level&&P.plan(t).phase>P.plan(p).phase)events.push({kind:'work',team:t.id,icon:'▥',label:'NOVA ETAPA DA OBRA',title:t.name+' · '+P.plan(t).work,detail:t.cadeiras+' cadeiras · a construção cresceu desde a última atualização.'});
   if(t.cadeiras>p.cadeiras)events.push({kind:'growth',team:t.id,icon:'+',label:'A TORCIDA CRESCEU',title:t.name+' ganhou +'+(t.cadeiras-p.cadeiras)+' '+(t.cadeiras-p.cadeiras===1?'cadeira':'cadeiras'),detail:'Desde a última atualização confirmada · total: '+t.cadeiras+'.'});
  });
  return events;
 }
 function events(state,levels,updates=[]){
  const roles=(state.governance?.events||[]).map(e=>({kind:'role',team:e.team_id,eventId:e.id,icon:e.role==='president'?'♛':'⚑',label:'CARGOS DA TORCIDA',title:'@'+e.handle+(e.action==='entered'?' assumiu ':' deixou ')+(e.role==='president'?'a presidência':'a liderança'),detail:(state.teams.find(t=>t.id===e.team_id)?.name||e.team_id)+' · apuração diária de '+new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit'}).format(new Date(e.created_at))}));
  const first=window.ARENA_ELECTION.firstEvents(state.governance?.first_presidents||state.governance?.events||[]).sort((a,b)=>(state.teams.find(t=>t.id===a.team_id)?.rankAll||999)-(state.teams.find(t=>t.id===b.team_id)?.rankAll||999)).map(e=>({kind:'first-election',team:e.team_id,eventId:e.id,icon:'♟',label:e.simulation?'SIMULAÇÃO · PRIMEIRA ELEIÇÃO':'PRIMEIROS PRESIDENTES',title:'@'+e.handle+' é o primeiro presidente do '+(state.teams.find(t=>t.id===e.team_id)?.name||e.team_id)+'!',detail:'Primeira apuração · '+new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}).format(new Date(e.created_at))+' · Brasília. Escolhas pendentes preservadas.'}));
  const out=[...first,...roles.filter(e=>!first.some(f=>f.eventId===e.eventId)).slice(0,3),...updates],playing=state.teams.filter(t=>t.n>0).sort((a,b)=>a.rankAll-b.rankAll);
  const add=e=>{if(!out.some(x=>x.kind===e.kind&&(e.kind==='fan'?x.title===e.title:x.team===e.team)))out.push(e);};
  playing.filter(t=>t.level>0).sort((a,b)=>b.level-a.level||b.cadeiras-a.cadeiras).slice(0,2).forEach(t=>add({kind:'milestone',team:t.id,icon:'▥',label:'CONQUISTA DA TORCIDA',title:t.name+' · '+levels[t.level].name,detail:t.cadeiras+' cadeiras no estádio da temporada.'}));
  const closest=rivalries.map(([a,b,name])=>({a:state.teams.find(t=>t.id===a),b:state.teams.find(t=>t.id===b),name})).filter(r=>r.a?.n&&r.b?.n).sort((x,y)=>Math.abs(x.a.cadeiras-x.b.cadeiras)-Math.abs(y.a.cadeiras-y.b.cadeiras))[0];
  if(closest){const {a,b,name}=closest,gap=Math.abs(a.cadeiras-b.cadeiras);if(gap<=Math.max(5,Math.max(a.cadeiras,b.cadeiras)*.15))add({kind:'rivalry',team:a.id,icon:'⚔',label:name.toLocaleUpperCase('pt-BR'),title:a.name+' '+a.cadeiras+' × '+b.cadeiras+' '+b.name,detail:gap===0?'Tudo igual nas cadeiras. Quem vai passar?':'Só '+gap+' cadeira'+(gap===1?'':'s')+' de diferença.'});}
  const nearing=playing.filter(t=>levels[t.level+1]).sort((a,b)=>(levels[a.level+1].min-a.cadeiras)-(levels[b.level+1].min-b.cadeiras))[0];
  if(nearing){const next=levels[nearing.level+1],gap=next.min-nearing.cadeiras;add({kind:'next',team:nearing.id,icon:'⚑',label:'PRÓXIMA CONQUISTA',title:nearing.name+' mira '+next.name,detail:'Faltam '+gap+' cadeiras para o estádio crescer.'});}
  state.fans.filter(f=>f.first===state.today).sort((a,b)=>(b.founderOrder||0)-(a.founderOrder||0)||a.h.localeCompare(b.h)).slice(0,3).forEach(f=>add({kind:'fan',team:f.team.id,icon:'+',label:'ENTROU HOJE',title:'@'+f.h+' está com '+f.team.name,detail:'Uma nova voz na arquibancada.'}));
  if(playing[0])add({kind:'leader',team:playing[0].id,icon:'1',label:'NA LIDERANÇA GERAL',title:playing[0].name+' puxa a torcida',detail:playing[0].cadeiras+' cadeiras na temporada · '+playing[0].n+' torcedores.'});
  if(window.ARENA_ART_STATE)playing.filter(t=>t.level>0).slice(0,3).forEach(t=>add({kind:'construction',team:t.id,icon:'▥',label:'A OBRA DA TORCIDA',title:t.name+' · '+window.ARENA_ART_STATE.plan(t).work,detail:'Etapa atual construída com '+t.cadeiras+' cadeiras.'}));
  [...playing].filter(t=>t.semana>0).sort((a,b)=>b.semana-a.semana||a.rankAll-b.rankAll).slice(0,3).forEach(t=>add({kind:'week-growth',team:t.id,icon:'↗',label:'FORÇA NA RODADA',title:t.name+' somou '+t.semana+' cadeiras na rodada',detail:'Total confirmado desta rodada · '+t.cadeiras+' na temporada.'}));
  playing.filter(t=>t.bonusCurtidas>0).slice(0,2).forEach(t=>add({kind:'likes',team:t.id,icon:'♥',label:'PRÊMIOS DE CURTIDAS',title:t.name+' recebeu '+t.bonusCurtidas+' cadeiras em prêmios',detail:'Acumulado confirmado da temporada · não representa somente o dia de hoje.'}));
  (state.governance?.choices||[]).filter(c=>c.item_id&&c.chosen_at).sort((a,b)=>String(b.chosen_at).localeCompare(String(a.chosen_at))).slice(0,2).forEach(c=>{const t=state.teams.find(t=>t.id===c.team_id),item=window.ARENA_ART_STATE?.catalog.find(i=>i.id===c.item_id);if(t)add({kind:'item',team:t.id,icon:'⚑',label:'MELHORIA ESCOLHIDA',title:t.name+' · '+(item?.name||c.item_id),detail:'Escolha registrada em '+new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit'}).format(new Date(c.chosen_at))+'.'});});
  const priority={'first-election':0,role:0,level:1,rank:1,work:1,growth:1,item:2,fan:3,likes:4,rivalry:5,leader:6,next:7,milestone:8,construction:9,'week-growth':10};return out.sort((a,b)=>(priority[a.kind]??20)-(priority[b.kind]??20)).slice(0,Math.max(15,first.length+4));
 }
 window.ARENA_ACTIVITY={events,changes};
})();

;
// Only visible crests get a src. Native lazy loading alone may fetch hidden
// map markers and the whole ranking because of its generous distance margin.
(function(){
 const observed=new WeakSet(),requested=new Set();
 const observer=new IntersectionObserver(entries=>entries.forEach(({target:img,isIntersecting})=>{
  if(!isIntersecting||!img.isConnected)return;
  observer.unobserve(img);
  if(!img.dataset.crestSrc){img.classList.add('crest-failed');return;}
  img.addEventListener('load',async()=>{
   try{await img.decode();}catch{img.classList.add('crest-failed');return;}
   if(!img.isConnected)return;
   img.classList.add('crest-ready');img.closest('.marker-crest,.cluster-crests')?.classList.add('crest-box-ready');
  },{once:true});
  img.addEventListener('error',()=>img.classList.add('crest-failed'),{once:true});
  img.decoding='async';img.src=img.dataset.crestSrc;
  requested.add(img.dataset.crestSrc);document.documentElement.dataset.uniqueCrests=requested.size;
  document.documentElement.dataset.crestRequests=Number(document.documentElement.dataset.crestRequests||0)+1;
 }),{rootMargin:'0px',threshold:.01});
 function images(node){return node.nodeType===1?[...(node.matches('img[data-crest-src]')?[node]:[]),...node.querySelectorAll('img[data-crest-src]')]:[];}
 function watch(node){images(node).forEach(img=>{if(!observed.has(img)){observed.add(img);observer.observe(img);}});}
 new MutationObserver(records=>records.forEach(r=>{
  r.removedNodes.forEach(n=>images(n).forEach(img=>observer.unobserve(img)));
  r.addedNodes.forEach(watch);
 })).observe(document.body,{childList:true,subtree:true});
 watch(document.body);
})();

;
/* Participants and chairs are separate: a participant has exactly one avatar. */
(function(){
 const key=f=>String(f.h||'').toLowerCase();
 const gate=t=>-(t.id==='internacional'||t.id==='inter'?[60,66,80,140,174]:[60,66,80,105,132])[t.level];
 function create(t,seats){
  const fans=[...(t.fans||[])].sort((a,b)=>(a.founderOrder||0)-(b.founderOrder||0)||a.h.localeCompare(b.h)),leaders=new Set((t.lideres||[]).map(f=>f.h));
  let front=0;const occupied=seats.filter(s=>s.filled),seen=new Set();
  return fans.filter(f=>{if(seen.has(key(f)))return false;seen.add(key(f));return true;}).map((f,i)=>{
   const president=t.presidente?.h===f.h,leader=leaders.has(f.h),own=t.visitorHandle===f.h,highlight=president||leader||own,role=president?'Presidente':leader?'Líder':own?'Seu perfil':'Torcedor';
   let position,z=0;
   if(highlight){const n=front++,x=-40+(n%5)*20,y=gate(t)-Math.floor(n/5)*15;position=[t.center[0]+x/(111320*Math.cos(t.center[1]*Math.PI/180)),t.center[1]+y/111320];}
   else{const s=occupied[i%Math.max(1,occupied.length)];position=s?.position||t.center;z=(s?.z||0)+.25;}
   const seed=[...f.h].reduce((n,c)=>n+c.charCodeAt(0),0);
   return {h:f.h,role,highlight,own,president,leader,position,z,color:t.color1,skin:['#dcae83','#b77e58','#8d5d40','#efc6a5'][seed%4],label:highlight&&!f.hide_handle&&!f.hideHandle,showName:own||president||leader&&front<=5};
  });
 }
 function newcomers(before,after){
  const existing=new Set(before.fans.map(key)),teams=new Set(after.fans.map(f=>f.team.id)),out=[];
  for(const team of teams){
   const growth=after.fans.filter(f=>f.team.id===team).length-before.fans.filter(f=>f.team?.id===team).length;
   // A renamed handle alone must not simulate another account arriving.
   if(growth<=0)continue;
   const candidates=after.fans.filter(f=>f.team.id===team&&!existing.has(key(f))&&f.first===after.today).sort((a,b)=>(b.founderOrder||0)-(a.founderOrder||0));
   out.push(...candidates.slice(0,growth).map(f=>({h:f.h,team,first:f.first})));
  }return out;
 }
 window.ARENA_CROWD={create,newcomers,gate};
})();

;
/* Official map: only the approved neighborhood renderer. A loading marker is never replaced by legacy geometry. */
(()=>{
 let library;
 function load(){return library||(library=new Promise((resolve,reject)=>{if(window.THREE)return resolve();const s=document.createElement('script');s.src='/assets/vendor/three-r128.min.js';s.onload=resolve;s.onerror=()=>{library=null;reject(Error('3D indisponível'));};document.head.append(s);}));}
 function create(map,{onReady=()=>{}}={}){
  let layer,pending,generation=0,worlds=[],frameId=0,last=0,resolveFirst,frames=0,sampleAt=0;const events=new Map(),ready=new Promise(r=>resolveFirst=r),reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  function start(){if(!frameId&&!document.hidden&&worlds.length)frameId=requestAnimationFrame(frame);}
  function frame(now){frameId=0;if(document.hidden||!worlds.length){last=0;return;}const interval=pending?.data.lite?100:pending?.data.compact?50:40;
   if(!last||now-last>=interval){const dt=last?Math.min(.08,(now-last)/1000):0;last=now;worlds.forEach(w=>w.tick(dt));map.triggerRepaint();frames++;
    const node=map.getCanvas();if(node?.dataset&&now-sampleAt>=500){sampleAt=now;node.dataset.crowdFrames=String(frames);node.dataset.crowdSample=JSON.stringify(worlds.flatMap(w=>(w.actors||[]).slice(0,4).map(a=>[a.mode,+a.root.position.x.toFixed(3),+a.root.position.y.toFixed(3),+a.root.position.z.toFixed(3)])));node.dataset.crowdAnimated=String(worlds.reduce((n,w)=>n+(w.animated?Math.min(pending?.data.lite?0:pending?.data.compact?6:30,w.actors?.length||0):0),0));}
   }
   if(worlds.some(w=>w.animated)||(!reduced()&&worlds.some(w=>now-w.started<180)))start();
  }
  function clear(){cancelAnimationFrame(frameId);frameId=0;last=0;for(const w of worlds){layer?.root.remove(w.root);w.dispose();}worlds=[];onReady([]);}
  async function ensure(){await load();if(layer)return;const T=window.THREE;layer={id:'stadium-neighborhood',type:'custom',renderingMode:'3d',onAdd(m,gl){this.scene=new T.Scene();this.root=new T.Group();this.scene.add(this.root);this.scene.add(new T.HemisphereLight(0xf0f9ff,0x709050,.8));const sun=new T.DirectionalLight(0xfff3e5,.85);sun.position.set(-100,-90,180);this.scene.add(sun);this.camera=new T.Camera();this.renderer=new T.WebGLRenderer({canvas:m.getCanvas(),context:gl});this.renderer.autoClear=false;this.renderer.outputEncoding=T.sRGBEncoding;},render(gl,input){if(!this.origin||!worlds.length)return;try{const now=performance.now(),mc=maplibregl.MercatorCoordinate.fromLngLat(this.origin,0),scale=mc.meterInMercatorCoordinateUnits(),matrix=Array.isArray(input)||input instanceof Float32Array?input:input.defaultProjectionData.mainMatrix;this.camera.projectionMatrix=new T.Matrix4().fromArray(matrix).multiply(new T.Matrix4().makeTranslation(mc.x,mc.y,mc.z).scale(new T.Vector3(scale,-scale,scale)));let fading=false;
    for(const w of worlds){const alpha=reduced()?1:Math.min(1,(now-w.started)/180);if(alpha<1)fading=true;for(const f of w.fade){f.material.opacity=f.opacity*alpha;if(alpha===1&&f.material.transparent!==f.transparent){f.material.transparent=f.transparent;f.material.needsUpdate=true;}}}
    this.renderer.resetState();this.renderer.render(this.scene,this.camera);this.renderer.resetState();resolveFirst(true);if(fading)start();
   }catch(e){clear();resolveFirst(false);console.warn('O bairro continua no marcador leve.',e.message);}},onRemove(){generation++;clear();this.renderer.dispose();}};map.addLayer(layer);}
  function update(data,origin){pending={data,origin};const ticket=++generation,teams=data.artTeams||[];if(!teams.length){clear();events.clear();return;}
   // Hide a departed district immediately; same-club detail remains until its replacement is ready.
   if(worlds.some(w=>!teams.some(t=>t.id===w.clubId)))clear();
   Promise.allSettled([ensure(),...teams.map(async t=>({t,world:await window.ARENA_ART.create(t,{lite:data.lite,compact:data.compact,detailed:data.detailed,cutaway:data.cutaway,animate:data.animate!==false&&!data.lite,items:t.stadium_items||[]})}))]).then(results=>{
    const built=results.slice(1).filter(r=>r.status==='fulfilled').map(r=>r.value),failure=results.find(r=>r.status==='rejected');if(failure){built.forEach(b=>b.world.dispose());throw failure.reason;}
    if(ticket!==generation){built.forEach(b=>b.world.dispose());return;}clear();layer.origin=origin;const cos=Math.cos(origin[1]*Math.PI/180),scale=window.ARENA_ART_STATE.scale,T=window.THREE;
    for(const {t,world:w}of built){w.root.rotation.x=Math.PI/2;w.root.scale.setScalar(scale);w.root.position.set((t.mapLocation[0]-origin[0])*111320*cos,(t.mapLocation[1]-origin[1])*111320,0);w.clubId=t.id;w.started=performance.now();const seen=new Set();w.fade=[];w.root.traverse(o=>{if(!o.isMesh)return;for(const material of Array.isArray(o.material)?o.material:[o.material]){if(seen.has(material))continue;seen.add(material);w.fade.push({material,opacity:material.opacity,transparent:material.transparent});if(!reduced()){material.transparent=true;material.opacity=0;material.needsUpdate=true;}}});layer.root.add(w.root);worlds.push(w);}
    for(const w of worlds){w.setMotion?.(pending.data.animate!==false&&!pending.data.lite);const e=events.get(w.clubId);if(e&&performance.now()<e.expires){if(e.celebrate)w.celebrate?.();if(e.arrival)w.arrive(e.arrival);}events.delete(w.clubId);}
    onReady(worlds.map(w=>w.clubId));map.getCanvas().dataset.crowdAnimated=String(pending.data.lite?0:worlds.reduce((n,w)=>n+(w.animated?Math.min(pending.data.compact?6:30,w.actors.length):0),0));last=0;map.triggerRepaint();start();
   }).catch(e=>{if(ticket===generation){onReady(worlds.map(w=>w.clubId));resolveFirst(false);console.warn('O bairro continua no marcador leve.',e.message);}});
  }
  function signal(id,key,value){if(!pending?.data.artTeams?.some(t=>t.id===id))return false;const e=events.get(id)||{};e[key]=value;e.expires=performance.now()+8000;events.set(id,e);const w=worlds.find(w=>w.clubId===id);if(w){if(key==='arrival')w.arrive(value);else w.celebrate?.();start();}return true;}
  function pickFan(point){if(!layer?.camera||!worlds.length)return null;const T=window.THREE,c=map.getCanvas(),r=c.getBoundingClientRect(),x=point.x/r.width*2-1,y=1-point.y/r.height*2,inverse=layer.camera.projectionMatrix.clone().invert(),near=new T.Vector3(x,y,-1).applyMatrix4(inverse),far=new T.Vector3(x,y,1).applyMatrix4(inverse),ray=new T.Raycaster(near,far.sub(near).normalize());layer.root.updateMatrixWorld(true);const hit=ray.intersectObjects(worlds.flatMap(w=>w.actors.map(a=>a.root)),true)[0];let o=hit?.object;while(o){if(o.userData.fan)return o.userData.fan;o=o.parent;}return null;}
  document.addEventListener('visibilitychange',()=>{last=0;if(document.hidden){cancelAnimationFrame(frameId);frameId=0;}else{map.triggerRepaint();start();}});
  const resume=()=>{last=0;map.triggerRepaint();start();};window.addEventListener('pageshow',resume);window.addEventListener('focus',resume);
  return {update,ready,pickFan,dispose:()=>{generation++;clear();events.clear();},setMotion:v=>{if(pending)pending.data.animate=!!v;worlds.forEach(w=>w.setMotion?.(v&&!pending?.data.lite));map.getCanvas().dataset.crowdAnimated=String(v&&!pending?.data.lite?worlds.reduce((n,w)=>n+Math.min(pending?.data.compact?6:30,w.actors.length),0):0);last=0;start();},arrive:(id,h)=>signal(id,'arrival',h),celebrate:id=>signal(id,'celebrate',true)};
 }
 window.ARENA_THREE={create,load};
})();

;
/* Presentation-only crowd choreography; never creates participants or chairs. */
(()=>{
 const budget=(lite,count)=>Math.min(count,lite?3:24);
 function pose({time,index,home,plazaZ,gateZ,labeled=false,celebrating=false,arrivalAge=null,lite=false}){
  const phase=index*.71,base={x:home.x,z:home.z,y:.5+Math.sin(time*1.8+phase)*.075,rotation:Math.sin(time*.65+phase)*.025,action:'idle'};
  if(arrivalAge!==null){const u=Math.max(0,Math.min(1,arrivalAge/5));return {...base,x:0,z:(plazaZ+12)*(1-u)+(gateZ-3)*u,rotation:Math.PI,action:'walk'};}
  if(celebrating)return {...base,action:'jump',y:.5};
  if(labeled)return base;
  const phaseTime=(time+index*3)%36;
  if(index%3===1){const a=(time*.38+phase);return {...base,x:home.x+Math.sin(a)*3,z:home.z+Math.cos(a)*2.2,rotation:Math.atan2(Math.cos(a)*3,-Math.sin(a)*2.2),action:'walk'};}
  if(index%3===2&&phaseTime<14){
   // An ambient round trip through the gate; this never claims a new contribution.
   const waypoints=[[home.x,home.z],[0,plazaZ+8],[0,gateZ-4],[10,gateZ+5],[home.x,home.z]],f=phaseTime/14*4,k=Math.min(3,Math.floor(f)),u=f-k,a=waypoints[k],b=waypoints[k+1];
   return {...base,x:a[0]+(b[0]-a[0])*u,z:a[1]+(b[1]-a[1])*u,rotation:Math.atan2(b[0]-a[0],b[1]-a[1]),action:'walk'};
  }
  return base;
 }
 function plazaBounds(team,lite,P){const people=P.people(team,lite),plan=P.plan(team),xs=people.map(f=>f.x),zs=people.map(f=>f.z);return {left:Math.min(-18,...xs)-5,right:Math.max(18,...xs)+5,back:Math.min(plan.gateZ-6,...zs)-5,front:Math.max(plan.plazaZ+14,...zs)+6};}
 function gains(before,after){const old=new Map((before.teams||[]).map(t=>[t.id,Number(t.cadeiras)||0]));return (after.teams||[]).filter(t=>old.has(t.id)&&Number(t.cadeiras)>old.get(t.id)).map(t=>t.id);}
 function labelLift(lat,zoom,pitch,scale=1.3){const ppm=512*Math.pow(2,zoom)/(40075016.686*Math.cos(lat*Math.PI/180));return Math.max(14,4.8*scale*ppm*Math.sin(pitch*Math.PI/180)+8);}
 window.ARENA_MOTION={budget,pose,plazaBounds,gains,labelLift};
})();

;
/* Presentation only. Never writes or recomputes scores, positions or roles. */
(function(){
 const starts=[0,25,200,1000,5000],names=['Campinho','Arquibancada','Estádio','Arena','Mega Arena'];
 const groups={vertical:['gremio','fluminense','botafogo','atletico-mg','juventude','ceara','figueirense','criciuma','avai','santa-cruz','paysandu','porto','sporting-cristal','atletico-madrid','barcelona','real-sociedad','athletic-bilbao','juventus','inter-milao','milan','atalanta','newcastle','sunderland','real-betis','racing','estudiantes','san-lorenzo','penarol','guarani-paraguai','chivas','monterrey','fenerbahce'],horizontal:['flamengo','sport','fortaleza','sampaio-correa','sporting','celtic','fc-basel'],diagonal:['vasco','ponte-preta','river-plate','rayo-vallecano'],chest:['sao-paulo','bahia','boca-juniors']};
 const overrides={gremio:['#248dd2','#141b22','#ffffff'],flamengo:['#c92936','#15191d'],fluminense:['#801e3a','#16603c','#ffffff'],'sao-paulo':['#f1f1e8','#c92432','#171b20'],vasco:['#192222','#ffffff'],sporting:['#237343','#f4f3e9'],porto:['#1f61ac','#ffffff'],'boca-juniors':['#183f91','#edbf3a'],'river-plate':['#f1f1e9','#cd2533'],corinthians:['#f1f1e8','#1f292a'],santos:['#f2f2e9','#1d2928']};
 function shirt(t){const colors=overrides[t.id]||[t.color1||'#28794e',t.color2||'#f3f2e7'];let pattern='plain';for(const [key,ids]of Object.entries(groups))if(ids.includes(t.id))pattern=key;return {pattern:t.shirtPattern||pattern,colors:[...colors]};}
 function shirtColor(style,u,v){const [a,b,c]=style.colors;u=Math.max(0,Math.min(.999,u));v=Math.max(0,Math.min(.999,v));if(style.pattern==='vertical'){const stripe=Math.floor(u*(c?9:6));return (c?[a,b,c]:[a,b])[stripe%(c?3:2)];}if(style.pattern==='horizontal')return Math.floor(v*6)%2?b:a;if(style.pattern==='diagonal')return Math.abs(u+v-1)<.18?b:a;if(style.pattern==='chest'&&v>.35&&v<.65)return c?(v<.5?c:b):b;return a;}
 function plan(t){const level=Math.max(0,Math.min(4,Number(t.level)||0)),chairs=Math.max(0,Number(t.cadeiras)||0),phase=level===1?[25,50,100,150].filter(n=>chairs>=n).length-1:0;
  return {level,chairs,name:names[level],tiers:[0,1,1,2,3][level],standLength:level===1?64+Math.max(0,phase)*4:72,standDepth:level===1?10+Math.max(0,phase):12,
   width:[166,176,190,208,280][level],depth:[146,154,170,184,244][level],trees:[4,7,12,18,32][level],cars:[1,3,5,10,36][level],crowdLimit:[6,10,16,20,44][level],lamps:[2,3,4,6,12][level],parkingWidth:level===4?58:25,parkingDepth:level===4?44:24,
   capacity:level===0?25:level===1?200:level===2?1000:level===3?5000:Math.max(10000,Math.ceil(chairs/1000)*1000),
   dna:level>=3&&['internacional','gremio','palmeiras'].includes(t.id)?t.id:null,phase:Math.max(0,phase),gateZ:[21,30,30,47,61][level],plazaZ:[42,42,42,61,75][level]};
 }
 function people(t,lite=false){const p=plan(t),leaders=new Set((t.lideres||[]).map(f=>f.h)),seen=new Set();const list=(t.fans||[]).filter(f=>{if(seen.has(f.h))return false;seen.add(f.h);return true;}).map(f=>({...f,president:t.presidente?.h===f.h,leader:leaders.has(f.h),own:t.visitorHandle===f.h}));
  list.sort((a,b)=>Number(b.own)-Number(a.own)||Number(b.president)-Number(a.president)||Number(b.leader)-Number(a.leader)||(a.founderOrder||0)-(b.founderOrder||0));
  const highlighted=list.filter(f=>f.own||f.president||f.leader).length;return list.slice(0,lite?6:Math.max(p.crowdLimit,Math.min(24,highlighted+3))).map((f,i)=>({...f,x:i<3?-6+i*6:-18+((i-3)%7)*6,z:p.plazaZ+(i<3?4:-12+Math.floor((i-3)/7)*3),role:f.president?'Presidente':f.leader?'Líder':f.own?'Você':'Torcedor',label:!f.hide_handle&&!f.hideHandle&&(f.president||f.leader||f.own)}));
 }
 const equipment=['screen','banner','smoke','floodlights','president-box','leaders-banner'];
 window.ARENA_ART_STATE={starts,names,shirt,shirtColor,plan,people,equipment,scale:1.3};
})();


;
/* Approved visual stages and real participants; no game writes. */
(()=>{const B=window.ARENA_ART_STATE;
 const milestones=[[0,10,20],[25,50,75,100,125,150,175],[200,300,450,600,800],[1000,1600,2400,3200,4200],[5000,6000,7500,10000]];
 const works=[['Campo de várzea','Cerca e bancos','Entrada da torcida'],['Arquibancada principal coberta','Segundo lado de arquibancada','Entrada e bilheteria','Terceiro lado e iluminação','Calçadas e comércio','Quarto lado de arquibancada','Preparação da inauguração'],['Inauguração do Estádio','Acesso ampliado','Praça e paradas de ônibus','Fachada e circulação','Entorno pronto para Arena'],['Inauguração da Arena','Fachada ampliada','Acesso e estacionamento','Passeio da torcida','Cobertura e entorno ampliados'],['Inauguração da Mega Arena','Praça monumental','Estacionamento ampliado','Bairro completo']];
 const catalog=[{id:'banner',name:'Bandeirão',min:1},{id:'smoke',name:'Show da torcida',min:1},{id:'screen',name:'Telão',min:2},{id:'president-box',name:'Camarote do presidente',min:2},{id:'club-shop',name:'Loja do clube',min:2},{id:'training-ground',name:'CT · Em breve',min:5,soon:true},{id:'trophy-room',name:'Sala de troféus',min:3},{id:'statue',name:'Estátua do mascote',min:3}];
 function plan(t){const p=B.plan(t),list=milestones[p.level],phase=Math.max(0,list.filter(n=>p.chairs>=n).length-1),sides=p.level===0?[]:p.level===1?['main',...(phase>=1?['left']:[]),...(phase>=3?['right']:[]),...(phase>=5?['back']:[])]:['main','left','right','back'];
  return {...p,phase,sides,standLength:[0,68,82,94,106][p.level]+phase*1.5,standDepth:p.level===1?11+phase*.35:13+phase*.3,width:[166,176,212,254,312][p.level]+phase*4,depth:[146,154,188,224,280][p.level]+phase*3,trees:[4,7,22,36,52][p.level]+phase*2,cars:[1,3,18,32,50][p.level]+phase*2,lamps:[2,3,10,18,28][p.level]+phase,houses:Math.min(20,[0,2,10,14,18][p.level]+phase),work:works[p.level][phase],nextWork:works[p.level][phase+1]||B.names[p.level+1]||'Bairro completo',nextAt:list[phase+1]||B.starts[p.level+1]||null};
 }
 function people(t,lite=false){const p=plan(t),leaders=new Set((t.lideres||[]).map(f=>f.h)),seen=new Set(),fans=(t.fans||[]).filter(f=>{if(seen.has(f.h))return false;seen.add(f.h);return true;}).map(f=>({...f,founder:f.founderOrder===1,president:t.presidente?.h===f.h,leader:leaders.has(f.h),own:t.visitorHandle===f.h}));
  fans.sort((a,b)=>Number(b.own)-Number(a.own)||Number(b.president)-Number(a.president)||Number(b.leader)-Number(a.leader)||Number(b.founder)-Number(a.founder)||(a.founderOrder||0)-(b.founderOrder||0));
  return fans.slice(0,lite?6:30).map((f,i)=>({...f,x:-18+(i%7)*6,z:p.plazaZ-6+Math.floor(i/7)*3.7,role:f.president?'Presidente':f.leader?'Líder':f.founder?'Torcedor nº 1':f.own?'Você':'Torcedor',label:!f.hide_handle&&!f.hideHandle&&(f.president||f.leader||f.own||f.founder)}));
 }
 const allowed=(id,level)=>['floodlights','leaders-banner'].includes(id)||catalog.some(i=>i.id===id&&!i.soon&&level>=i.min);
 window.ARENA_ART_STATE={...B,plan,people,catalog,milestones,works,allowed,equipment:catalog.filter(i=>!i.soon).map(i=>i.id)};
 const M=window.ARENA_MOTION;
 window.ARENA_MOTION={...M,budget:(lite,n)=>lite?0:Math.min(30,n),pose:o=>{const p=M.pose(o);if(o.lite)return {...p,action:'idle'};if(p.action==='walk'||o.arrivalAge!==null&&o.arrivalAge!==undefined||o.labeled)return p;const cycle=(o.time+o.index*2)%24;if(cycle<4&&o.index%4===0)return {...p,action:'emote-yes'};if(cycle<5&&o.index%4===2)return {...p,action:'jump'};if(o.index%6===3)return {...p,action:'holding-right'};return p;}};
})();

;
/* Approved daytime neighborhood; visual only, no participant or score writes. */
(function(){
 const P=window.ARENA_ART_STATE,M=window.ARENA_MOTION,paths={stand:'racing/grandStand',covered:'racing/grandStandCovered',flag:'racing/flagGreen',flood:'racing/lightPostLarge',gate:'racing/pitsOfficeRoof',tree:'nature/tree_oak',palm:'nature/tree_palm',bush:'nature/plant_bush',fence:'nature/fence_simple',sedan:'car/sedan',hatch:'car/hatchback-sports',male:'mini/character-male-a',female:'mini/character-female-b',male2:'mini/character-male-e',road:'roads/road-straight',lamp:'roads/light-curved',shop:'city/building-d',awning:'city/detail-awning'};
 let assetsPromise;
 const script=url=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=url;s.onload=resolve;s.onerror=reject;document.head.append(s);});
 function load(){return assetsPromise||(assetsPromise=(async()=>{if(!window.THREE)await (window.ARENA_THREE?.load?window.ARENA_THREE.load():script('/assets/vendor/three-r128.min.js'));if(!THREE.GLTFLoader)await script('/assets/vendor/three-r128/GLTFLoader.js');if(!THREE.SkeletonUtils)await script('/assets/vendor/three-r128/SkeletonUtils.js');const loader=new THREE.GLTFLoader(),models={};await Promise.all(Object.entries(paths).map(async([key,path])=>models[key]=await loader.loadAsync(key==='fence'?'/laboratorio-arte/assets/fence_simple.glb':'/assets/arte-cc0/'+path+'.glb')));return models;})().catch(e=>{assetsPromise=null;throw e;}));}
 async function create(team,{lite=false,compact=false,animate=true,cutaway=false,items=[],detailed=true,miniature=false}={}){
  const models=await load(),T=window.THREE,state=P.plan(team),style=P.shirt(team),root=new T.Group(),extras=new T.Group(),owned=new Set(),materials=new Map(),actors=[],flags=[],cars=[],effects=[],roofs=[],layerGroups=new Map(),labels=[];
  root.name='Bairro · '+team.name;root.add(extras);const c1=style.colors[0],c2=style.colors[1],clock={t:0},moving=animate&&!lite;let disposed=false,motion=moving;
  const own=o=>(owned.add(o),o),color=c=>new T.Color(c).convertSRGBToLinear(),mat=(c,extra={})=>own(new T.MeshStandardMaterial({color:color(c),roughness:.85,metalness:0,...extra}));
  const concrete=mat('#c8ccbe'),paper=mat('#f2eedb'),club=mat(c1),accent=mat(c2),gold=mat('#e8bb45',{metalness:.45,roughness:.4});
  function mesh(g,m,x=0,y=0,z=0,parent=root){const o=new T.Mesh(own(g),m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
  function slab(w,d,h,r,c,x=0,z=0,y=0,parent=root){const s=new T.Shape();s.moveTo(-w/2+r,-d/2);s.lineTo(w/2-r,-d/2);s.quadraticCurveTo(w/2,-d/2,w/2,-d/2+r);s.lineTo(w/2,d/2-r);s.quadraticCurveTo(w/2,d/2,w/2-r,d/2);s.lineTo(-w/2+r,d/2);s.quadraticCurveTo(-w/2,d/2,-w/2,d/2-r);s.lineTo(-w/2,-d/2+r);s.quadraticCurveTo(-w/2,-d/2,-w/2+r,-d/2);const g=new T.ExtrudeGeometry(s,{depth:h,bevelEnabled:true,bevelSize:.12,bevelThickness:.1,bevelSegments:1,steps:1,curveSegments:4});g.rotateX(-Math.PI/2);return mesh(g,typeof c==='string'?mat(c):c,x,y,z,parent);}
  const flat=(w,d,m,x,y,z,parent=root)=>{const o=mesh(new T.PlaneGeometry(w,d),m,x,y,z,parent);o.rotation.x=-Math.PI/2;o.castShadow=false;return o;};
  function tube(points,m,r=.12,parent=root){return mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)),false,'catmullrom',0),Math.max(2,points.length-1),r,4,false),m,0,0,0,parent);}
  function themed(o,seatNeutral=false){o.traverse(m=>{if(!m.isMesh)return;m.castShadow=m.receiveShadow=true;const convert=src=>{const key=src.uuid+(seatNeutral?':seats':':club');if(materials.has(key))return materials.get(key);const n=own(src.clone());n.metalness=0;n.roughness=.85;if(['red','grass'].includes(src.name))n.color.copy(color(seatNeutral?'#b8bdb2':c1));if(src.name==='grey')n.color.copy(color('#c8ccbe'));if(/leaf/i.test(src.name))n.color.copy(color('#428345'));if(/wood|bark/i.test(src.name))n.color.copy(color('#8d633e'));if(src.name==='glass'){n.color.copy(color('#f1efdf'));n.transparent=false;n.opacity=1;}materials.set(key,n);return n;};m.material=Array.isArray(m.material)?m.material.map(convert):convert(m.material);});}
  function place(key,x,z,w,d,h,rotation=0,parent=root,base=.5){const src=models[key].scene.clone(true);themed(src,detailed&&(key==='stand'||key==='covered'));src.updateMatrixWorld(true);const b=new T.Box3().setFromObject(src),size=b.getSize(new T.Vector3()),center=b.getCenter(new T.Vector3()),wrap=new T.Group();src.position.set(-center.x,-b.min.y,-center.z);wrap.add(src);wrap.scale.set(w/size.x,h/size.y,d/size.z);wrap.position.set(x,base,z);wrap.rotation.y=rotation;parent.add(wrap);return wrap;}
  function sign(text,x,y,z,w=15,h=3,parent=root,bg=c1){const cv=document.createElement('canvas');cv.width=512;cv.height=128;const ctx=cv.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,512,128);if(text==='A FORÇA DA TORCIDA'){for(let i=0;i<8;i++){ctx.fillStyle=i%2?c1:c2;ctx.fillRect(i*64,0,64,128);}}ctx.font='800 57px Saira,Arial,sans-serif';ctx.fillStyle='#fffbe9';ctx.textAlign='center';ctx.textBaseline='middle';if(text==='A FORÇA DA TORCIDA'){ctx.lineWidth=8;ctx.strokeStyle='#14362a';ctx.strokeText(text,256,66,490);}ctx.fillText(text,256,66,490);const texture=own(new T.CanvasTexture(cv));texture.encoding=T.sRGBEncoding;return mesh(new T.PlaneGeometry(w,h),mat('#ffffff',{map:texture,side:T.DoubleSide}),x,y,z,parent);}
  // A bounded island, wide enough for the largest supported neighborhood.
  slab(state.width,state.depth,2.5,12,'#78aa65',0,0,-2.6);slab(state.width-2,state.depth-2,.25,12,'#a7ca7c',0,0,-.15);
  slab(106,82,.35,5,'#dcdfc9',0,-7,.12);slab(62,26,.2,7,'#e8dbbd',0,state.plazaZ,.2);
  const cv=document.createElement('canvas');cv.width=1024;cv.height=640;const ctx=cv.getContext('2d');for(let i=0;i<12;i++){ctx.fillStyle=i%2?'#3e9f56':'#49af63';ctx.fillRect(i*86,0,86,640);}ctx.strokeStyle='#eefff0';ctx.lineWidth=4;ctx.strokeRect(16,16,992,608);ctx.beginPath();ctx.moveTo(512,16);ctx.lineTo(512,624);ctx.stroke();ctx.beginPath();ctx.arc(512,320,85,0,Math.PI*2);ctx.stroke();[[16,1],[1008,-1]].forEach(([x,s])=>{ctx.strokeRect(s>0?x:x-157,139,157,362);ctx.strokeRect(s>0?x:x-54,238,54,164);});const fieldTexture=own(new T.CanvasTexture(cv));fieldTexture.encoding=T.sRGBEncoding;fieldTexture.anisotropy=4;flat(70,43,mat('#ffffff',{map:fieldTexture}),0,.8,-7);
  for(const x of [-35,35]){tube([[x,.8,-11],[x,4,-11],[x,4,-3],[x,.8,-3]],paper);for(let i=0;i<6;i++)tube([[x,.8,-10+i*1.3],[x+(x>0?2:-2),.8,-10+i*1.3],[x+(x>0?2:-2),3.8,-10+i*1.3],[x,4,-10+i*1.3]],paper,.035);}
  // The wooden fence and benches stay through the early building stages.
  if(state.level<2){for(let x=-35;x<=35;x+=7){place('fence',x,-29,7,.5,2.7);if(Math.abs(x)>7)place('fence',x,18,7,.5,2.7);}for(const x of [-39,39])for(let z=-24;z<19;z+=7)place('fence',x,z,7,.5,2.7,Math.PI/2);for(const x of [-26,26]){slab(8,2,.8,.3,concrete,x,26,.5);slab(8,2,.25,.2,club,x,26,1.4);}}
  function standSide(side,tier,covered=false){const main=side==='main',long=side==='main'||side==='back',len=long?state.standLength:48,depth=state.standDepth,outer=tier*8,base=.5+tier*6.8,pos=side==='main'?[0,-35-outer]:side==='back'?[0,23+outer]:side==='left'?[-43-outer,-7]:[43+outer,-7],rot=side==='main'?0:side==='back'?Math.PI:side==='left'?Math.PI/2:-Math.PI/2;
   const modules=Math.ceil(len/9);for(let i=0;i<modules;i++){const a=-len/2+(i+.5)*len/modules,x=pos[0]+(long?a:0),z=pos[1]+(long?0:a),o=place(covered?'covered':'stand',x,z,len/modules,depth,covered?8:6,rot,root,base);if(covered){o.traverse(m=>{if(m.isMesh){m.material=Array.isArray(m.material)?m.material.map(n=>own(n.clone())):own(m.material.clone());const mats=Array.isArray(m.material)?m.material:[m.material];mats.forEach(n=>{n.transparent=cutaway;n.opacity=cutaway?.16:1;});}});roofs.push(o);}}
  }
  if(state.level){for(let tier=0;tier<state.tiers;tier++)for(const side of state.sides)standSide(side,tier,side==='main'&&tier===state.tiers-1);}
  if(state.level){slab(state.standLength+1,1.2,.35,.15,club,0,-39,8+Math.max(0,state.tiers-1)*6.8);}
  // Individual seats keep the contribution count, independent of the avatar count.
  function seats(){if(!detailed||state.level===0)return;const cap=state.capacity,north=state.level===1?cap:Math.round(cap*.35),counts=state.level===1?[north]:[north,north,Math.floor((cap-north*2)/2),cap-north*2-Math.floor((cap-north*2)/2)],layout=[];
   counts.forEach((count,side)=>{for(let i=0;i<count;i++){const tier=Math.floor(i/Math.ceil(count/state.tiers)),j=i%Math.ceil(count/state.tiers),cols=side<2?50:26,row=Math.floor(j/cols),index=j%cols,k=index%2===0?Math.floor(index/2):-Math.ceil(index/2),step=(side<2?state.standLength-3:44)/cols,run=k*step,depth=state.standDepth,rows=Math.ceil(Math.ceil(count/state.tiers)/cols),fraction=(row+.5)/rows,inset=depth*(.38-.4*fraction),high=2.3+fraction*3+tier*6.8;
    const p=side===0?[run,high,-35-tier*8+inset]:side===1?[run,high,23+tier*8-inset]:side===2?[-43-tier*8+inset,high,run-7]:[43+tier*8-inset,high,run-7];layout.push({p,angle:side===0?0:side===1?Math.PI:side===2?Math.PI/2:-Math.PI/2});}}
   );const seat=new T.InstancedMesh(own(new T.BoxGeometry(.7,.3,.62)),mat('#ffffff'),layout.length),back=new T.InstancedMesh(own(new T.BoxGeometry(.7,.68,.14)),mat('#ffffff'),layout.length),dummy=new T.Object3D();layout.forEach((s,i)=>{dummy.position.set(...s.p);dummy.rotation.y=s.angle;dummy.updateMatrix();seat.setMatrixAt(i,dummy.matrix);const ink=color(i<state.chairs?c1:'#b8bdb2');seat.setColorAt(i,ink);dummy.position.x-=Math.sin(s.angle)*.24;dummy.position.z-=Math.cos(s.angle)*.24;dummy.position.y+=.4;dummy.updateMatrix();back.setMatrixAt(i,dummy.matrix);back.setColorAt(i,ink);});root.add(seat,back);seat.frustumCulled=back.frustumCulled=false;seat.instanceMatrix.needsUpdate=back.instanceMatrix.needsUpdate=true;root.userData.coloredSeats=Math.min(state.chairs,cap);
  }seats();
  function ring(rx,rz,ix,iz,y,h,m,parent=root,segments=0){if(segments){for(let i=0;i<segments;i++){const a=i/segments*Math.PI*2,b=(i+1)/segments*Math.PI*2,s=new T.Shape();s.moveTo(Math.cos(a)*rx,Math.sin(a)*rz);s.lineTo(Math.cos(b)*rx,Math.sin(b)*rz);s.lineTo(Math.cos(b)*ix,Math.sin(b)*iz);s.lineTo(Math.cos(a)*ix,Math.sin(a)*iz);s.closePath();const g=new T.ExtrudeGeometry(s,{depth:h,bevelEnabled:false});g.rotateX(-Math.PI/2);mesh(g,typeof m==='function'?m(i):m,0,y,-7,parent);}return;}
   slab(rx*2,rz-iz,h,.2,m,0,-7-(rz+iz)/2,y,parent);slab(rx*2,rz-iz,h,.2,m,0,-7+(rz+iz)/2,y,parent);slab(rx-ix,iz*2,h,.2,m,-(rx+ix)/2,-7,y,parent);slab(rx-ix,iz*2,h,.2,m,(rx+ix)/2,-7,y,parent);
  }
  if(state.level>=3){const mega=state.level===4,h=mega?24:17,rx=mega?69:60,rz=mega?55:46,roofMaterial=mat(state.dna==='palmeiras'?'#263d35':'#eceee2',{transparent:cutaway,opacity:cutaway?.14:1});
   if(state.dna==='internacional'){ring(rx+7,rz+7,rx+4,rz+4,.6,4,club,root,48);ring(rx+7,rz+7,rx+4,rz+4,4,h-2,i=>i%4===3?club:paper,root,48);ring(rx+8,rz+8,38,24,h+2,1,roofMaterial,root,48);}
   else{ring(rx,rz,rx-2,rz-2,.6,h,concrete);if(state.dna==='palmeiras'){for(let i=0;i<29;i++){const x=-rx+i*rx*2/28;slab(1.2,2,h,.1,paper,x,-7-rz,1);slab(1.2,2,h,.1,paper,x,-7+rz,1);}ring(rx+1,rz+1,rx-1,rz-1,h,1,club);}if(state.dna==='gremio'){for(let i=1;i<=state.tiers;i++)ring(rx+.4,rz+.4,rx-.1,rz-.1,i*6,.65,mat('#258fd1',{emissive:color('#258fd1'),emissiveIntensity:.35}));if(mega)for(const x of [-rx,rx])for(const z of [-rz,rz]){mesh(new T.CylinderGeometry(3.2,3.2,h+5,12),paper,x,(h+5)/2,z-7);mesh(new T.CylinderGeometry(3.3,3.3,1.4,12),club,x,h+3.7,z-7);}}
    ring(rx+1,rz+1,38,24,h+1.5,1,roofMaterial);
   }
   if(mega){ring(rx+2,rz+2,rx-.5,rz-.5,h+3.2,.8,mat(c1,{emissive:color(c1),emissiveIntensity:.45}),root,state.dna==='internacional'?48:0);for(let i=0;i<12;i++){const a=i*Math.PI/6;mesh(new T.CylinderGeometry(.7,.9,1.2,6),paper,Math.cos(a)*(rx+5),.8,Math.sin(a)*(rz+5)-7);}}
  }
  const stadiumNodes=[...root.children].filter((o,i)=>![0,1,2,4].includes(i));
  // Neighborhood grows by level, with no grant of selectable equipment.
  const roadZ=state.depth/2-13,roadX=-state.width/2+10;
  for(let x=-state.width/2+10;x<state.width/2-3;x+=12)place('road',x,roadZ,12,12,.2);for(let z=-state.depth/2+12;z<roadZ;z+=12)place('road',roadX,z,12,12,.2,Math.PI/2);
  const parkingX=state.level===4?-state.width/2+46:state.level>=3?-state.width/2+25:-55,parkingZ=state.level>=3?state.plazaZ:30;
  if(state.level){slab(state.parkingWidth,state.parkingDepth,.15,2,'#728079',parkingX,parkingZ,.35);const cols=state.level===4?10:5;for(let row=0;row<(state.level===4?2:1);row++)for(let i=0;i<cols;i++){const x=parkingX-(cols-1)*2.5+i*5,z=parkingZ+(state.level===4?(row?8:-8):0);flat(.12,8,paper,x,.7,z);flat(4.7,.12,paper,x+2.3,.7,z-4);}}
  if(state.level===4)slab(27,48,.15,2,'#728079',state.width/2-25,-24,.35);
  for(let i=0;i<7;i++)flat(1.3,9,paper,-4.6+i*1.5,.81,roadZ);
  if(state.level) {place('gate',0,state.gateZ,15,6,7);sign(team.short||team.name,0,6.2,state.gateZ+3.1,13,2.5);}else sign(team.short||team.name,0,3,21,13,2.5);
  // Automatic neighborhood businesses are generic; the club shop remains an optional item.
  // Small, varied homes and corner businesses use the club palette without recoloring the whole block.
  function stripedAwning(x,z,w=11,d=4,y=5,parent=root){for(let k=0;k<8;k++){const o=mesh(new T.BoxGeometry(w/8,d,.22),k%2?accent:club,x-w/2+(k+.5)*w/8,y,z,parent);o.rotation.x=Math.PI/2-.16;}}
  function house(x,z,i){const h=i%3===1?13:8,w=11,d=12;flat(15,17,paper,x,.55,z);slab(w,d,h,.3,mat(['#f0e1be','#e7ccac','#f5ead5'][i%3]),x,z,.6);
   const roof=new T.CylinderGeometry(8,8,13,3,1);roof.rotateZ(Math.PI/2);roof.rotateX(Math.PI/2);mesh(roof,i%2?accent:club,x,h+2.4,z);
   mesh(new T.BoxGeometry(2.3,4,.25),mat('#735640'),x-2,2.6,z+6.15);for(const dx of [-3.3,3.3])for(const yy of(h>10?[5,10]:[5])){mesh(new T.BoxGeometry(2.3,2.5,.26),mat('#548a95'),x+dx,yy,z+6.17);mesh(new T.BoxGeometry(2.9,.3,.5),paper,x+dx,yy-1.3,z+6.3);}
   if(i%3===1){slab(12,2,.3,.2,paper,x,z+6,8);tube([[x-5,8,z+7],[x-5,10,z+7],[x+5,10,z+7],[x+5,8,z+7]],club,.09);}
  }
  for(let i=0;i<(lite||compact?Math.min(4,state.houses):state.houses);i++){const side=i%2?1:-1,row=Math.floor(i/2),x=side*(state.width/2-27),z=-state.depth/2+23+row*20;
   if(i<2){place('shop',x,z,12,13,9,0);stripedAwning(x,z+8,13,4,5.5);sign(i?'PADARIA':'BAR DA PRAÇA',x,7,z+6.7,11,2.2);slab(13,13,.7,.5,i?accent:club,x,z,9.5);}else house(x,z,i);
   if(i>=2&&i%2===1){const x2=-x; tube([[x2,10,z],[0,8,z],[x,10,z]],paper,.045);for(let k=0;k<12;k++){const fx=x2+(x-x2)*(k+.5)/12,fy=8+Math.abs(fx/x)*2;mesh(new T.ConeGeometry(.8,1.5,3),k%2?club:accent,fx,fy-.7,z);}}
  }
  // The first covered stand already has a lived-in street, rather than empty lawn.
  if(state.level){if(state.level===1){house(-state.width/2+44,-state.depth/2+22,2);house(state.width/2-44,-state.depth/2+22,3);}
   const stallX=state.width/2-24,stallZ=state.plazaZ+9;
   slab(9,5,3,.4,mat('#ad774a'),stallX,stallZ,.5);stripedAwning(stallX,stallZ,11,7,6);for(const dx of[-4,4])tube([[stallX+dx,.5,stallZ-2],[stallX+dx,6,stallZ-2]],concrete,.13);sign('CHURRASCO',stallX,4,stallZ+2.7,9,1.6);for(let k=0;k<5;k++)mesh(new T.CylinderGeometry(.1,.1,2,4),gold,stallX-2+k,3.8,stallZ);
   const kioskX=-state.width/2+30,kioskZ=state.plazaZ+8;slab(8,6,5,.4,mat('#688f87'),kioskX,kioskZ,.5);slab(10,8,.6,.3,club,kioskX,kioskZ,5.8);sign('BANCA',kioskX,4,kioskZ+3.2,7,1.6);for(let k=0;k<4;k++)mesh(new T.BoxGeometry(1.3,1.9,.2),k%2?paper:accent,kioskX-2.6+k*1.7,2,kioskZ+3.25);
   for(const side of[-1,1]){const bx=side*(state.width/2-46);slab(9,2,.6,.25,concrete,bx,state.plazaZ+16,.6);slab(9,2,.3,.2,club,bx,state.plazaZ+16,1.3);place('tree',bx+side*9,state.plazaZ+15,8,8,12);}
   const fx=state.width/2-29,fz=-state.depth/2+56;if(state.level<3){flat(16,24,mat('#559764'),fx,.65,fz);for(const zz of[fz-11,fz+11])tube([[fx-3,.7,zz],[fx-3,3,zz],[fx+3,3,zz],[fx+3,.7,zz]],paper,.09);flat(.18,24,paper,fx-7.5,.7,fz);flat(.18,24,paper,fx+7.5,.7,fz);flat(15,.18,paper,fx,.7,fz);}
  }
  if(state.level>=2||state.level===1&&state.phase>=2){place('gate',20,state.gateZ+2,9,5,6);sign('BILHETERIA',20,5.5,state.gateZ+4.6,8,1.7);}
  if(state.level>=2||state.phase>=3){for(const x of [-52,52])place('flood',x,-42,6,3,23,Math.atan2(-x,42));}
  if(state.level>=2||state.phase>=4){const x=state.width/2-17,z=state.depth/2-26;slab(12,5,.4,.5,concrete,x,z,.6);tube([[x-5,1,z-1],[x-5,6,z-1],[x+5,6,z-1],[x+5,1,z-1]],club,.2);slab(13,5,.4,.3,club,x,z,6);sign('ÔNIBUS',x,4,z+1,10,1.7);}
  if(!lite&&state.level+state.phase>=3){for(let i=0;i<5+state.phase;i++){const x=-26+i*5;const f=sign('⚑',x,10,state.gateZ+5,3,2.3);flags.push({mesh:f,base:f.geometry.attributes.position.array.slice(),cloth:true});}tube([[-29,12,state.gateZ+5],[3,10,state.gateZ+5]],paper,.04);}
  root.userData.construction={phase:state.phase,sides:state.sides,houses:state.houses,work:state.work};
  const lamps=state.level>=3?[[-34,state.plazaZ],[34,state.plazaZ],[-state.width/2+36,state.plazaZ-18],[state.width/2-36,state.plazaZ-18],[-state.width/2+35,-28],[state.width/2-35,-28],[-state.width/2+35,-65],[state.width/2-35,-65],[-50,-state.depth/2+30],[50,-state.depth/2+30],[-65,state.plazaZ+17],[65,state.plazaZ+17]]:[[-31,49],[31,49],[-66,44],[67,44]];lamps.slice(0,lite?Math.min(4,state.lamps):state.lamps).forEach(([x,z])=>{place('lamp',x,z,3.5,6,12,Math.PI);if(state.level===4)mesh(new T.SphereGeometry(.45,6,4),mat('#fff1bd',{emissive:color('#ffd77b'),emissiveIntensity:.4}),x,12.3,z);});
  for(const x of [-19,19]){const o=place('flag',x,state.gateZ+4,3,.7,11);o.traverse(m=>{if(m.isMesh){m.geometry=own(m.geometry.clone());flags.push({mesh:m,base:m.geometry.attributes.position.array.slice()});}});}
  const treeCount=lite||compact?Math.min(8,Math.ceil(state.trees/2)):state.trees;for(let i=0;i<treeCount;i++){const a=(i/treeCount)*Math.PI*1.7+.25,x=Math.cos(a)*(state.width/2-21),z=Math.sin(a)*(state.depth/2-22);if(Math.abs(x)<35&&z>20||Math.abs(x)>state.width/2-35&&z<30||Math.abs(x)<15&&Math.abs(z-(-state.depth/2+23))<16)continue;place(i%4===0?'palm':'tree',x,z,10,10,i%4===0?19:15,0,i%2?extras:root);}
  const carCount=lite||compact?Math.min(state.level===4?6:2,state.cars):state.cars;for(let i=0;i<carCount;i++){const mega=state.level===4,left=mega?i<20:i<4,x=left?parkingX+(mega?-22.5+(i%10)*5:-8+i*5):state.width/2-18-(i%4)*5,z=left?parkingZ+(mega?(i<10?-8:8):0):-40+Math.floor((mega?i-20:i)/4)*8;place(i%2?'sedan':'hatch',x,z,3.2,5.3,2.6,0,i>2?extras:root);}
  if(!lite&&state.level>=1){const o=place('sedan',roadX,roadZ,3.2,5.3,2.6,Math.PI/2,extras);cars.push({root:o,roadZ,roadX});}
  const itemLayer=id=>{const g=new T.Group();g.name=id;g.userData.layerId=id;g.visible=items.includes(id);root.add(g);layerGroups.set(id,g);return g;};
  const screen=itemLayer('screen'),screenY=[12,14,19,31,40][state.level],screenZ=0,screenX=state.level>=3?-76:-57;
  const panel=new T.Group();screen.add(panel);panel.position.set(screenX,screenY,screenZ);panel.rotation.y=Math.PI/2;
  mesh(new T.BoxGeometry(31,18,1.2),mat('#172b29'),0,0,0,panel);
  const display=sign(team.short||team.name,0,-5,.7,27,4,panel,'#143b2b');
  const crestMat=mat('#ffffff',{transparent:true,side:T.DoubleSide});const crest=mesh(new T.PlaneGeometry(10,10),crestMat,0,2,.72,panel);new T.TextureLoader().load('/assets/escudos/'+team.id+'.png',tex=>{if(disposed){tex.dispose();return;}own(tex);tex.encoding=T.sRGBEncoding;crestMat.map=tex;crestMat.needsUpdate=true;},undefined,()=>{crest.visible=false;});
  for(const z of[-10,10])tube([[screenX,.5,z],[screenX,screenY-8,z]],concrete,.6,screen);
  const banner=itemLayer('banner'),bannerY=(state.level>=2?7:10)+Math.max(0,state.tiers-1)*6.8,bannerZ=state.level>=2?25:-33;
  const b=sign('A FORÇA DA TORCIDA',0,bannerY,bannerZ,Math.max(48,state.standLength*.7),12,banner,c1);b.rotation.x=-1.0;flags.push({mesh:b,base:b.geometry.attributes.position.array.slice(),cloth:true});
  const smoke=itemLayer('smoke');for(let k=0;k<3;k++)for(let i=0;i<7;i++){const o=mesh(new T.IcosahedronGeometry(2.3+i*.48,1),own(new T.MeshBasicMaterial({color:color(i%2?c1:c2),transparent:true,opacity:.7,depthWrite:false,toneMapped:false})),-25+k*25,7+i*2.7+Math.max(0,state.tiers-1)*6.8,-30,smoke);effects.push({mesh:o,baseY:o.position.y,phase:i+k,originX:o.position.x});}
  const floods=itemLayer('floodlights'),lightX=state.level>=3?78:50,lightBack=state.level>=3?-74:-42,lightFront=state.level>=3?62:27;for(const [x,z]of[[-lightX,lightBack],[lightX,lightBack],[-lightX,lightFront],[lightX,lightFront]])place('flood',x,z,7,3,state.level>=3?36:24,Math.atan2(-x,-z),floods);
  const box=itemLayer('president-box'),boxY=state.level>=3?17:9,boxZ=-36;
  slab(35,8,5,.5,concrete,0,boxZ,boxY,box);mesh(new T.BoxGeometry(34,3.8,.3),mat('#5a9cac',{metalness:.3,roughness:.15,transparent:true,opacity:.75}),0,boxY+2.5,boxZ+4.2,box);for(let i=0;i<7;i++)mesh(new T.BoxGeometry(.28,4.2,.5),gold,-16+i*5.3,boxY+2.5,boxZ+4.4,box);slab(36,9,.6,.2,gold,0,boxZ,boxY+5.4,box);sign('PRESIDENTE',0,boxY+.3,boxZ+4.5,19,1.5,box,'#8b702c');
  const shop=itemLayer('club-shop'),shopX=state.width/2-28;slab(24,18,11,.8,club,shopX,state.plazaZ,.6,shop);slab(26,20,1,.4,accent,shopX,state.plazaZ,12,shop);stripedAwning(shopX,state.plazaZ+11,25,5,8,shop);sign('LOJA · '+(team.short||team.name),shopX,10,state.plazaZ+9.2,23,2.8,shop);for(const dx of[-7,7])mesh(new T.BoxGeometry(7,5,.3),mat('#74a2a5'),shopX+dx,4,state.plazaZ+9.2,shop);mesh(new T.BoxGeometry(4.5,7,.35),mat('#e8dfbf'),shopX,4,state.plazaZ+9.3,shop);
  const trophies=itemLayer('trophy-room'),trophyZ=-state.depth/2+23;place('shop',0,trophyZ,17,13,14,0,trophies);sign('CONQUISTAS',0,9,trophyZ+6.7,15,2.5,trophies);mesh(new T.CylinderGeometry(1.5,.8,2,8),gold,0,16,trophyZ,trophies);
  const statue=itemLayer('statue'),sx=28,sz=state.plazaZ+2;slab(5,5,2,.5,concrete,sx,sz,.5,statue);mesh(new T.IcosahedronGeometry(1.5,0),gold,sx,5,sz,statue);mesh(new T.ConeGeometry(.65,1.4,4),gold,sx-1,6.4,sz,statue);mesh(new T.ConeGeometry(.65,1.4,4),gold,sx+1,6.4,sz,statue);sign('FORÇA DA TORCIDA',sx,1.5,sz+2.6,7,1.4,statue);
  const leaders=itemLayer('leaders-banner');sign('LÍDERES DA TORCIDA',0,3,state.gateZ+3.3,28,2.3,leaders);
  // Shared club cloth, with an uninterrupted sash attached to the animated torso.
  const shirts=new Map();function shirtTexture(role){if(shirts.has(role))return shirts.get(role);const cv=document.createElement('canvas');cv.width=cv.height=512;const a=cv.getContext('2d');a.fillStyle='#fff';a.fillRect(0,0,512,512);for(let y=0;y<64;y++)for(let x=0;x<64;x++){a.fillStyle=P.shirtColor(style,x/64,1-y/64);a.fillRect(24+x*7.625,24+y*7.625,8,8);}if(role==='Presidente'||role==='Líder'){a.strokeStyle=role==='Presidente'?'#e5b940':'#f3eee0';a.lineWidth=70;a.beginPath();a.moveTo(90,25);a.lineTo(440,510);a.stroke();a.strokeStyle=role==='Presidente'?'#ffdc72':'#bdbbaf';a.lineWidth=5;a.stroke();}const tex=own(new T.CanvasTexture(cv));tex.encoding=T.sRGBEncoding;tex.anisotropy=2;shirts.set(role,tex);return tex;}
  function makeFan(f,i=0){const key=i%3===0?'female':i%3===1?'male':'male2',src=models[key],avatar=T.SkeletonUtils.clone(src.scene),wrap=new T.Group();avatar.updateMatrixWorld(true);const bounds=new T.Box3().setFromObject(avatar),scale=(f.label?3.9:3.2)/(bounds.max.y-bounds.min.y);avatar.scale.setScalar(scale);avatar.position.y=-bounds.min.y*scale;wrap.add(avatar);wrap.position.set(f.x,.5,f.z);wrap.userData.fan=f;root.add(wrap);
   avatar.traverse(o=>{if(!o.isMesh)return;o.castShadow=!lite&&!compact;o.frustumCulled=false;if(o.name!=='body-mesh')return;const g=own(o.geometry.clone()),pos=g.attributes.position,si=g.attributes.skinIndex,sw=g.attributes.skinWeight,colors=new Float32Array(pos.count*3),uvs=new Float32Array(pos.count*2),skin=color(f.skin||['#e1b28b','#a46e4d','#c98b5f'][i%3]);for(let v=0;v<pos.count;v++){let bone=0,weight=-1;for(let k=0;k<4;k++){if(sw.array[v*4+k]>weight){weight=sw.array[v*4+k];bone=si.array[v*4+k];}}const y=pos.getY(v),u=pos.getX(v)/.32+.5;let ink=skin;
    uvs[v*2]=uvs[v*2+1]=.01;if(bone===3){ink=color('#ffffff');uvs[v*2]=.047+Math.max(0,Math.min(1,u))*.95;uvs[v*2+1]=.047+Math.max(0,Math.min(1,(y-.176)/.192))*.95;}else if(bone===1||bone===2)ink=color(y>.12?'#eeeede':'#23362d');else if((bone===4||bone===5)&&y>.24)ink=color(c1);ink.toArray(colors,v*3);}
    g.setAttribute('color',new T.BufferAttribute(colors,3));g.setAttribute('uv',new T.BufferAttribute(uvs,2));o.geometry=g;o.material=mat('#ffffff',{map:shirtTexture(f.role),vertexColors:true,skinning:true});});
   if(f.founder&&!f.president){mesh(new T.SphereGeometry(.075,6,4),gold,.11,.25,.13,avatar.getObjectByName('head')||avatar);}
   if(!lite&&i%6===3){mesh(new T.CylinderGeometry(.035,.035,3.5,4),paper,1.2,2.5,0,wrap);const fsign=sign('⚑',1.8,3.7,0,1.3,.8,wrap);flags.push({mesh:fsign,base:fsign.geometry.attributes.position.array.slice(),cloth:true});}
   if(f.president){const head=avatar.getObjectByName('head')||avatar,crown=new T.Group();head.add(crown);mesh(new T.CylinderGeometry(.125,.125,.055,12),gold,0,.357,0,crown);for(let k=0;k<5;k++){const a=k/5*Math.PI*2;mesh(new T.ConeGeometry(.034,.09,4),gold,Math.cos(a)*.108,.417,Math.sin(a)*.108,crown);}}
   const mixer=new T.AnimationMixer(avatar),actions={};for(const clip of src.animations)actions[clip.name]=mixer.clipAction(clip);const actor={f,root:wrap,avatar,mixer,actions,mode:null,home:wrap.position.clone(),phase:i*.7};actors.push(actor);actor.street=!f.label&&i>=14&&i%5===0;play(actor,'idle');mixer.update(.01);if(f.label)labels.push({actor,root:wrap,h:f.h,role:f.role,own:f.own,president:f.president,leader:f.leader});return actor;
  }
  function play(a,name){if(a.mode===name)return;Object.values(a.actions).forEach(x=>x.fadeOut(.15));a.actions[name]?.reset().fadeIn(.15).play();a.mode=name;}
  const people=miniature?[]:P.people(team,lite).slice(0,compact&&!lite?12:30);people.forEach(makeFan);
  let arrivalActor,celebrateUntil=0;
  function celebrate(){celebrateUntil=clock.t+4;return true;}
  function arrive(handle){let a=actors.find(a=>a.f.h===handle);if(!a){if(!arrivalActor)arrivalActor=makeFan({h:handle,x:0,z:state.plazaZ+12,role:'Torcedor',label:false},actors.length);a=arrivalActor;a.f.h=handle;}a.arrival=0;a.root.visible=true;play(a,'walk');return true;}
  function tick(dt){if(disposed||!motion)return;dt=Math.min(dt,.08);clock.t+=dt;const limit=lite?0:Math.min(compact?6:30,actors.length),extraArrival=actors.some((a,i)=>i>=limit&&a.arrival!==undefined);
   for(let i=0;i<actors.length;i++){const a=actors[i],entering=a.arrival!==undefined,active=i<limit-(extraArrival?1:0)||entering;if(!active)continue;
    if(entering)a.arrival+=dt;
    const pose=M.pose({time:clock.t,index:i,home:a.home,plazaZ:state.plazaZ,gateZ:state.gateZ,labeled:a.f.label,celebrating:clock.t<celebrateUntil,arrivalAge:entering?a.arrival:null,lite});
    if(a.street&&!entering){const u=(clock.t*.06+i*.17)%1;pose.x=-state.width/2+22+u*(state.width/2+5);pose.z=state.plazaZ+19-8*Math.sin(u*Math.PI);pose.action='walk';pose.rotation=Math.PI/2;}a.root.position.set(pose.x,pose.y,pose.z);a.root.rotation.y=pose.rotation;play(a,pose.action);a.mixer.update(dt);
    if(entering&&a.arrival>=5){delete a.arrival;a.root.position.copy(a.home);celebrateUntil=clock.t+4;}
    if(a===arrivalActor&&a.arrival===undefined)a.root.visible=false;
   }
   if(!lite){for(const f of flags){const p=f.mesh.geometry.attributes.position;for(let i=0;i<p.count;i++)p.setZ(i,f.base[i*3+2]+Math.sin(clock.t*2.5+f.base[i*3]*4)*Math.max(0,f.base[i*3])*(f.cloth?.04:.18));p.needsUpdate=true;}for(const car of cars){car.root.position.x=car.roadX+((clock.t*3)%(state.width-22));}for(const e of effects){const cycle=(clock.t*.3+e.phase*.12)%1;e.mesh.position.y=e.baseY+cycle*7;e.mesh.position.x=e.originX+Math.sin(clock.t+e.phase)*1.5;e.mesh.scale.setScalar(.75+cycle*.7);e.mesh.material.opacity=.72*(1-cycle*.45);}screen.children.filter(c=>c.material?.emissive).forEach(c=>{c.material.emissive.copy(color(c1));c.material.emissiveIntensity=.1+Math.sin(clock.t)*.06;});}
  }
  // Instance repeated static models. Animated models and role accessories stay separate.
  root.updateMatrixWorld(true);const excluded=new Set();for(const a of actors)a.root.traverse(o=>excluded.add(o));for(const f of flags)excluded.add(f.mesh);for(const c of cars)c.root.traverse(o=>excluded.add(o));for(const e of effects)excluded.add(e.mesh);const buckets=new Map();root.traverse(o=>{if(!o.isMesh||o.isSkinnedMesh||o.isInstancedMesh||excluded.has(o)||Array.isArray(o.material))return;let p=o.parent,layer='base';while(p&&p!==root){if(p.userData.layerId){layer=p.userData.layerId;break;}p=p.parent;}const key=o.geometry.uuid+o.material.uuid+layer,arr=buckets.get(key)||[];arr.push(o);buckets.set(key,arr);});for(const list of buckets.values()){if(list.length<3||miniature)continue;let parent=root,p=list[0].parent;while(p&&p!==root){if(p.userData.layerId){parent=p;break;}p=p.parent;}const inst=new T.InstancedMesh(list[0].geometry,list[0].material,list.length),inverse=new T.Matrix4().copy(parent.matrixWorld).invert();list.forEach((o,i)=>{inst.setMatrixAt(i,new T.Matrix4().multiplyMatrices(inverse,o.matrixWorld));o.visible=false;});inst.castShadow=inst.receiveShadow=true;inst.frustumCulled=false;parent.add(inst);}
  const raycaster=new T.Raycaster();function pickFan(point,camera){raycaster.setFromCamera(point,camera);const hit=raycaster.intersectObjects(actors.map(a=>a.root),true)[0];let o=hit?.object;while(o&&o!==root){if(o.userData.fan)return o.userData.fan;o=o.parent;}return null;}
  if(miniature){for(const child of [...root.children])if(!stadiumNodes.includes(child))root.remove(child);}
  root.userData.motionProfile={compact,lite,maxAnimated:lite?0:compact?6:30};root.userData.art={club:team.id,level:state.level+1,pattern:style.pattern,dna:state.dna,people:people.length,capacity:state.capacity,layers:[...layerGroups.keys()]};
  function dispose(){if(disposed)return;disposed=true;actors.forEach(a=>{a.mixer.stopAllAction();a.mixer.uncacheRoot(a.avatar);});owned.forEach(o=>o.dispose?.());root.clear();}
  return {root,state,labels,actors,itemFocus:id=>{const g=layerGroups.get(id);if(!g)return null;root.updateMatrixWorld(true);return new T.Box3().setFromObject(g).getCenter(new T.Vector3());},tick,arrive,celebrate,dispose,pickFan,setMotion:v=>motion=!!v,setItems:ids=>layerGroups.forEach((g,id)=>g.visible=(P.allowed(id,state.level)||items.includes(id))&&!(lite&&id==='smoke')&&ids.includes(id)),get animated(){return motion&&!disposed;}};
 }
 window.ARENA_ART={load,create};
})();



;
/* Official markers rendered from the same 3D construction as the full diorama. */
(()=>{const P=window.ARENA_ART_STATE;let T;let renderer,queue=Promise.resolve();
 const rankFor=()=>0;
 const scaleFor=n=>1+Math.min(.28,Math.log1p(Math.max(0,n))/30);
 function award(rank){const g=new T.Group(),shape=new T.Shape();shape.absarc(0,0,10,0,Math.PI*2,false);const geo=new T.ExtrudeGeometry(shape,{depth:1.5,bevelEnabled:true,bevelSize:.3,bevelThickness:.3,bevelSegments:1,steps:1}),mat=new T.MeshStandardMaterial({color:rank===1?0xe4b632:rank===2?0xbdcdd7:0xb87d50,metalness:.35,roughness:.4});g.add(new T.Mesh(geo,mat));const cv=document.createElement('canvas');cv.width=cv.height=128;const ctx=cv.getContext('2d');ctx.clearRect(0,0,128,128);ctx.fillStyle='#173b30';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='800 70px Arial';ctx.fillText(rank+'º',64,68);const tex=new T.CanvasTexture(cv);tex.encoding=T.sRGBEncoding;const faceGeo=new T.PlaneGeometry(18,18),faceMat=new T.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false}),face=new T.Mesh(faceGeo,faceMat);face.position.z=2;g.add(face);return {g,geo,mat,dispose:()=>{tex.dispose();faceGeo.dispose();faceMat.dispose();}};}
 async function render(team,{rank=team.cadeiras>0&&team.rankAll<=3?team.rankAll:0,group=false}={}){const task=async()=>{await window.ARENA_ART.load();T=window.THREE;renderer ||=new T.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'});renderer.setSize(420,310);renderer.setPixelRatio(1);renderer.outputEncoding=T.sRGBEncoding;renderer.setClearColor(0x000000,0);const world=await ARENA_ART.create({...team,fans:[],lideres:[],presidente:null},{lite:true,animate:false,detailed:false,miniature:true}),scene=new T.Scene();scene.add(new T.HemisphereLight(0xffffff,0x697d55,.8));const sun=new T.DirectionalLight(0xfff5e9,.8);sun.position.set(-80,160,80);scene.add(sun,world.root);const scale=scaleFor(team.cadeiras);world.root.scale.setScalar(scale);const camera=new T.OrthographicCamera(-1,1,1,-1,.1,1500),box=new T.Box3().setFromObject(world.root),center=box.getCenter(new T.Vector3());camera.position.copy(center).add(new T.Vector3(100,125,145));camera.lookAt(center);camera.updateMatrixWorld(true);let extentX=0,extentY=0;for(const x of[box.min.x,box.max.x])for(const y of[box.min.y,box.max.y])for(const z of[box.min.z,box.max.z]){const p=new T.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);extentX=Math.max(extentX,Math.abs(p.x));extentY=Math.max(extentY,Math.abs(p.y));}const half=Math.max(extentY,extentX/(420/310))*1.035;camera.left=-half*420/310;camera.right=half*420/310;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();let trophy;if(rank){trophy=award(rank);trophy.g.position.set(0,world.state.level>=3?62:38,-8);trophy.g.lookAt(camera.position);world.root.add(trophy.g);}renderer.render(scene,camera);const url=renderer.domElement.toDataURL('image/png');world.dispose();trophy?.dispose?.();trophy?.geo.dispose();trophy?.mat.dispose();return {url,rank,scale,phase:P.plan(team).phase,sides:P.plan(team).sides,leader:team.id,group};};const result=queue.then(task);queue=result.catch(()=>{});return result;}
 function label(rank){return rank?['','1º geral · medalha dourada','2º geral · medalha prata','3º geral · medalha bronze'][rank]:'';}
 window.ARENA_OFFICIAL_MARKERS={render,scaleFor};
})();

;
/* Immediate 3D silhouette: same real construction state as the approved model, no GPU or image wait. */
(()=>{
 const safe=c=>/^#[a-f\d]{6}$/i.test(c)?c:'#28755d';
 function silhouette(t){const p=window.ARENA_ART_STATE.plan(t),c=safe(t.color1),c2=safe(t.color2),out=[],bounds=[];
  const xy=(x,z,h=0)=>{const p=[120+(x-z)*.79,99+(x+z)*.34-h*.86];bounds.push(p);return p;},pts=a=>a.map(p=>xy(...p).map(v=>v.toFixed(1)).join(',')).join(' '),poly=(a,fill,stroke='')=>out.push('<polygon points="'+pts(a)+'" fill="'+fill+'"'+(stroke?' stroke="'+stroke+'" stroke-width=".65"':'')+'/>');
  function box(x,z,w,d,y,h,fill){const a=[x-w/2,z-d/2],b=[x+w/2,z-d/2],cc=[x+w/2,z+d/2],dd=[x-w/2,z+d/2];poly([[...b,y],[...cc,y],[...cc,y+h],[...b,y+h]],'#89938a');poly([[...cc,y],[...dd,y],[...dd,y+h],[...cc,y+h]],'#a4ada0');poly([[...a,y+h],[...b,y+h],[...cc,y+h],[...dd,y+h]],fill,'#697b6930');}
  box(0,-5,119,97,0,2,'#c7d3aa');box(0,-7,70,43,2,0,'#3f9b54');for(let i=0;i<6;i++)box(-29+i*12,-7,6,42,2.1,0,'#52ac64');poly([[-34,-27,2.3],[34,-27,2.3],[34,13,2.3],[-34,13,2.3]],'none','#eff9de');poly([[0,-27,2.3],[0,13,2.3]],'none','#eff9de');const center=xy(0,-7,2.3);out.push('<ellipse cx="'+center[0]+'" cy="'+center[1]+'" rx="8" ry="3.4" fill="none" stroke="#eff9de" stroke-width=".7"/>');
  if(!p.level){for(const z of[-30,17])for(let x=-37;x<=37;x+=7){box(x,z,.6,.6,2,3.2,'#9b754b');}box(0,-30,75,.5,3.2,.4,'#a47b4b');box(0,17,75,.5,3.2,.4,'#a47b4b');for(const x of[-39,39])box(x,-7,.6,48,3.2,.4,'#a47b4b');box(-24,23,10,2,2,1.5,c);box(24,23,10,2,2,1.5,c);}
  function side(side,tier){const long=side==='main'||side==='back',len=long?Math.min(100,p.standLength):49,d=10,t=tier*7,z=side==='main'?-36-t:side==='back'?23+t:-7,x=side==='left'?-44-t:side==='right'?44+t:0;
   box(x,z,long?len:d,long?d:len,2+tier*6.8,5.8,'#bcc4b9');for(let row=0;row<4;row++){const offset=row*1.9,dy=2.7+row*.9+tier*6.8;box(x+(side==='left'?-offset:side==='right'?offset:0),z+(side==='main'?-offset:side==='back'?offset:0),long?len-2:1.4,long?1.4:len-2,dy,.7,c);}
   if(side==='main'&&tier===p.tiers-1){for(const xx of[-len/2,len/2])box(xx,z-4,.7,.7,2+tier*6.8,11,'#a6ada1');box(x,z-1,len+4,14,12+tier*6.8,1.2,c2);box(x,z+6,len+4,.8,12+tier*6.8,.8,c);}}
  for(let tier=0;tier<p.tiers;tier++)for(const name of p.sides)side(name,tier);
  if(p.level>=3){const h=p.level===4?27:20,rx=p.level===4?68:60,rz=p.level===4?53:46;for(const z of[-7-rz,-7+rz]){box(0,z,rx*2,8,2,h,'#d8ded0');box(0,z,rx*2+2,10,h,1.5,c2);box(0,z+4,rx*2,.8,h-.5,1.2,c);}for(const x of[-rx,rx]){box(x,-7,8,rz*2,2,h,'#d8ded0');box(x,-7,10,rz*2+2,h,1.5,c2);box(x+4,-7,.8,rz*2,h-.5,1.2,c);}}
  return '<svg class="map-stadium instant-miniature level-'+p.level+'" data-construction="'+p.phase+'" viewBox="'+[Math.min(...bounds.map(p=>p[0]))-4,Math.min(...bounds.map(p=>p[1]))-4,Math.max(...bounds.map(p=>p[0]))-Math.min(...bounds.map(p=>p[0]))+8,Math.max(...bounds.map(p=>p[1]))-Math.min(...bounds.map(p=>p[1]))+8].join(' ')+'" aria-hidden="true">'+out.join('')+'</svg>';
 }
 function rank(t){return t.cadeiras>0&&t.rankAll>=1&&t.rankAll<=3?t.rankAll:0;}
 function badge(t){const n=rank(t);if(!n)return '';const fill=['','#e4b632','#bdcdd7','#b87d50'][n],title=n+'º geral · medalha '+['','dourada','prata','bronze'][n];return '<span class="map-rank-award rank-'+n+'" role="img" aria-label="'+title+'"><svg viewBox="0 0 36 38" aria-hidden="true"><circle cx="18" cy="18" r="15" fill="'+fill+'" stroke="#fff5d4" stroke-width="1.4"/><circle cx="18" cy="18" r="12" fill="none" stroke="#183e322f"/><text x="18" y="23" fill="#173b30" text-anchor="middle" font-family="Arial,sans-serif" font-weight="800" font-size="15">'+n+'º</text></svg></span>';}
 window.ARENA_MARKER_VISUALS={silhouette,rank,badge,showPlazaLabels:(zoom,inPlaza)=>!!inPlaza&&zoom>=18.2};
})();

;
/* Demand-loaded, bounded static 3D snapshots. Never delays the base map. */
(()=>{const cache=new Map(),jobs=new Map(),targets=new Set();let observer;
 function key(t){return JSON.stringify([t.id,t.level,t.cadeiras,t.color1,t.color2,t.cadeiras>0&&t.rankAll<=3?t.rankAll:0]);}
 function rank(t){return t.cadeiras>0&&t.rankAll<=3?t.rankAll:0;}
 function mount(el,t){const k=key(t);el.dataset.miniatureKey=k;el.dataset.miniature='waiting';el.dataset.rank=rank(t)||'';el.dataset.construction=window.ARENA_ART_STATE.plan(t).phase;const valid=()=>el.isConnected&&el.dataset.miniatureKey===k;
  const paint=out=>{if(!valid())return;const img=new Image();img.className='marker-picture map-stadium'+(rank(t)===1?' medal-glow':'');img.alt=t.name+' · '+window.ARENA_ART_STATE.plan(t).work+(rank(t)?' · '+rank(t)+'º geral':'');img.onload=()=>{if(!valid())return;el.querySelector('.marker-picture')?.remove();el.append(img);el.classList.add('miniature-ready');el.dataset.miniature='ready';};img.src=out.url;};
  const draw=()=>{observer?.unobserve(el);targets.delete(el);if(!valid())return;el.dataset.miniature='rendering';if(cache.has(k)){paint(cache.get(k));return;}let job=jobs.get(k);if(!job){job=window.ARENA_OFFICIAL_MARKERS.render(t,{rank:0}).then(out=>{cache.set(k,out);while(cache.size>96)cache.delete(cache.keys().next().value);return out;}).finally(()=>jobs.delete(k));jobs.set(k,job);}job.then(paint).catch(()=>{if(valid())el.dataset.miniature='fallback';});};
  if(cache.has(k)){paint(cache.get(k));return;}
  if(!window.IntersectionObserver){draw();return;}
  observer ||=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target._drawMiniature?.();}),{rootMargin:'40px'});
  el._drawMiniature=draw;targets.add(el);observer.observe(el);queueMicrotask(()=>{if(!valid())return;const box=el.getBoundingClientRect();if(box.width&&box.height&&box.right>0&&box.left<innerWidth&&box.bottom>0&&box.top<innerHeight)draw();});for(const old of targets)if(old!==el&&!old.isConnected){observer.unobserve(old);targets.delete(old);}
 }
 window.ARENA_MARKER_PREVIEWS={mount};
})();

;
/* Screen-space label layout; no data or role changes. */
(()=>{function arrange(input,width,height){const placed=[],gap=5;for(const box of [...input].sort((a,b)=>Number(b.own)-Number(a.own))){const w=Math.min(box.width,width-12),h=box.height;let x=Math.max(6,Math.min(width-w-6,box.x-w/2)),y=Math.max(6,Math.min(height-h-6,box.y-h));const overlaps=(xx,yy)=>placed.some(p=>xx<p.x+p.width+gap&&xx+w+gap>p.x&&yy<p.y+p.height+gap&&yy+h+gap>p.y);let found=false;for(let row=0;row<Math.ceil(height/(h+gap))&&!found;row++){for(const dir of row?[-1,1]:[0]){const yy=y+dir*row*(h+gap);if(yy<6||yy+h>height-6)continue;for(const xx of[x,6,width-w-6]){if(!overlaps(xx,yy)){x=xx;y=yy;found=true;break;}}if(found)break;}}if(found)placed.push({...box,x,y,width:w,height:h});}return placed;}
 const localArrange=arrange;
 function completeLayout(input,width,height){const result=localArrange(input,width,height);if(result.length===input.length||!input.length)return result;const gap=5,maxWidth=Math.max(...input.map(x=>Math.min(x.width,width-12))),maxHeight=Math.max(...input.map(x=>x.height)),cols=Math.max(1,Math.floor((width-12+gap)/(maxWidth+gap))),rows=Math.ceil(input.length/cols),needed=rows*(maxHeight+gap)-gap;if(needed>height-12)return result;const sorted=[...input].sort((a,b)=>Number(b.own)-Number(a.own)),mid=input.reduce((v,b)=>v+b.y,0)/input.length,top=Math.max(6,Math.min(height-needed-6,mid-needed/2)),cell=(width-12)/cols;return sorted.map((b,i)=>({...b,x:6+(i%cols)*cell+(cell-b.width)/2,y:top+Math.floor(i/cols)*(maxHeight+gap)}));}
 window.ARENA_LABELS={arrange:completeLayout};})();

;
/* One static photo of the same neighborhood. No extra animation loop or game writes. */
(()=>{
 const cache=new Map();let renderer,queue=Promise.resolve(),groups=new Map();
 function key(t){return JSON.stringify([t.id,t.level,t.cadeiras,t.color1,t.color2,t.stadium_items||[],t.fans?.length,t.presidente?.h,t.lideres?.map(f=>f.h)]);}
 function remember(k,url){cache.delete(k);cache.set(k,url);while(cache.size>12)cache.delete(cache.keys().next().value);return url;}
 function fallback(t){return window.ARENA_NEIGHBORHOOD.svg(t);}
 async function photo(team,valid){
  const k=key(team);if(cache.has(k))return cache.get(k);
  const world=await window.ARENA_ART.create(team,{lite:true,animate:false,detailed:true,items:team.stadium_items||[]});
  try{if(!valid())return null;const T=window.THREE;
   if(!renderer){renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});renderer.outputEncoding=T.sRGBEncoding;renderer.setSize(640,400,false);renderer.setClearColor(0xd6eadb,1);renderer.setPixelRatio(1);}
   const scene=new T.Scene();scene.add(world.root);scene.add(new T.HemisphereLight(0xf0f9ff,0x709050,.8));const sun=new T.DirectionalLight(0xfff3e5,.85);sun.position.set(-100,180,90);scene.add(sun);
   const camera=new T.OrthographicCamera(-1,1,1,-1,.1,1500);camera.position.set(160,240,280);camera.lookAt(0,3,0);camera.updateMatrixWorld(true);
   let x=0,y=0;for(const a of [-1,1])for(const b of [0,38])for(const c of [-1,1]){const p=new T.Vector3(a*world.state.width/2,b,c*world.state.depth/2).applyMatrix4(camera.matrixWorldInverse);x=Math.max(x,Math.abs(p.x));y=Math.max(y,Math.abs(p.y));}
   const half=Math.max(y,x/1.6)*1.06;camera.left=-half*1.6;camera.right=half*1.6;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();renderer.render(scene,camera);
   return remember(k,renderer.domElement.toDataURL('image/png'));
  }finally{world.dispose();renderer?.renderLists.dispose();}
 }
 function cancel(group='card'){const state=groups.get(group);if(state){state.cancelled=true;state.observer?.disconnect();groups.delete(group);}}
 function mount(el,team,{lite=false,group='card'}={}){
  cancel(group);const state={cancelled:false,observer:null};groups.set(group,state);const valid=()=>!state.cancelled&&el.isConnected;el.dataset.preview='light';el.innerHTML=fallback(team);el.setAttribute('aria-label','Bairro do estádio de '+team.name);el.setAttribute('role','img');
  if(lite)return;
  const draw=()=>{if(!valid())return;state.observer?.disconnect();queue=queue.catch(()=>{}).then(async()=>{
   if(!valid())return;const url=await photo(team,()=>valid());if(!url||!valid())return;
   const img=document.createElement('img');img.alt='Bairro de '+team.name+' · '+window.ARENA_ART_STATE.names[team.level];img.width=640;img.height=400;img.decoding='async';img.src=url;el.replaceChildren(img);el.dataset.preview='ready';
  }).catch(()=>{if(el.isConnected)el.dataset.preview='light';});};
  if(!window.IntersectionObserver){draw();return;}state.observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))draw();},{root:el.closest('#sheet'),rootMargin:'80px'});state.observer.observe(el);
 }
 window.ARENA_THUMBNAIL={mount,cancel};
})();

;
/* 1080 x 1920 PNG from the current neighborhood canvas, never from cached scores. */
(()=>{
 const E=window.ARENA_ELECTION,esc=s=>window.ARENA_ELECTION_UI.esc(s),fmt=n=>Number(n).toLocaleString('pt-BR');
 let dialog,version=0,url=null;
 async function snapshot(team){await window.ARENA_ART.load();const T=window.THREE,world=await window.ARENA_ART.create(team,{lite:true,animate:false,detailed:true,items:team.stadium_items||[]});let renderer;try{renderer=new T.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'low-power'});renderer.outputEncoding=T.sRGBEncoding;renderer.setSize(1000,700,false);renderer.setPixelRatio(1);renderer.setClearColor(0xe2efda,1);const scene=new T.Scene();scene.add(world.root);scene.add(new T.HemisphereLight(0xf0f9ff,0x709050,.8));const sun=new T.DirectionalLight(0xfff3e5,.85);sun.position.set(-100,180,90);scene.add(sun);const camera=new T.OrthographicCamera(-1,1,1,-1,.1,1800);camera.position.set(160,240,280);camera.lookAt(0,3,0);camera.updateMatrixWorld(true);let x=0,y=0;for(const a of [-1,1])for(const b of [0,48])for(const c of [-1,1]){const p=new T.Vector3(a*world.state.width/2,b,c*world.state.depth/2).applyMatrix4(camera.matrixWorldInverse);x=Math.max(x,Math.abs(p.x));y=Math.max(y,Math.abs(p.y));}const half=Math.max(y,x/(10/7))*1.06;camera.left=-half*10/7;camera.right=half*10/7;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();renderer.render(scene,camera);return renderer.domElement.toDataURL('image/png');}finally{world.dispose();renderer?.dispose();}}
 async function image(src,optional=false){if(!src)return null;return new Promise((resolve,reject)=>{const img=new Image();img.crossOrigin='anonymous';img.onload=()=>resolve(img);img.onerror=()=>optional?resolve(null):reject(Error('Não foi possível carregar o estádio.'));img.src=src;});}
 function round(ctx,x,y,w,h,r,fill){ctx.fillStyle=fill;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill();}
 function fitText(ctx,text,max,size,min=24){do{ctx.font='800 '+size+'px Arial';if(ctx.measureText(text).width<=max)break;size--;}while(size>min);return size;}
 function lines(ctx,text,x,y,max,lineHeight){const words=text.split(' ');let line='';for(const word of words){const next=line?line+' '+word:word;if(ctx.measureText(next).width>max&&line){ctx.fillText(line,x,y);y+=lineHeight;line=word;}else line=next;}if(line)ctx.fillText(line,x,y);return y;}
 function model(team,fan,state){const p=fan?E.personal(fan,state):null;return {team:team.name,level:window.GAME.LEVELS[team.level].name,chairs:team.cadeiras,rank:team.cadeiras?team.rankAll:null,fan:fan?{handle:fan.h,chairs:fan.cad,entry:fan.entryNumber,candidate:!!p.candidate&&!state.season?.roles_released}:null};}
 async function create(team,fan,state){const data=model(team,fan,state),[stadium,crest]=await Promise.all([snapshot(team).then(s=>image(s)),image('/assets/escudos/'+team.id+'.png',true)]);await document.fonts.ready;const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1920;const ctx=canvas.getContext('2d'),color=/^#[\da-f]{6}$/i.test(team.color1)?team.color1:'#176346';const grad=ctx.createLinearGradient(0,0,1080,1920);grad.addColorStop(0,'#102e2a');grad.addColorStop(.32,color);grad.addColorStop(.74,color);grad.addColorStop(1,'#092d29');ctx.fillStyle=grad;ctx.fillRect(0,0,1080,1920);ctx.globalAlpha=.08;for(let x=-500;x<1600;x+=130){ctx.fillStyle='#ffffff';ctx.fillRect(x,0,35,1920);}ctx.globalAlpha=1;ctx.fillStyle='#f3dc9b';ctx.font='700 29px Arial';ctx.fillText('ARENA DAS TORCIDAS',64,92);ctx.font='500 22px Arial';ctx.fillStyle='#d1dfd5';ctx.fillText('TEMPORADA 1 · '+(fan?'MINHA PARTICIPAÇÃO':'MINHA TORCIDA'),64,138);
 round(ctx,64,185,952,202,28,'#fffbee');if(crest){const s=Math.min(140/crest.width,145/crest.height);ctx.drawImage(crest,94+(140-crest.width*s)/2,213+(145-crest.height*s)/2,crest.width*s,crest.height*s);}ctx.fillStyle='#103d30';fitText(ctx,data.team,crest?690:870,67,30);ctx.fillText(data.team,crest?262:98,282);ctx.font='600 29px Arial';ctx.fillText(data.level,crest?262:98,333);
 round(ctx,40,427,1000,700,28,'#e2efda');ctx.save();ctx.beginPath();ctx.roundRect(40,427,1000,700,28);ctx.clip();ctx.drawImage(stadium,40,427,1000,700);ctx.restore();
 round(ctx,64,1164,952,142,24,'#fffbee');ctx.fillStyle='#103d30';ctx.font='800 66px Arial';ctx.fillText(fmt(data.chairs),98,1235);ctx.font='600 26px Arial';ctx.fillText('CADEIRAS DO TIME',98,1274);ctx.font='800 66px Arial';ctx.fillText(data.rank?data.rank+'º':'—',722,1235);ctx.font='600 26px Arial';ctx.fillText('GERAL',722,1274);
 round(ctx,40,1340,1000,300,24,'#102e2a');if(data.fan){ctx.fillStyle='#ffffff';fitText(ctx,'@'+data.fan.handle,940,52,29);ctx.fillText('@'+data.fan.handle,64,1400);ctx.font='600 32px Arial';ctx.fillText(fmt(data.fan.chairs)+' cadeiras · Torcedor nº '+fmt(data.fan.entry),64,1456);if(data.fan.candidate){round(ctx,64,1494,952,112,20,'#f1d492');ctx.fillStyle='#173c2d';ctx.font='800 31px Arial';lines(ctx,'Candidato(a) a presidente do '+data.team,90,1538,898,39);}else{ctx.fillStyle='#dce9d8';ctx.font='600 29px Arial';lines(ctx,'Minha torcida está construindo uma arena. Eu faço parte dessa história.',64,1524,930,41);}}
 else{ctx.fillStyle='#fff8e4';ctx.font='800 43px Arial';lines(ctx,'Sua cadeira faz sua torcida crescer.',64,1410,920,56);ctx.font='500 30px Arial';ctx.fillText('Do campinho à Mega Arena. Vem com a gente!',64,1553);}
 ctx.fillStyle='#f1d492';ctx.font='700 24px Arial';if(location.pathname.startsWith('/laboratorio-eleicao'))ctx.fillText('PRÉVIA DO LABORATÓRIO · SEM ALTERAR O JOGO',64,1670);ctx.fillStyle='#fffbee';ctx.font='700 32px Arial';ctx.fillText('Comenta o nome do seu time no',64,1740);ctx.font='800 39px Arial';ctx.fillText('@arenadastorcidas2026',64,1799);ctx.font='500 26px Arial';ctx.fillText('arenadastorcidasoficial.com.br',64,1854);const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('Não foi possível exportar a imagem.')),'image/png'));return {blob,data,canvas};}
 function ensureDialog(){if(dialog)return dialog;dialog=document.createElement('dialog');dialog.className='share-dialog';dialog.setAttribute('aria-label','Compartilhar no Story');dialog.innerHTML='<header><h2>Compartilhar no Story</h2><button type="button" aria-label="Fechar compartilhamento">×</button></header><p class="note">Escolha o cartão. Nenhum compartilhamento dá cadeira automaticamente.</p><div class="share-formats"><button class="btn ghost" data-format="club">Minha torcida</button><button class="btn ghost" data-format="personal">Minha participação</button></div><p class="share-status" role="status"></p><img class="share-preview" alt="Prévia do cartão Story 1080 por 1920" hidden><div class="share-actions"><button class="btn" data-send disabled>Compartilhar imagem</button><a class="btn ghost" data-download hidden>Baixar imagem</a></div><p class="note">O celular mostra os aplicativos compatíveis. Se não houver compartilhamento de arquivo, baixe a imagem.</p>';dialog.querySelector('header button').onclick=()=>dialog.close();dialog.addEventListener('close',()=>{version++;if(url){URL.revokeObjectURL(url);url=null;}dialog.querySelector('img').removeAttribute('src');});document.body.append(dialog);return dialog;}
 function open(team,fan,state,format=fan?'personal':'club'){const d=ensureDialog(),status=d.querySelector('[role="status"]'),preview=d.querySelector('img'),send=d.querySelector('[data-send]'),download=d.querySelector('[data-download]'),personalButton=d.querySelector('[data-format="personal"]');personalButton.hidden=!fan;d.showModal();async function render(kind){const ticket=++version;send.disabled=true;preview.hidden=true;download.hidden=true;status.textContent='Preparando seu estádio em 3D…';for(const b of d.querySelectorAll('[data-format]'))b.setAttribute('aria-pressed',String(b.dataset.format===kind));try{const result=await create(team,kind==='personal'?fan:null,state);if(ticket!==version||!d.open)return;if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(result.blob);const file=new File([result.blob],'arena-'+team.id+(kind==='personal'?'-'+fan.h:'')+'.png',{type:'image/png'});preview.src=url;preview.hidden=false;download.href=url;download.download=file.name;download.hidden=false;let native=false;try{native=!!navigator.share&&!!navigator.canShare?.({files:[file]});}catch{}send.textContent=native?'Compartilhar imagem':'Baixar imagem';send.disabled=false;status.textContent='Pronto · 1080 × 1920 · '+(native?'escolha o aplicativo no menu do celular.':'compartilhamento de arquivo indisponível neste navegador; baixe a imagem.');send.onclick=async()=>{if(!native){download.click();status.textContent='Download iniciado. Abra a imagem no aplicativo que preferir.';return;}try{await navigator.share({files:[file],title:'Arena das Torcidas · '+team.name});status.textContent='Compartilhamento concluído.';}catch(e){status.textContent=e.name==='AbortError'?'Compartilhamento cancelado. Sua imagem continua pronta.':'Não foi possível compartilhar. Use Baixar imagem.';}};}catch(e){if(ticket===version)status.textContent='Não foi possível gerar o cartão. Tente novamente. '+e.message;}}
 for(const b of d.querySelectorAll('[data-format]'))b.onclick=()=>render(b.dataset.format);render(format);}
 window.ARENA_SHARE={open,create,model};
})();

;
/* Official countdown: reads the real season snapshot, never scores or releases offices. */
(()=>{
 const E=window.ARENA_ELECTION,UI=window.ARENA_ELECTION_UI;let state;
 function status(now=Date.now(),released=false,target=E.firstAt){const left=Date.parse(target)-Number(now);if(released)return {phase:'results',text:'Conheça os primeiros presidentes',urgent:false};if(left<=0)return {phase:'counting',text:'Apuração em andamento · aguarde os resultados',urgent:true};const mins=Math.ceil(left/60000),days=Math.floor(mins/1440),hours=Math.floor(mins%1440/60),minutes=mins%60;return {phase:'waiting',text:'Faltam '+(days?days+'d ':'')+hours+'h '+minutes+'min',urgent:left<=86400000};}
 const read=()=>status(Date.now(),!!state?.season?.roles_released,state?.governance?.first_role_at||E.firstAt);
 const enabled=()=>state?.season?.number===1;
 function tick(){if(!state||!enabled())return;const c=read(),notice=document.getElementById('first-presidents-notice'),badge=document.getElementById('season-badge');if(notice){notice.hidden=false;const text=c.phase==='results'?c.text:'Eleição da Torcida · '+c.text;if(notice.textContent!==text)notice.textContent=text;}badge?.classList.toggle('election-urgent',c.urgent);badge?.setAttribute('aria-label','Eleição da Torcida · '+c.text+(c.phase==='results'?': abrir resultados':': ver regulamento'));document.body.classList.toggle('election-lite',document.getElementById('camera-light')?.getAttribute('aria-pressed')==='true');for(const n of document.querySelectorAll('[data-election-clock]'))if(n.textContent!==c.text)n.textContent=c.text;for(const n of document.querySelectorAll('.election-timer')){n.classList.toggle('election-urgent',c.urgent);n.dataset.electionResult=String(c.phase==='results');}}
 function update(value){state=value;tick();}
 const contest=UI.contest;UI.contest=(team,s)=>{update(s);if(!enabled())return contest(team,s);const c=read();return '<button type="button" class="election-timer'+(c.urgent?' election-urgent':'')+'" data-election-result="'+(c.phase==='results')+'"><b>ELEIÇÃO DA TORCIDA'+(c.phase==='results'?'':' · DOM 25/10 · 23H59')+'</b><span data-election-clock>'+UI.esc(c.text)+'</span></button>'+contest(team,s);};
 function openResults(){const view=document.getElementById('view-mapa');if(!view.classList.contains('activity-open'))document.getElementById('activity-toggle')?.click();document.querySelector('.activity-item')?.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 document.addEventListener('click',e=>{const b=e.target.closest('[data-election-result],#season-badge');if(!b||!enabled())return;if(state.season?.roles_released){e.preventDefault();e.stopImmediatePropagation();openResults();}else if(b.matches('[data-election-result]')){e.preventDefault();document.getElementById('season-badge')?.click();}},true);
 document.addEventListener('click',e=>{if(e.target.closest('#camera-light,#camera-tilt'))queueMicrotask(tick);});document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});setInterval(()=>{if(!document.hidden)tick();},1000);
 window.ARENA_ELECTION_COUNTDOWN={status,update};
})();

;
/* Retains the existing score/profile/rules UI; delegates all map drawing to the new district. */
(()=>{'use strict';const params=new URLSearchParams(location.search),host=document.querySelector('#view-mapa'),district=document.createElement('iframe');district.id='board-neighborhood';district.title='Bairro da torcida';host.prepend(district);let current='',signature='',payload;
if(parent===window){const view=params.get('view');params.delete('view');params.delete('panel');location.replace('/laboratorio-navegacao/?'+params+(view?'#'+view:''));return;}const back=()=>parent.postMessage({type:'board:back'},location.origin),ready=()=>parent.postMessage({type:'board:neighborhood-ready',club:payload?.id||params.get('clube')},location.origin);
const neutral=()=>{const m={};for(const name of ['addControl','addImage','addLayer','addSource','easeTo','fitBounds','jumpTo','off','on','once','removeLayer','removeSource','resize','setLayoutProperty','setMaxPitch','setPaintProperty','stop'])m[name]=()=>m;Object.assign(m,{getLayer:()=>null,getSource:()=>null,getZoom:()=>2,getPitch:()=>0,getBearing:()=>0,getMinZoom:()=>-.7,getMaxZoom:()=>20.5,getPadding:()=>({top:0,right:0,bottom:0,left:0}),getCenter:()=>({lng:-53,lat:-15,toArray:()=>[-53,-15]}),getBounds:()=>({contains:()=>false}),isMoving:()=>false,isSourceLoaded:()=>false,isStyleLoaded:()=>true,project:()=>({x:0,y:0}),unproject:()=>({lng:-53,lat:-15}),querySourceFeatures:()=>[],cameraForBounds:()=>null});return m;};
window.maplibregl={Map:class{constructor(){return neutral();}},AttributionControl:class{},Marker:class{constructor(el){this.el=el?.element||el||document.createElement('span');}setLngLat(){return this;}addTo(){return this;}remove(){return this;}getElement(){return this.el;}setOffset(){return this;}setRotation(){return this;}}};
function plain(t,handle){return {id:t.id,name:t.name,short:t.short,city:t.city,uf:t.uf,country:t.country,color1:t.color1,color2:t.color2,level:t.level,cadeiras:t.cadeiras,n:t.n,rankAll:t.rankAll,stadium_items:t.stadium_items||[],visitorHandle:handle||'',fans:t.fans.map(f=>{const {team,...rest}=f;return rest;}),presidente:t.presidente?{h:t.presidente.h,cad:t.presidente.cad}:null,lideres:(t.lideres||[]).map(f=>({h:f.h,cad:f.cad}))};}
function focus(t,handle){if(params.has('view')){parent.postMessage({type:'board:open-club',club:t.id,handle:handle||''},location.origin);return;}const key=t.id+':'+(handle||''),next=plain(t,handle),sig=JSON.stringify(next);payload=next;if(key!==current){current=key;signature=sig;const q=new URLSearchParams({clube:t.id,panel:'1'});if(handle)q.set('u',handle);if(params.get('modo')==='leve')q.set('modo','leve');district.src='/laboratorio-navegacao/bairro.html?'+q;}else if(sig!==signature){signature=sig;district.contentWindow?.postMessage({type:'board:update',team:payload},location.origin);}}
function command(view){district.contentWindow?.postMessage({type:'board:view',view},location.origin);}
window.ARENA_PANEL={focus,back,ready,command,finish(){if(document.body.dataset.view!=='mapa'||(!current&&!params.has('u')))ready();}};
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==district.contentWindow)return;if(e.data?.type==='board:back')back();if(e.data?.type==='board:neighborhood-ready'){if(payload)district.contentWindow.postMessage({type:'board:update',team:payload},location.origin);if(window.ARENA_PANEL.suspended)district.contentWindow.postMessage({type:'board:suspend',paused:true},location.origin);ready();}});
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent||e.data?.type!=='board:suspend')return;window.ARENA_PANEL.suspended=!!e.data.paused;district.contentWindow?.postMessage({type:'board:suspend',paused:!!e.data.paused},location.origin);});
const reportView=()=>parent.postMessage({type:'board:panel-view',view:document.body.dataset.view||'mapa'},location.origin);new MutationObserver(reportView).observe(document.body,{attributes:true,attributeFilter:['data-view']});
document.addEventListener('click',e=>{const b=e.target.closest('#tab-mapa,#camera-replay,#sh-close,#sheet-dismiss,#missing-close');if(b){e.preventDefault();e.stopImmediatePropagation();back();}},true);
const sheet=document.querySelector('#sheet');new MutationObserver(()=>document.body.classList.toggle('panel-folded',sheet.hidden||sheet.classList.contains('folded'))).observe(sheet,{attributes:true,attributeFilter:['class','hidden']});
document.addEventListener('click',e=>{if(e.target.closest('#inspect-plaza')||e.target.textContent==='Ver meu bonequinho no mapa'){command('plaza');}if(e.target.closest('#inspect-seats'))command('seats');if(e.target.closest('#sh-map'))command('wide');});
})();

(()=>{let label='← Voltar ao mapa';for(const page of document.querySelectorAll('.page .wrap')){const b=document.createElement('button');b.className='btn ghost lab-page-return';b.type='button';b.textContent=label;b.onclick=()=>parent.postMessage({type:'board:page-back'},location.origin);page.prepend(b);}window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent||e.data?.type!=='board:context')return;for(const b of document.querySelectorAll('.lab-page-return'))b.textContent=e.data.label;});})();

;
// Site público: mapa, súmula do time, ranking, regras e busca.
(async function () {
 if(parent===window)return;
  const boardPanel=true; const previewParams=new URLSearchParams(location.search);
  if(previewParams.has('preview')){location.replace('/laboratorio-evolucao/?'+previewParams.toString());return;}
  const G = window.GAME, C = G.CONFIG, LEVELS = G.LEVELS;
  const $ = (id) => document.getElementById(id);
  const fmt = (n) => Number(n).toLocaleString("pt-BR");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const FOREIGN = (t) => t.country && t.country !== 'BR';
  const countryNames = new Intl.DisplayNames(['pt-BR'], {type:'region'});
  const countryName = (code) => countryNames.of(code) || code;

  document.title = C.NOME_DO_JOGO;
  const words = C.NOME_DO_JOGO.split(" ");
  $("brand").innerHTML = esc(words.slice(0, -1).join(" ")) + (words.length > 1 ? " " : "") + "<span>" + esc(words[words.length - 1]) + "</span>";
  $("ig-handle").textContent = C.INSTAGRAM ? "@" + C.INSTAGRAM : "";
  if (G.DEMO) {$("demo-tag").hidden = false;$("demo-tag").textContent="Demo";$("demo-tag").title="Demonstração com torcedores fictícios";}

  const map = new maplibregl.Map({container:'map',style:window.ARENA_MAP.style,center:[-53,-15],zoom:2,pitch:0,maxPitch:60,minZoom:-.7,maxZoom:20.5,attributionControl:false,renderWorldCopies:false,locale:{'NavigationControl.ZoomIn':'Aproximar mapa','NavigationControl.ZoomOut':'Afastar mapa'}});
  const zoomControl={onAdd(){const box=document.createElement('div');box.className='maplibregl-ctrl maplibregl-ctrl-group';for(const event of ['dblclick','mousedown','touchstart'])box.addEventListener(event,e=>e.stopPropagation());for(const [label,step,symbol]of[['Aproximar mapa',1,'+'],['Afastar mapa',-1,'−']]){const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',label);b.title=label;map.on('zoom',()=>b.setAttribute('aria-description','Ampliação atual: '+map.getZoom().toFixed(1)));b.textContent=symbol;b.style.fontSize='22px';b.onclick=e=>{e.stopPropagation();map.stop();const center=map.getCenter().toArray();map.easeTo({...window.MAP_LAYOUT.zoomCamera(center,map.getZoom(),step,map.getMinZoom(),map.getMaxZoom()),duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:300});};box.append(b);}this.box=box;return box;},onRemove(){this.box.remove();}};
  map.addControl(zoomControl,'bottom-left');
  map.addControl(new maplibregl.AttributionControl({compact:true,customAttribution:'<a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener">Natural Earth</a> · Arena das Torcidas'}));
  // Draw the country before waiting for scores, crests or models.
  map.fitBounds([[-74.1,-34.2],[-34.6,5.5]],{padding:{top:70,bottom:100,left:matchMedia('(max-width:760px)').matches?18:350,right:24},maxZoom:4,duration:0});
  let baseReady=false,catalogReady=false;
  const earlyPins=()=>{if(boardPanel)return;if(catalogReady||map.getSource('first-stadiums'))return;
    const canvas=document.createElement('canvas');canvas.width=32;canvas.height=24;const ctx=canvas.getContext('2d');ctx.fillStyle='#fff8e2';ctx.fillRect(1,1,30,22);ctx.fillStyle='#28755d';ctx.fillRect(4,4,24,16);ctx.strokeStyle='#e8f2d8';ctx.lineWidth=1;ctx.strokeRect(6,6,20,12);ctx.beginPath();ctx.moveTo(16,6);ctx.lineTo(16,18);ctx.stroke();
    map.addImage('first-field',ctx.getImageData(0,0,32,24));
    map.addSource('first-stadiums',{type:'geojson',cluster:true,clusterRadius:45,data:{type:'FeatureCollection',features:window.TEAMS_SEED.filter(t=>t.country==='BR').map(t=>({type:'Feature',properties:{},geometry:{type:'Point',coordinates:[t.lon,t.lat]}}))}});
    map.addLayer({id:'first-stadiums',type:'symbol',source:'first-stadiums',layout:{'icon-image':'first-field','icon-size':.8,'icon-allow-overlap':false}});
  };
  map.once('load',earlyPins);
  function markBaseReady(){if(baseReady||!map.getSource('world')||!map.isSourceLoaded('world'))return;baseReady=true;document.documentElement.dataset.mapReadyMs=Math.round(performance.now());$('world-status').hidden=true;$('instant-world')?.remove();map.off('render',markBaseReady);}
  map.on('render',markBaseReady);
  map.on('error',()=>{if(!baseReady){$('world-status').textContent='O mapa está demorando. Você pode buscar sua torcida enquanto ele carrega.';}});

  // ---------- dados ----------
  let raw, S;
  try { raw = await (window.ARENA_DATA||G.load()); }
  catch (e) { console.error(e); $("boletim").innerHTML = "<summary>Dados indisponíveis</summary><p>Confira a conexão e recarregue a página.</p>";$('world-status').hidden=false;$('world-status').textContent='Não conseguimos buscar a torcida. Confira a conexão e atualize a página.'; return; }
  document.documentElement.dataset.dataReadyMs=Math.round(performance.now());
  S = G.compute(raw, raw.inactivity);
  $('club-count').textContent = fmt(S.teams.length);
  $('country-count').textContent = fmt(new Set(S.teams.map(t=>t.country)).size);
  $('fan-count').textContent = fmt(S.fans.length);
  const preseason=!G.DEMO&&(!S.season||S.season.status==='draft');
  if(!G.DEMO&&S.season&&S.season.status==='active'){
    document.querySelector('.season-label').textContent='TEMPORADA '+S.season.number+' · VALENDO';
    $('pilot-note').textContent='A temporada começou! Comente seu time no Reels oficial e faça sua torcida crescer. O encerramento será anunciado com pelo menos 14 dias de antecedência.';
    $('season-rules-status').textContent='Temporada '+S.season.number+' valendo. Veja como participar, acompanhar as conquistas e disputar os cargos.';
    document.querySelector('.season-status').textContent='TEMPORADA '+S.season.number+' · VALENDO';
  }
  function renderSeasonBadge(){const badge=G.seasonBadge(S.season);$('season-badge-label').textContent=badge.title;$('season-countdown').textContent=badge.detail;$('season-countdown').hidden=!badge.detail;$('season-badge').setAttribute('aria-label',badge.title+(badge.detail?' · '+badge.detail:'')+': ver regulamento');$('first-presidents-notice').textContent=window.ARENA_ELECTION.notice;$('first-presidents-notice').hidden=!!S.season?.roles_released;window.ARENA_ELECTION_COUNTDOWN.update(S);}
  if(S.season&&S.season.status==='active'&&!G.DEMO){$('pilot-rules-note').textContent='A Temporada 1 está valendo. Os registros anteriores do piloto ficam separados e não somam nesta disputa.';}
  renderSeasonBadge();
  $('season-badge').onclick=()=>showView('regras');
  $('season-history-content').innerHTML=S.history.length?'<ul class="season-history-list">'+S.history.map(h=>'<li><b>'+esc(h.name)+'</b><span>Resultados e conquistas nas fichas dos times</span></li>').join('')+'</ul>':'<p class="note">A história começa na Temporada 1. Aqui ficarão as temporadas encerradas; as estrelas e os emblemas estarão nas fichas das torcidas.</p>';
  const growing=!G.DEMO&&S.fans.length<25;
  $('fan-count').parentElement.hidden=growing;
  document.querySelector('.community-stats').classList.toggle('early-community',growing);
  $('community-invite').hidden=!growing;
  if(!C.POST_OFICIAL&&!G.DEMO){$('discover-team').innerHTML='Escolha seu time <span>↗</span>';}
  $('stadium-showcase').innerHTML = window.ARENA_MAP.stadium(4,'#197443','#fff8e2');
  const portugal=navigator.language.toLowerCase()==='pt-pt'||['Europe/Lisbon','Atlantic/Madeira','Atlantic/Azores'].includes(Intl.DateTimeFormat().resolvedOptions().timeZone);
  $('featured-country').textContent=portugal?'OLÁ, PORTUGAL.':'OLÁ, BRASIL.';
  $('portugal-clubs').innerHTML = (portugal?['benfica','vitoria-guimaraes','braga','sporting','porto']:['flamengo','corinthians','palmeiras','sao-paulo','gremio']).map(id=>S.teams.find(t=>t.id===id)).filter(Boolean).map(t=>'<button type="button" data-club="'+esc(t.id)+'" title="'+esc(t.name)+'" aria-label="Ver '+esc(t.name)+'"><img data-crest-src="'+esc(t.crest_url || '')+'" alt="'+esc(t.name)+'"><span>'+esc(t.name==='Vitória de Guimarães'?'Vitória SC':t.name)+'</span></button>').join('');
  $('portugal-clubs').onclick = e => {const b=e.target.closest('[data-club]');if(b){const t=S.teams.find(t=>t.id===b.dataset.club);openTeam(t);}};
  $('discover-team').onclick = () => {setIntro(false);$('q').focus();$('q').value='';renderSearch('');};
  if (G.DEMO) { $('simulation-link').hidden=false; $('pilot-note').textContent='Simulação com torcedores fictícios. Estes pontos não pertencem à rodada real.';$('simulation-link').href=location.pathname;$('simulation-link').textContent='Voltar ao jogo real ↗'; }
  function setIntro(open){$('view-mapa').classList.toggle('intro-open',open);$('intro-open').setAttribute('aria-expanded',String(open));if(!open&&document.activeElement===$('intro-close'))$('intro-open').focus();}
  $('intro-open').onclick=()=>setIntro(true);
  $('intro-close').onclick=()=>setIntro(false);
  $('welcome-close').onclick=()=>{$('mobile-welcome').hidden=true;};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setIntro(false);});
  const sizeSidebar = () => { $('view-mapa').style.setProperty('--sidebar-height', document.querySelector('.match-sidebar').offsetHeight+'px'); };
  new ResizeObserver(sizeSidebar).observe(document.querySelector('.match-sidebar')); sizeSidebar();
  $('ranking-overview').innerHTML = '<span class="chairs-primary"><b>'+fmt(S.teams.reduce((sum,t)=>sum+t.cadeiras,0))+'</b> cadeiras na temporada</span><span><b>'+fmt(S.teams.length)+'</b> clubes em campo</span>'+(growing?'<span>Sua cadeira faz sua torcida crescer</span>':'<span><b>'+fmt(S.fans.length)+'</b> torcedores'+(G.DEMO?' fictícios':'')+'</span>')+(preseason?'<span><b>Pré-temporada</b> · lançamento em breve</span>':'<span>Rodada · <b>'+S.weekStart.split('-').reverse().join('/')+'</b></span>');
  if(preseason)$('ranking-calendar').textContent=(S.season?S.season.name:'Temporada 1')+' em preparação. A abertura será anunciada no lançamento. Após o início, o encerramento terá pelo menos 14 dias de aviso. Os números atuais pertencem aos testes do jogo.';


  // ---------- mapa ----------
  const L=window.MAP_LAYOUT;
  const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile=()=>matchMedia('(max-width:760px)').matches;
  let region='br',scope='br',clusterMarkers=[],groupTeams=[],land=[];
  !boardPanel&&fetch('assets/world-110m.json').then(r=>r.json()).then(data=>{land=L.landIndex(data.features);declutter();}).catch(()=>{});
  const groupPicker=$('cluster-picker');
  const VIEWS={am:[[-128,-57],[-33,59]],br:[[-74.1,-34.2],[-34.6,5.5]],eu:[[-12,35],[44,71]],all:[[-130,-57],[155,71]]};
  const zeroPadding={top:0,bottom:0,left:0,right:0};
  const weakDevice=L.preferLight({saveData:navigator.connection?.saveData,memory:navigator.deviceMemory,cores:navigator.hardwareConcurrency});
  const motionProfile=window.ARENA_MOTION_POLICY.profile({smallScreen:mobile(),touch:(navigator.maxTouchPoints||0)>0,memory:navigator.deviceMemory,cores:navigator.hardwareConcurrency,saveData:navigator.connection?.saveData,forceCompact:previewParams.get('perfil')==='celular'}),compactDevice=motionProfile.compact;
  let lightMode=false,cameraTilt=true,plazaMode=false,plazaPeakZoom=0,motionEnabled=true,userPaused=false;
  if(lightMode){map.jumpTo({pitch:0});map.setMaxPitch(0);}
  cameraState();
  // Shared assets warm only after the continent paints, with no extra GPU context.
  if(!weakDevice&&!boardPanel){const warm=()=>{if(!baseReady){map.once('idle',warm);return;}const run=()=>window.ARENA_ART.load().then(()=>{$('map').dataset.assetsWarm='ready';}).catch(()=>{$('map').dataset.assetsWarm='retry-on-demand';});if(window.requestIdleCallback)requestIdleCallback(run,{timeout:1400});else setTimeout(run,400);};requestAnimationFrame(()=>requestAnimationFrame(warm));}
  map.on('moveend',()=>{$('map').dataset.cameraPose=JSON.stringify([map.getCenter().lng,map.getCenter().lat,map.getZoom(),map.getPitch(),map.getBearing()]);});
  function cameraState(){
    $('camera-flat').setAttribute('aria-pressed',String(!cameraTilt));
    $('camera-tilt').setAttribute('aria-pressed',String(cameraTilt));
    $('camera-light').setAttribute('aria-pressed',String(lightMode));$('camera-motion').setAttribute('aria-pressed',String(motionEnabled));$('camera-motion').textContent=motionEnabled?'Pausar torcida':'Animar torcida';$('camera-motion').title=motionEnabled?'Pausar movimentos da torcida':'Ativar movimentos da torcida';
    $('camera-tilt').disabled=false;$('camera-turn').disabled=lightMode&&!plazaMode;
    if(map.getLayer('country-sides'))map.setLayoutProperty('country-sides','visibility',lightMode?'none':'visible');
  }
  function changeCamera(tilt){if(!tilt){plazaMode=false;plazaPeakZoom=0;liftCrowdLabels();}cameraTilt=tilt;map.setMaxPitch(lightMode&&!plazaMode?0:60);map.easeTo({pitch:tilt?52:0,duration:reduced()?0:450});cameraState();}
  $('camera-flat').onclick=()=>changeCamera(false);
  $('camera-tilt').onclick=()=>{lightMode=false;motionEnabled=!userPaused;changeCamera(true);declutter();refreshStadiumScene();if(current&&!plazaMode)flyTo(current,0);refreshCardPreview();};
  $('camera-turn').onclick=()=>map.easeTo({bearing:map.getBearing()+45,duration:reduced()?0:450});
  $('camera-light').onclick=()=>{lightMode=!lightMode;motionEnabled=!lightMode&&!userPaused;detailRenderer?.setMotion(motionEnabled);changeCamera(!lightMode||plazaMode);declutter();refreshStadiumScene();if(current&&!plazaMode)flyTo(current,0);refreshCardPreview();};
  $('camera-motion').onclick=()=>{if(lightMode){toast('Modo Leve: movimentos e fumaça desligados.');return;}motionEnabled=!motionEnabled;userPaused=!motionEnabled;cameraState();detailRenderer?.setMotion(motionEnabled);};
  map.on('load',cameraState);
  map.on('pitchend',()=>{if(typeof refreshStadiumScene==='function')refreshStadiumScene();});

  function usableArea(withSheet=true){
    const r=$('map').getBoundingClientRect(),bar=document.querySelector('.mapctl').getBoundingClientRect();
    const area={left:mobile()?26:40,right:r.width-(mobile()?26:40),top:Math.max(24,bar.bottom-r.top+14,document.querySelector('.camera-controls').getBoundingClientRect().bottom-r.top+10),bottom:r.height-(mobile()?100:80)};
    if(mobile()&&($('view-mapa').classList.contains('team-open')||$('view-mapa').classList.contains('group-open')))area.top=44;
    const side=document.querySelector('.match-sidebar').getBoundingClientRect();
    if(!mobile()&&side.width)area.left=Math.max(area.left,side.right-r.left+24);
    if(!mobile()&&matchMedia('(min-width:1200px)').matches&&!$('view-mapa').classList.contains('team-open'))area.right=Math.min(area.right,$('activity-panel').getBoundingClientRect().left-r.left-20);
    if(mobile()&&!$('mobile-welcome').hidden){const welcome=$('mobile-welcome').getBoundingClientRect();if(welcome.height)area.top=Math.max(area.top,welcome.bottom-r.top+20);}
    if(withSheet&&!$('sheet').hidden){const panel=$('sheet').getBoundingClientRect();if(mobile())area.bottom=Math.min(area.bottom,panel.top-r.top-24);else area.right=Math.min(area.right,panel.left-r.left-24);}
    if(withSheet&&!groupPicker.hidden){const panel=groupPicker.getBoundingClientRect();if(mobile())area.bottom=Math.min(area.bottom,panel.top-r.top-24);else area.right=Math.min(area.right,panel.left-r.left-24);}
    area.right=Math.max(area.left+60,area.right);area.bottom=Math.max(area.top+30,area.bottom);
    return area;
  }
  function fitBounds(bounds,maxZoom,duration=650,withSheet=false){
    const area=usableArea(withSheet),r=$('map').getBoundingClientRect();
    const padding={left:area.left,right:r.width-area.right,top:area.top,bottom:r.height-area.bottom};
    map.stop();const priorCamera={center:map.getCenter().toArray(),zoom:map.getZoom(),pitch:map.getPitch(),bearing:map.getBearing(),padding:map.getPadding()};map.jumpTo({pitch:0,bearing:0,padding:zeroPadding});
    const camera=map.cameraForBounds(bounds,{padding,...(Number.isFinite(maxZoom)?{maxZoom}:{})});
    map.jumpTo(priorCamera);
    if(camera)map.easeTo({...camera,pitch:cameraTilt&&camera.zoom>=7?52:0,bearing:0,padding:zeroPadding,duration:reduced()?0:duration});
  }
  function fit(k){
    plazaMode=false;closeGroup();closeSheet();region=k;scope=k==='br'?'br':'all';$('map-region-label').textContent=({br:'BRASIL',am:'AMÉRICAS',eu:'EUROPA',all:'MUNDO'})[k];
    document.querySelectorAll('.mapctl button').forEach(b=>{const selected=b.id==='z-'+k;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
    fitBounds(VIEWS[k],k==='br'?4:undefined);
  }
  $('z-am').onclick=()=>fit('am');$('z-br').onclick=()=>fit('br');$('z-eu').onclick=()=>fit('eu');$('z-all').onclick=()=>fit('all');
  const markers={};
  function placeMarkers(){if(boardPanel){S.teams.forEach(t=>{t.mapLocation=[t.lon,t.lat];t.cityAnchor=t.mapLocation;t.mapOffset=[0,0];});return;}
    Object.values(markers).forEach(m=>m.remove());
    const cities=new Map();
    S.teams.forEach(t=>{const key=t.country+':'+t.city.toLowerCase();if(!cities.has(key))cities.set(key,[]);cities.get(key).push(t);});
    cities.forEach(arr=>{
      const anchor=[arr.reduce((n,t)=>n+t.lon,0)/arr.length,arr.reduce((n,t)=>n+t.lat,0)/arr.length],offsets=L.cityOffsets(arr.length),plots=L.cityPlots(anchor,arr.length);
      arr.sort((a,b)=>a.id.localeCompare(b.id));
      arr.forEach((t,i)=>{
        t.cityAnchor=anchor;t.mapLocation=plots[i];t.cityOffset=offsets[i];t.mapOffset=[0,0];
        const el=document.createElement('button');el.type='button';el.className='stad'+(t.level>=2||t.n>=30?' big':'');el.dataset.club=t.id;
        el.style.setProperty('--sz',window.ARENA_MAP.markerSize(t.level)*window.ARENA_OFFICIAL_MARKERS.scaleFor(t.cadeiras)+'px');
        el.setAttribute('aria-label',t.name+': '+LEVELS[t.level].name+', '+fmt(t.cadeiras)+' cadeiras');
        const next=LEVELS[t.level+1],progress=next&&t.n?'<span class="marker-progress"><span>'+fmt(t.cadeiras)+' / '+fmt(next.min)+'</span><i><b style="width:'+Math.min(100,Math.round(t.cadeiras/next.min*100))+'%"></b></i></span>':'';
        el.innerHTML=(t.stars?'<span class="stadium-honors" aria-label="'+t.stars+' títulos de temporada">★'+(t.stars>1?' ×'+t.stars:'')+'</span>':'')+window.ARENA_MARKER_VISUALS.silhouette(t)+window.ARENA_MARKER_VISUALS.badge(t)+(t.crest_url?'<span class="marker-crest"><img loading="lazy" decoding="async" data-crest-src="'+esc(t.crest_url)+'" alt=""></span>':'')+'<span class="lbl">'+esc(t.name)+'</span>'+progress;
        window.ARENA_MARKER_PREVIEWS.mount(el,t);const box=el.querySelector('svg').getAttribute('viewBox').split(/\s+/).map(Number);el.style.setProperty('--stadium-ratio',310/420);
        el.addEventListener('click',e=>{e.stopPropagation();openTeam(t);});
        markers[t.id]=new maplibregl.Marker({element:el,offset:t.mapOffset,rotationAlignment:'viewport',pitchAlignment:'viewport'}).setLngLat(t.mapLocation).addTo(map);el.setAttribute('aria-label',t.name+': '+LEVELS[t.level].name+', '+fmt(t.cadeiras)+' cadeiras');t.el=el;
      });
    });zoomStyle();catalogReady=true;if(map.getLayer('first-stadiums'))map.removeLayer('first-stadiums');if(map.getSource('first-stadiums'))map.removeSource('first-stadiums');
  }
  function zoomStyle(){const z=map.getZoom();$('map').style.setProperty('--zs',Math.max(.55,Math.min(1.5,.45+z*.12)).toFixed(2));$('map').style.setProperty('--marker-scale',Math.max(.85,Math.min(1.4,.55+z*.09)).toFixed(2));$('map').classList.toggle('map-zoomed',z>=7.5);$('map').classList.toggle('map-closeup',(z>=18.8||plazaMode)&&(!lightMode||plazaMode));}
  map.on('zoom',zoomStyle);
  function exploreMap(){
    plazaMode=false;plazaPeakZoom=0;liftCrowdLabels();region=null;scope='all';
    document.querySelectorAll('.mapctl button').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});
    declutter();
  }
  map.on('dragstart',exploreMap);
  map.on('zoomstart',e=>{if(e.originalEvent)exploreMap();});
  map.on('movestart',e=>{if(e.originalEvent)exploreMap();});
  function closeGroup(){groupPicker.hidden=true;groupTeams=[];$('view-mapa').classList.remove('group-open');declutter();refreshStadiumScene();}
  function focusGroup(){
    if(!groupTeams.length)return;
    const xs=groupTeams.map(t=>t.mapLocation[0]),ys=groupTeams.map(t=>t.mapLocation[1]);
    fitBounds([[Math.min(...xs)-.003,Math.min(...ys)-.003],[Math.max(...xs)+.003,Math.max(...ys)+.003]],14,600,true);
    declutter();refreshStadiumScene();
  }
  function openGroup(teams){
    closeSheet();setIntro(false);region=null;$('mobile-welcome').hidden=true;$('boletim').open=false;groupTeams=teams;
    $('view-mapa').classList.add('group-open');
    groupPicker.innerHTML='<div class="group-heading"><div><p class="eyebrow">'+teams.length+' CLUBES · '+esc(teams[0].city)+'</p><h3>Escolha sua torcida</h3></div><button type="button" id="group-close" aria-label="Fechar lista de times">×</button></div><div class="group-options">'+[...teams].sort(L.chairsFirst).map(t=>'<button type="button" data-pick-club="'+esc(t.id)+'"><img data-crest-src="'+esc(t.crest_url||'')+'" alt=""><span><b>'+esc(t.name)+'</b><small><strong class="chairs-primary">'+fmt(t.cadeiras)+' cadeiras</strong><span class="supporters-secondary"> · '+fmt(t.n)+' torcedores</span></small></span><span aria-hidden="true">↗</span></button>').join('')+'</div>';
    groupPicker.hidden=false;$('group-close').onclick=closeGroup;focusGroup();
  }
  groupPicker.addEventListener('click',e=>{const b=e.target.closest('[data-pick-club]');if(b){const team=S.teams.find(t=>t.id===b.dataset.pickClub);if(team)openTeam(team);}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!groupPicker.hidden)closeGroup();});
  function declutter(){if(boardPanel)return;
    clusterMarkers.forEach(m=>m.remove());clusterMarkers=[];
    const eligible=S.teams.filter(t=>scope!=='br'||t.country==='BR');
    S.teams.forEach(t=>{if(t.el)t.el.style.display=eligible.includes(t)?'':'none';t.mapOffset=[0,0];markers[t.id]?.setOffset(t.mapOffset);});
    if(map.getZoom()>=(lightMode?15:14))return;
    // Expanded city clubs stay on their permanent plots and can be tapped directly.
    const points=eligible.filter(t=>!groupTeams.some(g=>g.id===t.id)).map(t=>{const p=map.project(t.cityAnchor);return {x:p.x,y:p.y,team:t};});
    const buckets=L.clusterPoints(points,map.getZoom()>=7.5?80:mobile()?110:125);
    const anchorGroup=teams=>{
      teams.forEach(t=>t.el.style.display='none');
      const anchors=teams.map(t=>t.cityAnchor),mean=L.inlandAnchor(anchors,[]),size=window.ARENA_MAP.groupSize(L.clusterSize(teams.length)+22,L.groupLevel(teams))*(mobile()&&map.getZoom()<5?.78:1);
      const p=map.project(mean),edgeX=map.unproject([p.x+size*.58,p.y]),edgeY=map.unproject([p.x,p.y+size*.52]);
      const location=L.inlandAnchor(anchors,land,[Math.min(12,Math.abs(edgeX.lng-mean[0])),Math.min(10,Math.abs(edgeY.lat-mean[1]))]);
      const point=map.project(location);return {teams,location,x:point.x,y:point.y,size};
    };
    const groups=buckets.filter(g=>g.length>1).map(group=>anchorGroup(group.map(p=>p.team)));
    // Moving coastal groups inland must not stack their stadiums on one another.
    for(let merged=true;merged;){merged=false;outer:for(let i=0;i<groups.length;i++)for(let j=i+1;j<groups.length;j++){
      const a=groups[i],b=groups[j];if(Math.abs(a.x-b.x)<(a.size+b.size)/2+8&&Math.abs(a.y-b.y)<(a.size+b.size)*.47+25){groups[i]=anchorGroup([...a.teams,...b.teams]);groups.splice(j,1);merged=true;break outer;}
    }}
    const rect=$('map').getBoundingClientRect(),area=usableArea(false);
    const scale=Math.max(.85,Math.min(1.4,.55+map.getZoom()*.09));
    const singles=buckets.filter(g=>g.length===1).map(([p])=>{const size=window.ARENA_MAP.markerSize(p.team.level)*scale;return {...p,size,width:size+22,height:size*.84+48,single:true};});
    [...groups,...singles].filter(g=>g.x>-g.size&&g.x<rect.width+g.size&&g.y>-g.size&&g.y<rect.height+g.size).map(g=>({...g,dx:0,dy:0})).forEach(({teams,team,single,location,size,dx,dy})=>{
      if(single){markers[team.id].setOffset([team.mapOffset[0]+dx,team.mapOffset[1]+dy]);return;}
      const el=document.createElement('button');el.type='button';el.className='map-cluster';el.dataset.clubs=teams.map(t=>t.id).join(',');el.style.setProperty('--cluster-size',size+'px');
      const crests=[...teams].sort(L.chairsFirst).slice(0,3);
      const representative=crests[0],level=representative.level;el.dataset.level=level;el.dataset.representative=representative.id;
      el.title=teams.map(t=>t.name).join(', ');el.innerHTML=window.ARENA_MARKER_VISUALS.silhouette(representative)+window.ARENA_MARKER_VISUALS.badge(representative)+'<span class="cluster-crests" aria-hidden="true">'+crests.slice(0,1).map(t=>'<img loading="lazy" decoding="async" data-crest-src="'+esc(t.crest_url||'')+'" alt="">').join('')+'</span><span class="cluster-word"><b>'+teams.length+'</b> times</span>';
      window.ARENA_MARKER_PREVIEWS.mount(el,representative);el.onclick=e=>{e.stopPropagation();closeSheet();region=null;$('mobile-welcome').hidden=true;const sameCity=teams.every(t=>t.country===teams[0].country&&t.city===teams[0].city);if(sameCity){openGroup(teams);return;}closeGroup();const lons=teams.map(t=>t.mapLocation[0]),lats=teams.map(t=>t.mapLocation[1]);fitBounds([[Math.min(...lons),Math.min(...lats)],[Math.max(...lons),Math.max(...lats)]],10);};
      clusterMarkers.push(new maplibregl.Marker({element:el,offset:[dx,dy],rotationAlignment:'viewport',pitchAlignment:'viewport'}).setLngLat(location).addTo(map));el.setAttribute('aria-label','Ver '+teams.length+' times nesta região');
    });
  }
  map.on('moveend',declutter);placeMarkers();
  function flyTo(t,duration=650){if(boardPanel){ARENA_PANEL.focus(t,meHandle);return;}
    const r=$('map').getBoundingClientRect(),area=usableArea();
    const offset=L.focusOffset(r.width,r.height,area,[0,0]);
    const zoom=t.level>=3?15.9:16.6;
    map.easeTo({center:t.mapLocation,zoom,pitch:cameraTilt?52:0,bearing:cameraTilt?-30:0,padding:zeroPadding,offset,duration:reduced()?0:duration});
  }

  // ---------- súmula ----------
  const sheet = $("sheet");
  let current = null, meHandle = null;
  let readyNeighborhoods=new Set(),sceneClub=null,sceneSignature=null,detailRenderer=null,roofCutaway=false,crowdLabels=[],arrivalMarker=null,arrivalTimer;
  function refreshCardPreview(){const el=$('club-neighborhood-preview');if(current&&el)window.ARENA_THUMBNAIL.mount(el,current,{lite:lightMode});}
  function visitorAvatar(t,h){
    const f=window.ARENA_ART_STATE.people({...t,visitorHandle:h}).find(f=>f.h===h);if(!f)return null;
    const scale=window.ARENA_ART_STATE.scale;return {...f,position:[t.mapLocation[0]+f.x*scale/(111320*Math.cos(t.mapLocation[1]*Math.PI/180)),t.mapLocation[1]-f.z*scale/111320]};
  }
  function crowdNames(crowd){
    crowdLabels.forEach(m=>m.remove());crowdLabels=[];
    for(const f of crowd.filter(f=>f.label)){
      const el=document.createElement('button');el.type='button';el.className='fan-avatar-label'+(f.own?' own':'');el.innerHTML='<small>'+esc(f.role)+'</small><b>@'+esc(f.h)+'</b>';el.title=f.role+' · @'+f.h;el.setAttribute('aria-label',el.title);el.onclick=e=>{e.stopPropagation();toast('@'+f.h+' · '+f.cad+' cadeiras · '+f.role);};
      const marker=new maplibregl.Marker({element:el,anchor:'top-left'}).setLngLat(f.position).addTo(map);marker.fan=f;crowdLabels.push(marker);
    }liftCrowdLabels();
  }
  function liftCrowdLabels(){
    const r=$('map').getBoundingClientRect(),close=window.ARENA_MARKER_VISUALS.showPlazaLabels(map.getZoom(),plazaMode),boxes=[];
    for(const m of crowdLabels){const el=m.getElement(),f=m.fan;el.style.visibility=close?'visible':'hidden';if(!close)continue;const p=map.project(m.getLngLat());if(p.x<0||p.x>r.width||p.y<0||p.y>r.height){el.style.visibility='hidden';continue;}const lift=window.ARENA_MOTION.labelLift(m.getLngLat().lat,map.getZoom(),map.getPitch());boxes.push({id:f.h,own:f.own,x:p.x,y:p.y-lift,width:el.offsetWidth,height:el.offsetHeight});}
    const layout=window.ARENA_LABELS.arrange(boxes,r.width,r.height);for(const m of crowdLabels){const box=layout.find(b=>b.id===m.fan.h),p=map.project(m.getLngLat());if(!box){m.getElement().style.visibility='hidden';continue;}m.setOffset([box.x-p.x,box.y-p.y]);}
  }
  map.on('move',liftCrowdLabels);
  map.on('zoom',()=>{if(plazaMode){const z=map.getZoom();if(plazaPeakZoom&&z<plazaPeakZoom-.05){plazaMode=false;plazaPeakZoom=0;sceneSignature=null;}else plazaPeakZoom=Math.max(plazaPeakZoom,z);}liftCrowdLabels();});

  function showArrival(f){if(boardPanel)return;
    const focused=current||sceneClub;
    if(!focused||focused.id!==f.team||!motionEnabled||(lightMode&&!plazaMode))return;
    if(detailRenderer?.arrive(f.team,f.h)){toast('@'+f.h+' chegou à torcida · +1 cadeira');return;}
    arrivalMarker?.remove();clearTimeout(arrivalTimer);
    const el=document.createElement('div');el.className='arrival-avatar';el.style.setProperty('--jersey',focused.color1);el.innerHTML='<span class="arrival-travel"><span class="arrival-person"><i></i><b></b></span><strong>+1 cadeira</strong><small></small></span>';el.querySelector('small').textContent='@'+f.h;
    const point=focused.mapLocation,pos=[point[0],point[1]+window.ARENA_CROWD.gate(focused)/111320];
    arrivalMarker=new maplibregl.Marker({element:el,anchor:'bottom'}).setLngLat(pos).addTo(map);arrivalTimer=setTimeout(()=>{arrivalMarker?.remove();arrivalMarker=null;},6500);
  }
  function refreshStadiumScene(){if(boardPanel)return;
    if(!map.getLayer('land'))return;
    const t=current||sceneClub,visible=map.getZoom()>=14&&(!lightMode||plazaMode);
    const bounds=map.getBounds();
    let clubs=visible?S.teams.filter(c=>!groupTeams.some(g=>g.id===c.id)&&(scope!=='br'||c.country==='BR')&&(bounds.contains(c.mapLocation)||((plazaMode||map.getZoom()>=18.8)&&c.id===t?.id))).sort((a,b)=>(b.id===t?.id)-(a.id===t?.id)).slice(0,12):[];
    // One district at walking distance keeps close-up views readable and bounded.
    const plazaClose=plazaMode||map.getZoom()>=18.8;
    if(plazaClose&&clubs.length){const center=map.getCenter();clubs.sort((a,b)=>(b.id===t?.id)-(a.id===t?.id)||Math.hypot(a.mapLocation[0]-center.lng,a.mapLocation[1]-center.lat)-Math.hypot(b.mapLocation[0]-center.lng,b.mapLocation[1]-center.lat));clubs=clubs.slice(0,1);}
    const signature=JSON.stringify([plazaClose,lightMode,clubs.map(c=>[c.id,c.cadeiras,c.stadium_items||[],c.color1,c.color2,c.presidente?.h,c.lideres?.map(f=>f.h),c.fans?.map(f=>[f.h,f.cad])]),visible,map.getZoom()>=16,roofCutaway,meHandle]);
    // Restore the exclusive representation even after markers are rebuilt by refreshGame.
    S.teams.forEach(c=>c.el?.classList.toggle('native-stadium',clubs.includes(c)&&readyNeighborhoods.has(c.id)));
    const mapBox=$('map').getBoundingClientRect();
    for(const c of clubs){
      const ppm=512*Math.pow(2,map.getZoom())/(40075016.686*Math.cos(c.mapLocation[1]*Math.PI/180));
      const plan=window.ARENA_ART_STATE.plan(c),point=c.mapLocation,latScale=1.3/111320,lonScale=latScale/Math.cos(point[1]*Math.PI/180),height=[4,15,17,24,32][c.level];
      const roofY=Math.min(...[-1,1].flatMap(x=>[-1,1].map(z=>map.project([point[0]+x*plan.width/2*lonScale,point[1]+z*plan.depth/2*latScale]).y)))-height*ppm*Math.sin(map.getPitch()*Math.PI/180);
      const bottomY=Math.max(...[-1,1].flatMap(x=>[-1,1].map(z=>map.project([point[0]+x*plan.width/2*lonScale,point[1]+z*plan.depth/2*latScale]).y)));
      const markerTop=c.el.getBoundingClientRect().top-mapBox.top;
      const controls=document.querySelector('.camera-controls').getBoundingClientRect(),safeTop=controls.height?controls.bottom-mapBox.top+8:12;
      c.el.style.setProperty('--crest-top',(Math.max(safeTop,roofY-36)-markerTop)+'px');
      c.el.style.setProperty('--label-top',(bottomY-markerTop+4)+'px');
    }
    if(signature===sceneSignature)return;sceneSignature=signature;
    if(t)sceneClub=t;
    // Mobile pilot approved: every club can use the neighborhood, with bounded detail.
    const artTeams=clubs.slice(0,lightMode?2:compactDevice?1:4).map(c=>({...c,visitorHandle:c.id===(current||sceneClub)?.id?meHandle:null}));
    const artCrowd=artTeams.flatMap(t=>window.ARENA_ART_STATE.people(t,lightMode).slice(0,compactDevice&&!lightMode?12:30).map(f=>({...f,position:[t.mapLocation[0]+f.x*window.ARENA_ART_STATE.scale/(111320*Math.cos(t.mapLocation[1]*Math.PI/180)),t.mapLocation[1]-f.z*window.ARENA_ART_STATE.scale/111320]})));crowdNames(artCrowd);
    const modelData={artTeams,lite:lightMode,compact:compactDevice&&!lightMode,animate:motionEnabled&&!lightMode,detailed:!compactDevice&&map.getZoom()>=16,cutaway:roofCutaway};
    if(artTeams.length){detailRenderer=detailRenderer||window.ARENA_THREE.create(map,{onReady:ids=>{readyNeighborhoods=new Set(ids);$('map').dataset.neighborhoodsReady=ids.join(',');S.teams.forEach(c=>c.el?.classList.toggle('native-stadium',(!lightMode||plazaMode)&&map.getZoom()>=14&&readyNeighborhoods.has(c.id)));}});detailRenderer.update(modelData,t?.mapLocation||clubs[0].mapLocation);}else{readyNeighborhoods.clear();detailRenderer?.update(modelData,[-53,-15]);}
  }
  map.on('moveend',refreshStadiumScene);
  map.on('load',refreshStadiumScene);
  map.on('idle',refreshStadiumScene);
  let wasDetail=false;map.on('zoom',()=>{const detail=map.getZoom()>=14&&!lightMode;if(detail!==wasDetail){wasDetail=detail;declutter();refreshStadiumScene();}});

  const participationPost=C.POST_OFICIAL||(preseason?C.POST_TESTE:'');
  function fanWelcome(f){const old=legacyFanWelcome(f),invite=old.match(/<details class="fan-invite">[\s\S]*?<\/details>/)?.[0]||'';return window.ARENA_ELECTION_UI.welcome(f,S).replace('</section>',invite+'</section>');}
  function legacyFanWelcome(f){
    const p=G.fanProgress(f);
    return `<section class="fan-welcome" aria-label="Sua participação"><span class="fan-welcome-kicker">${G.DEMO?'DEMONSTRAÇÃO':preseason?'PILOTO · PARTICIPAÇÃO DE TESTE':'SUA PARTICIPAÇÃO'}</span><h3>Bem-vindo, @${esc(f.h)}!</h3><p>Sua cadeira na torcida do <b>${esc(f.team.name)}</b> está garantida.</p><div class="fan-welcome-numbers"><span><b>${fmt(f.entryNumber)}º</b> a entrar nesta torcida</span><span><b>${fmt(f.cad)}</b> ${f.cad===1?'cadeira conquistada':'cadeiras conquistadas'}</span></div><p class="fan-entry-note">Ordem de entrada ${preseason?'no piloto':'nesta temporada'}; a posição no ranking muda com a pontuação.</p><div class="fan-next"><strong>${p.todayDone?'✓ Participação de hoje confirmada':'Comente hoje para ganhar mais uma cadeira'}</strong><p>${p.todayDone?'Comente amanhã de novo para ganhar mais uma cadeira.':'Um comentário válido por dia já conta.'}</p><p>Mais <b>${p.remaining} ${p.remaining===1?'dia seguido':'dias seguidos'}</b> de participação para ganhar <b>+${p.bonus} cadeiras</b> de bônus.${p.run===0?' Sua sequência começa de novo com o próximo comentário.':''}</p></div><details class="fan-invite"><summary>Convidar um amigo ↗</summary><p>Seu amigo comenta o time dele e escreve <b>“vim pelo @${esc(f.h)}”</b>. Na primeira participação dele ${preseason?'no piloto':'na temporada'}, sua torcida ganha uma cadeira extra.</p><p class="fan-entry-note">Compartilhar ou abrir o link não confirma a indicação.</p>${participationPost&&!G.DEMO?'<button type="button" class="btn" id="share-invite">Compartilhar convite</button><button type="button" class="btn ghost" id="copy-invite">Copiar convite</button><p id="invite-feedback" role="status"></p><textarea id="invite-copy" aria-label="Convite para copiar" readonly hidden></textarea>':'<p class="note">Os convites ficam disponíveis no post de participação.</p>'}</details>${preseason&&!G.DEMO?'<p class="fan-entry-note">Estamos em teste. As cadeiras e a ordem de entrada do piloto não passam para a Temporada 1.</p>':''}</section>`;
  }
  async function shareInvite(f,copyOnly=false){
    const text=`Venha para a Arena das Torcidas! Comente o nome do seu time e “vim pelo @${f.h}” no ${preseason?'post de teste':'post oficial'}. Vamos fazer nossa torcida crescer!\n${participationPost}`;
    const feedback=$('invite-feedback');
    if(copyOnly){const box=$('invite-copy');box.hidden=false;box.value=text;box.focus();box.select();feedback.textContent='Convite pronto para copiar e enviar ao seu amigo.';return;}
    try{
      if(navigator.share){await navigator.share({title:'Arena das Torcidas',text});feedback.textContent='Convite compartilhado. O bônus depende da primeira participação do amigo.';}
      else {await navigator.clipboard.writeText(text);feedback.textContent='Convite copiado! Cole na conversa com seu amigo.';}
    }catch(e){if(e.name==='AbortError')return;const box=$('invite-copy');if(!box)return;box.hidden=false;box.value=text;box.focus();box.select();feedback.textContent='Selecione e copie o convite abaixo para enviar ao seu amigo.';}
  }
  function closeSheet() { if(current)sceneClub=current;sheet.classList.remove('folded');window.ARENA_THUMBNAIL.cancel();sheet.hidden = true;$("view-mapa").classList.remove("team-open"); if (current && current.el) current.el.classList.remove("sel"); current = null;requestAnimationFrame(labelVisibility); }
  map.on("click", e=>{const fan=detailRenderer?.pickFan?.(e.point);if(fan){toast("@"+fan.h+" · "+fan.cad+" cadeiras · "+fan.role);return;}closeSheet();closeGroup();});
  function foldSheet(folded){sheet.classList.toggle('folded',folded);const b=$('sheet-expand');if(b)b.setAttribute('aria-expanded',String(!folded));}
  function openTeam(t, hl,passive=false) {if(boardPanel&&t)ARENA_PANEL.focus(t,hl);
    if(!passive){plazaMode=false;plazaPeakZoom=0;liftCrowdLabels();}
    const wasFolded=passive&&sheet.classList.contains('folded');
    const previousScroll=passive?sheet.scrollTop:0,inviteOpen=passive&&sheet.querySelector('.fan-invite')?.open;
    $('view-mapa').classList.remove('activity-open');$('activity-toggle').setAttribute('aria-expanded','false');
    closeGroup();if(t.country!=="BR"){scope="all";region=null;document.querySelectorAll(".mapctl button").forEach(b=>{b.classList.remove("active");b.setAttribute("aria-pressed","false");});}
    setIntro(false);$("view-mapa").classList.add("team-open");$("boletim").open=false;
    if (current && current.el) current.el.classList.remove("sel");
    current = t; meHandle = hl || null; if (t.el) t.el.classList.add("sel");
    const lv = LEVELS[t.level], nx = LEVELS[t.level + 1],construction=window.ARENA_NEIGHBORHOOD.construction(t);
    const pct = nx ? Math.max(0, Math.round(((t.cadeiras - lv.min) / (nx.min - lv.min)) * 100)) : 100;
    const rivals = S.teams.filter((o) => G.groupOf(o) === G.groupOf(t)).sort((a, b) => a.rankUF - b.rankUF);
    const all = [...t.fans].sort((a, b) => b.cad - a.cad);
    const personal=t.fans.find(f=>f.h===meHandle);
    const li = (f, i, val, extra) => `<li class="${f.h === meHandle ? "me" : ""}"><span class="n">${i}</span><span class="h"><button type="button" class="fan-history-button" data-fan-history="${esc(f.h)}">@${esc(f.h)}</button>${extra || ""}</span><span class="v">${val}</span></li>`;
    const where = FOREIGN(t) ? t.city : t.uf;
    sheet.innerHTML = `<div class="sheet-mini"><button type="button" id="sheet-expand" aria-expanded="false">${esc(t.name)} · abrir ficha ↑</button><button type="button" id="sheet-dismiss" aria-label="Fechar ficha recolhida">×</button></div>
      <div class="sh-head"><div class="stripe" style="background:linear-gradient(90deg,${esc(t.color1)} 0 70%,${esc(t.color2)} 70%)"></div>
        <div class="sh-title">${t.crest_url ? `<img data-crest-src="${esc(t.crest_url)}" alt="">` : `<span class="sw" style="background:${esc(t.color1)};width:18px;height:18px"></span>`}<h2>${esc(t.name)}</h2></div>
        <button class="close" type="button" id="sh-close" aria-label="Fechar">✕</button>
        <span class="chip"><b>${esc(FOREIGN(t) ? countryName(t.country) : t.uf)}</b>${esc(t.city)}</span>
        <div class="level"><div class="level-row"><strong>${lv.name}</strong><span>${nx ? `faltam ${fmt(nx.min - t.cadeiras)} cadeiras para ${nx.name.toLowerCase()}` : "nível máximo"}</span></div>
          <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div></div>
      </div>
      <div class="construction-status"><b>${esc(construction.name)}</b><span>${construction.next?'Próxima obra: '+esc(construction.next.name)+' · faltam '+fmt(construction.remaining)+' cadeiras':'Construção no nível máximo'}</span></div>
      <div class="seat-inspector"><button id="inspect-plaza" type="button" class="btn">Ver torcida na praça</button><button id="inspect-seats" type="button" class="btn ghost" aria-pressed="${roofCutaway}">Ver cadeiras no 3D</button><small>${fmt(t.cadeiras)} conquistadas · cada lugar colorido representa uma cadeira; vagas em cinza.</small></div>
      ${personal?fanWelcome(personal):''}<div class="club-share-row"><button class="btn ghost" type="button" id="share-club"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/></svg><span><strong>Compartilhar minha torcida</strong><small>Instagram, WhatsApp e outros</small></span></button></div>${window.ARENA_ELECTION_UI.contest(t,S)}
      <div class="stadium-detail bairro-preview" style="--team-color:${esc(t.color1)}"><div id="club-neighborhood-preview"></div><span>NÍVEL 0${t.level+1} / 05</span></div>
      <div class="stats">
        <div class="stat"><b>${fmt(t.cadeiras)}</b><span>cadeiras</span></div>
        <div class="stat"><b>${fmt(t.n)}</b><span>torcedores</span></div>
        <div class="stat"><b>${t.cadeiras ? "#"+t.rankUF : "—"}</b><span>${FOREIGN(t) ? "no país" : "no " + esc(t.uf)}</span></div>
        <div class="stat"><b>${t.cadeiras ? "#"+t.rankAll : "—"}</b><span>geral</span></div>
      </div>
      <div class="sec">
        <p class="note">${fmt(t.bonusCurtidas)} ${t.bonusCurtidas===1?'cadeira do time veio':'cadeiras do time vieram'} dos prêmios de curtidas.</p><div class="classico">${rivals.length > 1 ? `Clássico ${FOREIGN(t) ? "no país" : "estadual"}: <b>${t.cadeiras ? t.rankUF+"º de "+rivals.length : "aguardando participação"}</b> (${rivals.slice(0, 6).map((r) => esc(r.short) + " " + fmt(r.cadeiras)).join(" · ")})` : `Na rodada: <b>${fmt(t.semana)}</b> cadeiras.`}</div>
        <div class="roles">
          <div class="role"><span class="ic" aria-hidden="true">♟</span><span class="who">${t.presidente ? "@" + esc(t.presidente.h) : t.rolesPending ? "Eleição da Torcida · 25/10 às 23h59 (Brasília)" : "Cargo vago · participe com 1 cadeira"}<small>Presidente da torcida · apuração diária</small></span><span class="pts">${t.presidente ? t.presidente.cad + " na temporada" : ""}</span></div>
          ${t.pendingChoices?.length?`<p class="note">${t.pendingChoices.length} ${t.pendingChoices.length===1?'melhoria pendente':'melhorias pendentes'} por evolução de nível. ${t.presidente?'O presidente pode escolher os itens acumulados. A organização registra a escolha confirmada.':'As escolhas ficam guardadas até o clube ter seu primeiro presidente.'}</p>`:''}
          <div class="role"><span class="ic" aria-hidden="true">⚑</span><span class="who">${t.fundador ? "@" + esc(t.fundador.h) : "Ninguém ainda"}<small>Torcedor nº 1 desta temporada</small></span><span class="pts">${t.fundador ? t.fundador.cad + " cad." : ""}</span></div>
          ${t.lostRole ? `<div class="role"><span class="ic" aria-hidden="true" style="color:var(--live)">↓</span><span class="who">@${esc(t.lostRole.h)}<small>Fora da disputa: ${t.lostRole.idle} dias sem comentar</small></span><span class="pts">${t.lostRole.cad} na temporada</span></div>` : ""}
        </div>
        ${t.n ? `<h3 class="sub">Líderes de torcida (${t.lideres.length} de 20)</h3>
        <ol class="list">${t.lideres.map((f, i) => li(f, i + 2, f.cad + " na temporada")).join("") || '<li><span></span><span class="h">'+(t.rolesPending?'Primeira apuração: domingo 25/10 às 23h59 (Brasília). Sem mínimo adicional: com 1 cadeira e atividade em dia você já concorre.':'Nenhum líder elegível ainda')+'</span><span></span></li>'}</ol>
        <h3 class="sub">Todos os torcedores (${fmt(t.n)})</h3>
        <ol class="list" id="all-list">${all.slice(0, 80).map((f, i) => li(f, i + 1, f.cad + " cad.", f.idle >= S.inactivity ? `<span class="idle">${f.idle}d parado</span>` : "")).join("")}</ol>`
        : `<p class="classico">Essa torcida ainda não tem ninguém. Comente <b>${esc(t.name)}</b> no post oficial e vire o torcedor nº 1.</p>`}
      </div>
      <section class="club-equipment"><h3>Melhorias da torcida</h3><p class="note">${t.pendingChoices?.length||0} ${(t.pendingChoices?.length||0)===1?'escolha pendente':'escolhas pendentes'} · itens visuais, sem bônus de cadeiras.</p><div class="equipment-gallery">${window.ARENA_ART_STATE.catalog.map(item=>{const installed=(t.stadium_items||[]).includes(item.id),available=window.ARENA_ART_STATE.allowed(item.id,t.level);return '<div class="equipment-card'+(installed?' installed':'')+'"><b>'+esc(item.name)+'</b><small>'+(installed?'✓ Instalado':item.soon?'Em breve':available?'Disponível para escolha do presidente':'A partir de '+esc(window.ARENA_ART_STATE.names[item.min]))+'</small></div>';}).join('')}</div><p class="note">As escolhas ficam guardadas até o clube ter presidente. Nada é instalado automaticamente.</p></section>
      <section class="team-history" id="personal-history" hidden></section>
      <section class="team-history" id="team-history"><h4>História da torcida</h4><p class="note">Carregando conquistas…</p></section>
      <div class="sh-foot"><button class="btn ghost" type="button" id="sh-map">Ver no mapa</button>${C.POST_OFICIAL ? `<a class="btn" href="${esc(C.POST_OFICIAL)}" target="_blank" rel="noopener">Comentar no post</a>` : `<a class="btn" href="https://www.instagram.com/arenadastorcidas2026/" target="_blank" rel="noopener">Participar no Instagram</a>`}</div>`;
    sheet.hidden = false;foldSheet(wasFolded);sheet.scrollTop=previousScroll;$('sheet-expand').onclick=()=>foldSheet(false);$('sheet-dismiss').onclick=closeSheet;
    $('share-club').onclick=()=>window.ARENA_SHARE.open(t,personal,S,'club');if(personal)$('share-personal').onclick=()=>window.ARENA_SHARE.open(t,personal,S,'personal');
    window.ARENA_THUMBNAIL.mount($('club-neighborhood-preview'),t,{lite:lightMode});
    if(!passive){sheet.classList.remove("stadium-enter");void sheet.offsetWidth;sheet.classList.add("stadium-enter");}
    if(inviteOpen&&sheet.querySelector('.fan-invite'))sheet.querySelector('.fan-invite').open=true;
    if(hl&&!passive)document.documentElement.dataset.personalReadyMs=Math.round(performance.now());
    $("sh-close").onclick = () => {closeSheet();$("mobile-welcome").hidden=true;};
    $("sh-map").onclick = () => flyTo(t);
    $('inspect-plaza').onclick=()=>{foldSheet(true);plazaMode=true;plazaPeakZoom=0;changeCamera(true);const P=window.ARENA_ART_STATE,b=window.ARENA_MOTION.plazaBounds({...t,visitorHandle:meHandle},lightMode,P),scale=P.scale/111320,cos=Math.cos(t.mapLocation[1]*Math.PI/180);fitBounds([[t.mapLocation[0]+b.left*scale/cos,t.mapLocation[1]-b.front*scale],[t.mapLocation[0]+b.right*scale/cos,t.mapLocation[1]-b.back*scale]],19.3,650,true);sceneSignature=null;refreshStadiumScene();};
    $('inspect-seats').onclick=()=>{roofCutaway=!roofCutaway;lightMode=false;motionEnabled=!userPaused;changeCamera(true);$('inspect-seats').setAttribute('aria-pressed',String(roofCutaway));sceneSignature=null;flyTo(t,0);refreshStadiumScene();};
    if(personal){const button=document.createElement('button');button.type='button';button.className='btn ghost';button.textContent='Ver meu bonequinho no mapa';button.onclick=()=>{foldSheet(true);plazaMode=true;plazaPeakZoom=0;changeCamera(true);sceneSignature=null;refreshStadiumScene();const avatar=visitorAvatar(t,personal.h);if(avatar){const r=$('map').getBoundingClientRect();map.easeTo({center:avatar.position,zoom:20.2,pitch:58,padding:zeroPadding,offset:L.focusOffset(r.width,r.height,usableArea()),duration:reduced()?0:600});}};sheet.querySelector('.fan-welcome').append(button);}
    if (meHandle) {
      const idx = all.findIndex((f) => f.h === meHandle);
      if (idx >= 80) $("all-list").insertAdjacentHTML("beforeend", li(all[idx], idx + 1, all[idx].cad + " cad."));
      if($('share-invite'))$('share-invite').onclick=()=>shareInvite(personal);
      if($('copy-invite'))$('copy-invite').onclick=()=>shareInvite(personal,true);
    }
    if(!passive)flyTo(t);
    loadTeamHistory(t);if(meHandle)loadFanHistory(meHandle,false);
  }


  async function loadTeamHistory(t){
    const box=$('team-history');if(!box)return;
    if(G.DEMO){box.innerHTML='<h4>História da torcida</h4><p class="note">As conquistas permanentes aparecem aqui quando uma temporada real termina.</p>';return;}
    const {data,error}=await G.sb.rpc('public_team_history',{p_team_id:t.id});
    if(current!==t||!box.isConnected)return;
    if(error){box.innerHTML='<h4>História da torcida</h4><p class="note">Não foi possível carregar as conquistas agora.</p>';return;}
    const titles={champion:'★ Time campeão',first_fan:'⚑ Torcedor nº 1',president:'♟ Presidente ao fim da temporada',leader:'◆ Líder ao fim da temporada'};
    box.innerHTML='<h4>História da torcida</h4>'+(data.results.length?'<ul class="season-history-list">'+data.results.map(r=>'<li><b>Temporada '+r.number+' · '+r.position+'º lugar</b><span>'+fmt(r.chairs)+' cadeiras · '+esc(LEVELS[r.stadium_level].name)+'</span></li>').join('')+'</ul><h4>Conquistas permanentes</h4><ul class="personal-honors">'+data.awards.map(a=>'<li><b>'+esc(titles[a.kind])+'</b><span>'+(a.handle?'@'+esc(a.handle)+' · ':'')+'Temporada '+a.number+'</span></li>').join('')+'</ul>':'<p class="note">Ainda não há temporadas encerradas para esta torcida. As estrelas e os emblemas conquistados ficarão guardados aqui.</p>');
  }

  async function loadFanHistory(handle,scroll=true){
    const box=$('personal-history');if(!box)return;box.hidden=false;
    box.innerHTML='<h4>Conquistas de @'+esc(handle)+'</h4><p class="note">Carregando…</p>';
    if(G.DEMO){box.innerHTML='<h4>@'+esc(handle)+'</h4><p class="note">Torcedor fictício da demonstração.</p>';return;}
    const {data,error}=await G.sb.rpc('public_fan_history',{p_handle:handle});if(!box.isConnected)return;
    const labels={first_fan:'Torcedor nº 1',president:'Presidente ao fim da temporada',leader:'Líder ao fim da temporada'};
    box.innerHTML='<h4>Conquistas de @'+esc(handle)+'</h4>'+(error?'<p class="note">Não foi possível carregar agora.</p>':data.awards.length?'<ul class="personal-honors">'+data.awards.map(a=>'<li><b>⚑ '+esc(labels[a.kind]||a.kind)+'</b><span>Temporada '+a.number+' · '+esc((S.teams.find(t=>t.id===a.team_id)||{}).name||a.team_id)+'</span></li>').join('')+'</ul>':'<p class="note">As conquistas permanentes serão registradas ao encerrar cada temporada.</p>');
    if(scroll)box.scrollIntoView({block:'nearest',behavior:reduced()?'instant':'smooth'});
  }
  sheet.addEventListener('click',e=>{const b=e.target.closest('[data-fan-history]');if(b)loadFanHistory(b.dataset.fanHistory);});
  // ---------- busca ----------
  const toastEl = $("toast"); let tmo;
  function toast(msg) { toastEl.textContent = msg; toastEl.hidden = false; clearTimeout(tmo); tmo = setTimeout(() => (toastEl.hidden = true), 5000); }
  async function findFan(q) {
    q = q.trim().replace(/^@/, "").toLowerCase(); if (!q) return;
    showView("mapa");
    const f = S.fans.find((x) => x.h === q);
    if (!f) {
      const tx = normalize(q);const matches=S.teams.filter(t=>[t.name,t.id,...(t.aliases||[])].some(n=>normalize(n)===tx));
      if(matches.length===1){openTeam(matches[0]);return;}
      if(matches.length>1){renderSearch(q);return;}
      if(!G.DEMO&&/^[a-z0-9._]{1,30}$/.test(q)){const {data,error}=await G.sb.rpc('public_fan_history',{p_handle:q});if(!error&&data.results.length){const team=S.teams.find(t=>t.id===data.results[0].team_id);if(team){openTeam(team,q);toast('@'+q+' tem conquistas no histórico. Uma nova participação entra na temporada atual.');return;}}}
      closeGroup();closeSheet();setIntro(false);
      sheet.innerHTML='<div class="sh-head"><h2 style="padding-right:28px">Ainda não encontramos @'+esc(q)+'</h2><button class="close" type="button" id="missing-close" aria-label="Fechar aviso">×</button></div><div class="sh-body" role="status" style="padding:0 18px"><p>Se você acabou de comentar, aguarde alguns minutos e atualize a página.</p><p>Ainda não comentou? Comente o nome do seu time no Instagram para entrar nesta temporada.</p></div><div class="sh-foot"><button class="btn ghost" id="missing-retry" type="button">Atualizar página</button><a class="btn" href="https://www.instagram.com/arenadastorcidas2026/" target="_blank" rel="noopener">Ir para o Instagram ↗</a></div>';
      sheet.hidden=false;$('view-mapa').classList.add('team-open');$('missing-close').onclick=closeSheet;$('missing-retry').onclick=()=>location.reload();ARENA_PANEL.ready();return; }
    openTeam(f.team, f.h);
    $('intro-title').textContent='Bem-vindo, @'+f.h+'!';$('intro-description').textContent='Sua cadeira na torcida do '+f.team.name+' está garantida. Você é o '+f.entryNumber+'º a entrar '+(preseason?'no piloto.':'nesta temporada.');
    $('welcome-title').textContent='Bem-vindo, @'+f.h+'!';$('welcome-description').textContent='Sua cadeira na torcida do '+f.team.name+' está garantida.';
  }
  const normalize = text => String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
  const searchMatches=q=>{const tx=normalize(q);return S.teams.filter(t=>!tx||[t.name,t.id,t.short,...(t.aliases||[])].some(n=>normalize(n).includes(tx)));};
  function renderSearch(q){
    closeGroup();closeSheet();setIntro(false);
    const tx=normalize(q);const list=searchMatches(q).slice(0,8);
    $('search-results').innerHTML='<div class="search-caption">'+(tx?'TORCIDAS ENCONTRADAS':'ESCOLHA SUA TORCIDA')+'</div>'+list.map(t=>'<button type="button" data-result="'+esc(t.id)+'"><img data-crest-src="'+esc(t.crest_url || '')+'" alt=""><span>'+esc(t.name)+'<small>'+esc(countryName(t.country))+'</small></span><b>↗</b></button>').join('')+(list.length?'':'<p>Nenhum time encontrado. Busque seu @ completo para encontrar sua cadeira.</p>');
    $('search-results').hidden=false;
  }
  $('q').addEventListener('focus',()=>{region=null;map.stop();closeGroup();closeSheet();setIntro(false);});
  $('q').addEventListener('input',()=>renderSearch($('q').value));
  $('q').addEventListener('keydown',e=>{if(e.key==='Escape')$('search-results').hidden=true;});
  document.addEventListener('click',e=>{if(!$('search').contains(e.target)&&!e.target.closest('#discover-team'))$('search-results').hidden=true;});
  $('search-results').onclick=e=>{const b=e.target.closest('[data-result]');if(b){const t=S.teams.find(t=>t.id===b.dataset.result);showView('mapa');openTeam(t);$('search-results').hidden=true;$('q').value=t.name;}};
  $('search').addEventListener('submit',e=>{e.preventDefault();const query=$('q').value.trim();if(query.startsWith('@')||S.fans.some(f=>f.h===query.toLowerCase())){$('search-results').hidden=true;findFan(query);}else{const matches=searchMatches(query);if(query&&matches.length===1){showView('mapa');openTeam(matches[0]);$('search-results').hidden=true;$('q').value=matches[0].name;}else renderSearch(query);}});

  // ---------- boletim ----------
  function renderBoletim() {
    const box = $("boletim");
    const active = S.teams.filter((t) => t.n > 0);
    if (!active.length) {
      box.innerHTML = `<summary>Rodada <small>Pontapé inicial</small></summary><p class="bulletin-empty">Explore os ${S.teams.length} clubes no mapa. Em breve, seu comentário vai virar parte dessa história.</p>`;
      return;
    }
    const top = [...active].sort(L.chairsFirst);
    const fans = S.fans.filter((f) => f.idle < S.inactivity && f.cad > 0).sort((a, b) => b.cad - a.cad);
    const near = active.filter((t) => LEVELS[t.level + 1]).map((t) => ({ t, falta: LEVELS[t.level + 1].min - t.cadeiras })).sort((a, b) => a.falta - b.falta)[0];
    box.innerHTML = `
      <summary>Rodada <small>${G.DEMO ? "Exemplo" : "Ver resumo"}</small></summary>
      <dl class="blt">
        <dt>Lidera</dt><dd><button class="linky" data-t="${top[0].id}">${esc(top[0].name)}</button> com <b>${fmt(top[0].cadeiras)}</b> cadeiras na temporada</dd>
        ${fans[0] ? `<dt>Craque</dt><dd>@${esc(fans[0].h)} (${esc(fans[0].team.short)}) com <b>${fans[0].cad}</b> cadeiras</dd>` : ""}
        ${near ? `<dt>Quase lá</dt><dd><button class="linky" data-t="${near.t.id}">${esc(near.t.name)}</button> a <b>${fmt(near.falta)}</b> de virar ${LEVELS[near.t.level + 1].name.toLowerCase()}</dd>` : ""}
        <dt>Torcidas</dt><dd><b>${fmt(S.fans.length)}</b> torcedores em <b>${active.length}</b> times</dd>
      </dl>`;
  }
  $("boletim").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-t]"); if (!b) return;
    const t = S.teams.find((x) => x.id === b.dataset.t); openTeam(t);
  });

  // ---------- ranking ----------
  let ORD = "cadeiras", REG = "all", allClubs=false;
  function renderRank() {
    if($('view-ranking').hidden)return;
    document.querySelector('.rank-table').dataset.sort=ORD;
    const rows = S.teams.filter((t) => (allClubs||t.cadeiras>0)&&(REG === "all" || (REG === "BR" ? t.country === "BR" : G.regionOf(t) === REG)) && (!$("rank-country").value || t.country === $("rank-country").value)).sort(L.chairsFirst);
    $("rank-body").innerHTML = rows.map((t, i) => `
      <tr class="trow" data-t="${t.id}" tabindex="0"><td class="pos">${i + 1}</td>
      <td><span class="team">${t.crest_url ? `<img data-crest-src="${esc(t.crest_url)}" alt="" width="18" height="18" style="object-fit:contain">` : `<span class="sw" style="background:${esc(t.color1)}"></span>`}${esc(t.name)}</span></td>
      <td>${esc(t.city)} · ${esc(FOREIGN(t) ? countryName(t.country) : t.uf)}</td><td><span class="lvl">${LEVELS[t.level].name}</span></td>
      <td class="num chairs-primary">${fmt(t.cadeiras)}</td><td class="num supporters-secondary">${fmt(t.n)}</td><td class="num">${fmt(t.semana)}</td></tr>`).join("")||'<tr><td colspan="7">Nenhum clube com cadeiras neste filtro. Use “Ver todos os clubes” para explorar.</td></tr>';
    const fans = S.fans.filter((f) => f.idle < S.inactivity && f.cad > 0).sort((a, b) => b.cad - a.cad || a.h.localeCompare(b.h)).slice(0, 10);
    $("top-fans").innerHTML = fans.map((f, i) => `<li><span class="n">${i + 1}</span><span class="h">@${esc(f.h)} · ${esc(f.team.name)}</span><span class="v">${fmt(f.cad)} cadeiras</span></li>`).join("") || '<li><span></span><span class="h">Ninguém pontuou nesta rodada ainda</span><span></span></li>';
  }
  $("rank-body").addEventListener("click", (e) => { const r = e.target.closest("tr[data-t]"); if (!r) return; const t = S.teams.find((x) => x.id === r.dataset.t); showView("mapa"); openTeam(t); });
  $('rank-all').onclick=()=>{allClubs=!allClubs;$('rank-all').setAttribute('aria-pressed',String(allClubs));$('rank-all').textContent=allClubs?'Mostrar só clubes com cadeiras':'Ver todos os clubes';renderRank();};
  $("rank-body").addEventListener("keydown", (e) => { if (e.key === "Enter") { const r = e.target.closest("tr"); if (r) r.click(); } });
  document.querySelectorAll("[data-ord]").forEach((b) => (b.onclick = () => { ORD = b.dataset.ord; document.querySelectorAll("[data-ord]").forEach((x) => x.setAttribute("aria-pressed", x === b)); renderRank(); }));
  document.querySelectorAll("[data-reg]").forEach((b) => (b.onclick = () => { REG = b.dataset.reg; document.querySelectorAll("[data-reg]").forEach((x) => x.setAttribute("aria-pressed", x === b)); renderRank(); }));

  // ---------- regras ----------
  $("ladder").innerHTML = LEVELS.map((l,i)=>`<div><div class="ladder-neighborhood" data-ladder="${i}"></div><strong>${l.name}</strong><span>${i ? "a partir de " + fmt(l.min) : "início"}</span></div>`).join("");
  $("inact-text").textContent = `Quem fica ${S.inactivity} dias sem comentar fica inelegível na próxima apuração diária, às 22h de Brasília. O cargo passa ao próximo elegível com mais cadeiras individuais na temporada, sem mínimo adicional além de 1 cadeira válida. As cadeiras ficam guardadas; ao voltar a comentar, o torcedor volta a concorrer com seu total na próxima apuração.`;

  const stageDetails=['Campo aberto, chão de terra, alambrado simples e banco de reservas.','Uma arquibancada comprida e coberta em um lado, com degraus nas cores da torcida. Os outros três lados continuam abertos.','Quatro setores, cantos abertos e quatro torres de iluminação.','Dois anéis de arquibancadas, cobertura contínua, fachada e luzes na cor do clube.','Três anéis, cobertura elevada em duas asas, abertura central com anel de luz, bandeiras e celebração.'];
  let previewIndex=0, tourTimer=null, tourRunning=false,previewThumbTeam=null;
  $('preview-team').innerHTML=[...S.teams].sort((a,b)=>a.name.localeCompare(b.name,'pt-BR')).map(t=>'<option value="'+esc(t.id)+'">'+esc(t.name)+'</option>').join('');
  $('preview-team').value='palmeiras';
  function previewStage(index){
    previewIndex=index; const level=LEVELS[index],team=S.teams.find(t=>t.id===$('preview-team').value)||S.teams[0];
    const example=i=>({...team,level:i,cadeiras:LEVELS[i].min,n:0,fans:[],presidente:null,lideres:[],stadium_items:[],visitorHandle:null});
    $('evolution-scene').classList.add('neighborhood-evolution');
    $('evolution-scene').innerHTML='<div class="stadium-render neighborhood-photo" id="evolution-neighborhood"></div><div class="stadium-caption"><p class="eyebrow">NÍVEL 0'+(index+1)+' / 05 · EXEMPLO VISUAL</p><div class="preview-club"><span>'+esc(team.name)+'</span></div><h3>'+esc(level.name)+'</h3><strong>'+fmt(level.min)+' cadeiras</strong><p>'+stageDetails[index]+'</p><p class="note">'+(index>=3&&['internacional','gremio','palmeiras'].includes(team.id)?'Arquitetura com a identidade do clube.':'O bairro cresce junto com o estádio.')+'</p></div>';
    window.ARENA_THUMBNAIL.mount($('evolution-neighborhood'),example(index),{group:'rules-main'});
    if(previewThumbTeam!==team.id){
      document.querySelectorAll('[data-stage]').forEach(b=>window.ARENA_THUMBNAIL.mount(b.querySelector('.stage-thumb'),example(Number(b.dataset.stage)),{group:'rules-thumb-'+b.dataset.stage}));
      document.querySelectorAll('[data-ladder]').forEach(el=>window.ARENA_THUMBNAIL.mount(el,example(Number(el.dataset.ladder)),{group:'rules-ladder-'+el.dataset.ladder}));previewThumbTeam=team.id;
    }
    document.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',Number(b.dataset.stage)===index));
  }
  function stopTour(){clearTimeout(tourTimer);tourTimer=null;tourRunning=false;$('play-evolution').textContent='▶ Ver evolução completa';}
  $('evolution-tabs').innerHTML=LEVELS.map((l,i)=>'<button type="button" data-stage="'+i+'" aria-pressed="false"><div class="stage-thumb"></div><span>0'+(i+1)+'</span>'+esc(l.name)+'<small>'+fmt(l.min)+' cadeiras</small></button>').join('');
  $('evolution-tabs').onclick=e=>{const b=e.target.closest('[data-stage]');if(b){stopTour();previewStage(Number(b.dataset.stage));}};
  $('preview-team').onchange=()=>{stopTour();previewStage(previewIndex);};
  $('preview-dna').onclick=()=>{stopTour();$('preview-team').value='internacional';previewStage(3);};
  $('play-evolution').onclick=()=>{if(tourRunning){stopTour();return;}tourRunning=true;$('play-evolution').textContent='Ⅱ Pausar evolução';previewStage(0);let step=0;const next=()=>{step++;if(step>4){stopTour();return;}previewStage(step);tourTimer=setTimeout(next,2400);};tourTimer=setTimeout(next,2400);};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTour();});
  let previewReady=false;
  // ---------- abas ----------
  function showView(v) {
    document.body.dataset.view=v;
    if(v!=="mapa"){closeGroup();const footer=document.querySelector(".site-footer");if(footer)$("view-"+v).querySelector(".wrap").append(footer);setIntro(false);}
    if(v!=="regras" && typeof stopTour==="function")stopTour();
    ["mapa", "ranking", "regras"].forEach((n) => { $("view-" + n).hidden = n !== v; $("tab-" + n).setAttribute("aria-selected", n === v); });
    if (v === "mapa") map.resize();
    if(v==='ranking')renderRank();
    if(v==='regras'&&!previewReady){previewReady=true;previewStage(0);}
  }
  document.querySelectorAll(".tabs button").forEach((b) => (b.onclick = () => showView(b.dataset.view)));

  const countries = [...new Set(S.teams.map(t=>t.country))].sort((a,b)=>countryName(a).localeCompare(countryName(b),'pt-BR'));
  $('rank-country').innerHTML = '<option value="">Todos os países</option>' + countries.map(code=>'<option value="'+esc(code)+'">'+esc(countryName(code))+'</option>').join('');
  $('rank-country').onchange = renderRank;
  renderBoletim(); renderRank();
  let resizeFrame;
  let previousMapSize='';
  new ResizeObserver(()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>{
    if($('view-mapa').hidden)return;
    const r=$('map').getBoundingClientRect(),size=Math.round(r.width)+'x'+Math.round(r.height);
    if(size===previousMapSize)return;previousMapSize=size;map.resize();
    if(current&&!sheet.hidden&&!sheet.classList.contains('folded')&&!map.isMoving())flyTo(current,0);
  });}).observe($('map'));
  // link pessoal da DM: site.com/?u=seu_arroba
  const u = new URLSearchParams(location.search).get("u");
  // Local country labels use system fonts: no remote glyph downloads.
  const labels=(window.ARENA_COUNTRIES||[]).filter(c=>c.iso&&c.iso!=='-99').map(c=>{
    const el=document.createElement('span');el.className='country-label';el.textContent=countryName(c.iso);
    const marker=new maplibregl.Marker({element:el}).setLngLat(c.location).addTo(map);return {el,marker,location:c.location};
  });
  const cityGroups=new Map();S.teams.forEach(t=>{const key=t.country+':'+t.city;if(!cityGroups.has(key))cityGroups.set(key,[]);cityGroups.get(key).push(t);});
  const cityLabels=[...cityGroups.values()].map(teams=>{
    const el=document.createElement('span');el.className='city-label';el.textContent=teams[0].city;el.style.display='none';
    const location=teams[0].mapLocation,marker=new maplibregl.Marker({element:el}).setLngLat(location).addTo(map);
    return {el,marker,location,teams};
  });
  const cityKey=name=>name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const clubCityKeys=new Set([...cityGroups.values()].map(ts=>ts[0].country+':'+cityKey(ts[0].city)));
  let referenceCities=null,cityFetch=null,vectorPlaces=[];
  const nearbyCities=new Map();
  function refreshReferenceCities(){
    const z=map.getZoom(),bounds=map.getBounds(),wanted=new Set();
    if((referenceCities||vectorPlaces.length)&&z>=4.7){
      const minimum=z>=8?0:z>=6.5?50000:z>=5.5?150000:600000;
      const seen=new Set();
      [...vectorPlaces,...(referenceCities||[])].filter(c=>c[3]>=minimum&&bounds.contains([c[1],c[2]])&&!clubCityKeys.has(c[4]+':'+cityKey(c[0]))).slice(0,120).forEach(c=>{
        const name=cityKey(c[0]);if(seen.has(name))return;seen.add(name);
        if([...clubCityKeys].some(k=>k.endsWith(':'+name)))return;
        const key=c[4]+':'+c[0];wanted.add(key);if(nearbyCities.has(key))return;
        const el=document.createElement('span');el.className='city-label reference-city';el.textContent=c[0];el.style.display='none';
        const location=[c[1],c[2]],marker=new maplibregl.Marker({element:el}).setLngLat(location).addTo(map);
        nearbyCities.set(key,{el,marker,location,pop:c[3],teams:[]});
      });
    }
    nearbyCities.forEach((c,key)=>{if(!wanted.has(key)){c.marker.remove();nearbyCities.delete(key);}});
  }
  function loadReferenceCities(){
    if(map.getZoom()<4.7)return;
    if(referenceCities){refreshReferenceCities();return;}
    if(cityFetch)return;
    cityFetch=fetch('assets/cities.json',{signal:AbortSignal.timeout(10000)}).then(r=>{if(!r.ok)throw Error('city_map_unavailable');return r.json();}).then(data=>{referenceCities=data;refreshReferenceCities();labelVisibility();}).catch(()=>{}).finally(()=>cityFetch=null);
  }
  // Fine details are optional and never gate the base map or a fan's chair.
  let detailsReady=false,detailFrame=null;
  function fineReferences(){
    if(detailsReady||!baseReady||map.getZoom()<7||!map.isStyleLoaded())return;
    detailsReady=true;
    map.addSource('regional-detail',{type:'vector',url:'https://tiles.openfreemap.org/planet',attribution:'<a href="https://openfreemap.org/">OpenFreeMap</a> · <a href="https://openmaptiles.org/">© OpenMapTiles</a> · <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>'});
    map.addLayer({id:'main-roads',type:'line',source:'regional-detail','source-layer':'transportation',minzoom:7,filter:['match',['get','class'],['motorway','trunk','primary'],true,false],layout:{'line-cap':'round','line-join':'round'},paint:{'line-color':'#e6e4b1','line-width':['interpolate',['linear'],['zoom'],7,.8,12,2.5],'line-opacity':.62}});
    map.addLayer({id:'nearby-places',type:'circle',source:'regional-detail','source-layer':'place',minzoom:7,filter:['match',['get','class'],['city','town','village'],true,false],paint:{'circle-radius':1.5,'circle-color':'#729168','circle-opacity':.5}});
  }
  function readFineCities(){
    if(!detailsReady||map.getZoom()<7)return;
    vectorPlaces=map.querySourceFeatures('regional-detail',{sourceLayer:'place'}).filter(f=>f.geometry.type==='Point'&&['city','town','village'].includes(f.properties.class)).map(f=>[f.properties['name:pt']||f.properties.name,...f.geometry.coordinates,f.properties.class==='city'?1000000:f.properties.class==='town'?100000:25000,'']).filter(c=>c[0]);
    refreshReferenceCities();labelVisibility();
  }
  map.on('sourcedata',e=>{if(e.sourceId==='regional-detail'&&!detailFrame)detailFrame=requestAnimationFrame(()=>{detailFrame=null;readFineCities();});});
  map.on('moveend',fineReferences);map.on('load',fineReferences);
  const stateLabels=[];let statesLoading=false,statesReady=false;
  async function regionalReferences(){
    if(statesReady||statesLoading||map.getZoom()<4.4||!map.isStyleLoaded())return;statesLoading=true;
    const b=map.getBounds();if(b.getWest()>-34||b.getEast()<-74||b.getSouth()>6||b.getNorth()<-34){statesLoading=false;return;}
    try{
      const response=await fetch('assets/states-br.json',{signal:AbortSignal.timeout(10000)});if(!response.ok)throw Error('regional_map_unavailable');
      const data=await response.json();if(data.type!=='FeatureCollection'||data.features.length!==27)throw Error('invalid_regional_map');
      map.addSource('br-states',{type:'geojson',data,tolerance:.15});
      map.addLayer({id:'state-land',type:'fill',source:'br-states',minzoom:4.4,paint:{'fill-color':'#a7cf84','fill-opacity':['interpolate',['linear'],['zoom'],4.4,0,4.7,1]}},'country-border');
      map.addLayer({id:'state-borders',type:'line',source:'br-states',minzoom:4.4,paint:{'line-color':'#5b8863','line-width':['interpolate',['linear'],['zoom'],4.4,.8,9,1.5],'line-dasharray':[3,2],'line-opacity':['interpolate',['linear'],['zoom'],4.4,0,5,.9]}});
      const br=['==',['get','iso'],'BR'];
      // Keep the coarse land visible until the regional geometry is rendered.
      const replaceBrazil=()=>{
      map.setPaintProperty('land','fill-opacity',['interpolate',['linear'],['zoom'],4.4,1,4.7,['case',br,0,1]]);
      map.setPaintProperty('country-border','line-opacity',['interpolate',['linear'],['zoom'],4.4,.65,4.7,['case',br,0,.65]]);
      map.setPaintProperty('coast-highlight','line-opacity',['interpolate',['linear'],['zoom'],4.4,.35,4.7,['case',br,0,.35]]);
      };
      if(map.isSourceLoaded('br-states'))replaceBrazil();else{const onRegionalData=e=>{if(e.sourceId==='br-states'&&e.isSourceLoaded){map.off('sourcedata',onRegionalData);replaceBrazil();}};map.on('sourcedata',onRegionalData);}
      data.features.forEach(f=>{const el=document.createElement('span');el.className='state-label';el.textContent=f.properties.name.toLocaleUpperCase('pt-BR');el.style.display='none';const location=f.properties.label,marker=new maplibregl.Marker({element:el}).setLngLat(location).addTo(map);stateLabels.push({el,marker,location});});
      statesReady=true;document.documentElement.dataset.regionalReadyMs=Math.round(performance.now());labelVisibility();
    }catch{ /* The base map and participation remain usable; retry on the next move. */ }
    finally{statesLoading=false;}
  }
  function labelVisibility(){
    const z=map.getZoom(),bounds=map.getBounds(),taken=[],rect=$('map').getBoundingClientRect(),area=usableArea();
    const overlaps=box=>taken.some(b=>box.x<b.x+b.w+8&&box.x+box.w>b.x-8&&box.y<b.y+b.h+5&&box.y+box.h>b.y-5);
    function plain(c,visible){if(visible){const p=map.project(c.location),box={x:p.x-c.el.textContent.length*3.5,y:p.y-9,w:c.el.textContent.length*7,h:18};visible=!overlaps(box);if(visible)taken.push(box);}c.el.style.display=visible?'':'none';}
    labels.sort((a,b)=>(b.el.textContent==='Brasil')-(a.el.textContent==='Brasil')).forEach(c=>plain(c,z>=1.7&&z<5.2&&bounds.contains(c.location)));
    stateLabels.forEach(c=>plain(c,z>=4.5&&z<7.2&&bounds.contains(c.location)));
    // City names get their own space, away from club crests and labels.
    if(z>=4.7){document.querySelectorAll('#map .stad,#map .map-cluster').forEach(el=>{if(el.style.display==='none')return;const r=el.getBoundingClientRect();if(r.right<rect.left||r.left>rect.right||r.bottom<rect.top||r.top>rect.bottom)return;taken.push({x:r.left-rect.left-12,y:r.top-rect.top-24,w:r.width+24,h:r.height+(el.classList.contains('stad')?72:38)});});}
    const ordered=[...cityLabels,...nearbyCities.values()].sort((a,b)=>Number(b.teams.some(t=>t.id===current?.id))-Number(a.teams.some(t=>t.id===current?.id))||Number(b.teams.length>0)-Number(a.teams.length>0)||(b.pop||0)-(a.pop||0));
    ordered.forEach(c=>{
      c.el.style.display='none';if(z<4.7||!bounds.contains(c.location))return;
      const p=map.project(c.location),offsets=c.teams.map(t=>t.mapOffset[1]),w=c.el.textContent.length*6.6+12,h=18;
      // Keep geographic references close to their coordinates, even when this
      // means hiding a crowded label instead of moving it into another region.
      const candidates=!c.teams.length?[[0,0],[0,-16],[0,16]]:[[0,-68],[0,68],[72,0],[-72,0],[52,-48],[-52,48]];
      for(const [x,y] of candidates){const box={x:p.x+x-w/2,y:p.y+y-h/2,w,h};if(box.x<10||box.x+w>rect.width-10||box.y<area.top||box.y+h>area.bottom||overlaps(box))continue;c.marker.setOffset([x,y]);c.el.style.display='';taken.push(box);break;}
    });
  }
  map.on('moveend',()=>{loadReferenceCities();readFineCities();refreshReferenceCities();labelVisibility();});
  map.on('moveend',regionalReferences);map.on('load',regionalReferences);
  let personalRequested=false,introStarted=false,introTimer=null,introCancelled=false,introGeneration=0;
  const stopOpening=()=>{introCancelled=true;introGeneration++;clearTimeout(introTimer);$('camera-replay').textContent='Abertura';};
  for(const event of ['pointerdown','wheel','keydown'])document.addEventListener(event,stopOpening,{capture:true});
  $('q').addEventListener('input',stopOpening);
  async function scheduleCountry(team,personal){
    const generation=introGeneration;
    await Promise.race([detailRenderer?.ready||Promise.resolve(false),new Promise(resolve=>setTimeout(resolve,3500))]);
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    if(introCancelled||generation!==introGeneration)return;
    $('view-mapa').dataset.opening='stadium';
    $('camera-replay').textContent='Abertura · '+team.name;
    introTimer=setTimeout(()=>{
      if(introCancelled||generation!==introGeneration)return;
      const feature=map.querySourceFeatures('world').find(f=>f.properties.iso===team.country);
      const polys=feature?(feature.geometry.type==='Polygon'?[feature.geometry.coordinates]:feature.geometry.coordinates):[];
      const boxes=polys.map(p=>{const xs=p[0].map(v=>v[0]),ys=p[0].map(v=>v[1]);return [[Math.min(...xs),Math.min(...ys)],[Math.max(...xs),Math.max(...ys)]];});
      boxes.sort((a,b)=>(b[1][0]-b[0][0])*(b[1][1]-b[0][1])-(a[1][0]-a[0][0])*(a[1][1]-a[0][1]));
      if(!personal){closeSheet();closeGroup();}
      region=null;scope=team.country==='BR'?'br':'all';
      fitBounds(team.country==='BR'?VIEWS.br:boxes[0]||VIEWS.all,undefined,reduced()?0:1400,personal);
      $('view-mapa').dataset.opening='country';
      $('camera-replay').textContent='Abertura';
    },reduced()?1800:600);
  }
  function initialFocus(replay=false){
    if(introStarted)return;introStarted=true;
    if(!replay){$('view-mapa').dataset.opening='country';if(u){personalRequested=true;findFan(u);}else{const club=S.teams.find(t=>t.id===previewParams.get('clube'));if(club)openTeam(club);else fit('br');}return;}
    $('view-mapa').dataset.opening='loading-stadium';
    if(u){personalRequested=true;findFan(u).then(()=>{if(current&&!lightMode)scheduleCountry(current,true);});return;}
    if(lightMode||/^#(ranking|regras)$/.test(location.hash)){$('view-mapa').dataset.opening=lightMode?'light':'section';fit('br');return;}
    const leader=[...S.teams].sort((a,b)=>b.cadeiras-a.cadeiras||a.rankAll-b.rankAll)[0];
    sceneClub=leader;region=null;$('mobile-welcome').hidden=true;
    const r=$('map').getBoundingClientRect(),area=usableArea(false);
    map.jumpTo({center:leader.mapLocation,zoom:leader.level>=3?16.1:17.1,pitch:52,bearing:-30,padding:zeroPadding});
    map.easeTo({center:leader.mapLocation,offset:L.focusOffset(r.width,r.height,area),duration:0});
    declutter();refreshStadiumScene();
    scheduleCountry(leader,false);
  }
  $('camera-replay').onclick=()=>{stopOpening();introCancelled=false;introStarted=false;initialFocus(true);};
  initialFocus();
  if(!boardPanel){regionalReferences();loadReferenceCities();}
  const activity=window.ARENA_ACTIVITY;
  let transientEvents=[];
  function renderActivity(){
    const events=activity.events(S,LEVELS,transientEvents);
    $('total-chairs').textContent=fmt(S.teams.reduce((sum,t)=>sum+t.cadeiras,0));$('total-supporters').textContent=fmt(S.fans.length);$('total-playing').textContent=fmt(S.teams.filter(t=>t.n>0).length);$('total-clubs').textContent=fmt(S.teams.length);
    $('activity-count').textContent=events.length?events.length:'';
    $('activity-list').innerHTML=events.map(e=>'<button type="button" class="activity-item" data-event-team="'+esc(e.team)+'"><span class="event-icon" aria-hidden="true">'+e.icon+'</span><span><small>'+esc(e.label)+'</small><b>'+esc(e.title)+'</b><span>'+esc(e.detail)+'</span><em>Ver no mapa ↗</em></span></button>').join('')||'<p class="activity-empty">O próximo capítulo começa com sua torcida. Comente seu time no Instagram.</p>';
    $('activity-updated').textContent='Atualizado às '+new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit',timeZone:'America/Sao_Paulo'}).format(new Date())+' · Brasília';
  }
  renderActivity();
  $('activity-list').onclick=e=>{const b=e.target.closest('[data-event-team]');if(b){showView('mapa');openTeam(S.teams.find(t=>t.id===b.dataset.eventTeam));}};
  $('activity-toggle').onclick=()=>{closeGroup();closeSheet();setIntro(false);const open=$('view-mapa').classList.toggle('activity-open');$('activity-toggle').setAttribute('aria-expanded',String(open));};
  $('activity-close').onclick=()=>{$('view-mapa').classList.remove('activity-open');$('activity-toggle').setAttribute('aria-expanded','false');};
  let refreshing=false;
  async function refreshGame(){
    if(G.DEMO||document.hidden||refreshing||window.ARENA_PANEL?.suspended)return;refreshing=true;
    try{
      const nextRaw=await G.load(),next=G.compute(nextRaw,nextRaw.inactivity);
      if(S.season?.id!==next.season?.id||S.season?.status!==next.season?.status||S.season?.roles_released!==next.season?.roles_released){location.reload();return;}
      const old=S,newEvents=activity.changes(old,next,LEVELS),arrivals=window.ARENA_CROWD.newcomers(old,next);
      const latest=new Map();for(const e of newEvents.concat(transientEvents)){const key=e.kind+':'+e.team;if(!latest.has(key)&&(!e.observedAt||Date.now()-e.observedAt<15*60000)&&(e.kind!=='rank'||next.teams.find(t=>t.id===e.team)?.rankAll===e.position))latest.set(key,{...e,observedAt:e.observedAt||Date.now()});}transientEvents=[...latest.values()].slice(0,15);
      const active=current?.id,handle=meHandle;raw=nextRaw;S=next;
      placeMarkers();declutter();sceneSignature=null;refreshStadiumScene();renderRank();renderBoletim();renderActivity();renderSeasonBadge();
      $('fan-count').textContent=fmt(S.fans.length);
      if(active){const team=S.teams.find(t=>t.id===active),prior=old.teams.find(t=>t.id===active);current=team;team?.el?.classList.add('sel');const signature=t=>JSON.stringify([t.cadeiras,t.rankAll,t.rankUF,t.presidente?.h,t.lideres.map(f=>f.h),t.fans.map(f=>[f.h,f.cad,f.week,f.idle,f.streak])]);if(team&&prior&&!sheet.hidden&&signature(team)!==signature(prior))openTeam(team,handle,true);}
      for(const e of newEvents.filter(e=>e.kind==='level')){const marker=S.teams.find(t=>t.id===e.team)?.el;if(marker)marker.classList.add('level-up');}
      if(motionEnabled)for(const id of window.ARENA_MOTION.gains(old,next))detailRenderer?.celebrate(id);
      const arrival=arrivals.find(f=>f.team===(current||sceneClub)?.id);if(arrival)showArrival(arrival);
    }catch{$('activity-updated').textContent='Sem conexão para atualizar · mantendo a última leitura';}
    finally{refreshing=false;}
  }
  setInterval(refreshGame,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshGame();});
  if (/^#(ranking|regras)$/.test(location.hash)) showView(location.hash.slice(1));
 if(['ranking','regras'].includes(previewParams.get('view')))showView(previewParams.get('view'));
 ARENA_PANEL.finish();
})();

