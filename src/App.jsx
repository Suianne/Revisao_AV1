import './App.css';

function App() {
  return (
    <div>
      {/* Cabeçalho principal com navegacao semantica */}
      <header>

        <div className="perfil">
          <img src="https://via.placeholder.com/100" alt="Minha foto de perfil" className="avatar"/>
          <div>
            <h1>Suianne Costa Ramos Martins</h1>
            <p>Aluna de Desenvolvimento FullStack | 2026.1</p>
            <p className="bio"> Portfóilio de revisão para a unidade 1</p>
            <a href="#atividades" className="btn-principal">Ver Atividades</a>
          </div>
        </div>

        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#atividades">Atividades</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteudo principal da pagina */}
      <main>
        <section id="atividades">
          <h2>Lista de Atividades</h2>

          <div className="grid-cards">
            {/* Card 1 */}
            <article className="card">
              <div className="card-image">
                <img src="https://via.placeholder.com/286x180?text=Ambiente" alt="Evidência do Passo 1" />
              </div>
              <div className="card-body">
                <h3>Passo 1: Preparar ambiente</h3>
                <ul>
                  <li><strong>Versão do node:</strong> v24.16.0</li>
                  <li><strong>Versão do npm:</strong> 9.8.0</li>
                  <li><strong>Versão do git:</strong> 2.54.0.windows.1</li>
                </ul>
                <div className="card-footer">
                  <span className="card-tech">Tecnologia: React / Vite</span>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="card">
              <div className="card-image">
                <img src="https://via.placeholder.com/286x180?text=Git+Init" alt="Evidência do Passo 2" />
              </div>
              <div className="card-body">
                <h3>Passo 2: Inicializar o repositório Git</h3>
                <p>Repositório iniciado com git init, arquivo .gitignore configurado para ignorar node_modules e dist, e branch principal definida como main.</p>
                <div className="card-footer">
                  <span className="card-tech">Tecnologia: Git</span>
                </div>
              </div>
            </article>

            {/* Card 3 (Passo Atual) */}
            <article className="card">
              <div className="card-image">
                <img src="https://via.placeholder.com/286x180?text=HTML+Semantico" alt="Evidência do Passo 3" />
              </div>
              <div className="card-body">
                <h3>Passo 3: Construir a estrutura semântica</h3>
                <p>Aplicação organizada utilizando as tags HTML semânticas header, nav, main, section, article e footer, garantindo hierarquia e acessibilidade.</p>
                <div className="card-footer">
                  <span className="card-tech">Tecnologia: HTML / JSX</span>
                </div>
              </div>
            </article>

            {/* Card 4 (Passo Atual) */}
            <article className="card">
              <div className="card-image">
                <img src="https://via.placeholder.com/286x180?text=Cabeçalho+e+Identidade" alt="Evidência do Passo 4" />
              </div>
              <div className="card-body">
                <h3>Passo 4: Criar cabeçalho e identidade</h3>
                <p>Adicionado cabeçalho completo com nome do autor, turma, avatar, texto descritivo e botão de ação para navegação rápida até a lista de entregas.</p>
                <div className="card-footer">
                  <span className="card-tech">Tecnologia: HTML / CSS</span>
                </div>
              </div>
            </article>
            
          </div>
        </section>
      </main>

      {/* Rodape da pagina */}
      <footer>
        <p>&copy; 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;