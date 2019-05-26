import React, { useState } from 'react';

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
} from './Home.style';

const Home: React.FC = () => {
  const [drawing, setDrawing] = useState<LinePath>([]);
  const [text, setText] = useState<string>('');
  const [panels, setPanels] = useState<Panel[]>([]);

  function handleSaveClick() {
    setPanels(prevPanels => [
      ...prevPanels,
      { drawing, text },
    ]);

    setDrawing([]);
    setText('');

    // TODO remove this
    // Saving to local storage to make development easier
    localStorage.setItem('panels', JSON.stringify(panels));
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

  return (
    <Wrapper>
      <Column>
        <DrawArea
          lines={drawing}
          onChange={setDrawing}
        />
        <TextInput
          onChange={handleTextChange}
          value={text}
          placeholder="Insert panel text here..."
        />
        {panels[0] && <>
          <DrawArea
            lines={panels[panels.length -1].drawing}
            onChange={setDrawing}
          />
          <TextInput
            placeholder={panels[panels.length -1].text}
          />
        </>}
        <Row>
          <Button onClick={handleAddChoiceClick}>Add Choice</Button>
          <Button onClick={handleSaveClick}>Save Panel</Button>
        </Row>
      </Column>
      <Column>
        <Row>
          <Button>Delete Panel</Button>
          <Button>New Panel</Button>
        </Row>
        <FlowChart panels={panels} />
      </Column>
    </Wrapper>
  )
}

export default Home;