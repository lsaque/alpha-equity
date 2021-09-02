import React from 'react';
import './style.css';

function Informacoes() {
  return (
    <section id="informacoes">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 informacoes-item">
            <a href="#">
              <p className="h3">+55 11 3878 5036<br />Head Office</p>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 informacoes-item">
            <a href="https://g.page/alpha-equity?share" target="_blank" rel="noreferrer">
              <p className="h3">Av. Faria Lima, 50<br />São Paulo - SP</p>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 informacoes-item">
            <a href="mailto:info@alphaequity.com">
              <p className="h3">For Business Enquiries<br />info@alphaequity.com</p>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 informacoes-item">
            <p className="h3">Conectar<br />
              <div className="social-media">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Informacoes;