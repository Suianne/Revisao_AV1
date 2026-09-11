import fotoPerfil from '../assets/foto.jpg';
    
function Cabecalho() {
    return(
        <header>
            <div className="perfil">
                <img src={fotoPerfil} alt="Foto de perfil" className="avatar"/>
                <div>
                    <h1>Suianne Costa Ramos Martins</h1>
                    <p>Aluna de Desenvolvimento Fullstack | Turma 2026.1</p>
                    <p className="bio">Atividade de Revisão para I° unidade</p>
                    <a href="#atividades" className="btn-principal">Ver Atividades</a>
                </div>
            </div>

            <nav>
                <ul>
                    <li><a href="#incio">Inicio</a></li>
                    <li><a href="#atividades">Atividades</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho;

