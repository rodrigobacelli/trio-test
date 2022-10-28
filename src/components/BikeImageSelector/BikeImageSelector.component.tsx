import BikeImageList from 'components/BikeImageList'
import './BikeImageSelector.styles.css'

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
    <div className='bike-image-selector-container' data-testid='bike-image-selector'>
      <BikeImageList
        selectedImageUrl={selectedImageUrl}
        imageUrls={imageUrls}
        handleSelectImage={handleSelectImage}
      />

      <img
        key={selectedImageUrl}
        src={selectedImageUrl}
        className='selected-image'
        alt="Bigger bike's image"
        data-testid='bike-selected-image'
      />
    </div>
  )
}

export default BikeImageSelector
