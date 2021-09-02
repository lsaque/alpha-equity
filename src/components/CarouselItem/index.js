import React from 'react';
import './style.css';

function carouselContentItem(image, title, description, href, textButton){
  return(
    <div className="carousel-item">
      <img src={image} className="img-bg" alt="#" />
      <div className="center-content">
        <div className="h1-box">
          <h1 className="display-1">{title}</h1>
        </div>
        <div className="p-box">
          <p className="h2">{description}</p>
        </div>
        <div className="button-box">
          <a href={href}><span>{textButton}</span></a>
        </div>
      </div>
    </div>
  )
}

class CarouselItem extends React.Component {
  render(){
    return (
      <section id="portfolio">

        <div id={this.props.carousel} className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target={"#"+this.props.carousel} data-bs-slide-to="0" aria-label="Slide 1"
              className="active" aria-current="true" />
            <button type="button" data-bs-target={"#"+this.props.carousel} data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target={"#"+this.props.carousel} data-bs-slide-to="2" aria-label="Slide 3" />
            <button type="button" data-bs-target={"#"+this.props.carousel} data-bs-slide-to="3" aria-label="Slide 4" />
            <button type="button" data-bs-target={"#"+this.props.carousel} data-bs-slide-to="4" aria-label="Slide 5" />
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={this.props.images[0]} className="img-bg" alt="#" />
              <div className="center-content">
                <div className="h1-box">
                  <h1 className="display-1"> {this.props.titles[0]} </h1>
                </div>
                <div className="p-box">
                  <p className="h2">{this.props.descriptions[0]}</p>
                </div>
                <div className="button-box">
                  <a href={this.props.hrefs[0]}><span>{this.props.textButtons[0]}</span></a>
                </div>
              </div>
            </div>

            {carouselContentItem(
              this.props.images[1], 
              this.props.titles[1], 
              this.props.descriptions[1],
              this.props.hrefs[1], 
              this.props.textButtons[1]
            )}

            {carouselContentItem(
              this.props.images[2], 
              this.props.titles[2], 
              this.props.descriptions[2],
              this.props.hrefs[2], 
              this.props.textButtons[2]
            )}

            {carouselContentItem(
              this.props.images[3], 
              this.props.titles[3], 
              this.props.descriptions[3],
              this.props.hrefs[3], 
              this.props.textButtons[3]
            )}

            {carouselContentItem(
              this.props.images[4], 
              this.props.titles[4], 
              this.props.descriptions[4],
              this.props.hrefs[4], 
              this.props.textButtons[4]
            )}

          </div>

          <button className="carousel-control-prev d-none d-lg-block" type="button"
            data-bs-target={"#"+this.props.carousel} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next d-none d-lg-block" type="button"
            data-bs-target={"#"+this.props.carousel} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </section>
    );
  }
}

export default CarouselItem;