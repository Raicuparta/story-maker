import React, {
  useState,
} from 'react'
import {
  useFirestoreDoc,
  useFirebaseApp,
} from 'reactfire'

import {
  PanelImage,
  Wrapper,
  PanelWrapper,
  CurrentPanelColumn,
  PanelText,
} from './Play.style'
import { Column } from '../UI'

interface Props {
  id?: string
}

const Play: React.FC<Props> = ({ id }) => {
  const [current, setCurrent] = useState<number>(0)

  const firebaseApp = useFirebaseApp()
  const storyRef = firebaseApp
    .firestore()
    .collection('stories')
    .doc(id)

  // Had to specify the DocumentSnapshot type error to a bug in reactfire's typings
  const story = useFirestoreDoc<firebase.firestore.DocumentSnapshot>(storyRef)
    .data() as Story | undefined

  if (!story) {
    return (
      <>Story not found</>
    )
  }

  const currentPanel = story.panels[current]

  return (
    <Wrapper>
      {currentPanel && (
        <CurrentPanelColumn>
          <PanelWrapper>
            <PanelImage
              src={currentPanel.dataURL}
              alt={currentPanel.text}
            />
            <PanelText>
              {currentPanel.text}
            </PanelText>
          </PanelWrapper>
        </CurrentPanelColumn>
      )}
      <Column>
        {currentPanel.nextIds && currentPanel.nextIds.map(id => (
          <PanelWrapper key={id}>
            <PanelImage
              src={story.panels[id].dataURL}
              alt={story.panels[id].text}
              onClick={() => setCurrent(id)}
            />
            <PanelText>
              {story.panels[id].text}
            </PanelText>
          </PanelWrapper>
        ))}
      </Column>
    </Wrapper>
  )
}

export default Play
