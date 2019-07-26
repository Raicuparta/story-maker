import React from "react";
import { hot } from "react-hot-loader/root";
import { Route } from "wouter";

import { GlobalStyle } from "../styles/Global.style";
import StoryCreator from "./StoryCreator";
import StoryPlayer from "./StoryPlayer";

const App: React.FC = hot((): React.ReactElement => (
  <>
    <GlobalStyle/>
    <Route path="/">
      <StoryCreator />
    </Route>
    <Route path="/story/:id">
      {(params): React.ReactElement => (
        <StoryPlayer id={params ? params.id : undefined} />
      )}
    </Route>
  </>
));

export default App;
