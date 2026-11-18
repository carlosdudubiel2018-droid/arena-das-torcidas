# Escudos dos clubes novos — somente laboratório

11 WebP RGBA de 128×128, todos abaixo de10KB. Total:66924bytes (~65,4KiB). Nenhum símbolo genérico ou desenhado.

Inclui Andirá, Marcílio Dias, Juventus da Mooca, Nacional-AM, Itacoatiara, Santo André, União Corinthians, Feira FC, ASA; inclui também Íbis e Inter de Bebedouro, encontrados na auditoria.

Os nove primeiros já tinham escudo real em `teams.crest_url` como dataURI. Foram extraídos em leitura e normalizados localmente. Itacoatiara e Nacional foram comparados aos assets da FAF; ambos conferem. Íbis foi obtido do avatar da conta oficial no Linktree. Inter de Bebedouro reutiliza o asset Commons já presente no laboratório (crédito e licença em sources.json).

O catálogo público tem193clubes ativos. Cruzando o mapa de arquivos existente e os11overrides, não ficaram escudos sem arquivo resolvido. `catalog-readonly.json` é a captura de apoio (não é necessário enviá-la ao frontend).

## Integração

Copiar só `escudos/`, `crest-override.js` e `sources.json` para uma pasta exclusiva dos laboratórios. Carregar o script externo **depois** de `crest-map.js`/`crest-lite.js` e antes do código da tela. O caminho dos arquivos é relativo ao próprio script, então ele funciona se a pasta for renomeada. Não depende de dataURI nem de fallback genérico para estes11clubes.

Exemplo: `<script src="/laboratorio-rounds-assets/crest-override.js"></script>`.

O wrapper altera apenas objetos em memória da página em que é carregado. Não grava no banco e não deve ser incluído em nenhuma página oficial nesta rodada.

## Validação

- Formato WebP válido, RGBA,128×128:11/11.
- Todos os arquivos abaixo de15KB:11/11.
- Identificação confrontada com clube/federação:Andirá,Marcílio,Juventus,Nacional,Itacoatiara,ASA,União Corinthians.
- Santo André: página oficial referenciada pelo catálogo; a busca confirma a seção de escudo, mas fetch atual retornou502. Mantido o escudo existente, sem substituição inventada.
- Feira FC: arquivo Commons descreve explicitamente escudo oficial e aponta para Instagram `feirafc`.
- Zero alterações no banco, em dist compartilhado ou em assets oficiais.

Preview: `escudos-auditados.jpg`.
