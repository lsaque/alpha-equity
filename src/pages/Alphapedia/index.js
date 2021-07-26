import React from 'react';
import './style.css';

function Alphapedia() {
  return (
    <section id="alphapedia">
      <div className="container">
        <div className="row">

          <div className="box-content">
            <div className="col-12 col-lg-6 left-content">
              <hr />
              <h2 className="h3">Alphapédia</h2>
              <h1 className="display-5">Qual termo gostaria de conhecer?</h1>

              <div className="container">
                <div className="row">
                  <div className="col-6 box-item">
                    <p className="item">A</p>
                  </div>
                  <div className="col-6 box-item">
                    <p className="item">B</p>
                  </div>
                  <div className="col-6 box-item">
                    <p className="item">C</p>
                  </div>
                  <div className="col-6 box-item">
                    <p className="item">D</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-12 col-lg-6 right-content">
              {/* <img className="img-fluid valores-img" src={valores} alt="" /> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Alphapedia;