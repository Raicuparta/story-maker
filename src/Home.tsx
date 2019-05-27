import React, { useState, useEffect } from 'react';

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

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function handleAddChoiceClick() {
    // TODO remove this
    // Loading from local storage to make development easier.
    // Nothing to do with adding choices, just using the
    // button for convenience.
    const savedPanels = localStorage.getItem('panels');
    if (!savedPanels) return;
    setPanels(JSON.parse(savedPanels));
  }

  function handleNodeClick(panel: Panel, index: number) {
    setSelected(index);
  }

  function handleNewClick() {
    setPanels(prevPanels => {
      const newPanels = prevPanels.slice(0);
      newPanels[newPanels.length - 1].nextId = panels.length;
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
          placeholder="Insert panel text here..."
        />
        <Row>
          <Button onClick={handleAddChoiceClick}>Add Choice</Button>
          <Button onClick={handleSaveClick}>Save Panel</Button>
        </Row>
      </DrawColumn>
      <Column>
        <Row>
          <Button>Delete Panel</Button>
          <Button onClick={handleNewClick}>New Panel</Button>
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