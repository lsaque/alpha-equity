import React from 'react';

import Navbar from '../../components/Navbar';
import Home from '../Home';
import PortfolioItem from '../PortfolioItem';
import Portfolio from '../Portfolio';
// import Sobre from '../Sobre';
// import Alphapedia from '../Alphapedia';
// import Contato from '../Contato';
// import Footer from '../../components/Footer';

import '../../assets/styles/global.css';
import BackTriangle from '../../components/BackTriangle';

function Landing() {
  return (
    <>
      <Navbar/>
      <Home/>
      <PortfolioItem/>
      <Portfolio/>
      <BackTriangle/>
      {/* <Sobre/> */}
      {/* <Alphapedia/> */}
      {/* <Contato/> */}
      {/* <Footer/> */}
    </>
  );
}

export default Landing;