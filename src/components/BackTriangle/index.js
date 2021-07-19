import React from 'react';
import './style.css';
// import './script.js'

import backTriangle from '../../assets/images/Inicio/backTriangle25.svg';


function BackTriangle() {
  return (
    <div id="box" className="back-box">
      <img src={backTriangle} className="back-triangle img-fluid" alt="..."/>
    </div>
  );
}

export default BackTriangle;