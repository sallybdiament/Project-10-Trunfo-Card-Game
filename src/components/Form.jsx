import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1 } = this.props;
    const { cardAttr2, cardAttr3, cardImage } = this.props;
    const { cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.props;
    const { onInputChange, onSaveButtonClick } = this.props;
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
              value={ cardName }
              onChange={ onInputChange }
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
              value={ cardDescription }
              onChange={ onInputChange }
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
              value={ cardAttr1 }
              onChange={ onInputChange }
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
              value={ cardAttr2 }
              onChange={ onInputChange }
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
              value={ cardAttr3 }
              onChange={ onInputChange }
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
              value={ cardImage }
              onChange={ onInputChange }
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
              value={ cardRare }
              onChange={ onInputChange }
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
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
