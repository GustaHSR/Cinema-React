import React, { useState, useEffect } from 'react';

function VendaIngressos() {
  const [sessoes, setSessoes] = useState([]);
  const [ingresso, setIngresso] = useState({
    sessao: '',
    cliente: '',
    cpf: '',
    assento: '',
    pagamento: '',
  });

  useEffect(() => {
    setSessoes(JSON.parse(localStorage.getItem('sessoes') || '[]'));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIngresso({ ...ingresso, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingressos = JSON.parse(localStorage.getItem('ingressos') || '[]');
    ingressos.push(ingresso);
    localStorage.setItem('ingressos', JSON.stringify(ingressos));
    alert('Venda realizada com sucesso!');
    setIngresso({ sessao: '', cliente: '', cpf: '', assento: '', pagamento: '' });
  };

  return (
    <div className="form">
      <h1 className="title">Venda de Ingressos</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Sessão</label>
          <select className="form-select" name="sessao" value={ingresso.sessao} onChange={handleChange} required>
            <option value="">Selecione</option>
            {sessoes.map((s, i) => (
              <option key={i} value={s.filme + ' - ' + s.dataHora}>{s.filme} - {s.dataHora}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Nome do Cliente</label>
          <input className="form-input" name="cliente" value={ingresso.cliente} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">CPF</label>
            <input className="form-input" name="cpf" value={ingresso.cpf} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Assento</label>
            <input className="form-input" name="assento" value={ingresso.assento} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Tipo de Pagamento</label>
          <select className="form-select" name="pagamento" value={ingresso.pagamento} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option>Cartão</option>
            <option>Pix</option>
            <option>Dinheiro</option>
          </select>
        </div>

        <button className="btn btn-primary">Confirmar Venda</button>
      </form>
    </div>
  );
}

export default VendaIngressos;
