import React from 'react';
import './style.css';
import img from '../../assets/images/Portfolio/background.png';

function Portfolio() {
  return (
    <section id="portfolio">

      <div id="activeCarousel1" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#activeCarousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#activeCarousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#activeCarousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#activeCarousel1" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#activeCarousel1" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>


        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={img} className="img-bg" alt="..."/>
            <div className="center-content">
              <div className="h1-box">
                <h1 className="display-1">New <span>Tech-Investment</span>, <br/>Digital Platform</h1>
              </div>
              <div className="p-box">
                <p className="h2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ut labore et</p>
              </div>
              <div className="button-box">
                <button><span>Fundos de Investimento</span></button>
              </div>
            </div>
          </div>
          
        </div>

        <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#activeCarousel1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#activeCarousel1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </section>
  );
}

export default Portfolio;