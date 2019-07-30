import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Router } from 'wouter'

import { GlobalStyle } from './Global.style'
import StoryCreator from '../StoryCreator/StoryCreator'
import StoryPlayer from '../StoryPlayer'

const App: React.FC = hot((): React.ReactElement => (
  <>
    <GlobalStyle/>
    <Route path={process.env.PUBLIC_URL}>
      <StoryCreator />
    </Route>
    <Route path={`${process.env.PUBLIC_URL}/story/:id`}>
      {(params): React.ReactElement => (
        <StoryPlayer id={params ? params.id : undefined} />
      )}
    </Route>
  </>
))

export default App
