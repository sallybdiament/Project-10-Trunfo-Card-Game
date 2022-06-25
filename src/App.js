import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();
    state = {
      cardName: 'Sally',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    // }

    //         validate = () => {
    // const
    //         }

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

        // onSaveButtonClick = (event) => {
        //   event.preventDefault();
        // }

        render() {
          const { cardName, cardDescription, cardAttr1 } = this.state;
          const { cardAttr2, cardAttr3, cardImage } = this.state;
          const { cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
          return (
            <div>
              <h1>Tryunfo Grandes Mulheres</h1>
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
                // onSaveButtonClick={ this.isSaveButtonClick }
                isSaveButtonDisabled={ isSaveButtonDisabled }
              />
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
            </div>
          );
        }
}

export default App;
