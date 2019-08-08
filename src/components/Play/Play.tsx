import React, {
  useState,
} from 'react'
import {
  useFirebaseApp,
  useFirestoreDoc,
} from 'reactfire'

import Panel from './Panel'

import {
  Wrapper,
} from './Play.style'

interface Props {
  id?: string
}

const Play: React.FC<Props> = ({ id }) => {
  const firebaseApp = useFirebaseApp()
  const storyRef = firebaseApp
    .firestore()
    .collection('stories')
    .doc(id)

  const story = useFirestoreDoc<firebase.firestore.DocumentSnapshot>(storyRef).data()

  if (!story) {
    return <p> Story Not Found </p>
  }

  return (
    <Wrapper>
      <Panel
        reference={story.firstPanel}
        showNext
      />
    </Wrapper>
  )
}

export default Play
