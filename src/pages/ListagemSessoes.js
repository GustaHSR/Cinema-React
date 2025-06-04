import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListagemSessoes() {
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    setSessoes(JSON.parse(localStorage.getItem('sessoes') || '[]'));
  }, []);

  return (
    <div>
      <h1 className="title">Sessões Disponíveis</h1>
      {sessoes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🎬</div>
          <div className="empty-state-title">Nenhuma sessão cadastrada.</div>
        </div>
      ) : (
        sessoes.map((s, i) => (
          <div key={i} className="session-card">
            <div className="session-header">
              <div className="session-title">{s.filme}</div>
              <div className="session-price">R$ {parseFloat(s.preco).toFixed(2)}</div>
            </div>
            <div className="session-details">
              <div className="session-detail"><strong>Sala:</strong> {s.sala}</div>
              <div className="session-detail"><strong>Data:</strong> {s.dataHora}</div>
              <div className="session-detail"><strong>Idioma:</strong> {s.idioma}</div>
              <div className="session-detail"><strong>Formato:</strong> {s.formato}</div>
            </div>
            <Link className="btn btn-secondary" to="/venda-ingressos">Comprar Ingresso</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ListagemSessoes;
