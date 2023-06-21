import { useState } from 'react'
import BikeImage, { BikeImageProps } from './BikeImage.component'

const BikeImageContainer = (
  props: Omit<BikeImageProps, 'isImageLoaded' | 'onLoadStart' | 'onLoadEnd'>,
) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleIsImageLoaded = (isLoading: boolean) => {
    setIsImageLoaded(isLoading)
  }

  return (
    <BikeImage
      isImageLoaded={isImageLoaded}
      onLoadStart={() => handleIsImageLoaded(false)}
      onLoad={() => handleIsImageLoaded(true)}
      {...props}
    />
  )
}

export default BikeImageContainer
