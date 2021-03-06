import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Informacoes from '../../components/Informacoes';
import logoFull from '../../assets/images/logo-full.svg';
import logoIcon from '../../assets/images/logo-icon.svg';

const text = new Date().getFullYear();

function Footer() {
  return (
    <>
      <Informacoes/>
      <footer id="footer">
        <div className="container">
          <div className="row main-content">

            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <h5 className="first-content"><img src={logoFull} alt="Logo da Alpha Equity" className="img-fluid" /></h5>
              <p className="footer-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et ut labore et.</p>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-2">
              <h5 className="footer-title">Mapa</h5>
              <ul>

                <li className="footer-content">
                  <a href="#inicio">Início</a>
                </li>

                <li className="footer-content" id="Portfolio">
                  <div class="dropdown">
                    <a 
                      className="dropdown-toggle" 
                      role="button" 
                      href="Portfolio"
                      id="dropPortfolio" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      Portfólio
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropPortfolio">
                      <a 
                        class="dropdown-item h3" 
                        href="#portfolio-item"
                        >Portfólio
                      </a>
                      
                      <a 
                        class="dropdown-item h3" 
                        href="#" 
                        data-bs-toggle="modal" 
                        data-bs-target="#fundos-de-investimento"
                        >Fundos de Investimento
                      </a>

                      <a 
                        class="dropdown-item h3" 
                        href="#portfolio-item"
                        // data-bs-toggle="modal" 
                        // data-bs-target="#fundos-de-investimento"
                        >Operações de Securitização
                      </a>

                      <a 
                        class="dropdown-item h3" 
                        href="#portfolio-item"
                        // data-bs-toggle="modal" 
                        // data-bs-target="#fundos-de-investimento"
                        >Merges & Acquisitions</a>

                      <a 
                        class="dropdown-item h3" 
                        href="#portfolio-item"
                        // data-bs-toggle="modal" 
                        // data-bs-target="#fundos-de-investimento"
                        >Decentralized Finance
                      </a>
                    </ul>
                  </div>
                </li>           

                <li className="footer-content" id="QuemSomos">
                  <div class="dropdown">
                    <a 
                      className="dropdown-toggle" 
                      role="button" 
                      href="QuemSomos"
                      id="dropQuemSomos" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      Quem Somos?
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropQuemSomos">
                      <a class="dropdown-item h3" href="#afinal-quem-somos">Quem Somos?</a>
                      <a class="dropdown-item h3" href="#visao">Visão</a>
                      <a class="dropdown-item h3" href="#missao">Missão</a>
                      <a class="dropdown-item h3" href="#valores">Valores</a>
                      <a class="dropdown-item h3" href="#equipe">Equipe</a>
                    </ul>
                  </div>
                </li>    

                <li className="footer-content">
                  <a href="#alphapedia">Alphapédia</a>
                </li>
                <li className="footer-content">
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <h5 className="footer-title">Contato</h5>
              <ul>
                <li className="footer-content">
                  <a href="#inicio">
                    <i className="fas fa-phone"></i>
                    + 55 (11) 3878 - 5036</a>
                </li>
                <li className="footer-content">
                  <a href="#portfolio-item">
                    <i className="fas fa-map-marker-alt"></i>
                    Av. Faria Lima, 50 - SP</a>
                </li>
                <li className="footer-content">
                  <a href="#sobre">
                    <i className="fas fa-paper-plane"></i>
                    info@alphaequity.com</a>
                </li>
                <li className="footer-content">
                  <a href="#alphapedia">
                    <i className="fas fa-at"></i>
                    alphaequity</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d914.1932883898196!2d-46.68673378035661!3d-23.576589397620406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a9f82c17704ac6!2sAlpha%20Equity!5e0!3m2!1spt-BR!2sbr!4v1627323572868!5m2!1spt-BR!2sbr"
                frameBorder="0" 
                allowFullScreen
                title="Mapa com a localização da Alpha Equity">
              </iframe>
            </div>

          </div>
        </div>

        <div className="footer-bar1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                <div className="row">
                  <div className="col-12 col-sm-4 item-footer">
                    <span>Copyright &copy; {text}. Alpha Equity</span>
                  </div>
                  <div className="col-12 col-sm-4 item-footer">
                    <img className="img-fluid" src={logoIcon} alt="Logo Alpha Equity" />
                  </div>
                  <div className="col-12 col-sm-4 item-footer">
                    <span>Política de Privacidade. Termos de Uso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bar2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <span>Designed and Developed by <a href="http://">Isaque</a> and <a href="http://">Marcio</a>.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;