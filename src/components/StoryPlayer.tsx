import React, {
  useState,
  useEffect,
} from "react";

import database from "../database";

interface Props {
  id?: string;
}

const StoryPlayer: React.FC<Props> = ({ id }): React.ReactElement => {
  const [story, setStory] = useState<Story>({ panels: [] });

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
    <div>
      {story.panels.map((panel): string => panel.text)}
    </div>
  );
};

export default StoryPlayer;
