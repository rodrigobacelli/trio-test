import ImageToSelect from './components/ImageToSelect'
import { Container } from './BikeImageList.styles'

interface BikeImageSelectorComponentProps {
  selectedImageUrl: string
  imageUrls: string[]
  handleSelectImage: (imageUrl: string) => void
}

const BikeImageSelector = ({
  selectedImageUrl,
  imageUrls,
  handleSelectImage,
}: BikeImageSelectorComponentProps) => (
  <Container data-testid='bike-images-list'>
    {imageUrls.map((imageUrl) => (
      <ImageToSelect
        key={imageUrl}
        imageUrl={imageUrl}
        isSelected={imageUrl === selectedImageUrl}
        handleSelectImage={handleSelectImage}
      />
    ))}
  </Container>
)

export default BikeImageSelector
