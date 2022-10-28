import './ImageToSelect.styles.css'

interface ImageToSelectComponentProps {
  imageUrl: string
  isSelected: boolean
  handleSelectImage: (imageUrl: string) => void
}

const ImageToSelect = ({
  imageUrl,
  isSelected,
  handleSelectImage,
}: ImageToSelectComponentProps) => {
  return (
    <div
      key={imageUrl}
      className={`image-to-select ${isSelected && 'selected'}`}
      onClick={() => handleSelectImage(imageUrl)}
      data-testid='image-to-select'
    >
      <img src={imageUrl} width='100%' />
    </div>
  )
}

export default ImageToSelect
