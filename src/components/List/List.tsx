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

  async function handleNewStoryClick () {
    const story: Story = {
      panels: [{
        id: 0,
        nextIds: [],
        text: '',
        dataURL: '',
      }],
      title: '',
    }
    const storyRef = await storiesRef.add(story)
    setLocation(`story/${storyRef.id}/edit`)
  }

  return (
    <div>
      {stories.map(story => (
        <div
          key={story.id}
          onClick={() => setLocation(`story/${story.id}`)}
        >
          {story.title || 'Untitled'}
        </div>
      ))}
      <button onClick={handleNewStoryClick}>New Story</button>
    </div>
  )
}

export default List
