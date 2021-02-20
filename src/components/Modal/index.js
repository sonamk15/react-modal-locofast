import React, { useState } from "react";
import './index.css';
import image from '../IMG/modal.jpg'
import image1 from '../IMG/modal1.png'

const Modal = ({onCountChange}) => {

  return (
    <div className="modals-wrapper"> 
      <div className="modals-content">
        <div className="modals-left">
          <div className='modal-design' onClick={onCountChange}>
            <img src={image} width="150" height="200"></img>
          </div>
          <div className='modal-info'>
            <p>ID: CT-15</p>
            <h4>100% cotton /xyz color</h4>
          </div>
        </div> 
        <div className="modals-right" >
          <div className='modal-design' onClick={onCountChange} >
            <img src={image1} width="150" height="200"></img>
          </div>
          <div className='modal-info'>
            <p>ID: CT-15</p>
            <h4>100% cotton /xyz color</h4>
          </div>
        </div>   
      </div>
    </div>
  )
};

export default Modal;