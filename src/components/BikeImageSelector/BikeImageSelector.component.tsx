import BikeImageList from 'components/BikeImageList'
import { Container } from './BikeImageSelector.styles'
import BikePlaceholder from 'assets/bike-placeholder.png'

interface BikeImageSelectorComponentProps {
  selectedImageUrl: string
  selectedImageIndex: number
  imageUrls: string[]
  isImageLoaded: boolean
  handleSelectImage: (imageUrl: string, index: number) => void
  handleImageHasLoaded: () => void
}

const BikeImageSelector = ({
  selectedImageUrl,
  selectedImageIndex,
  imageUrls,
  isImageLoaded,
  handleImageHasLoaded,
  handleSelectImage,
}: BikeImageSelectorComponentProps) => {
  return (
    <Container data-testid='bike-image-selector'>
      <BikeImageList
        selectedImageUrl={selectedImageUrl}
        selectedImageIndex={selectedImageIndex}
        imageUrls={imageUrls}
        handleSelectImage={handleSelectImage}
      />

      {!isImageLoaded && (
        <img
          src={BikePlaceholder}
          width='100%'
          height='100%'
          alt="Bigger bike's image Placeholder"
        />
      )}
      <img
        key={selectedImageUrl}
        src={selectedImageUrl}
        width='100%'
        height='100%'
        alt="Bigger bike's image"
        data-testid='bike-selected-image'
        onLoad={handleImageHasLoaded}
      />
    </Container>
  )
}

export default BikeImageSelector
