import React from 'react';
import './style.css';
import './script.js'
import logo from '../../assets/images/logo.svg'

function Navbar() {
  return (
    <>
      <nav
        id="menu"
        class="navbar navbar-expand-lg fixed-top"
        aria-label="Menu de Navegação"
      >
      <div class="container-fluid">

        <a class="navbar-brand" href="#">
          <img class="img-fluid" src={logo} alt="Alpha Equity"/>
        </a>
          <div id="menu-hamburger">
            <input 
              type="checkbox" 
              class="navbar-toggler"
              type="checkbox"
              data-bs-toggle="offcanvas"
              aria-label="Toggle navigation"
            />
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </div>
        <div
          class="navbar-collapse offcanvas-collapse w-100"
          id="navbarsExampleDefault"
        >

        <ul class="navbar-nav navbar-style-center">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#" data-hover="Inicio">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-hover="Portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-hover="Sobre">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-hover="Alphapédia">Alphapédia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-hover="Contato">Contato</a>
            </li>
        </ul>

        <ul class="navbar-nav navbar-style-right">
            <li class="nav-item active">
                <a class="nav-link" href="#">ENG</a>
            </li> 
            <span/>
            <li class="nav-item">
                <a class="nav-link" href="#">PT</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;