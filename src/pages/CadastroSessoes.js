import React, { useState, useEffect } from 'react';

function CadastroSessoes() {
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);
  const [sessao, setSessao] = useState({
    filme: '',
    sala: '',
    dataHora: '',
    preco: '',
    idioma: '',
    formato: '',
  });

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem('filmes') || '[]'));
    setSalas(JSON.parse(localStorage.getItem('salas') || '[]'));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSessao({ ...sessao, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sessoes = JSON.parse(localStorage.getItem('sessoes') || '[]');
    sessoes.push(sessao);
    localStorage.setItem('sessoes', JSON.stringify(sessoes));
    alert('Sessão cadastrada com sucesso!');
    setSessao({ filme: '', sala: '', dataHora: '', preco: '', idioma: '', formato: '' });
  };

  return (
    <div className="form">
      <h1 className="title">Cadastro de Sessões</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Filme</label>
            <select className="form-select" name="filme" value={sessao.filme} onChange={handleChange} required>
              <option value="">Selecione</option>
              {filmes.map((f, i) => (
                <option key={i} value={f.titulo}>{f.titulo}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Sala</label>
            <select className="form-select" name="sala" value={sessao.sala} onChange={handleChange} required>
              <option value="">Selecione</option>
              {salas.map((s, i) => (
                <option key={i} value={s.nome}>{s.nome}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Data e Hora</label>
          <input type="datetime-local" className="form-input" name="dataHora" value={sessao.dataHora} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="form-label">Preço</label>
          <input type="number" className="form-input" name="preco" value={sessao.preco} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Idioma</label>
            <select className="form-select" name="idioma" value={sessao.idioma} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option>Dublado</option>
              <option>Legendado</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Formato</label>
            <select className="form-select" name="formato" value={sessao.formato} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option>2D</option>
              <option>3D</option>
            </select>
          </div>
        </div>

        <button className="btn btn-primary">Salvar Sessão</button>
      </form>
    </div>
  );
}

export default CadastroSessoes;
