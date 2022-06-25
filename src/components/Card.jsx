import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1 } = this.props;
    const { cardAttr2, cardAttr3, cardImage } = this.props;
    const { cardRare, cardTrunfo } = this.props;
    return (
      <div className="carta">
        <h1>Sua nova carta será: </h1>
        <h1 data-testid="name-card">
          Personagem:
          { cardName }
        </h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          Descrição:
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Nível de coragem:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Nível de superação:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Nível de Persistência:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          Está carta é:
          { cardRare }
        </p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
