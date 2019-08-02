import React from 'react'
import {
  useFirebaseApp,
  useFirestoreCollection,
} from 'reactfire'
import { useLocation } from 'wouter'

import {
  StoryList,
  Story,
  ThumbnailWrapper,
} from './List.style'

import Thumbnail from '../Thumbnail'

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
    }
    const storyRef = await storiesRef.add(story)
    setLocation(`story/${storyRef.id}/edit`)
  }

  return (
    <div>
      <StoryList>
        {stories.map(story => (
          <Story
            key={story.id}
            onClick={() => setLocation(`story/${story.id}`)}
          >
            {story.panels[0].text || 'Untitled'}
            <ThumbnailWrapper>
              <Thumbnail src={story.panels[0].dataURL} />
            </ThumbnailWrapper>
          </Story>
        ))}
      </StoryList>
      <button onClick={handleNewStoryClick}>New Story</button>
    </div>
  )
}

export default List
