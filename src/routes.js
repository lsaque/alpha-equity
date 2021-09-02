import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/_Landing';
import FundosDeInvestimento from './pages/FundosDeInvestimento';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/fundos-de-investimento" component={FundosDeInvestimento}/>
      {/* <Route path="/operacoes-de-securitização" component={FundosDeInvestimento}/> */}
      {/* <Route path="/merges-acquisitions" component={FundosDeInvestimento}/> */}
      {/* <Route path="/decentralized-finance" component={FundosDeInvestimento}/> */}
    </BrowserRouter>
  );
}

export default Routes;