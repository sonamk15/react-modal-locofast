import React from "react";
import Modal from './Modal'
import ModalX from './Modals/modalX/modalX'
import ModalY from './Modals/modalY/modalY'
import ModalZ from './Modals/modalZ/modalZ'


/*
  1. shallow merge
  2. async
*/

export default class ModalSlider extends React.Component {
  state = {
    images: [
     <Modal/>,
     <ModalX/>,
     <ModalY/>,
     <ModalZ/>
    ],
    idx: 0
  };

  handleNext = () => {
    this.setState({
      idx: this.state.idx + 1
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              idx: this.state.idx - 1
            });
          }}
        >
          previous
        </button>
        <div>
            {this.state.images[this.state.idx]}
        </div>
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}

// <img
// style={{
//   width: 100,
//   height: 100
// }}
// src={this.state.images[this.state.idx]}
// />