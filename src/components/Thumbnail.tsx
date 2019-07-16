import React from "react";

import {
  Placeholder,
  ThumbnailImage,
} from "../styles/Thumbnail.style";

const Thumbnail: React.FC<{ src: string }> = ({ src }) => (
  src ? (
    <ThumbnailImage src={src} />
  ) : (
    <Placeholder />
  )
);

export default Thumbnail;
