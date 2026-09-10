import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import CardAtividade from './components/CardAtividade';
import { atividades } from './data/atividades';

function App() {
  return (
    <div>
      {/* Cabeçalho principal com navegacao semantica */}
      <header>
        {/* Componente Cabeçalho*/}
        <Cabecalho />
      </header>

      {/* Conteudo principal da pagina */}
      <main>
        <section id="atividades">
          <h2>Lista de Atividades</h2>

          <div className="grid-cards">
            {atividades.map((atividade) => (
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