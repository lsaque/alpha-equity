import React, {Component} from 'react';
import BoxItem from '../../components/Alphapedia/BoxItem';
import ContentItem from '../../components/Alphapedia/ContentItem';
import './style.css';

class Alphapedia extends Component {

  render() {
    const letters1 = ["A","B","C","D"];
    const letters2 = ["E","F","G","H"];
    const letters3 = ["I","J","K","L"];
    const letters4 = ["M","N","O","P"];
    const letters5 = ["Q","R","S","T"];
    const letters6 = ["U","V","W","X"];
    const letters7 = ["Y","Z", "", ""];

    const alpha = ["Alpha", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua."];
    const bravo = ["Bravo", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua."];
    const charlie = ["Charlie", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua."];
    const delta = ["Delta", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua."];
    const gama = ["Gama", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat, sed diam voluptua."];

    return (
    <section id="alphapedia">
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 col-lg-6 left-content">

            <hr />
            <h2 className="h3">Alphapédia</h2>
            <h1 className="display-5">Qual termo gostaria de conhecer?</h1>

            <div className="boxes">
              <BoxItem letters={letters1} />
              <BoxItem letters={letters2} />
              <BoxItem letters={letters3} />
              <BoxItem letters={letters4} />
              <BoxItem letters={letters5} />
              <BoxItem letters={letters6} />
              <BoxItem letters={letters7} />
            </div>

          </div>

          <div className="col-12 col-lg-6 right-content">
            <h1 className="display-6">Resultados:</h1>

            <div className="content">

              <ContentItem content={alpha} />
              <ContentItem content={bravo} />
              <ContentItem content={charlie} />
              <ContentItem content={delta} />
              <ContentItem content={gama} />
              
            </div>

          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Alphapedia;