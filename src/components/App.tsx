import React from 'react';
import { Route } from 'wouter';
import { hot } from 'react-hot-loader/root';

import StoryCreator from './StoryCreator';
import { GlobalStyle } from '../styles/Global.style';

const App: React.FC = hot(() => (
  <>
    <GlobalStyle/>
    <Route path='/' component={StoryCreator} />
  </>
));

export default App;
