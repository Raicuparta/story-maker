import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route } from 'wouter'
import {
  FirebaseAppProvider,
  SuspenseWithPerf,
} from 'reactfire'
import 'firebase/performance'
import 'firebase/firestore'

import { GlobalStyle } from './Global.style'
import StoryCreator from '../StoryCreator/StoryCreator'
import StoryPlayer from '../StoryPlayer'

const firebaseConfig = {
  apiKey: 'AIzaSyC5mVxaorL_LmNWasC5LNmAC3cmlQ-5vFM',
  authDomain: 'story-maker-85706.firebaseapp.com',
  databaseURL: 'https://story-maker-85706.firebaseio.com',
  projectId: 'story-maker-85706',
  storageBucket: 'story-maker-85706.appspot.com',
  messagingSenderId: '105986550181',
  appId: '1:105986550181:web:81ec40d053faad45',
}

const path = (relativePath = '') => `${process.env.PUBLIC_URL}/${relativePath}`

const App: React.FC = hot(() => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
    <GlobalStyle/>
    <Route path={path()}>
      <StoryCreator />
    </Route>
    <Route path={path('story/:id')}>
      {params => (
        <SuspenseWithPerf
          fallback={'loading...'}
          traceId={'load-story-status'}
        >
          <StoryPlayer id={params ? params.id : undefined} />
        </SuspenseWithPerf>
      )}
    </Route>
  </FirebaseAppProvider>
))

export default App
