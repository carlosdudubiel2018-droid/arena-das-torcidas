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

