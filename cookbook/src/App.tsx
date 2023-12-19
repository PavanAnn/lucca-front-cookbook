import React from 'react';
import GlobalStyles from './Styles/globalStyles';
import { BRouter } from './Routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <BRouter />
    </BrowserRouter>
    );
}

export default App;
