import React, {Component} from 'react';
import './style.css';

import img1 from '../../assets/images/Portfolio/img1.png';
import img2 from '../../assets/images/Portfolio/img2.png';
import img3 from '../../assets/images/Portfolio/img3.png';
import img4 from '../../assets/images/Portfolio/img4.png';
import CarouselItem from '../../components/CarouselItem'

class Portfolio extends Component {
  render(){
    const images1 = [img1, img1, img1, img1, img1];
    const titles1 = [
      ["New ",<span>Tech-Investment</span>, <br/>,"Digital Platform"],
      ["New ",<span>Tech-Investment</span>, <br/>,"Digital Platform"],
      ["New ",<span>Tech-Investment</span>, <br/>,"Digital Platform"],
      ["New ",<span>Tech-Investment</span>, <br/>,"Digital Platform"], 
      ["New ",<span>Tech-Investment</span>, <br/>,"Digital Platform"]
    ];
    const descriptions1 = [
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu"
    ];
    const textButtons1 = ["Fundos de Investimento", "FIM", "FIDC", "FII", "FII"];
    const hrefs1 = ["www.google.com", "www.google.com","www.google.com","www.google.com", "www.google.com"];
    
    const images2 = [img2, img2, img2, img2, img2];
    const titles2 = [
      ["Easily ",<span>Diversify </span>,<br/>,"your ",<span>portfolio</span>],
      ["Easily ",<span>Diversify </span>,<br/>,"your ",<span>portfolio</span>],
      ["Easily ",<span>Diversify </span>,<br/>,"your ",<span>portfolio</span>],
      ["Easily ",<span>Diversify </span>,<br/>,"your ",<span>portfolio</span>],
      ["Easily ",<span>Diversify </span>,<br/>,"your ",<span>portfolio</span>]
      ];
    const descriptions2 = [
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu"
    ];
    const textButtons2 = ["Operações Estruturadas", "FIM", "FIDC", "FII", "FII"];
    const hrefs2 = ["www.google.com", "www.google.com","www.google.com","www.google.com"];

    const images3 = [img3, img3, img3, img3, img3];
    const titles3 = [
      [<span>Transfers</span>," of funds",<br/>,"happen in ",<span>minutes</span>],
      [<span>Transfers</span>," of funds",<br/>,"happen in ",<span>minutes</span>],
      [<span>Transfers</span>," of funds",<br/>,"happen in ",<span>minutes</span>],
      [<span>Transfers</span>," of funds",<br/>,"happen in ",<span>minutes</span>],
      [<span>Transfers</span>," of funds",<br/>,"happen in ",<span>minutes</span>]
    ];
    const descriptions3 = [
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu"
    ];
    const textButtons3 = ["Merges & Acquisitions", "FIM", "FIDC", "FII", "FII"];
    const hrefs3 = ["www.google.com", "www.google.com","www.google.com","www.google.com"];

    const images4 = [img4, img4, img4, img4, img4];
    const titles4 = [
      ["Future ",<span>value-generating </span>,<br/>,"Personal ",<span>activities</span>],
      ["Future ",<span>value-generating </span>,<br/>,"Personal ",<span>activities</span>],
      ["Future ",<span>value-generating </span>,<br/>,"Personal ",<span>activities</span>],
      ["Future ",<span>value-generating </span>,<br/>,"Personal ",<span>activities</span>],
      ["Future ",<span>value-generating </span>,<br/>,"Personal ",<span>activities</span>]
    ];
    const descriptions4 = [
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu", 
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidu"
    ];
    const textButtons4 = ["Decentralized Finance", "FIM", "FIDC", "FII", "FII"];
    const hrefs4 = ["www.google.com", "www.google.com","www.google.com","www.google.com", "www.google.com"];

    return (
      <>
        <CarouselItem
          images={images1}
          titles={titles1}
          descriptions={descriptions1}
          textButtons={textButtons1}
          hrefs={hrefs1}
          carousel={"fundos-de-investimento"}
        />

        <CarouselItem
          images={images2}
          titles={titles2}
          descriptions={descriptions2}
          textButtons={textButtons2}
          hrefs={hrefs2}
          carousel={"operacoes-estruturadas"}
        />

        <CarouselItem
          images={images3}
          titles={titles3}
          descriptions={descriptions3}
          textButtons={textButtons3}
          hrefs={hrefs3}
          carousel={"merges-and-acquisitions"}
        />

        <CarouselItem
          images={images4}
          titles={titles4}
          descriptions={descriptions4}
          textButtons={textButtons4}
          hrefs={hrefs4}
          carousel={"decentralized-finance"}
        />
      </>
    );
  }
}

export default Portfolio;