import React from 'react';

import Navbar from '../../components/Navbar';
import Home from '../Home';

import '../../assets/styles/global.css';

function Landing() {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
}
/* <Navbar/>
<Home/>
<PortfolioItem/>
<Portfolio/>
<Sobre/>
<Alphapedia/>
<Contato/>
<Footer/> */

export default Landing;