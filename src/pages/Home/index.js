import React from 'react';

import './style.css';
import img from '../../assets/images/Inicio/background.png';

function Home() {
  return (
    <section id="inicio">
      <div id="activeCarousel0" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#activeCarousel0" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"/>
          <button type="button" data-bs-target="#activeCarousel0" data-bs-slide-to="1" aria-label="Slide 2"/>
          <button type="button" data-bs-target="#activeCarousel0" data-bs-slide-to="2" aria-label="Slide 3"/>
          <button type="button" data-bs-target="#activeCarousel0" data-bs-slide-to="3" aria-label="Slide 4"/>
          <button type="button" data-bs-target="#activeCarousel0" data-bs-slide-to="4" aria-label="Slide 5"/>
        </div>

        <div className="footer container-fluid">
          <div className="item left d-none d-md-block">
            <p className="h5">Follow Us And Stay Connected</p>
          </div>
          <div className="item right d-none d-md-block">
            <a href="http://"><i className="fab fa-facebook-f"></i></a>
            <a href="http://"><i className="fab fa-twitter"></i></a>
            <a href="http://"><i className="fab fa-instagram"></i></a>
            <a href="http://"><i className="fab fa-linkedin-in"></i></a>
            <a href="http://"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={img} className="img-bg" alt="..."/>
            <div className="center-content">
              <div className="h1-box">
                <h1 className="display-1">Where we <span>begin</span>, <br/>it will be <span>Always better.</span></h1>
              </div>
              <div className="p-box">
                <p className="h2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ut labore et</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img} className="img-bg" alt="..."/>
            <div className="center-content">
              <div className="h1-box">
                <h1 className="display-1">Where we <span>begin</span>, <br/>it will be <span>Always better.</span></h1>
              </div>
              <div className="p-box">
                <p className="h2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ut labore et</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img} className="img-bg" alt="..."/>
            <div className="center-content">
              <div className="h1-box">
                <h1 className="display-1">Where we <span>begin</span>, <br/>it will be <span>Always better.</span></h1>
              </div>
              <div className="p-box">
                <p className="h2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ut labore et</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img} className="img-bg" alt="..."/>
            <div className="center-content">
              <div className="h1-box">
                <h1 className="display-1">Where we <span>begin</span>, <br/>it will be <span>Always better.</span></h1>
              </div>
              <div className="p-box">
                <p className="h2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ut labore et</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img} className="img-bg" alt="..."/>
            <div className="center-content">
              <div className="h1-box">
                <h1 className="display-1">Where we <span>begin</span>, <br/>it will be <span>Always better.</span></h1>
              </div>
              <div className="p-box">
                <p className="h2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ut labore et</p>
              </div>
            </div>
          </div>
          
        </div>

        <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#activeCarousel0" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#activeCarousel0" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </section>
  );
}

export default Home;