import React from 'react'
import {
  useFirebaseApp,
  useFirestoreCollection,
} from 'reactfire'
import { useLocation } from 'wouter'

const List: React.FC = () => {
  const firebaseApp = useFirebaseApp()
  const [, setLocation] = useLocation()

  const storiesRef = firebaseApp
    .firestore()
    .collection('stories')

  // Had to specify the QuerySnapshot type error to an error in reactfire's typings
  const storiesCollection = useFirestoreCollection(storiesRef) as firebase.firestore.QuerySnapshot
  const stories = storiesCollection.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  })) as Story[]

  if (!stories) {
    return (
      <>Stories not found</>
    )
  }

  return (
    <div>
      {stories.map(story => (
        <div onClick={() => setLocation(`story/${story.id}`)}>
          {story.panels && story.panels[0] && story.panels[0].text}
        </div>
      ))}
    </div>
  )
}

export default List
