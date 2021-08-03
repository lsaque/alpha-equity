import React from 'react';
import './style.css';

function FundosDeInvestimento() {
return (
  <div className="modal fade" id="fundos-de-investimento" data-bs-keyboard="false" tabIndex="-1"
    aria-labelledby="fundos-de-investimentoLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-fullscreen-lg-down modal-dialog-scrollable">
      <div className="modal-content">

        <div className="modal-header">
          <h1 className="h2">Fundos de Investimento</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body">
          <div className="container-fluid">

            <div className="row">

              <div className="initial-content">
                <div className="header">
                  <h3 className="h4">About us</h3>
                </div>

                <div className="center">
                  <h1 className="display-2">Fundos de<br />Investimento</h1>
                  <div className="box-description col-12 col-md-9 col-lg-8">
                    <h3 className="h2">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </h3>
                  </div>
                </div>

                <div className="footer">
                  <p className="h4">Deslize pra baixo para navegar</p>
                </div>
              </div>

              <div className="list-group left-menu col-1" id="left-menu">
                <a className="list-group-item list-group-item-action h4 active" href="#fip" id='op1'>FIP</a>
                <a className="list-group-item list-group-item-action h4" href="#fim" id='op2'>FIM</a>
                <a className="list-group-item list-group-item-action h4" href="#fidc" id='op3'>FIDC</a>
                <a className="list-group-item list-group-item-action h4" href="#fii" id='op4'>FII</a>
              </div>

              <div className="content" id="fip">

                <div className="header">
                  <h3 className="h2"><span>FIP – </span>PARTICIPAÇÕES</h3>
                </div>

                <div className="center">
                  <h1 className="display-1">Multi-Investment Fund</h1>
                  <div className="box-description col-12 col-md-9 col-lg-8">
                    <h2 className="h3">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eca commodo consequat.
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun.
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun. </h2>
                  </div>
                </div>

                <div className="footer">
                  <p className="h5">CONHEÇA NOSSO FLUXOGRAMA DE ESTRUTURAÇÃO</p>
                  <div className="box-image">
                    <button className="image"></button>
                  </div>
                </div>
              </div>

              <div className="content" id="fim">

                <div className="header">
                  <h3 className="h2"><span>FIM – </span>MULTIMERCADO</h3>
                </div>

                <div className="center">
                  <h1 className="display-1">Standardized Investment Structures</h1>
                  <div className="box-description col-12 col-md-9 col-lg-8">
                    <h2 className="h3">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eca commodo consequat.
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun.
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun. </h2>
                  </div>
                </div>

                <div className="footer">
                  <p className="h5">CONHEÇA NOSSO FLUXOGRAMA DE ESTRUTURAÇÃO</p>
                  <div className="box-image">
                    <button className="image"></button>
                  </div>
                </div>
              </div>

              <div className="content" id="fidc">

                <div className="header">
                  <h3 className="h2"><span>FIDC – </span>DIREITOS CREDITÓRIOS</h3>
                </div>

                <div className="center">
                  <h1 className="display-1">Grow Premium Volume At Lower Prices</h1>
                  <div className="box-description col-12 col-md-9 col-lg-8">
                    <h2 className="h3">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eca commodo consequat.
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun.
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun. </h2>
                  </div>
                </div>

                <div className="footer">
                  <p className="h5">CONHEÇA NOSSO FLUXOGRAMA DE ESTRUTURAÇÃO</p>
                  <div className="box-image">
                    <button className="image"></button>
                  </div>
                </div>
              </div>

              <div className="content" id="fii">

                <div className="header">
                  <h3 className="h2"><span>FII – </span>IMOBILIÁRIO</h3>
                </div>

                <div className="center">
                  <h1 className="display-1">Increase Return, Lower Volatility</h1>
                  <div className="box-description col-12 col-md-9 col-lg-8">
                    <h2 className="h3">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eca commodo consequat.
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun.
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                      tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor
                      sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidun. </h2>
                  </div>
                </div>

                <div className="footer">
                  <p className="h5">CONHEÇA NOSSO FLUXOGRAMA DE ESTRUTURAÇÃO</p>
                  <div className="box-image">
                    <button className="image"></button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="button-box">
            <button type="button" data-bs-dismiss="modal" >
              <span>Fechar</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
);
}

export default FundosDeInvestimento;