import React from 'react';
import FundosDeInvestimento from '../../components/Modals/FundosDeInvestimento';
// import operacoesSecuritizacao from '../../components/Modals/operacoesSecuritizacao';
// import MergesAcquisitions from '../../components/Modals/MergesAcquisitions';
// import DecentralizedFinance from '../../components/Modals/DecentralizedFinance';

import './style.css';

function PortfolioItem() {
  return (
    <>
      <section id="portfolio-item" className="teste">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="display-1">Conheça nosso <br /><span>portfólio</span></h1>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <button 
                data-bs-toggle="modal" 
                data-bs-target="#fundos-de-investimento"
                // onClick={() => document.getElementById("portfolio-item").scrollIntoView({block: "start", behavior: "instant"})}
                className="internal-box col-12" 
              >
                <div className="h1">
                  Fundos de <br />Investimento
                </div>
              </button>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <button 
                className="internal-box col-12" 
                data-bs-toggle="modal" 
                data-bs-target="#operacoes-securitizacao"
              >
                <div className="h1">
                  Operações<br />de Securitização
                </div>
              </button>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <button 
                className="internal-box col-12" 
                data-bs-toggle="modal" 
                data-bs-target="#merges-and-acquisitions"
              >
                <div className="h1">
                  Merges & <br />Acquisitions
                </div>
              </button>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 box">
              <button 
                className="internal-box col-12" 
                data-bs-toggle="modal" 
                data-bs-target="#decentralized-finance"
              >
                <div className="h1">
                  Decentralized <br />Finance
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <FundosDeInvestimento/>
      {/* <OperacoesEstruturadas/> */}
      {/* <MergesAcquisitions/> */}
      {/* <DecentralizedFinance/> */}
    </>
  );
}

export default PortfolioItem;