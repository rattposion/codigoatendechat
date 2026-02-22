# Guia de Estilo – Nova UI

## Paleta de Cores
- Primária: #682EE3 → gradiente com #7C4DFF
- Secundária: #00BFA6 (modo claro) / #64FFDA (modo escuro)
- Fundo: claro #FAFAFA / escuro #333333
- Texto: alto contraste para AA

## Tipografia
- Fonte: Inter (fallback Roboto, sistema)
- Pesos: 400/500/600/700
- Botões: sem transformação de texto, peso 600

## Forma e Elevação
- Raio: 12–16px em Paper/Card
- Botões com cantos suaves e sem elevação por padrão

## Componentes Base
- LoadingSpinner: feedback de carregamento
- ErrorState: erros com ação de retry
- EmptyState: vazio com ação contextual
- MainHeader: barra contextual de página
- MainContainer: espaçamento responsivo

## Padrões de Interação
- Microinterações suaves via transições padrão do Material
- Estados de foco visíveis com alta visibilidade
- Ícones Material alinhados à ação principal/auxiliar

## Acessibilidade
- Skip link disponível: “Pular para o conteúdo”
- Contraste mínimo AA, foco visível
- Rotular IconButtons com aria-label

## Performance
- Rotas com carregamento dinâmico e fallback consistente
- Evitar carregamento de páginas fora do fluxo

## Estados
- Carregando: LoadingSpinner centralizado
- Erro: ErrorState com retry quando aplicável
- Vazio: EmptyState com CTA relevante

## Convenções
- Não adicionar comentários inline
- Preferir componentes existentes e tema global

