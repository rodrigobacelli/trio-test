import { ImgHTMLAttributes } from 'react'

import { styled } from '@mui/material'

interface BikeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoaded: boolean
}

export const Image = styled('img', {
  shouldForwardProp: (prop) => prop !== 'isLoaded',
})<BikeImageProps>(({ isLoaded }) => ({
  display: isLoaded ? 'block' : 'none',
}))
