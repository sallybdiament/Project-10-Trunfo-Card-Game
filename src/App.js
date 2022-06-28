import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    newCard: [],
    hasTrunfo: false,
  };
  // }

        validate = () => {
          const {
            cardName, cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3,
          } = this.state;
          const soma = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
          const noventa = 91;
          const somaMax = 210;
          if (
            !cardName || !cardDescription || !cardImage
            || soma > somaMax
            || Number(cardAttr1) >= noventa
            || Number(cardAttr2) >= noventa
            || Number(cardAttr3) >= noventa
            || Number(cardAttr1) < 0
            || Number(cardAttr2) < 0
            || Number(cardAttr3) < 0) return 'true';
        }

        onInputChange = (event) => {
        //   const { name } = event.target;
        //   const { value } = event.target;
        //   this.setState({ [name]: value });
        //   this.setState({ cardName: event.target.value });
          const { target } = event;
          this.setState({
            [target.name]: target.type === 'checkbox'
              ? target.checked
              : target.value,
          }, () => this.setState({
            isSaveButtonDisabled: this.validate(),
          }));
        }

        hasTrunfo = () => {
          const { newCard } = this.state;
          return newCard.some((carta) => carta.cardTrunfo);
        }

        onSaveButtonClick = () => {
          const {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
            isSaveButtonDisabled,
            // newCard,
          } = this.state;
          const objVazio = {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
            isSaveButtonDisabled,
          };
          this.setState((estadoAnterior) => ({
            newCard: [...estadoAnterior.newCard, objVazio],
            cardName: '',
            cardDescription: '',
            cardAttr1: '0',
            cardAttr2: '0',
            cardAttr3: '0',
            cardImage: '',
            cardRare: 'normal',
            cardTrunfo: false,
            isSaveButtonDisabled: true,
          }), () => this.setState({ hasTrunfo: this.hasTrunfo() }));
          // this.setState({
          // });
        }

        render() {
          const {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
            isSaveButtonDisabled,
            newCard,
            hasTrunfo,
          } = this.state;
          return (
            <div>
              <h1>Tryunfo Grandes Mulheres</h1>
              <form>
                <Form
                  cardName={ cardName }
                  cardDescription={ cardDescription }
                  cardAttr1={ cardAttr1 }
                  cardAttr2={ cardAttr2 }
                  cardAttr3={ cardAttr3 }
                  cardImage={ cardImage }
                  cardRare={ cardRare }
                  cardTrunfo={ cardTrunfo }
                  onInputChange={ this.onInputChange }
                  onSaveButtonClick={ this.onSaveButtonClick }
                  isSaveButtonDisabled={ isSaveButtonDisabled }
                  hasTrunfo={ hasTrunfo }
                  sendForm={ this.sendForm }
                />
              </form>
              <h1>Sua nova carta será:</h1>
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
              <h1>Cartas criadas:</h1>
              {
                newCard.map((carta, i) => <Card key={ i } { ...carta } />)
              }
            </div>
          );
        }
}

export default App;
