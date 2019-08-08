import React from 'react'
import {
  useFirebaseApp,
  useFirestoreCollection,
} from 'reactfire'
import { useLocation } from 'wouter'

import {
  StoryList,
  Story,
} from './List.style'

import Panel from '../Play/Panel'

interface SerializedStory {
  id: string
  firstPanel: firebase.firestore.DocumentReference
}

const List: React.FC = () => {
  const firebaseApp = useFirebaseApp()
  const [, setLocation] = useLocation()

  const storiesRef = firebaseApp
    .firestore()
    .collection('stories')

  // Had to specify the QuerySnapshot type error to an error in reactfire's typings
  const storiesCollection = useFirestoreCollection(storiesRef) as firebase.firestore.QuerySnapshot

  // TODO set some type like SerializedStory[]
  const stories: SerializedStory[] = storiesCollection.docs.map(story => {
    const data = story.data() as SerializedStory

    return {
      ...data,
      id: story.id,
    }
  })

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
        dataUrl: '',
      }],
    }
    const storyRef = await storiesRef.add(story)
    setLocation(`story/${storyRef.id}/edit`)
  }

  return (
    <div>
      <StoryList>
        {stories.filter(story => story.firstPanel).map(story => (
          <Story
            key={story.id}
            onClick={() => setLocation(`story/${story.id}`)}
          >
            <Panel reference={story.firstPanel} />
          </Story>
        ))}
      </StoryList>
      <button onClick={handleNewStoryClick}>New Story</button>
    </div>
  )
}

export default List
