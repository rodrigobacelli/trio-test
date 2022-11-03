import { Container } from './ImageToSelect.styles'

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
    <Container
      isSelected={isSelected}
      variant='outlined'
      key={imageUrl}
      onClick={() => handleSelectImage(imageUrl)}
      data-testid='image-to-select'
    >
      <img src={imageUrl} width='100%' />
    </Container>
  )
}

export default ImageToSelect
