import { Box, CircularProgress, ContainerProps, Divider, Typography } from '@mui/material'
import { Container, InfoIcon, PriceRow } from './BookingOverview.styles'
import { formatMoney } from './BookingOverview.utils'

export type BikePrices = {
  rentAmount: number
  fee: number
  totalAmount: number
}

interface BikeRentComponentProps extends ContainerProps {
  prices?: BikePrices
  isLoading?: boolean
}

const BookingOverview = ({ prices, isLoading }: BikeRentComponentProps) => {
  return (
    <Container>
      {isLoading ? (
        <Box
          width='100%'
          height='100%'
          display='flex'
          alignItems='center'
          justifyContent='center'
          position='absolute'
          top={0}
          left={0}
        >
          <CircularProgress disableShrink />
        </Box>
      ) : null}
      <Typography variant='h2' fontSize={16} marginBottom={1.25} marginTop={2.75}>
        Booking Overview
      </Typography>

      <Divider />

      <PriceRow marginTop={1.75} data-testid='bike-overview-single-price'>
        <Box display='flex' alignItems='center'>
          <Typography marginRight={1}>Subtotal</Typography>
          <InfoIcon fontSize='small' />
        </Box>

        <Typography>{formatMoney(prices?.rentAmount)}</Typography>
      </PriceRow>

      <PriceRow marginTop={1.5} data-testid='bike-overview-single-price'>
        <Box display='flex' alignItems='center'>
          <Typography marginRight={1}>Service Fee</Typography>
          <InfoIcon fontSize='small' />
        </Box>

        <Typography>{formatMoney(prices?.fee)}</Typography>
      </PriceRow>

      <PriceRow marginTop={1.75} data-testid='bike-overview-total'>
        <Typography fontWeight={800} fontSize={16}>
          Total
        </Typography>
        <Typography variant='h2' fontSize={24} letterSpacing={1}>
          {formatMoney(prices?.totalAmount)}
        </Typography>
      </PriceRow>
    </Container>
  )
}

export default BookingOverview
