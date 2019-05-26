import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';
import { GlobalStyle } from './index.style';

ReactDOM.render(
  <>
    <GlobalStyle/>
    <Home />
  </>
, document.getElementById('root'));
