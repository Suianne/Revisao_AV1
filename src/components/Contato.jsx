// src/components/Contato.jsx

import { useState } from 'react';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    setEnviado(true);
    // Limpa os campos após a simulação de envio
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <section id="contato" className="secao-contato">
      <h2>Contato</h2>
      
      {enviado && (
        <div className="alerta-sucesso" role="status">
          <p> Mensagem enviada com sucesso! Obrigado pelo contato.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-contato">
        <div className="grupo-input">
          <label htmlFor="nome">Nome Completo *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Digite seu nome"
          />
        </div>

        <div className="grupo-input">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu.email@exemplo.com"
          />
        </div>

        <div className="grupo-input">
          <label htmlFor="assunto">Assunto *</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
            placeholder="Motivo do contato"
          />
        </div>

        <div className="grupo-input">
          <label htmlFor="mensagem">Mensagem *</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            value={formData.mensagem}
            onChange={handleChange}
            required
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar">
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}

export default Contato;