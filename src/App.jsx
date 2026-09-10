import { useState } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import CardAtividade from './components/CardAtividade';
import { atividades } from './data/atividades';

function App() {
  const [filtro, setFiltro] = useState('Todos');

  const tecnologias = ['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel'];

  const atividadesFiltradas = atividades.filter((atividade) => {
    const atendeFiltroTech =
      filtro === 'Todos' ||
      atividade.tecnologia.toLowerCase().includes(filtro.toLowerCase());

    const termoBusca = busca.toLowerCase();
    const atendeBuscaTexto =
      atividade.titulo.toLowerCase().includes(termoBusca) ||
      atividade.descricao.toLowerCase().includes(termoBusca);

    return atendeFiltroTech && atendeBuscaTexto;
    
  });

  return (
    <div id="inicio">
      {/* Cabeçalho principal com navegacao semantica */}
      <header>
        {/* Componente Cabeçalho*/}
        <Cabecalho />
      </header>

      {/* Conteudo principal da pagina */}
      <main>
        <section id="atividades">
          <h2>Lista de Atividades</h2>

          {/*Botões do Filtro de tecnologia*/}

          <div className="filtro-container">
            {tecnologias.map((tech) => (
              <button
                key={tech}
                className={`btn-filtro ${filtro === tech ? 'ativo' : ''}`}
                onClick={() => setFiltro(tech)}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="grid-cards">
            {atividadesFiltradas.map((atividade) => (
              <CardAtividade
                key={atividade.id}
                numero={atividade.numero}
                titulo={atividade.titulo}
                descricao={atividade.descricao}
                tecnologia={atividade.tecnologia}
                imagem={atividade.imagem}
                status={atividade.status}
              />
            ))}
          </div>
        </section>

        <section id="sobre">
          <h2>Sobre</h2>
          <p>Seção reservada para informações detalhadas do perfil e competências.</p>
        </section>

        <section id="">
          <h2>Contato</h2>
          <p>Seção reservada para o formulário de contato.</p>
        </section>
      </main>

      {/*Componente de Rodapé*/}
      <Rodape />
    </div>
  );
}

export default App;