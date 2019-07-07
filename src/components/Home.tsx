import React, { useState, useEffect } from 'react';

import database from '../database';
import {
  Row,
  Column,
  Button,
} from '../styles/UI.style';
import FlowChart from './FlowChart';
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
  }]);

  const currentPanel = panels[selected];
  const prevPanel = currentPanel.prevId !== undefined && panels[currentPanel.prevId];
  const nextPanels = currentPanel.nextIds.map(id => panels[id]);
  const newPanel = (prevId: number) => ({
    drawing: '',
    text: '',
    prevId,
    nextIds: [],
  });

  function handlePublishClick() {
    database.ref('stories').push(
      {
        panels: panels.map(panel => ({
          nextIds: JSON.stringify(panel.nextIds),
          drawing: panel.drawing,
          text: panel.text,
        })),
      }
    ).then(() => console.log('done publishing'));
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
        drawing: JSON.parse(panel.drawing),
        nextIds: JSON.parse(panel.nextIds),
        text: panel.text,
      })));
    })
  }

  function handleNodeClick(panel: Panel, index: number) {
    setSelected(index);
  }

  function handleNewPanelClick() {
    if (currentPanel.nextIds.length > 0) return;

    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected].nextIds.push(panels.length);
      newPanels.push(newPanel(selected));

      return newPanels;
    });
  }

  function handleNewChoiceClick() {
    if (currentPanel.nextIds.length > 0) return;

    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected].nextIds.concat([
        newPanels.length,
        newPanels.length + 1,
      ]);
      newPanels.push(newPanel(selected));
      newPanels.push(newPanel(selected));

      return newPanels;
    });
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

  useEffect(() => {
    setSelected(panels.length - 1);
  }, [panels.length]);

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
              <Thumbnail src={prevPanel.drawing} />
            )}
          </Column>
          <Column>
            {nextPanels.map(panel => (
              <Thumbnail
                key={panel.drawing}
                src={panel.drawing}
              />
            ))}
          </Column>
        </Row>
        <FlowChart
          panels={panels}
          onNodeClick={handleNodeClick}
          selected={selected}
        />
      </Column>
    </Wrapper>
  )
}

export default Home;
