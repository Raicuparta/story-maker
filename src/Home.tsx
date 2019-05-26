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

  function handleSavePanel() {
    setPanels(prevPanels => [
      ...prevPanels,
      { drawing, text },
    ]);

    setDrawing([]);
    setText('');
  }

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
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
            value={panels[panels.length -1].text}
          />
        </>}
        <Row>
          <Button>Add Choice</Button>
          <Button onClick={handleSavePanel}>Save Panel</Button>
        </Row>
      </Column>
      <Column>
        <Row>
          <Button>Delete Panel</Button>
          <Button>New Panel</Button>
        </Row>
        <FlowChart />
      </Column>
    </Wrapper>
  )
}

export default Home;