function Rodape() {
    const anoAtual = new Date().getFullYear();

    return(
        <footer>
            <p>&copy; {anoAtual} - Todos os direitos reservados</p>
            <a href="#inicio" className="btn-voltar-topo">
                Voltar ao início ↑
            </a>
        </footer>
    );

}

export default Rodape;