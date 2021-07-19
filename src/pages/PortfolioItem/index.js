import React from 'react';

import './style.css';

function PortfolioItem() {
  return (
    <section id="portfolio-item">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-1">Conheça nosso <br/><span>portfólio</span></h1>
          </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <a className="internal-box col-12" href="#fundos-de-investimento">
                <h3 className="h1">Fundos de <br/>Investimento</h3>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <a className="internal-box col-12" href="#operacoes-estruturadas">
                <h3 className="h1">Operações <br/>Estruturadas</h3>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <a className="internal-box col-12" href="#merges-and-acquisitions">
                <h3 className="h1">Merges & <br/>Acquisitions</h3>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <a className="internal-box col-12" href="#decentralized-finance">
                <h3 className="h1">Decentralized <br/>Finance</h3>
              </a>
            </div>
          </div>
        </div>  
    </section>
  );
}

export default PortfolioItem;