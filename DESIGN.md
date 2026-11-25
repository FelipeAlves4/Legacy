# Legacy — direção visual da Fase 1

## Ideia central

O “L” é uma forma arquitetônica: partes autônomas se encontram para formar uma estrutura mais forte. A escultura do hero é uma exploração conceitual, não um logotipo aprovado. O símbolo vetorial do cabeçalho simplifica a mesma lógica.

## Sistema visual

- Obsidiana `#080C14`, navy `#101E33`, champagne `#C9AA73`, ivory `#F5F4F0`.
- Manrope para títulos e interface; escala fluida com `clamp()` e tracking negativo nos títulos.
- Seções claras e escuras alternadas, regras finas, geometria de precisão e grandes espaços de respiro.
- Grade editorial assimétrica: manifesto, frentes do ecossistema, produto, rede tecnológica e fotografia arquitetônica têm composições diferentes.
- Botões retangulares, ícones funcionais de traço leve e estados de foco visíveis.
- Movimento contido: deslocamento suave na entrada, hover de links e diagrama; preferência por movimento reduzido desliga animações.

## Tokens

Os tokens vivem em `src/app/globals.css` (`:root`). Conteúdo e integrações editáveis vivem em `src/config/site.ts` e `.env.example`.

## Recursos

- `public/images/legacy-sculpture.png`: escultura arquitetônica em L gerada com a ferramenta integrada Image Gen; prompt de produção: “monumental abstract architectural sculpture suggesting uppercase L, brushed obsidian metal, warm champagne-gold inner edges, three-quarter low view, cinematic side lighting, deep navy architectural void, no text”.
- `public/images/architecture.png`: fotografia editorial gerada com Image Gen; prompt de produção: “contemporary Brazilian corporate architecture interior, concrete stair, dark glass, warm late-afternoon light, no people or text”.
- Mockup do Gestão, diagrama tecnológico e geometria das frentes são CSS/SVG originais. Os dados do mockup são explicitamente demonstrativos.
