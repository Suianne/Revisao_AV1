// src/components/AcessibilidadeVerificacoes.jsx

function AcessibilidadeVerificacoes() {
  const verificacoes = [
    {
      id: 1,
      item: 'Hierarquia de Headings (h1 - h3)',
      descricao: 'Garantida a sequência estruturada de títulos sem pular níveis, facilitando a navegação por leitores de tela.'
    },
    {
      id: 2,
      item: 'Associação de Labels e Inputs',
      descricao: 'Todos os campos do formulário de contato possuem atributos `htmlFor` estritamente mapeados aos IDs correspondentes.'
    },
    {
      id: 3,
      item: 'Navegação e Foco Visível via Teclado',
      descricao: 'Aplicada a estilização `:focus-visible` com alto contraste em todos os botões, links e campos interativos.'
    },
    {
      id: 4,
      item: 'Textos Alternativos (alt) em Imagens',
      descricao: 'Mapeamento de descrições contextuais claras para imagens e atribuição de papéis decorativos quando necessário.'
    },
    {
      id: 5,
      item: 'Informação Independente de Cor',
      descricao: 'Status das atividades e confirmações contêm ícones e rótulos textuais explícitos, além do código de cores.'
    }
  ];

  return (
    <section id="acessibilidade" className="secao-sobre">
      <h2>Relatório de Verificações de Acessibilidade</h2>
      <p className="texto-bio">
        Abaixo estão registradas as principais validações executadas na interface para eliminar barreiras de navegação e garantir uso inclusivo:
      </p>

      <ul className="lista-competencias">
        {verificacoes.map((v) => (
          <li key={v.id} className="item-competencia">
            <div className="cabecalho-competencia">
              <strong>{v.id}. {v.item}</strong>
              <span className="badge-nivel" style={{ backgroundColor: '#28a745' }}>Verificado</span>
            </div>
            <p className="descricao-competencia">{v.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AcessibilidadeVerificacoes;