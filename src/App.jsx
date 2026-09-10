import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import CardAtividade from './components/CardAtividade';

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
            <CardAtividade
              numero={1}
              titulo="Preparar ambiente"
              descricao="Versão do node: v24.16.0 | Versão do npm: 9.8.0 | Versão do git: 2.54.0.windows.1"
              tecnologia="React / Vite"
              imagem="https://via.placeholder.com/286x180?text=Ambiente"
            />

            <CardAtividade
              numero={2}
              titulo="Inicializar o repositório Git"
              descricao="Repositório iniciado com git init, arquivo .gitignore configurado para ignorar node_modules e dist, e branch principal definida como main."
              tecnologia="Git"
              imagem="https://via.placeholder.com/286x180?text=Git+Init"
            />

            <CardAtividade
              numero={3}
              titulo="Construir a estrutura semântica"
              descricao="Aplicação organizada utilizando as tags HTML semânticas header, nav, main, section, article e footer, garantindo hierarquia e acessibilidade."
              tecnologia="HTML / JSX"
              imagem="https://via.placeholder.com/286x180?text=HTML+Semantico"
            />

            <CardAtividade
              numero={4}
              titulo="Criar cabeçalho e identidade"
              descricao="Adicionado cabeçalho completo com nome do autor, turma, avatar, texto descritivo e botão de ação para navegação rápida até a lista de entregas."
              tecnologia="HTML / CSS"
              imagem="https://via.placeholder.com/286x180?text=Cabeçalho+e+Identidade"
            />

            <CardAtividade
              numero={5}
              titulo="Criar menu de navegação"
              descricao="Implementado menu com links de âncora internos."
              tecnologia="HTML / CSS"
              imagem="https://via.placeholder.com/286x180?text=Cabeçalho+e+Identidade"
            />
            
            <CardAtividade
              numero={6}
              titulo="Definir o sistema visual em CSS"
              descricao="Configuradas variáveis CSS em :root para paleta de cores, espaçamentos e sombras, além de reset global com box-sizing e tipografia padrão."
              tecnologia="CSS3"
              imagem="https://via.placeholder.com/286x180?text=Sistema+Visual+CSS"
            />

            <CardAtividade
              numero={7}
              titulo="Construir cartões de atividades"
              descricao="Estilização visual completa desenvolvida para os componentes de cartão, com transições para hover, bordas com foco para navegação por teclado e alto contraste."
              tecnologia="CSS3"
              imagem="https://via.placeholder.com/286x180?text=Cartão+de+Atividades"
            />

            <CardAtividade
              numero={8}
              titulo="Organizar o layout com Flexbox"
              descricao="Aplicado Flexbox para alinhar e distribuir elementos no cabeçalho, perfil e menu de navegação, utilizando justify-content, align-items e gap."
              tecnologia="CSS3 Flexbox"
              imagem="https://via.placeholder.com/286x180?text=Flexbox+Layout"
            />

            <CardAtividade
              numero={9}
              titulo="Organizar atividades com CSS Grid"
              descricao="Aplicado CSS Grid na seção de entregas utilizando repeat(auto-fit, minmax(280px, 1fr)) para distribuir os cartões de forma fluida e sem largura fixa."
              tecnologia="CSS3 Grid"
              imagem="https://via.placeholder.com/286x180?text=CSS+Grid"
            />

            <CardAtividade
              numero={10}
              titulo="Tornar a homepage responsiva"
              descricao="Implementadas media queries para adaptar o layout em telas de 360px, 768px e 1440px, ajustando o menu, perfil e a grade de cartões sem quebras de layout."
              tecnologia="CSS3 Media Queries"
              imagem="https://via.placeholder.com/286x180?text=Responsividade"
            />

            <CardAtividade
              numero={11}
              titulo="Criar o componente Cabecalho"
              descricao="Estrutura do cabeçalho isolada em src/components/Cabecalho.jsx, reduzindo o acoplamento no App.jsx e promovendo reuso e organização do código."
              tecnologia="React / JSX"
              imagem="https://via.placeholder.com/286x180?text=Componente+Cabecalho"
            />

            <CardAtividade
              numero={12}
              titulo="Criar o componente Rodape"
              descricao="Isolada a estrutura do rodapé em Rodape.jsx com cálculo dinâmico do ano corrente em JavaScript e link interno para retorno suave ao topo."
              tecnologia="React / JSX"
              imagem="https://via.placeholder.com/286x180?text=Componente+Rodape"
            />

            <CardAtividade
              numero={13}
              titulo="Criar o componente CardAtividade"
              descricao="Cartão transformado em componente dinâmico reutilizável, recebendo numero, titulo, descricao, tecnologia e imagem através de props."
              tecnologia="React / Props"
              imagem="https://via.placeholder.com/286x180?text=Componente+CardAtividade"
            />
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