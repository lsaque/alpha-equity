import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import './script.js';
import logo from '../../assets/images/logo.svg';

function Navbar() {
  return (
    <>
      <nav id="menu" className="navbar navbar-expand-lg fixed-top" aria-label="Menu de Navegação">
        <div className="container-fluid">

          <Link to="/" className="navbar-brand">
            <img className="img-fluid" src={logo} alt="Alpha Equity" />
          </Link>
          
          <div id="menu-hamburger">
            <input 
              type="checkbox" 
              className="navbar-toggler" 
              data-bs-toggle="offcanvas"
              aria-label="Toggle navigation" 
            />
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </div>
          <div className="navbar-collapse offcanvas-collapse w-100" id="navbarsExampleDefault">

            <ul className="navbar-nav navbar-style-center">
              <li className="nav-item active" id="home">
                <a className="nav-link" aria-current="page" href="#inicio" data-hover="Inicio">Inicio</a>
              </li>
              <li className="nav-item" id="portifolio">
                <a className="nav-link" href="#portfolio-item" data-hover="Portfólio">Portfólio</a>
              </li>
              <li className="nav-item" id="quem-somos">
                <a className="nav-link" href="#sobre" data-hover="Quem Somos">Quem Somos</a>
              </li>
              <li className="nav-item" id="pedia">
                <a className="nav-link" href="#alphapedia" data-hover="Alphapédia">Alphapédia</a>
              </li>
              <li className="nav-item" id="contate-nos">
                <a className="nav-link" href="#contato" data-hover="Contato">Contato</a>
              </li>
            </ul>

            <ul className="navbar-nav navbar-style-right">
              <li className="nav-item active1">
                <a className="nav-link" href="#">ENG</a>
              </li>
              <span />
              <li className="nav-item">
                <a className="nav-link" href="#">PT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;