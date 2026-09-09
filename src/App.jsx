import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/*Cabeçalho Principal */}
      <header>
        <h1>Revisão da I° unidade</h1>
        {/* Menu de navegação */}
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#atividades">Atividades</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo principal da aplicação */}
      <main>
        {/* Seção de introdução */}
        <section id="atividades">
          <h2>Atividades</h2>


          <div className="grid-cards">
            {/*Card 1*/}
            <article className="card">
              <h3>Passo 1: Preparar ambiente</h3>
              <ul>
                <li><strong>Versão do node:</strong> v24.16.0</li>
                <li> <strong>Versão do npm:</strong> 9.8.0</li>
                <li><strong>Versão do git:</strong> 2.54.0.windows.1</li>
              </ul>
              <span>Tecnologia: React / Vite</span>
            </article>

          </div>
        </section>
      </main>
    </div>
  )
}

export default App
