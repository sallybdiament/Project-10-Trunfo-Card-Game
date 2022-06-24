import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="campoForm">
          <label htmlFor="nome">
            Nome de uma mulher de sucesso:
            <input
              data-testid="name-input"
              type="text"
              id="nome"
              name="nome"
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="descricao">
            Descrição:
            <textarea
              data-testid="description-input"
              id="descricao"
              name="descricao"
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="atributoCoragem">
            Nível de Coragem:
            <input
              type="number"
              min="0"
              max="100"
              data-testid="attr1-input"
              id="atributoCoragem"
              name="atributoCoragem"
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="atributoSuperacao">
            Nível de Superação:
            <input
              type="number"
              min="0"
              max="100"
              data-testid="attr2-input"
              id="atributoSuperacao"
              name="atributoSuperacao"
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="atributoPersistencia">
            Nível de Persistência:
            <input
              type="number"
              min="0"
              max="100"
              data-testid="attr3-input"
              id="atributoPersistencia"
              name="atributoPersistencia"
            />
          </label>
        </div>

        <div className="campoForm">
          <label htmlFor="img">
            Link para Imagem:
            <input
              data-testid="image-input"
              type="text"
              id="img"
              name="img"
            />
          </label>
        </div>
        <div className="campoForm">
          <label htmlFor="raridade">
            Opções de raridade:
            <select
              data-testid="rare-input"
              name="raridade"
              id="raridade"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <div className="campoForm">
          <label htmlFor="superTrunfo">
            É super trunfo?
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="superTrunfo"
              name="superTrunfo"
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
