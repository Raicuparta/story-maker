import React, { useState, useEffect } from 'react';

import database from './database';
import {
  Row,
  Column,
  Button,
} from './UI';
import DrawArea from './DrawArea';
import FlowChart from './FlowChart';
import {
  Wrapper,
  TextInput,
  DrawColumn,
} from './Home.style';

const Home: React.FC = () => {
  const [drawing, setDrawing] = useState<LinePath>([]);
  const [text, setText] = useState<string>('');
  const [selected, setSelected] = useState<number>(0);
  const [panels, setPanels] = useState<Panel[]>([{
    drawing: [],
    text: '',
  }]);

  function handleSaveClick() {
    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected] = {
        ...newPanels[selected],
        drawing,
        text,
      };
      return newPanels;
    });
  }

  function handlePublishClick() {
    database.ref('stories').push(
      {
        panels: JSON.stringify(panels),
        author: 'Ricky',
      }
    );
  }

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function handleLoadClick() {    
    database.ref('stories').limitToLast(1).once('value').then(snapshot => {
      const val = snapshot.val();
      if (!val) return;

      setPanels(JSON.parse(Object.values<{ panels: string }>(val)[0].panels));
    })
  }

  function handleNodeClick(panel: Panel, index: number) {
    setSelected(index);
  }

  function handleNewPanelClick() {
    if (panels[selected].nextId || panels[selected].choices) return;

    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected].nextId = panels.length;
      newPanels.push({
        drawing: [],
        text: '',
      });

      return newPanels;
    });
  }

  function handleNewChoiceClick() {
    if (panels[selected].nextId || panels[selected].choices) return;

    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected].choices = [
        {id: newPanels.length},
        {id: newPanels.length + 1},
      ];
      newPanels.push({
        drawing: [],
        text: '',
      });
      newPanels.push({
        drawing: [],
        text: '',
      });

      return newPanels;
    });
  }

  useEffect(() => {
    setSelected(panels.length - 1);
  }, [panels.length]);

  useEffect(() => {
    setDrawing(panels[selected].drawing);
    setText(panels[selected].text);
  }, [panels, selected]);

  useEffect(() => {
    // TODO remove this
    // Saving to local storage to make development easier
    if (panels.length <= 1) return;
    localStorage.setItem('panels', JSON.stringify(panels));
  }, [panels]);

  return (
    <Wrapper>
      <DrawColumn>
        <DrawArea
          lines={drawing}
          onChange={setDrawing}
        />
        <TextInput
          onChange={handleTextChange}
          value={text}
          placeholder="Insert panel text here"
        />
        <Row>
          <Button onClick={handleLoadClick}>[Load]</Button>
          <Button onClick={handleSaveClick}>Save Panel</Button>
          <Button onClick={handlePublishClick}>Publish</Button>
        </Row>
      </DrawColumn>
      <Column>
        <Row>
          <Button onClick={handleNewChoiceClick}>+ Choice</Button>
          <Button onClick={handleNewPanelClick}>+ Panel</Button>
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