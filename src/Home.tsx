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
  const [lines, setLines] = useState<LinePath>([]);

  return (
    <Wrapper>
      <Column>
        <DrawArea
          lines={lines}
          onChange={setLines}
        />
        <TextInput placeholder="Insert panel text here..." />
        <Row>
          <Button>Add Choice</Button>
          <Button>Save Panel</Button>
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