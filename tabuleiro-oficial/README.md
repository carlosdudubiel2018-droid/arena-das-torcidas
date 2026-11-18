# Tabuleiro oficial

A abertura rápida usa a arte aprovada do laboratório e hidrata os dados com as leituras públicas existentes. Não escreve pontuação, cargos ou comentários. As fichas, regras, ranking e compartilhamento reutilizam o aplicativo existente dentro de painel.html, com a renderização geográfica antiga desativada; o bairro novo é carregado sob demanda.

Preparação: atualizar bootstrap.json com scripts/tabuleiro-official-data.cjs, gerar a publicação com scripts/promote-tabuleiro.py e verificar com scripts/check-official-board.cjs. O build genérico antigo não promove o tabuleiro. A base de comparação desta promoção está em .sites-runtime/baseline-v73; o backup completo anterior permanece fora do checkout em arena-backup-v73-antes-tabuleiro-oficial.tar.gz.

O service worker só armazena HTML público da abertura e imagens visuais; ignora administração, autenticação e APIs. Os dados vivos são consultados a cada minuto e ao retornar à página. As miniaturas pré-renderizadas têm 24 etapas por clube e só baixam folhas adicionais quando a etapa diverge da folha inicial. O tabuleiro permanece montado durante a visita ao bairro.
