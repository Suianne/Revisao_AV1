function CardAtividade ({numero, titulo, descricao, tecnologia, imagem}) {
    return (
        <article className="card">
            <div className="card-image">
                <img src= {imagem || "https://via.placeholder.com/286x180"} alt={`Evidência da atividade ${numero}`} />
            </div>
            <div className="card-body">
                <h3>Passo {numero}: {titulo}</h3>
                <p>{descricao}</p>
                <div className="card-footer">
                    <span className="card-tech"> Tecnologia: {tecnologia}</span>
                </div>
            </div>
        </article>
    );
}

export default CardAtividade;