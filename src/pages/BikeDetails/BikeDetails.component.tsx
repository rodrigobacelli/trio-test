import { Box, Divider, Typography } from '@mui/material'
import BikeImageSelector from 'components/BikeImageSelector'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import BookingAddressMap from 'components/BookingAddressMap'
import Header from 'components/Header'
import Bike from 'models/Bike'
import { getRateByWeek } from 'utils/rates'
import { getServicesFee } from './BikeDetails.utils'
import { Content, DetailsContainer, OverviewContainer, PriceRow } from './BikeDetails.styles'

interface BikeDetailsProps {
  bike?: Bike
}

const BikeDetails = ({ bike }: BikeDetailsProps) => {
  const rateByDay = bike?.rate || 0
  const rateByWeek = getRateByWeek(rateByDay)

  const servicesFee = getServicesFee(rateByDay)
  const total = rateByDay + servicesFee

  return (
    <div data-testid='bike-details-page'>
      <Header />

      <Content>
        <DetailsContainer variant='outlined'>
          {!!bike?.imageUrls && <BikeImageSelector imageUrls={bike.imageUrls} />}

          <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />

          <Divider />

          <Box marginY={2.25}>
            <Typography
              variant='h1'
              fontSize={38}
              fontWeight={800}
              marginBottom={0.5}
              data-testid='bike-name-details'
            >
              {bike?.name}
            </Typography>

            <BikeType type={bike?.type} />

            <Typography marginTop={1.5} fontSize={14}>
              {bike?.description}
            </Typography>
          </Box>

          <Divider />

          <Box marginY={2.25}>
            <PriceRow>
              <Typography>Day</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByDay} €
              </Typography>
            </PriceRow>

            <PriceRow>
              <Typography>Week</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByWeek} €
              </Typography>
            </PriceRow>
          </Box>

          <Divider />

          <Box marginTop={3.25}>
            <Typography variant='h1' fontSize={24} fontWeight={800}>
              Full adress after booking
            </Typography>
            <BookingAddressMap />
          </Box>
        </DetailsContainer>

        <OverviewContainer variant='outlined'>
          <Typography variant='h2' fontSize={16} marginBottom={1.25}>
            Booking Overview
          </Typography>

          <Divider />

          <PriceRow marginTop={1.75}>
            <Typography>Subtotal</Typography>
            <Typography>{rateByDay} €</Typography>
          </PriceRow>

          <PriceRow marginTop={1.5}>
            <Typography>Service Fee</Typography>
            <Typography>{servicesFee} €</Typography>
          </PriceRow>

          <PriceRow marginTop={1.75}>
            <Typography fontWeight={800} fontSize={16}>
              Total
            </Typography>
            <Typography variant='h2' fontSize={24} letterSpacing={1}>
              {total} €
            </Typography>
          </PriceRow>
        </OverviewContainer>
      </Content>
    </div>
  )
}

export default BikeDetails
