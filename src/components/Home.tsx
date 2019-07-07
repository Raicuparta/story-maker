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
  }]);

  const currentPanel = panels[selected];
  const prevPanel = currentPanel.prevId !== undefined && panels[currentPanel.prevId];
  const nextPanels = currentPanel.nextId !== undefined ?
    [panels[currentPanel.nextId]] :
    currentPanel.choices && currentPanel.choices.map(choice => panels[choice.id]);

  function handlePublishClick() {
    database.ref('stories').push(
      {
        panels: panels.map(panel => ({
          ...(panel.choices ? {choices: JSON.stringify(panel.choices)} : {}),
          ...(panel.nextId ? {nextId: panel.nextId} : {}),
          drawing: JSON.stringify(panel.drawing),
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

      const panels = Object.values<{ panels: {
        drawing: string,
        choices: string,
        text: string,
        nextId: number,
      }[] }>(val)[0].panels;

      setPanels(panels.map(panel => ({
        drawing: JSON.parse(panel.drawing),
        choices: panel.choices ? JSON.parse(panel.choices): undefined,
        text: panel.text,
        nextId: panel.nextId,
      })));
    })
  }

  function handleNodeClick(panel: Panel, index: number) {
    setSelected(index);
  }

  function handleNewPanelClick() {
    if (currentPanel.nextId || currentPanel.choices) return;

    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected].nextId = panels.length;
      newPanels.push({
        drawing: '',
        text: '',
        prevId: selected,
      });

      return newPanels;
    });
  }

  function handleNewChoiceClick() {
    if (currentPanel.nextId || currentPanel.choices) return;

    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected].choices = [
        {id: newPanels.length},
        {id: newPanels.length + 1},
      ];
      newPanels.push({
        drawing: '',
        text: '',
        prevId: selected,
      });
      newPanels.push({
        drawing: '',
        text: '',
        prevId: selected,
      });

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
            {nextPanels && nextPanels.map(panel => (
              <Thumbnail src={panel.drawing} />
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
