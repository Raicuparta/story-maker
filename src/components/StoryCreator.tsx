import React, { useState } from "react";

import database from "../database";
import {
  TextInput,
  Wrapper,
} from "../styles/StoryCreator.style";
import {
  Button,
  Column,
  Row,
} from "../styles/UI.style";
import Drawing from "./Drawing";
import PanelConnections from "./PanelConnections";

const StoryCreator: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [panels, setPanels] = useState<Panel[]>([{
    dataURL: "",
    id: 0,
    nextIds: [],
    text: "",
  }]);

  const currentPanel = panels[selected];
  const prevPanel = (currentPanel.prevId !== undefined) ? panels[currentPanel.prevId] : undefined;
  const nextPanels = currentPanel.nextIds.map((id) => panels[id]);

  function handlePublishClick() {
    const data: SerializedData = {
      panels: panels.map((panel) => ({
        dataURL: panel.dataURL,
        id: panel.id,
        nextIds: JSON.stringify(panel.nextIds),
        text: panel.text,
        ...(panel.prevId !== undefined ? { prevId: panel.prevId } : {}),
      })),
    };

    database.ref("stories").push(data);
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
    database.ref("stories").limitToLast(1).once("value").then((snapshot) => {
      const val = snapshot.val();
      if (!val) { return; }

      const serializedPanels = Object.values<SerializedData>(val)[0].panels;

      setPanels(serializedPanels.map((panel) => ({
        dataURL: panel.dataURL,
        id: panel.id,
        nextIds: JSON.parse(panel.nextIds),
        prevId: panel.prevId,
        text: panel.text,
      })));
    });
  }

  function handleNewPanelClick() {
    setPanels((prevPanels) => {
      const newPanels = prevPanels.slice(0);

      newPanels[selected].nextIds.push(newPanels.length);
      newPanels.push({
        dataURL: "",
        id: newPanels.length,
        nextIds: [],
        prevId: selected,
        text: "",
      });

      return newPanels;
    });
  }

  function handleCanvasChange(dataURL: string) {
    setPanels((prevPanels) => {
      const newPanels = prevPanels.slice(0);
      newPanels[selected] = {
        ...newPanels[selected],
        dataURL,
      };
      return newPanels;
    });
  }

  function handlePanelConnectionClick(panel: Panel) {
    setSelected(panel.id);
  }

  return (
    <Wrapper>
      <Column>
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
          <Button onClick={handleLoadClick}>Load</Button>
          <Button onClick={handlePublishClick}>Save</Button>
        </Row>
      </Column>
      <PanelConnections
        prevPanel={prevPanel}
        currentPanel={currentPanel}
        nextPanels={nextPanels}
        onConnectionClick={handlePanelConnectionClick}
        onNewPanelClick={handleNewPanelClick}
      />
    </Wrapper>
  );
};

export default StoryCreator;
