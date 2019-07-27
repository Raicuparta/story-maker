import React, {
  useState,
  useEffect,
} from "react";

import {
  PanelImage,
  Wrapper,
  PanelWrapper,
  CurrentPanelColumn,
  PanelText,
} from "../styles/StoryPlayer.style";
import { Column } from "../styles/UI.style";
import database from "../database";

interface Props {
  id?: string;
}

const StoryPlayer: React.FC<Props> = ({ id }): React.ReactElement => {
  const [story, setStory] = useState<Story>();
  const [current, setCurrent] = useState<number>(0);
  const currentPanel = story ? story.panels[current] : undefined;

  useEffect((): void => {
    database.ref(`stories/${id}`).once("value").then((snapshot): void => {
      const val: SerializedData = snapshot.val();
      if (!val) { return; }

      setStory({
        panels: val.panels.map((panel): Panel => ({
          dataURL: panel.dataURL,
          id: panel.id,
          nextIds: JSON.parse(panel.nextIds),
          prevId: panel.prevId,
          text: panel.text,
        })),
      });
    });
  }, [id]);

  return (
    <Wrapper>
      {currentPanel && (
        <CurrentPanelColumn>
          <PanelWrapper>
            <PanelImage
              src={currentPanel.dataURL}
              alt={currentPanel.text}
            />
            <PanelText>
              {currentPanel.text}
            </PanelText>
          </PanelWrapper>
        </CurrentPanelColumn>
      )}
      <Column>
        {story && currentPanel && currentPanel.nextIds.map((id): React.ReactElement => (
          <PanelWrapper>
            <PanelImage
              src={story.panels[id].dataURL}
              alt={story.panels[id].text}
            />
            <PanelText>
              {story.panels[id].text}
            </PanelText>
          </PanelWrapper>
        ))}
      </Column>
    </Wrapper>
  );
};

export default StoryPlayer;
