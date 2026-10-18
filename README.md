# Portfólio profissional — Luiza Angelim

Site estático em HTML, CSS e JavaScript, preparado para GitHub Pages. **Não precisa de React, instalação de programas, build, hospedagem paga nem banco de dados.**

## Publicar em uma conta GitHub existente

1. Acesse GitHub e, na conta `AndersonM1986`, crie um **novo repositório público** chamado `luiza-financeiro` (ou outro nome curto disponível).
2. Descompacte este ZIP no celular/computador. Na aba **Código** do repositório vazio, clique em **enviando um arquivo existente** (ou **+ → Carregar arquivos**).
3. Envie `index.html`, `styles.css`, `script.js`, `curriculo-luiza-angelim.pdf` e `README.md`. Eles devem ficar **diretamente na raiz do repositório**; nunca dentro de uma pasta adicional.
4. Crie/envie uma pasta com o nome **exato** `assets` e os arquivos `luiza-angelim.webp`, `luiza-perfil.webp` e `favicon.svg`. Se o Chrome traduzir "assets" como "ativos", verifique o nome real clicando na pasta e observando a URL; o nome no caminho deve ser `assets`.
5. Confirme as alterações (botão verde). Depois, vá em **Settings/Configurações → Pages/Páginas → Deploy from a branch/Implantar a partir de uma ramificação**.
6. Selecione `main` e `/(root)`; clique em **Salvar**. Aguarde a confirmação "Seu site está online".
7. URL esperada: `https://andersonm1986.github.io/luiza-financeiro/`. Se o repositório tiver outro nome, o final da URL também muda.

## Atualizar um site já publicado

Se o site anterior da Luiza já estiver no ar, use o **mesmo repositório** e substitua os arquivos de mesmo nome por estes. Como esta versão usa nomes novos para a fotografia e PDF, inclua também as novas imagens na pasta `assets`. Não altere o repositório do Anderson.

## Estrutura

```text
index.html                     Conteúdo e navegação
styles.css                    Visual responsivo
script.js                     Menu, efeitos e barra de rolagem
curriculo-luiza-angelim.pdf   Currículo original fornecido
assets/luiza-angelim.webp     Fotografia principal
assets/luiza-perfil.webp      Cópia otimizada da fotografia
assets/favicon.svg            Ícone do site
README.md                     Este arquivo
```

## Conteúdo incluído

Informações profissionais extraídas do arquivo **Currículo de Luiza Angelim - Setembro de 2026.pdf**, enviado pelo usuário:

- Luiza Helena F. Angelim, Fortaleza/CE; Supervisora Administrativo-Financeira e Analista Financeira.
- Locus Contabilidade — Supervisora Administrativo-Financeira: jan/2024–mai/2026; Analista Financeira: set/2021–dez/2023.
- Ceará Certificação e Ceará Web — Agente de Registro: jan/2022–atual (atividade concomitante, conforme datas do currículo).
- Essence Complexo de Estética Ltda. — Analista Financeira: mai/2019–mai/2021.
- Propeg Comunicação S.A. — Analista Financeira: nov/2014–nov/2018.
- Formação: Pós-Graduação em Gerência Executiva de Marketing — UFC; Graduação em Comunicação Social — FANOR.
- Plataformas: Omie, Nibo, Conta Azul, Onvio, Domínio, WhatsContábil, Syngular e Soluti.

As descrições foram reorganizadas em linguagem de portfólio, **sem inventar conquistas, números de economia, certificações ou cargos**.

## Contatos e consentimento

Antes de publicar, confirme com Luiza a autorização para divulgar fotografia, telefone, e-mail, LinkedIn e currículo. Todos ficarão públicos (inclusive o PDF, que poderá ser baixado). Caso ela prefira, você pode ocultar telefone/WhatsApp ou substituir a ação por um formulário intermediado por outro serviço.

Dados de contato aparecem no `index.html` em `mailto:`, `wa.me/`, na âncora `linkedin.com` e em texto na seção CONTATO. A foto está em `assets/luiza-angelim.webp`; substitua pelo mesmo nome se ela quiser outra fotografia.

## Boas práticas

- O site é um **portfólio**, não substitui o PDF legível por ATS.
- Links são relativos: funcionam em `github.io/nome-do-repositorio/` e em domínios próprios.
- O menu do celular funciona sem ferramentas externas. As fontes são requisitadas do Google Fonts, com fontes alternativas se a rede falhar.
- O QR Code só deve ser criado após confirmar o endereço final de publicação.
