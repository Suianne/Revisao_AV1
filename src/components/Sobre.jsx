// src/components/Sobre.jsx

function Sobre() {
  const competencias = [
    { nome: 'HTML5 & CSS3', nivel: 'Intermediário', descricao: 'Semântica, acessibilidade e layouts responsivos' },
    { nome: 'JavaScript (ES6+)', nivel: 'Intermediário', descricao: 'Manipulação de DOM, funções assíncronas e ES Modules' },
    { nome: 'React', nivel: 'Em aprendizado', descricao: 'Componentes, hooks (useState, useEffect) e gerenciamento de estado' },
    { nome: 'Git & GitHub', nivel: 'Básico/Intermediário', descricao: 'Controle de versão, commits estruturados e suporte ao deploy' },
    { nome: 'Vercel', nivel: 'Básico', descricao: 'Hospedagem e integração contínua de aplicações web' }
  ];

  return (
    <section id="sobre" className="secao-sobre">
      <h2>Sobre a Autora</h2>
      
      <div className="conteudo-sobre">
        <p className="texto-bio">
          Sou estudante de Engenharia de Computação na Universidade Senai Cimatec,
          esse site está sendo desenvolvido com o foco de fortalecer e desenvolver as habilidades
          relacionadas ao desenvolvimento front-end, utilizando React e outras tecnologias do ecossistema.
          Essa é uma revisão, como um portfólio, documentando uma jornada prática de aprendizado através
          de 30 atividades estruturadas em React e ecossistema front-end.
        </p>

        <h3>Competências e Tecnologias Praticadas</h3>
        <ul className="lista-competencias">
          {competencias.map((comp) => (
            <li key={comp.nome} className="item-competencia">
              <div className="cabecalho-competencia">
                <strong>{comp.nome}</strong>
                <span className="badge-nivel">{comp.nivel}</span>
              </div>
              <p className="descricao-competencia">{comp.descricao}</p>
            </li>
          ))}
        </ul>

        <h3>Links Profissionais</h3>
        <div className="links-profissionais">
          <a 
            href="https://github.com/Suianne" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-profissional"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/suianne-martins/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-profissional"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sobre;