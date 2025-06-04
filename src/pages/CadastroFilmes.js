import React, { useState } from 'react';

function CadastroFilmes() {
  const [filme, setFilme] = useState({
    titulo: '',
    descricao: '',
    genero: '',
    classificacao: '',
    duracao: '',
    estreia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilme({ ...filme, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    alert('Filme cadastrado com sucesso!');
    setFilme({
      titulo: '',
      descricao: '',
      genero: '',
      classificacao: '',
      duracao: '',
      estreia: '',
    });
  };

  return (
    <div className="form">
      <h1 className="title">Cadastro de Filmes</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Título</label>
          <input className="form-input" name="titulo" value={filme.titulo} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label className="form-label">Descrição</label>
          <textarea className="form-textarea" name="descricao" value={filme.descricao} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Gênero</label>
            <select className="form-select" name="genero" value={filme.genero} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option>Ação</option>
              <option>Comédia</option>
              <option>Drama</option>
              <option>Terror</option>
              <option>Ficção</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Classificação</label>
            <select className="form-select" name="classificacao" value={filme.classificacao} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option>Livre</option>
              <option>10</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
              <option>18</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Duração (min)</label>
            <input type="number" className="form-input" name="duracao" value={filme.duracao} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label className="form-label">Data de Estreia</label>
            <input type="date" className="form-input" name="estreia" value={filme.estreia} onChange={handleChange} required />
          </div>
        </div>

        <button className="btn btn-primary">Salvar Filme</button>
      </form>
    </div>
  );
}

export default CadastroFilmes;
