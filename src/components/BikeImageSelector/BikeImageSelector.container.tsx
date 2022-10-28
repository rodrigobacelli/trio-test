import { useState } from 'react'
import BikeImageSelector from './BikeImageSelector.component'

interface BikeImageSelectorProps {
  imageUrls: string[]
}

const BikeImageSelectorContainer = ({ imageUrls }: BikeImageSelectorProps) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(imageUrls[0])

  const handleSelectImage = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl)
  }

  return (
    <BikeImageSelector
      selectedImageUrl={selectedImageUrl}
      imageUrls={imageUrls}
      handleSelectImage={handleSelectImage}
    />
  )
}

export default BikeImageSelectorContainer
