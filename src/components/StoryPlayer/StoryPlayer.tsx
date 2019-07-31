import React, {
  useState,
} from 'react'
import 'firebase/firestore'
import {
  useFirestoreDoc,
  useFirebaseApp,
  SuspenseWithPerf,
} from 'reactfire'

import {
  PanelImage,
  Wrapper,
  PanelWrapper,
  CurrentPanelColumn,
  PanelText,
} from './StoryPlayer.style'
import { Column } from '../UI'

interface Props {
  id?: string;
}

const StoryPlayer: React.FC<Props> = ({ id }): React.ReactElement => {
  const [current, setCurrent] = useState<number>(0)

  const firebaseApp = useFirebaseApp()
  const storyRef = firebaseApp
    .firestore()
    .collection('stories')
    .doc(id)

  const serializedStory: SerializedStory = (useFirestoreDoc(storyRef) as any).data()

  const story: Story = {
    panels: serializedStory.panels.map((panel): Panel => ({
      dataURL: panel.dataURL,
      id: panel.id,
      nextIds: panel.nextIds ? JSON.parse(panel.nextIds) : undefined,
      prevId: panel.prevId,
      text: panel.text,
    })),
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
        {currentPanel.nextIds && currentPanel.nextIds.map((id): React.ReactElement => (
          <PanelWrapper key={id}>
            <PanelImage
              src={story.panels[id].dataURL}
              alt={story.panels[id].text}
              onClick={(): void => setCurrent(id)}
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

export default StoryPlayer
