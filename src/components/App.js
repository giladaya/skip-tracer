import React, { Component } from 'react';
import Controls from './Controls';
import Plate from './Plate';
import ButtonFull from './ButtonFull';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'images/puppy_01.png',
        'images/puppy_02.png',
        'images/puppy_03.png',
        'images/puppy_04.png',
        'images/puppy_05.png',
        'images/puppy_06.png',
      ],
      curStep: 0,
    }
  }

  handleNextClicked = (ev) => {
    if (this.state.curStep < this.state.images.length - 1) {
      this.setState({
        curStep: this.state.curStep + 1
      })
    }
  }

  handlePrevClicked = (ev) => {
    if (this.state.curStep > 0) {
      this.setState({
        curStep: this.state.curStep - 1
      })
    }
  }

  render() {
    return (
      <div className="App full-page">
        <header className="App-header">
          <ButtonFull/>
          <Controls 
            title={`Step ${this.state.curStep+1} of ${this.state.images.length}`} 
            handlePrev={this.handlePrevClicked} 
            prevEnabled={this.state.curStep > 0}
            handleNext={this.handleNextClicked}
            nextEnabled={this.state.curStep < this.state.images.length -1}
          />
        </header>
        <div className="App-body">
          <Plate images={this.state.images} showIndex={this.state.curStep}/>
        </div>
      </div>
    );
  }
}

export default App;
