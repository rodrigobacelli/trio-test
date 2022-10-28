import ImageToSelect from './components/ImageToSelect'

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
  <div data-testid='bike-images-list'>
    {imageUrls.map((imageUrl) => (
      <ImageToSelect
        key={imageUrl}
        imageUrl={imageUrl}
        isSelected={imageUrl === selectedImageUrl}
        handleSelectImage={handleSelectImage}
      />
    ))}
  </div>
)

export default BikeImageSelector
