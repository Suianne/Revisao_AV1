import { useEffect } from "react";

function ModalAtividade ({atividade, onClose}) {
    if (!atividade) return null;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="modal-titulo">Passo {atividade.numero}: {atividade.titulo}</h3>
          <button className="btn-fechar" onClick={onClose} aria-label="Fechar modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <img 
            src={atividade.imagem || "https://via.placeholder.com/400x220"} 
            alt={`Evidência da atividade ${atividade.numero}`} 
            className="modal-imagem"
          />
          <p><strong>Status:</strong> {atividade.status}</p>
          <p><strong>Tecnologia:</strong> {atividade.tecnologia}</p>
          <p><strong>Descrição Detalhada:</strong> {atividade.descricao}</p>
          
          <div className="modal-aprendizado">
            <h4>Principais Aprendizados</h4>
            <p>Implementação prática focada em arquitetura de componentes, controle de estado, acessibilidade (ARIA/foco de teclado) e boas práticas com React.</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secundario" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
    );
}

export default ModalAtividade;