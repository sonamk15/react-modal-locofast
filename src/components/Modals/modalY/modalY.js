import React, { useState } from "react";
import './modalY.css';
import '../modalX/modalX.css';
import image from '../../IMG/modal.jpg'
  
const ModalY = ({onCountChange, onCountChangeDec}) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="modalY-wrapper">
      <div className="modalY-header">
        <p>Material details</p>
        <span className="close-modalY-btn">x</span>
      </div>
      <br/>     
      <div className="modalY-content">
        <div className="modalY-body">
          <div className='left-body'>
            <img src={image} width="170px" height="240px"></img>
          </div>
          <div className='right-body'>
            <h4> Assign to factory</h4>
            <div className='factory'>
              <label for="factory">factory</label><br/>
              <select name="factory" id="factory" onChange={() => setLoading(false)} >
                <option value="">Select factory</option>
                <option value="x">X</option>
                <option value="y">Y</option>
                <option value="z">Z</option>
              </select>
            </div>
            <div className='design'>
              <label for="design">Assign for design</label><br/>
              <select name="factory" id="design" placeholder='design' onChange={() => setLoading(false)} >
                <option value="">Select design</option>
                <option value="x">Design name 1</option>
                <option value="y">Design name 2</option>
                <option value="z">Design name 3</option>
                <option value="z">Design name 4</option>
              </select>
            </div>
          </div>
        </div>     
      </div>
      <br/>
      <br/>
      <br/>
      <div className="modalY-footer">
        <button className="btn-back" onClick={onCountChangeDec}>BACK</button>
        <button className="btn-next" disabled={loading} onClick={onCountChange}>NEXT</button>
        </div>  
    </div>
  )
};

export default ModalY;