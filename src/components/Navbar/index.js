import React from 'react';
import './style.css';
import './script.js'
import logo from '../../assets/images/logo.svg'

function Navbar() {
  return (
    <>
      <nav
        id="menu"
        className="navbar navbar-expand-lg fixed-top"
        aria-label="Menu de Navegação"
      >
      <div className="container-fluid">

        <a className="navbar-brand" href="...">
          <img className="img-fluid" src={logo} alt="Alpha Equity"/>
        </a>
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
        <div
          className="navbar-collapse offcanvas-collapse w-100"
          id="navbarsExampleDefault"
        >

        <ul className="navbar-nav navbar-style-center">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="..." data-hover="Inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="..." data-hover="Portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="..." data-hover="Sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="..." data-hover="Alphapédia">Alphapédia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="..." data-hover="Contato">Contato</a>
            </li>
        </ul>

        <ul className="navbar-nav navbar-style-right">
            <li className="nav-item active">
                <a className="nav-link" href="...">ENG</a>
            </li> 
            <span/>
            <li className="nav-item">
                <a className="nav-link" href="...">PT</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;