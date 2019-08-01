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
} from './Edit.style'
import Drawing from './Drawing'
import PanelConnections from './PanelConnections'

import {
  Column,
} from '../UI'

interface Props {
  id?: string
}

const Edit: React.FC<Props> = ({ id }) => {
  const firebaseApp = useFirebaseApp()

  const storyRef = firebaseApp
    .firestore()
    .collection('stories')
    .doc(id)

  // Had to specify the DocumentSnapshot type error to a bug in reactfire's typings
  const storyDoc = useFirestoreDoc<firebase.firestore.DocumentSnapshot>(storyRef)
  const story = storyDoc.data() as Story || {
    title: '',
    panels: [{
      id: 0,
      nextIds: [],
      text: '',
      dataURL: '',
    }],
    id,
  }

  const [selected, setSelected] = useState<number>(0)
  const [panels, setPanels] = useState<Panel[]>(story.panels)
  const [shouldUpload, setShouldUpload] = useState(false)

  useEffect(() => {
    if (!shouldUpload) {
      return
    }

    setShouldUpload(false)

    async function updateStory () {
      storyRef.update('panels', panels)
    }

    updateStory()
  }, [panels, storyRef, shouldUpload])

  if (!story) {
    return <>Story not found</>
  }

  const currentPanel = panels[selected]
  const prevPanel = (currentPanel.prevId !== undefined) ? panels[currentPanel.prevId] : undefined
  const nextPanels = currentPanel.nextIds.map(id => panels[id])

  function handleTextChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newPanels = panels.slice(0)
    newPanels[selected] = {
      ...newPanels[selected],
      text: event.target.value,
    }

    setPanels(newPanels)
  }

  function handleNewPanelClick () {
    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0)

      newPanels[selected].nextIds.push(newPanels.length)
      newPanels.push({
        dataURL: '',
        id: newPanels.length,
        nextIds: [],
        prevId: selected,
        text: '',
      })

      return newPanels
    })
  }

  function handleCanvasChange (dataURL: string) {
    const newPanels = panels.slice(0)
    newPanels[selected] = {
      ...newPanels[selected],
      dataURL: dataURL || '',
    }

    setPanels(newPanels)
  }

  function handlePanelConnectionClick (panel: Panel) {
    setSelected(panel.id)
  }

  function handlePressEnd () {
    setShouldUpload(true)
  }

  return (
    <Wrapper>
      <Column>
        <Drawing
          onChange={handleCanvasChange}
          onPressEnd={handlePressEnd}
          dataURL={currentPanel.dataURL}
        />
        <TextInput
          onChange={handleTextChange}
          value={currentPanel.text}
          placeholder="Insert panel text here"
        />
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

export default Edit
