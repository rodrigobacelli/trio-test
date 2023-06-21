import { ImgHTMLAttributes } from 'react'

import { Box } from '@mui/material'

import { Image } from './BikeImage.styles'

import BikePlaceholder from 'assets/bike-placeholder.png'

export interface BikeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isImageLoaded?: boolean
}

const BikeImage = ({ isImageLoaded, onLoadStart, onLoad, src, ...imageProps }: BikeImageProps) => {
  return (
    <Box>
      {!isImageLoaded && (
        <Box
          component='img'
          {...imageProps}
          src={BikePlaceholder}
          alt='Bike Image Loading'
          placeholder={BikePlaceholder}
          data-testid='bike-image-loading'
        />
      )}

      <Image
        {...imageProps}
        src={src}
        isLoaded={!!isImageLoaded}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        data-testid='bike-image'
      />
    </Box>
  )
}
export default BikeImage
