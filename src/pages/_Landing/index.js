import React from 'react';

import Navbar from '../../components/Navbar';
import Home from '../Home';
import PortfolioItem from '../PortfolioItem';
import Sobre from '../Sobre';
// import Alphapedia from '../Alphapedia';
import Agradecimento from '../Agradecimento';
import Contato from '../Contato';
import Footer from '../../components/Footer';

import '../../assets/styles/global.css';
import BackTriangle from '../../components/BackTriangle';

function Landing() {
  return (
    <>
      <Navbar/>
      <main data-spy="scroll" data-target="#left-menu" data-offset="50">
        <Home/>
        <PortfolioItem/>
        <Sobre/>
        {/* <Alphapedia/> */}
        <Agradecimento/>
        <Contato/>
        <BackTriangle/>
      </main>
      <Footer/>
    </>
  );
}

export default Landing;