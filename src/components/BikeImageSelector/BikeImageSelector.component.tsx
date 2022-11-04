import BikeImageList from 'components/BikeImageList'
import { Container } from './BikeImageSelector.styles'

interface BikeImageSelectorComponentProps {
  selectedImageUrl: string
  imageUrls: string[]
  handleSelectImage: (imageUrl: string) => void
}

const BikeImageSelector = ({
  selectedImageUrl,
  imageUrls,
  handleSelectImage,
}: BikeImageSelectorComponentProps) => {
  return (
    <Container data-testid='bike-image-selector'>
      <BikeImageList
        selectedImageUrl={selectedImageUrl}
        imageUrls={imageUrls}
        handleSelectImage={handleSelectImage}
      />

      <img
        key={selectedImageUrl}
        src={selectedImageUrl}
        width='100%'
        height='100%'
        alt="Bigger bike's image"
        data-testid='bike-selected-image'
      />
    </Container>
  )
}

export default BikeImageSelector
