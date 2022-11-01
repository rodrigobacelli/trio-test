import { CardMedia, Divider, Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import Bike from 'models/Bike'
import { Container, Header, Footer, Name, PriceText } from './BikeCard.styles'

type JustDisplayedBikeData = Omit<Bike, 'candidateId' | 'maxLoad' | 'ratings'>

interface BikeCardComponentProps extends JustDisplayedBikeData {
  cardImage: string
  handleOpenBikeDetails: () => void
}

const BikeCard = ({
  name,
  cardImage,
  type,
  rate,
  handleOpenBikeDetails,
}: BikeCardComponentProps) => {
  return (
    <Container variant='outlined' onClick={handleOpenBikeDetails} data-testid='bike-card'>
      <Header action={<div>...</div>} />

      <CardMedia component='img' image={cardImage} alt='Bike Image' data-testid='bike-image' />

      <Name data-testid='bike-name'>{name}</Name>

      <Divider />

      <Footer
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        data-testid='card-footer'
      >
        <BikeType type={type} />

        <Typography letterSpacing={1} data-testid='bike-price-day'>
          <PriceText component={'span'}>{rate} €/</PriceText>
          Day
        </Typography>
      </Footer>
    </Container>
  )
}

export default BikeCard
