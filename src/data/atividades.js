export const atividades = [
    {
        id: 1,
        numero: 1,
        titulo: "Preparar ambiente",
        descricao: "Versão do node: v24.16.0 | Versão do npm: 9.8.0 | Versão do git: 2.54.0.windows.1",
        tencnologia: "React / Vite",
        imagem: "https://via.placeholder.com/286x180?text=Ambiente",
        status: "Concluída"
    },
    {
        id: 2,
        numero: 2,
        titulo: "Inicializar o repositório Git",
        descricao: "Repositório iniciado com git init, arquivo .gitignore configurado para ignorar node_modules e dist, e branch principal definida como main.",
        tencnologia: "Git",
        imagem: "https://via.placeholder.com/286x180?text=Git+Init",
        status: "Concluída"
    },
    {
        id: 3,
        numero: 3,
        titulo: "Construir a estrutura semântica",
        descricao: "Aplicação organizada utilizando as tags HTML semânticas header, nav, main, section, article e footer, garantindo hierarquia e acessibilidade.",
        tencnologia: "HTML / JSX",
        imagem: "https://via.placeholder.com/286x180?text=HTML+Semantico",
        status: "Concluída"
    },
    {
        id: 4,
        numero: 4,
        titulo: "Criar cabeçalho e identidade",
        descricao: "Adicionado cabeçalho completo com nome do autor, turma, avatar, texto descritivo e botão de ação para navegação rápida até a lista de entregas.",
        tencnologia: "HTML / CSS",
        imagem: "https://via.placeholder.com/286x180?text=Cabeçalho+e+Identidade",
        status: "Concluída"
    },
    {
        id: 5,
        numero: 5,
        titulo: "Criar menu de navegação",
        descricao: "Implementado menu com links de âncora internos.",
        tencnologia: "HTML / CSS",
        imagem: "https://via.placeholder.com/286x180?text=Cabeçalho+e+Identidade",
        status: "Concluída"
    },
    {
        id: 6,
        numero: 6,
        titulo: "Definir o sistema visual em CSS",
        descricao: "Configuradas variáveis CSS em :root para paleta de cores, espaçamentos e sombras, além de reset global com box-sizing e tipografia padrão.",
        tencnologia: "CSS3",
        imagem: "https://via.placeholder.com/286x180?text=Cartão+de+Atividades",
        status: "Concluída"
    },
    {
        id: 7,
        numero: 7,
        titulo: "Construir cartões de atividades",
        descricao: "Estilização visual completa desenvolvida para os componentes de cartão, com transições para hover, bordas com foco para navegação por teclado e alto contraste.",
        tencnologia: "CSS3",
        imagem: "https://via.placeholder.com/286x180?text=Cartão+de+Atividades",
        status: "Concluída"
    },
    {
        id: 8,
        numero: 8,
        titulo: "Organizar o layout com Flexbox",
        descricao: "Aplicado Flexbox para alinhar e distribuir elementos no cabeçalho, perfil e menu de navegação, utilizando justify-content, align-items e gap.",
        tencnologia: "CSS3 Flexbox",
        imagem: "https://via.placeholder.com/286x180?text=Flexbox+Layout",
        status: "Concluída"
    },
    {
        id: 9,
        numero: 9,
        titulo: "Organizar atividades com CSS Grid",
        descricao: "Aplicado CSS Grid na seção de entregas utilizando repeat(auto-fit, minmax(280px, 1fr)) para distribuir os cartões de forma fluida e sem largura fixa.",
        tencnologia: "CSS3 Grid",
        imagem: "https://via.placeholder.com/286x180?text=CSS+Grid",
        status: "Concluída"
    },
    {
        id: 10,
        numero: 10,
        titulo: "Tornar a homepage responsiva",
        descricao: "Implementadas media queries para adaptar o layout em telas de 360px, 768px e 1440px, ajustando o menu, perfil e a grade de cartões sem quebras de layout.",
        tencnologia: "CSS3 Media Queries",
        imagem: "https://via.placeholder.com/286x180?text=Responsividade",
        status: "Concluída"
    },
    {
        id: 11,
        numero: 11,
        titulo: "Criar o componente Cabecalho",
        descricao: "Estrutura do cabeçalho isolada em src/components/Cabecalho.jsx, reduzindo o acoplamento no App.jsx e promovendo reuso e organização do código.",
        tencnologia: "React / JSX",
        imagem: "https://via.placeholder.com/286x180?text=Componente+Cabecalho",
        status: "Concluída"
    },
    {
        id: 12,
        numero: 12,
        titulo: "Criar o componente Rodapé",
        descricao: "Isolada a estrutura do rodapé em Rodape.jsx com cálculo dinâmico do ano corrente em JavaScript e link interno para retorno suave ao topo.",
        tencnologia: "React / JSX",
        imagem: "https://via.placeholder.com/286x180?text=Componente+Rodape",
        status: "Concluída"
    },
    {
        id: 13,
        numero: 13,
        titulo: "Criar o componente CardAtividade",
        descricao: "Cartão transformado em componente dinâmico reutilizável, recebendo numero, titulo, descricao, tecnologia e imagem através de props.",
        tencnologia: "React / Props",
        imagem: "https://via.placeholder.com/286x180?text=Componente+CardAtividade",
        status: "Concluída"
    },
    {
        id: 14,
        numero: 14,
        titulo: "Modelar os dados das atividades",
        descricao: "Separação de dados e apresentação criando o arquivo de mock em src/data/atividades.js.",
        tencnologia: "JavaScript / ES6",
        imagem: "https://via.placeholder.com/286x180?text=Modelagem+de+Dados",
        status: "Concluída"
    },
    {
        id: 15,
        numero: 15,
        titulo: "Renderizar a lista com map",
        descricao: "Substituição da renderização estática pelo método .map() iterando sobre o array de dados com key única.",
        tencnologia: "React / JSX",
        imagem: "https://via.placeholder.com/286x180?text=Renderizacao+Map",
        status: "Concluída"
    },
    {
    id: 16,
    numero: 16,
    titulo: "Mostrar status condicional",
    descricao: "Aplicação de renderização condicional exibindo se a atividade está Concluída, Em andamento ou Planejada com estilos visuais próprios.",
    tecnologia: "React / CSS",
    imagem: "https://via.placeholder.com/286x180?text=Status+Condicional",
    status: "Concluído"
  },
  {
    id: 17,
    numero: 17,
    titulo: "Criar filtro por tecnologia",
    descricao: "Controle da exibição dos cartões através de useState sem modificar o array original de dados.",
    tecnologia: "React / State",
    imagem: "https://via.placeholder.com/286x180?text=Filtro+Tecnologia",
    status: "Concluída"
  },

  {
    id: 18,
    numero: 18,
    titulo: "Criar busca por texto",
    descricao: "Implementação de campo de busca controlado para filtragem de atividades por título ou descrição sem case-sensitivity, com feedback visual para busca sem resultados.",
    tecnologia: "React / State",
    imagem: "https://via.placeholder.com/286x180?text=Busca+por+Texto",
    status: "Concluída"
  },

  {
    id: 19,
    numero: 19,
    titulo: "Criar contador de progresso",
    descricao: "Cálculo e exibição automática do progresso das atividades concluídas diretamente do array de dados, sem uso redundante de estado.",
    tecnologia: "React / JavaScript",
    imagem: "https://via.placeholder.com/286x180?text=Contador+Progresso",
    status: "Concluída"
  },
  {
    id: 20,
    numero: 20,
    titulo: "Criar barra de progresso",
    descricao: "Implementação de barra de progresso visual e acessível (com atributos ARIA), sincronizada com o cálculo de atividades concluídas.",
    tecnologia: "React / HTML5 ARIA",
    imagem: "https://via.placeholder.com/286x180?text=Barra+de+Progresso",
    status: "Concluída"
  },
  {
    id: 21,
    numero: 21,
    titulo: "Criar modal de detalhes",
    descricao: "Desenvolvimento de modal interativo para exibição detalhada da atividade, com suporte a fechamento via tecla Escape, clique externo e controle de foco acessível.",
    tecnologia: "React / Acessibilidade",
    imagem: "https://via.placeholder.com/286x180?text=Modal+de+Detalhes",
    status: "Concluída"
  },
  {
    id: 22,
    numero: 22,
    titulo: "Criar formulário de contato",
    descricao: "Implementação de formulário interativo com campos controlados, validação nativa, prevenção do recarregamento de página e mensagem de confirmação simulada.",
    tecnologia: "React / Forms",
    imagem: "https://via.placeholder.com/286x180?text=Formulario+de+Contato",
    status: "Concluída"
  },
  {
    id: 23,
    numero: 23,
    titulo: "Implementar alternância de tema",
    descricao: "Controle de preferência visual entre modo claro e escuro via estado, aplicando atributos dinâmicos CSS que mantêm contraste e acessibilidade de foco.",
    tecnologia: "React / CSS Variables",
    imagem: "https://via.placeholder.com/286x180?text=Alternancia+de+Tema",
    status: "Concluída"
  }
]