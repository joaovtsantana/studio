# VerdeHub - Plataforma de Justiça Ambiental Comunitária

VerdeHub é uma aplicação web desenvolvida para fortalecer a ação ambiental comunitária. A plataforma permite que os usuários denunciem problemas ambientais, acessem dados, participem de discussões e encontrem recursos para promover um impacto positivo em suas localidades.

## Funcionalidades Principais

- **Página de Apresentação:** Uma landing page que introduz a plataforma e seus objetivos.
- **Autenticação de Usuário:** Sistema de login para acesso à área restrita da plataforma.
- **Dashboard Principal:** Um painel central que oferece acesso rápido às principais funcionalidades:
  - **Denunciar:** Formulário para registrar ocorrências ambientais.
  - **Cursos e Certificações:** Seção para materiais educativos (placeholder).
  - **Monitoramento:** Área para visualização de dados (placeholder).
- **Página de Denúncia:** Permite ao usuário detalhar uma ocorrência, anexar fotos e, o mais importante, marcar a localização exata em um mapa interativo.
- **Mapa Interativo:** Utiliza a biblioteca Leaflet para exibir um mapa com múltiplas camadas, incluindo:
  - **Padrão (OpenStreetMap):** Um mapa de ruas detalhado.
  - **Satélite (Esri):** Imagens de satélite de alta resolução.
  - **Satélite (NASA):** Imagens "Blue Marble" da NASA.
- **Dados Ambientais:** Gráficos que exibem dados sobre qualidade do ar, pureza da água e taxas de reciclagem.
- **Fórum Comunitário:** Uma tabela para listar e acessar tópicos de discussão da comunidade.
- **Recursos e Dicas:** Uma coleção de artigos e guias sobre práticas sustentáveis.

## Tecnologias Utilizadas

Este projeto é construído com um stack moderno e robusto para desenvolvimento web.

- **Framework Principal:** [Next.js](https://nextjs.org/) (utilizando o App Router e React Server Components).
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/).
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) para estilização utilitária e responsiva.
- **Componentes de UI:** [ShadCN UI](https://ui.shadcn.com/) para um conjunto de componentes acessíveis e reutilizáveis.
- **Mapas:**
  - [Leaflet](https://leafletjs.com/): Biblioteca de código aberto para mapas interativos.
  - [React-Leaflet](https://react-leaflet.js.org/): Integração do Leaflet com o React.
- **Gráficos:** [Recharts](https://recharts.org/) para a criação de gráficos composable com React.
- **Ícones:** [Lucide React](https://lucide.dev/) para ícones leves e consistentes.
- **Inteligência Artificial Generativa:** [Genkit](https://firebase.google.com/docs/genkit) (integrado, mas ainda não implementado nas funcionalidades visíveis).
- **Backend e Hospedagem:** [Firebase](https://firebase.google.com/) (configurado para App Hosting).

## Como Começar

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    Abra [http://localhost:9002](http://localhost:9002) no seu navegador para ver a aplicação em funcionamento.

## Estrutura do Projeto

- `src/app/`: Contém as rotas e páginas da aplicação, seguindo a estrutura do Next.js App Router.
  - `(auth)/`: Rotas relacionadas à autenticação.
  - `(dashboard)/`: Rotas e layout da área restrita do usuário.
- `src/components/`: Componentes React reutilizáveis.
  - `ui/`: Componentes base do ShadCN UI.
  - `logo.tsx`: Componente do logo da aplicação.
  - `map.tsx`: Componente do mapa interativo com Leaflet.
- `src/lib/`: Funções utilitárias e dados.
- `src/styles/`: Estilos globais.
- `public/`: Arquivos estáticos.
