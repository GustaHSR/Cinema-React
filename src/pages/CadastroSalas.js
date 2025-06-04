import React, { useState } from 'react';

function CadastroSalas() {
  const [sala, setSala] = useState({
    nome: '',
    capacidade: '',
    tipo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSala({ ...sala, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const salas = JSON.parse(localStorage.getItem('salas') || '[]');
    salas.push(sala);
    localStorage.setItem('salas', JSON.stringify(salas));
    alert('Sala cadastrada com sucesso!');
    setSala({ nome: '', capacidade: '', tipo: '' });
  };

  return (
    <div className="form">
      <h1 className="title">Cadastro de Salas</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Nome da Sala</label>
          <input className="form-input" name="nome" value={sala.nome} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="form-label">Capacidade</label>
          <input type="number" className="form-input" name="capacidade" value={sala.capacidade} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="form-label">Tipo</label>
          <select className="form-select" name="tipo" value={sala.tipo} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option>2D</option>
            <option>3D</option>
            <option>IMAX</option>
          </select>
        </div>

        <button className="btn btn-primary">Salvar Sala</button>
      </form>
    </div>
  );
}

export default CadastroSalas;
