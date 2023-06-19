import { Divider, IconButton, Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import BikePlaceholder from 'assets/bike-placeholder.png'
import Bike from 'models/Bike'
import DatePicker from '../DatePicker'
import { Container } from './BikeRent.styles'

type JustDisplayedBikeData = Omit<Bike, 'candidateId' | 'maxLoad' | 'ratings'>

// interface BikeRentComponentProps {}

const BikeRent = () => {
  return (
    <Container variant='outlined' data-testid='bike-overview-container'>
      <Typography variant='h2' fontSize={24} marginBottom={1}>
        Select date and time
      </Typography>
      <DatePicker />
    </Container>
  )
}

export default BikeRent
