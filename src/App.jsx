// src/App.jsx

import { useState } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import CardAtividade from './components/CardAtividade';
import ModalAtividade from './components/ModalAtividade';
import { atividades } from './data/atividades';

function App() {
  const [filtro, setFiltro] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);

  const tecnologias = ['Todos', 'HTML', 'CSS', 'React', 'Git', 'Vercel'];

  const concluidas = atividades.filter((item) => item.status === 'Concluída').length;
  const total = 30;
  const percentual = Math.min(100, Math.max(0, Math.round((concluidas / total) * 100)));

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
      <Cabecalho />

      <main>
        <section id="atividades">
          <div className="cabecalho-secao">
            <h2>Lista de Atividades</h2>
            <p className="contador-progresso">
              Progresso: <strong>{concluidas}</strong> de {total} concluídas ({percentual}%)
            </p>
          </div>

          <div className="barra-progresso-container">
            <div
              className="barra-progresso-trilho"
              role="progressbar"
              aria-valuenow={percentual}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Progresso de conclusão das atividades do portfólio"
            >
              <div
                className="barra-progresso-preenchimento"
                style={{ width: `${percentual}%` }}
              ></div>
            </div>
          </div>

          <div className="busca-container">
            <input
              type="text"
              placeholder="Buscar atividade por título ou descrição..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="input-busca"
            />
          </div>

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

          {atividadesFiltradas.length > 0 ? (
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
                  onVerDetalhes={() => setAtividadeSelecionada(atividade)}
                />
              ))}
            </div>
          ) : (
            <div className="mensagem-vazia">
              <p>Nenhuma atividade encontrada com os termos informados.</p>
            </div>
          )}
        </section>

        <section id="sobre">
          <h2>Sobre</h2>
          <p>Seção reservada para informações detalhadas do perfil e competências.</p>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Seção reservada para o formulário de contato.</p>
        </section>
      </main>

      {/* Renderização do Modal */}
      <ModalAtividade 
        atividade={atividadeSelecionada} 
        onClose={() => setAtividadeSelecionada(null)} 
      />

      <Rodape />
    </div>
  );
}

export default App;