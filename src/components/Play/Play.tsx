import React, {
  useState,
} from 'react'
import {
  useFirebaseApp,
  useFirestoreDoc,
  SuspenseWithPerf,
} from 'reactfire'

import Panel from './Panel'

import {
  Wrapper,
} from './Play.style'

interface Props {
  id?: string
}

const Play: React.FC<Props> = ({ id }) => {
  const [panelReference, setPanelReference] = useState<firebase.firestore.DocumentReference>()

  const storyRef = useFirebaseApp()
    .firestore()
    .collection('stories')
    .doc(id)

  const story = useFirestoreDoc<firebase.firestore.DocumentSnapshot>(storyRef).data()

  if (!panelReference && story) {
    setPanelReference(story.firstPanel)
  }

  if (!story) {
    return <p> Story Not Found </p>
  }

  if (!panelReference) {
    return <p> Panel Not Found </p>
  }

  return (
    <Wrapper>
      <SuspenseWithPerf
        fallback={'loading...'}
        traceId={`load-panel-${panelReference.id}`}
      >
        <Panel
          reference={panelReference}
          onNextClick={setPanelReference}
        />
      </SuspenseWithPerf>
    </Wrapper>
  )
}

export default Play
