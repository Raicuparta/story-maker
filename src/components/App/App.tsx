import React from 'react'
import { Route } from 'wouter'
import {
  FirebaseAppProvider,
  SuspenseWithPerf,
} from 'reactfire'
import 'firebase/performance'
import 'firebase/firestore'

import { GlobalStyle } from './Global.style'
import StoryCreator from '../Edit/Edit'
import Play from '../Play'

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

const App: React.FC = () => (
  <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
    <GlobalStyle/>
    <Route path={path('story/:id/edit')}>
      {params => (
        <SuspenseWithPerf
          fallback={'loading...'}
          traceId={'load-story-player'}
        >
          <StoryCreator id={params ? params.id : undefined} />
        </SuspenseWithPerf>
      )}
    </Route>
    <Route path={path('story/:id')}>
      {params => (
        <SuspenseWithPerf
          fallback={'loading...'}
          traceId={'load-story-creaor'}
        >
          <Play id={params ? params.id : undefined} />
        </SuspenseWithPerf>
      )}
    </Route>
  </FirebaseAppProvider>
)

export default App
