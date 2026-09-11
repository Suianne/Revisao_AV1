import ambiente from '../assets/ambiente-virtual.jpg';
import git from '../assets/git_img.jpeg';
import cabecalho from '../assets/cabecalho.jpeg';
import htmlCss from '../assets/html_css.png';
import css from '../assets/css.png';
import htmlCssReact from '../assets/html_css_react.png';
import react from '../assets/react.png';
import js from '../assets/js.png';
import vercel from '../assets/vercel.png'


export const atividades = [
    {
        id: 1,
        numero: 1,
        titulo: "Preparar ambiente",
        descricao: "Versão do node: v24.16.0 | Versão do npm: 9.8.0 | Versão do git: 2.54.0.windows.1",
        tencnologia: "React / Vite",
        imagem: ambiente,
        status: "Concluída"
    },
    {
        id: 2,
        numero: 2,
        titulo: "Inicializar o repositório Git",
        descricao: "Repositório iniciado com git init, arquivo .gitignore configurado para ignorar node_modules e dist, e branch principal definida como main.",
        tencnologia: "Git",
        imagem: git,
        status: "Concluída"
    },
    {
        id: 3,
        numero: 3,
        titulo: "Construir a estrutura semântica",
        descricao: "Aplicação organizada utilizando as tags HTML semânticas header, nav, main, section, article e footer, garantindo hierarquia e acessibilidade.",
        tencnologia: "HTML / JSX",
        imagem: htmlCss,
        status: "Concluída"
    },
    {
        id: 4,
        numero: 4,
        titulo: "Criar cabeçalho e identidade",
        descricao: "Adicionado cabeçalho completo com nome do autor, turma, avatar, texto descritivo e botão de ação para navegação rápida até a lista de entregas.",
        tencnologia: "HTML / CSS",
        imagem: htmlCss,
        status: "Concluída"
    },
    {
        id: 5,
        numero: 5,
        titulo: "Criar menu de navegação",
        descricao: "Implementado menu com links de âncora internos.",
        tencnologia: "HTML / CSS",
        imagem: htmlCss,
        status: "Concluída"
    },
    {
        id: 6,
        numero: 6,
        titulo: "Definir o sistema visual em CSS",
        descricao: "Configuradas variáveis CSS em :root para paleta de cores, espaçamentos e sombras, além de reset global com box-sizing e tipografia padrão.",
        tencnologia: "CSS",
        imagem: css,
        status: "Concluída"
    },
    {
        id: 7,
        numero: 7,
        titulo: "Construir cartões de atividades",
        descricao: "Estilização visual completa desenvolvida para os componentes de cartão, com transições para hover, bordas com foco para navegação por teclado e alto contraste.",
        tencnologia: "CSS3",
        imagem: htmlCss,
        status: "Concluída"
    },
    {
        id: 8,
        numero: 8,
        titulo: "Organizar o layout com Flexbox",
        descricao: "Aplicado Flexbox para alinhar e distribuir elementos no cabeçalho, perfil e menu de navegação, utilizando justify-content, align-items e gap.",
        tencnologia: "CSS3 Flexbox",
        imagem: htmlCss,
        status: "Concluída"
    },
    {
        id: 9,
        numero: 9,
        titulo: "Organizar atividades com CSS Grid",
        descricao: "Aplicado CSS Grid na seção de entregas utilizando repeat(auto-fit, minmax(280px, 1fr)) para distribuir os cartões de forma fluida e sem largura fixa.",
        tencnologia: "CSS3 Grid",
        imagem: css,
        status: "Concluída"
    },
    {
        id: 10,
        numero: 10,
        titulo: "Tornar a homepage responsiva",
        descricao: "Implementadas media queries para adaptar o layout em telas de 360px, 768px e 1440px, ajustando o menu, perfil e a grade de cartões sem quebras de layout.",
        tencnologia: "CSS3 Media Queries",
        imagem: css,
        status: "Concluída"
    },
    {
        id: 11,
        numero: 11,
        titulo: "Criar o componente Cabecalho",
        descricao: "Estrutura do cabeçalho isolada em src/components/Cabecalho.jsx, reduzindo o acoplamento no App.jsx e promovendo reuso e organização do código.",
        tencnologia: "React / JSX",
        imagem: htmlCssReact,
        status: "Concluída"
    },
    {
        id: 12,
        numero: 12,
        titulo: "Criar o componente Rodapé",
        descricao: "Isolada a estrutura do rodapé em Rodape.jsx com cálculo dinâmico do ano corrente em JavaScript e link interno para retorno suave ao topo.",
        tencnologia: "React / JSX",
        imagem: htmlCssReact,
        status: "Concluída"
    },
    {
        id: 13,
        numero: 13,
        titulo: "Criar o componente CardAtividade",
        descricao: "Cartão transformado em componente dinâmico reutilizável, recebendo numero, titulo, descricao, tecnologia e imagem através de props.",
        tencnologia: "React / Props",
        imagem: react,
        status: "Concluída"
    },
    {
        id: 14,
        numero: 14,
        titulo: "Modelar os dados das atividades",
        descricao: "Separação de dados e apresentação criando o arquivo de mock em src/data/atividades.js.",
        tencnologia: "JavaScript",
        imagem: js,
        status: "Concluída"
    },
    {
        id: 15,
        numero: 15,
        titulo: "Renderizar a lista com map",
        descricao: "Substituição da renderização estática pelo método .map() iterando sobre o array de dados com key única.",
        tencnologia: "React / JSX",
        imagem: react,
        status: "Concluída"
    },
    {
    id: 16,
    numero: 16,
    titulo: "Mostrar status condicional",
    descricao: "Aplicação de renderização condicional exibindo se a atividade está Concluída, Em andamento ou Planejada com estilos visuais próprios.",
    tecnologia: "React / CSS",
    imagem: htmlCss,
    status: "Concluído"
  },
  {
    id: 17,
    numero: 17,
    titulo: "Criar filtro por tecnologia",
    descricao: "Controle da exibição dos cartões através de useState sem modificar o array original de dados.",
    tecnologia: "React / State",
    imagem: react,
    status: "Concluída"
  },

  {
    id: 18,
    numero: 18,
    titulo: "Criar busca por texto",
    descricao: "Implementação de campo de busca controlado para filtragem de atividades por título ou descrição sem case-sensitivity, com feedback visual para busca sem resultados.",
    tecnologia: "React / State",
    imagem: react,
    status: "Concluída"
  },

  {
    id: 19,
    numero: 19,
    titulo: "Criar contador de progresso",
    descricao: "Cálculo e exibição automática do progresso das atividades concluídas diretamente do array de dados, sem uso redundante de estado.",
    tecnologia: "React / JavaScript",
    imagem: js,
    status: "Concluída"
  },
  {
    id: 20,
    numero: 20,
    titulo: "Criar barra de progresso",
    descricao: "Implementação de barra de progresso visual e acessível (com atributos ARIA), sincronizada com o cálculo de atividades concluídas.",
    tecnologia: "React / HTML5 ARIA",
    imagem: htmlCssReact,
    status: "Concluída"
  },
  {
    id: 21,
    numero: 21,
    titulo: "Criar modal de detalhes",
    descricao: "Desenvolvimento de modal interativo para exibição detalhada da atividade, com suporte a fechamento via tecla Escape, clique externo e controle de foco acessível.",
    tecnologia: "React",
    imagem: react,
    status: "Concluída"
  },
  {
    id: 22,
    numero: 22,
    titulo: "Criar formulário de contato",
    descricao: "Implementação de formulário interativo com campos controlados, validação nativa, prevenção do recarregamento de página e mensagem de confirmação simulada.",
    tecnologia: "React / Forms",
    imagem: react,
    status: "Concluída"
  },
  {
    id: 23,
    numero: 23,
    titulo: "Implementar alternância de tema",
    descricao: "Controle de preferência visual entre modo claro e escuro via estado, aplicando atributos dinâmicos CSS que mantêm contraste e acessibilidade de foco.",
    tecnologia: "React / CSS Variables",
    imagem: react,
    status: "Concluída"
  },
  {
    id: 24,
    numero: 24,
    titulo: "Persistir preferência local",
    descricao: "Mapeamento e recuperação do tema ativo usando localStorage sob a chave 'portfolio_tema', garantindo a restauração da escolha do usuário com fallback padrão 'light'.",
    tecnologia: "React / LocalStorage",
    imagem: react,
    status: "Concluída"
  },
  {
    id: 25,
    numero: 25,
    titulo: "Adicionar seção Sobre",
    descricao: "Criação de componente institucional apresentando o objetivo profissional, lista detalhada com nível de domínio das tecnologias praticadas e links externos direcionados.",
    tecnologia: "React / JSX",
    imagem: react,
    status: "Concluída"
  },
  {
    id: 26,
    numero: 26,
    titulo: "Revisar acessibilidade",
    descricao: "Auditoria e correções de acessibilidade: hierarquia de headings, suporte a foco visível, rótulos explícitos, textos alt contextuais e redundância textual para elementos coloridos.",
    tecnologia: "a11y / HTML Semântico",
    imagem: htmlCss,
    status: "Concluída"
  },
  {
    id: 27,
    numero: 27,
    titulo: "Criar o README do repositório",
    descricao: "Documentação completa no arquivo README.md contendo instruções de instalação, comandos de execução, arquitetura de arquivos, pré-requisitos e links de entrega.",
    tecnologia: "Markdown / Git",
    imagem: git,
    status: "Concluída"
  },
  {
    id: 28,
    numero: 28,
    titulo: "Organizar o histórico Git",
    descricao: "Revisão do repositório, validação do histórico de commits e criação da tag local v1.0.0 para marcar o lançamento da primeira versão estável do portfólio.",
    tecnologia: "Git / Tagging",
    imagem: git,
    status: "Concluída"
  },
  {
    id: 29,
    numero: 29,
    titulo: "Enviar o projeto ao repositório remoto",
    descricao: "Conexão do repositório local ao GitHub (remote origin) e envio completo do código-fonte da branch main juntamente com a tag de versão v1.0.0.",
    tecnologia: "Git / GitHub",
    imagem: git,
    status: "Concluída"
  },
  {
    id: 30,
    numero: 30,
    titulo: "Publicar e validar na Vercel",
    descricao: "Projeto publicado e validado em ambiente de produção na Vercel. Checklist final concluído com sucesso: menu de navegação, filtros por tecnologia, busca por texto, modal de detalhes, formulário de contato e responsividade em diferentes telas.",
    tecnologia: "Vercel",
    imagem: vercel,
    status: "Concluída",
    link: "https://seu-projeto.vercel.app"
  }
]