import React from 'react';
import Form from './Form';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: 'Nome da carta',
      cardDescription: 'Descrição da carta',
      cardAttr1: '12',
      cardAttr2: '34',
      cardAttr3: '56',
      cardImage: 'url-to-image',
      cardRare: 'raro',
      cardTrunfo: false,
    };
  }

        onInputChange = (event) => {
        //   const { name } = event.target;
        //   const { value } = event.target;
        //   this.setState({ [name]: value });
        //   this.setState({ cardName: event.target.value });
          const { target } = event;
          this.setState({ [target.name]: target.type === 'checkbox'
            ? target.checked : target.value });
        }

isSaveButtonDisabled =(event) => {
  event.preventDefault();
}

onSaveButtonClick = (event) => {
  event.preventDefault();
}

render() {
  const { cardName, cardDescription, cardAttr1 } = this.state;
  const { cardAttr2, cardAttr3, cardImage } = this.state;
  const { cardRare, cardTrunfo } = this.state;
  return (
    <div className="carta">
      <Form
        onInputChange={ this.onInputChange }
        onSaveButtonClick={ this.isSaveButtonClick }
        onSaveButtonDesabled={ this.isSaveButtonDesdisabled }
      />
      <h1>Sua nova carta será: </h1>
      <h1 data-testid="name-card">
        { cardName }
      </h1>
      <img src={ cardImage } alt={ cardName } data-testid="image-card" />
      <p data-testid="description-card">{ cardDescription }</p>
      <p data-testid="attr1-card">{ cardAttr1 }</p>
      <p data-testid="attr2-card">{ cardAttr2 }</p>
      <p data-testid="attr3-card">{ cardAttr3 }</p>
      <p data-testid="rare-card">{ cardRare }</p>
      { cardTrunfo === true && <p data-testid="trunfo-card">Super Trunfo</p>}
    </div>
  );
}
}

export default Card;

// Card.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   cardTrunfo: PropTypes.bool.isRequired,
// };
