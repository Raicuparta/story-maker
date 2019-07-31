import React, {
  useState,
  useEffect,
} from 'react'
import {
  useFirestoreDoc,
  useFirebaseApp,
} from 'reactfire'

import {
  TextInput,
  Wrapper,
} from './StoryCreator.style'
import {
  Button,
  Column,
  Row,
} from '../UI'
import Drawing from '../Drawing'
import PanelConnections from '../PanelConnections'

const StoryCreator: React.FC = () => {
  const [selected, setSelected] = useState<number>(0)

  const firebaseApp = useFirebaseApp()
  const storiesRef = firebaseApp
    .firestore()
    .collection('stories')

  // TODO not like this... NOT LIKE THIS!!
  const storyRef = firebaseApp
    .firestore()
    .collection('stories')
    .doc('bVCqYmh0KUlhTBd8GHE8')

  // Had to specify the DocumentSnapshot type error to a bug in reactfire's typings
  const story = useFirestoreDoc<firebase.firestore.DocumentSnapshot>(storyRef)
    .data() as Story | undefined

  if (!story) {
    return <>Story not found</>
  }

  const panels = story.panels
  const currentPanel = panels[selected]
  const prevPanel = (currentPanel.prevId !== undefined) ? panels[currentPanel.prevId] : undefined
  const nextPanels = currentPanel.nextIds.map(id => panels[id])

  function handleTextChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newPanels = panels.slice(0)
    newPanels[selected] = {
      ...newPanels[selected],
      text: event.target.value,
    }

    // setPanels(newPanels)
  }

  function handleNewPanelClick () {
    // setPanels(prevPanels => {
    //   const newPanels = prevPanels.slice(0)

    //   newPanels[selected].nextIds.push(newPanels.length)
    //   newPanels.push({
    //     dataURL: '',
    //     id: newPanels.length,
    //     nextIds: [],
    //     prevId: selected,
    //     text: '',
    //   })

    //   return newPanels
    // })
  }

  function handleCanvasChange (dataURL: string) {
    const newPanels = panels.slice(0)
    newPanels[selected] = {
      ...newPanels[selected],
      dataURL: dataURL || '',
    }

    storyRef.update({
      panels: newPanels,
    })
  }

  function handlePanelConnectionClick (panel: Panel) {
    setSelected(panel.id)
  }

  return (
    <Wrapper>
      <Column>
        <Drawing
          onChange={handleCanvasChange}
          dataURL={currentPanel.dataURL}
        />
        <TextInput
          onChange={handleTextChange}
          value={currentPanel.text}
          placeholder="Insert panel text here"
        />
        <Row>
          {/* <Button onClick={handlePublishClick}>Save</Button> */}
        </Row>
      </Column>
      <PanelConnections
        prevPanel={prevPanel}
        currentPanel={currentPanel}
        nextPanels={nextPanels}
        onConnectionClick={handlePanelConnectionClick}
        onNewPanelClick={handleNewPanelClick}
      />
    </Wrapper>
  )
}

export default StoryCreator
