import React, { Component } from 'react';
import Controls from './Controls';
import Modal from 'react-modal';
import Grid from './Grid';
import Plate from './Plate';
import ButtonFull from './ButtonFull';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickModalIsOpen: true,
      images: props.data[0].steps,
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

  handlePickClick = (ev) => {
    this.setState({
      pickModalIsOpen: true,
    })
  }

  handleModalClose = (ev) => {
    this.setState({
      pickModalIsOpen: false,
    })
  }

  handleSelection = (ev) => {
    this.setState({
      images: this.props.data[ev.target.dataset.index].steps,
      curStep: 0,
      pickModalIsOpen: false,
    })
  }

  render() {
    const thumbnails = this.props.data.map((item) => item.steps[item.steps.length-1])
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
          <button className="btn btn_pick" onClick={this.handlePickClick}>&#8801;</button>
        </header>
        <div className="App-body">
          <Plate images={this.state.images} showIndex={this.state.curStep}/>
        </div>
        <Modal
          isOpen={this.state.pickModalIsOpen} 
          onRequestClose={this.handleModalClose}
          shouldCloseOnOverlayClick={true}
          contentLabel="Pick"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }
          }}
          >
          <div className="modal-body pick">
            <Grid images={thumbnails} onClick={this.handleSelection}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
