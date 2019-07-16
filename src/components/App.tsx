import React from "react";
import { hot } from "react-hot-loader/root";
import { Route } from "wouter";

import { GlobalStyle } from "../styles/Global.style";
import StoryCreator from "./StoryCreator";

const App: React.FC = hot(() => (
  <>
    <GlobalStyle/>
    <Route path="/" component={StoryCreator} />
  </>
));

export default App;
