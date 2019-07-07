import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import { GlobalStyle } from './styles/Global.style';

ReactDOM.render(
  <>
    <GlobalStyle/>
    <Home />
  </>
, document.getElementById('root'));
