import React, {
  useState,
} from 'react'

import {
  Placeholder,
  ThumbnailImage,
} from './Thumbnail.style'

const Thumbnail: React.FC<{ src: string }> = ({ src }) => {
  const [isImageFailed, setIsImageFailed] = useState(false)

  function handleImageError () {
    setIsImageFailed(true)
  }

  return (
    (src && !isImageFailed) ? (
      <ThumbnailImage src={src} onError={handleImageError}/>
    ) : (
      <Placeholder />
    )
  )
}

export default Thumbnail
