import React from 'react';

import {
  Row,
  Column,
  Button,
} from './UI';
import DrawArea from './DrawArea';
import { Wrapper } from './Home.style';

const Home: React.FC = () => (
  <Wrapper>
    <Column>
      <DrawArea />
      <div>Control Panel</div>
      <div>Input text</div>
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
      <Row>
        Node graph
      </Row>
    </Column>
  </Wrapper>
)

export default Home;