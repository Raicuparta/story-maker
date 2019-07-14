import React, { useState } from 'react';

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
} from '../styles/Home.style';
import Drawing from './Drawing';
import Thumbnail from './Thumbnail';

const Home: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [panels, setPanels] = useState<Panel[]>([{
    dataURL: '',
    text: '',
    nextIds: [],
    id: 0,
  }]);

  const currentPanel = panels[selected];
  const prevPanel = currentPanel.prevId !== undefined && panels[currentPanel.prevId];
  const nextPanels = currentPanel.nextIds.map(id => panels[id]);

  function handlePublishClick() {
    const data: SerializedData = {
      panels: panels.map(panel => ({
        nextIds: JSON.stringify(panel.nextIds),
        dataURL: panel.dataURL,
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
        nextIds: JSON.parse(panel.nextIds),
        dataURL: panel.dataURL,
        text: panel.text,
        prevId: panel.prevId,
        id: panel.id,
      })));
    })
  }

  function handleNewPanelClick() {
    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);

      newPanels[selected].nextIds.push(newPanels.length);
      newPanels.push({
        dataURL: '',
        text: '',
        prevId: selected,
        nextIds: [],
        id: newPanels.length,
      });

      return newPanels;
    })
  };

  function handleCanvasChange(dataURL: string) {
    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected] = {
        ...newPanels[selected],
        dataURL,
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
          <Button onClick={handleLoadClick}>[Load From Database]</Button>
          <Button onClick={handlePublishClick}>Publish</Button>
        </Row>
      </DrawColumn>
      <Column>
        <Row>
          <Column>
            {prevPanel && (
              <Button onClick={() => handleThumbnailClick(prevPanel)}>
                Previous Panel
                <Thumbnail src={prevPanel.dataURL} />
              </Button>
            )}
          </Column>
          <Column>
            {nextPanels.map(panel => (
              <Button
                key={panel.id}
                onClick={() => handleThumbnailClick(panel)}
              >
                Next Panel Thumb
                <Thumbnail src={panel.dataURL} />
              </Button>
            ))}
            {nextPanels.length < 2 && (
              <Button onClick={handleNewPanelClick}>
                Add Panel
              </Button>
            )}
          </Column>
        </Row>
      </Column>
    </Wrapper>
  )
}

export default Home;
