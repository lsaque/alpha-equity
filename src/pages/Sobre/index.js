import React from 'react';
import './style.css';
import './script.js';

import img from '../../assets/images/Sobre/background.png';
import quemSomos from '../../assets/images/Sobre/quem-somos.png';
import visao from '../../assets/images/Sobre/visao.png';
import missao from '../../assets/images/Sobre/missao.png';
import valores from '../../assets/images/Sobre/valores.png';
import profile from '../../assets/images/Sobre/profile-icon.png';

function Sobre() {
  return (
    <section id="sobre">

      <img className="img-bg" src={img} alt="" />
      <div className="container-fluid">

        <div className="list-group left-menu col-1" id="left-menu">
          <a className="list-group-item list-group-item-action h4 active" href="#afinal-quem-somos" id='op1'>Quem somos</a>
          <a className="list-group-item list-group-item-action h4" href="#visao" id='op2'>Visão</a>
          <a className="list-group-item list-group-item-action h4" href="#missao" id='op3'>Missão</a>
          <a className="list-group-item list-group-item-action h4" href="#valores" id='op4'>Valores</a>
          <a className="list-group-item list-group-item-action h4" href="#equipe" id='op5'>Equipe</a>
        </div>

        <div className="row">
          <div className="initial-content">
            <div className="header">
              <h3 className="h2">About us</h3>
            </div>

            <div className="center">
              <h1 className="display-1">Home of obsessed<br />dealmakers</h1>
            </div>

            <div className="footer">
              <p className="h2">Scroll down</p>
            </div>
          </div>

          <div className="content-menu" data-bs-spy="scroll" data-bs-target="#left-menu" data-bs-offset="0"
            tabIndex="0">

            <div className="row box-content sobre-row" id="afinal-quem-somos">
              <div className="col-12 col-lg-6 left-content">
                <hr />
                <h2 className="h3">Quem somos</h2>
                <h1 className="display-5">We manage $260 billion in<br />assets, spanning 4 business<br />segments.</h1>
                <img className="img-fluid" src={quemSomos} alt="" />
              </div>

              <div className="col-12 col-lg-6 right-content">
                <p className="h4">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing diam nonummy nibh euismod tincidunt ut laoreet.</p>
                <p className="h4">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>

            <div className="row box-content sobre-row " id="visao">
              <div className="col-12 col-lg-6 left-content">
                <hr />
                <h2 className="h3">Visão</h2>
                <h1 className="display-5">As a global investment firm we<br />work together to create value<br />through
                  HIDE model.</h1>
                <p className="h4">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliea commodo consequat. Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>

              <div className="col-12 col-lg-6 right-content">
                <img className="img-fluid visao" src={visao} alt="" />
              </div>
            </div>

            <div className="row box-content sobre-row" id="missao">
              <div className="col-12 col-lg-6 left-content">
                <hr />
                <h2 className="h3">Missão</h2>
                <h1 className="display-5">Grow Premium Volume at<br />Lower Prices.</h1>
                <img className="img-fluid" src={missao} alt="" />
              </div>

              <div className="col-12 col-lg-6 right-content">
                <p className="h4">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing diam nonummy nibh euismod tincidunt ut laoreet.</p>
                <p className="h4">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>

            <div className="row box-content sobre-row" id="valores">
              <div className="col-12 col-lg-6 left-content">
                <hr />
                <h2 className="h3">Valores</h2>
                <h1 className="display-5">A diverse & inclusive<br />community is our imperative.</h1>
                <p className="h4 valores-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                  veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis nisl ut aliea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>

              <div className="col-12 col-lg-6 right-content">
                <img className="img-fluid valores-img" src={valores} alt="" />
              </div>
            </div>

            {/* <div className="row box-content" id="impacto">
              <div className="col-12 col-lg-6 left-content">
                <hr />
                <h2 className="h3">Impacto</h2>
                <h1 className="display-5">We manage $260 billion in<br />assets, spanning 4 business<br /> segments.
                </h1>
                <img className="img-fluid" src={img} alt="" />
              </div>

              <div className="col-12 col-lg-6 right-content">
                <p className="h4">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing diam nonummy nibh euismod tincidunt ut laoreet.</p>
                <p className="h4">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetuer adipiscing diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div> */}

            <div className="row box-content sobre-row" id="equipe">
              <div className="col-12 left-content">
                <hr />
                <h2 className="h3">Equipe</h2>
                <h1 className="display-5">Our people make us unique.</h1>
                <p className="h4 equipe-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                  veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis nisl ut aliea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>

                <div className="col-12 equipe">
                  <div className="accordion" id="accordion">

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">

                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          Sócio Fundadores
                        </button>

                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordion">
                        <div className="accordion-body row">

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">LAWTON W. FITT</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">DANIEL A. D’ANIELLO</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">RUULKE BAGIJN</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Investment Management
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordion">
                        <div className="accordion-body row">

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Business Development
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordion">
                        <div className="accordion-body row">

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Finance & Operations
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordion">
                        <div className="accordion-body row">

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Data Intelligence Analyst
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-bs-parent="#accordion">
                        <div className="accordion-body row">

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                          <div className="col-6 col-md-3 profile-container">
                            <img className="img-fluid valores-img" src={profile} alt="" />
                            <div className="profile-container-text">
                              <h1 className="h2">PETER CLARE</h1>
                              <h5 className="h4">Chief Investment Officer</h5>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>

            </div>
          
          </div>
        </div>

      </div>

    </section>
  );
}

export default Sobre;