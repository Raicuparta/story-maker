import React, {
  useState,
} from 'react'

import database from '../../database'
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

const StoryCreator: React.FC = (): React.ReactElement => {
  const [selected, setSelected] = useState<number>(0)
  const [panels, setPanels] = useState<Panel[]>([{
    dataURL: '',
    id: 0,
    nextIds: [],
    text: '',
  }])

  const currentPanel = panels[selected]
  const prevPanel = (currentPanel.prevId !== undefined) ? panels[currentPanel.prevId] : undefined
  const nextPanels = currentPanel.nextIds.map((id): Panel => panels[id])

  function handlePublishClick (): void {
    const data: SerializedStory = {
      panels: panels.map((panel): SerializedPanel => ({
        dataURL: panel.dataURL,
        id: panel.id,
        nextIds: JSON.stringify(panel.nextIds),
        text: panel.text,
        ...(panel.prevId !== undefined ? { prevId: panel.prevId } : {}),
      })),
    }

    database.ref('stories').push(data)
  }

  function handleTextChange (event: React.ChangeEvent<HTMLTextAreaElement>): void {
    const newPanels = panels.slice(0)
    newPanels[selected] = {
      ...newPanels[selected],
      text: event.target.value,
    }

    setPanels(newPanels)
  }

  function handleLoadClick (): void {
    database.ref('stories').limitToLast(1).once('value').then((snapshot): void => {
      const val = snapshot.val()
      if (!val) { return }

      const serializedPanels = Object.values<SerializedStory>(val)[0].panels

      setPanels(serializedPanels.map((panel): Panel => ({
        dataURL: panel.dataURL,
        id: panel.id,
        nextIds: JSON.parse(panel.nextIds),
        prevId: panel.prevId,
        text: panel.text,
      })))
    })
  }

  function handleNewPanelClick (): void {
    setPanels((prevPanels): Panel[] => {
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

  function handleCanvasChange (dataURL: string): void {
    setPanels((prevPanels): Panel[] => {
      const newPanels = prevPanels.slice(0)
      newPanels[selected] = {
        ...newPanels[selected],
        dataURL,
      }
      return newPanels
    })
  }

  function handlePanelConnectionClick (panel: Panel): void {
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
          <Button onClick={handleLoadClick}>Load</Button>
          <Button onClick={handlePublishClick}>Save</Button>
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
