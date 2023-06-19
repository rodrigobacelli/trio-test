import { Box, CircularProgress, Divider, Typography } from '@mui/material'
import { DayPickerRangeProps } from 'react-day-picker'

import DatePicker from '../DatePicker'
import { BookingButton, Container, InfoIcon, PriceRow } from './BikeRent.styles'
import { formatMoney } from './BikeRent.utils'

export type BikePrices = {
  rentAmount: number
  fee: number
  totalAmount: number
}

interface BikeRentComponentProps {
  prices?: BikePrices
  selectedDays?: DayPickerRangeProps['selected']
  onSelectDay?: DayPickerRangeProps['onSelect']
  isLoadingPrices?: boolean
}

const BikeRent = ({
  selectedDays,
  onSelectDay,
  prices,
  isLoadingPrices,
}: BikeRentComponentProps) => {
  return (
    <Container variant='outlined' data-testid='bike-overview-container'>
      <Typography variant='h2' fontSize={24} marginBottom={1}>
        Select date and time
      </Typography>

      <DatePicker selected={selectedDays} onSelect={onSelectDay} />

      <Box position='relative'>
        {isLoadingPrices ? (
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
      </Box>

      <BookingButton
        fullWidth
        disableElevation
        variant='contained'
        data-testid='bike-booking-button'
        disabled={!selectedDays || !prices || isLoadingPrices}
      >
        Add to booking
      </BookingButton>
    </Container>
  )
}

export default BikeRent
