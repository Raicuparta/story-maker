import React from 'react';

import {
  ThumbnailImage,
  Placeholder,
} from '../styles/Thumbnail.style'

const Thumbnail: React.FC<{ src: string }> = ({ src }) => (
  src ? (
    <ThumbnailImage src={src} />
  ) : (
    <Placeholder />
  )
);

export default Thumbnail
