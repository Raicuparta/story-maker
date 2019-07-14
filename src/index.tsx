import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Home from './components/Home';
import { GlobalStyle } from './styles/Global.style';

const App: React.FC = hot(() => (
  <>
    <GlobalStyle/>
    <Home />
  </>
));

ReactDOM.render(<App />, document.getElementById('root'));
