// src/components/CardAtividade.jsx

function CardAtividade({ numero, titulo, descricao, tecnologia, imagem, status = "Concluída", onVerDetalhes }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "Concluída":
        return "status-concluida";
      case "Em andamento":
        return "status-andamento";
      case "Planejada":
        return "status-planejada";
      default:
        return "status-padrao";
    }
  };

  return (
    <article className="card">
      <div className="card-image">
        <img src={imagem || "https://via.placeholder.com/286x180"} alt={`Evidência da atividade ${numero}`} />
        <span className={`card-status ${getStatusClass(status)}`}>
          {status}
        </span>
      </div>
      <div className="card-body">
        <h3>Passo {numero}: {titulo}</h3>
        <p>{descricao}</p>
        <div className="card-footer">
          <span className="card-tech">Tecnologia: {tecnologia}</span>
          <button className="btn-detalhes" onClick={onVerDetalhes}>
            Ver atividade
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardAtividade;