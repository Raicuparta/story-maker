import React, { useState, useEffect } from 'react';

import database from '../database';
import {
  Row,
  Column,
  Button,
} from '../styles/UI.style';
import {
  Wrapper,
  TextInput,
  DrawColumn,
  Thumbnail,
} from '../styles/Home.style';
import Canvas from './Canvas';

const Home: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [panels, setPanels] = useState<Panel[]>([{
    drawing: '',
    text: '',
    nextIds: [],
    id: 0,
  }]);

  useEffect(() => {
    setSelected(panels.length - 1);
  }, [panels.length]);

  const currentPanel = panels[selected];
  const prevPanel = currentPanel.prevId !== undefined && panels[currentPanel.prevId];
  const nextPanels = currentPanel.nextIds.map(id => panels[id]);

  function handlePublishClick() {
    const data: SerializedData = {
      panels: panels.map(panel => ({
        nextIds: JSON.stringify(panel.nextIds),
        drawing: panel.drawing,
        text: panel.text,
        id: panel.id,
        ...(panel.prevId !== undefined ? { prevId: panel.prevId } : {}),
      })),
    };

    database
      .ref('stories')
      .push(data)
      .then(() => console.log('done publishing'));
  }

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newPanels = panels.slice(0);
    newPanels[selected] = {
      ...newPanels[selected],
      text: event.target.value,
    };

    setPanels(newPanels);
  }

  function handleLoadClick() {
    database.ref('stories').limitToLast(1).once('value').then(snapshot => {
      const val = snapshot.val();
      if (!val) return;

      const panels = Object.values<SerializedData>(val)[0].panels;

      setPanels(panels.map(panel => ({
        drawing: panel.drawing,
        nextIds: JSON.parse(panel.nextIds),
        text: panel.text,
        prevId: panel.prevId,
        id: panel.id,
      })));
    })
  }

  function addPanels (prevId: number, count: number) {
    if (currentPanel.nextIds.length > 0) return;  
    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);

      for (let i = 0; i < count; i++) {
        newPanels[selected].nextIds.push(newPanels.length);
        newPanels.push({
          drawing: '',
          text: '',
          prevId,
          nextIds: [],
          id: newPanels.length,
        });
      }

      return newPanels;
    })
  };

  function handleNewPanelClick() {
    addPanels(selected, 1);
  }

  function handleNewChoiceClick() {
    addPanels(selected, 2);
  }

  function handleCanvasChange(dataURL: string) {
    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected] = {
        ...newPanels[selected],
        drawing: dataURL,
      };
      return newPanels;
    });
  }

  function handleThumbnailClick(panel: Panel) {
    setSelected(panel.id);
  }

  return (
    <Wrapper>
      <DrawColumn>
        <Canvas
          onChange={handleCanvasChange}
          dataURL={currentPanel.drawing}
        />
        <TextInput
          onChange={handleTextChange}
          value={currentPanel.text}
          placeholder="Insert panel text here"
        />
        <Row>
          <Button onClick={handleLoadClick}>[Load From Database]</Button>
          <Button onClick={handlePublishClick}>Publish</Button>
        </Row>
      </DrawColumn>
      <Column>
        <Row>
          <Button onClick={handleNewChoiceClick}>+ Choice</Button>
          <Button onClick={handleNewPanelClick}>+ Panel</Button>
        </Row>
        <Row>
          <Column>
            {prevPanel && (
              <Thumbnail
                src={prevPanel.drawing}
                onClick={() => handleThumbnailClick(prevPanel)}
              />
            )}
          </Column>
          <Column>
            {nextPanels.map(panel => (
              <Thumbnail
                key={panel.id}
                src={panel.drawing}
                onClick={() => handleThumbnailClick(panel)}
              />
            ))}
          </Column>
        </Row>
      </Column>
    </Wrapper>
  )
}

export default Home;
