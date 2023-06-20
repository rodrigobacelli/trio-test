import { Box, CircularProgress, Divider, Typography } from '@mui/material'
import { DayPickerRangeProps } from 'react-day-picker'

import DatePicker from '../../../DatePicker'
import { BookingButton, Container, InfoIcon, PriceRow } from './BikeRent.desktop.styles'
import { formatMoney } from '../../BikeRent.utils'
import Bike from '../../../../models/Bike'
import BookingOverview from '../../../BookingOverview'

export type BikePrices = {
  rentAmount: number
  fee: number
  totalAmount: number
}

interface BikeRentComponentProps {
  bike?: Bike
  prices?: BikePrices
  selectedDays?: DayPickerRangeProps['selected']
  onSelectDay?: DayPickerRangeProps['onSelect']
  onBook?: () => void
  isLoadingPrices?: boolean
  isBooking?: boolean
}

const DesktopBikeRent = ({
  selectedDays,
  onSelectDay,
  prices,
  isLoadingPrices,
  isBooking,
  onBook,
}: BikeRentComponentProps) => {
  return (
    <Container variant='outlined' data-testid='bike-overview-container'>
      <Typography variant='h2' fontSize={24} marginBottom={1}>
        Select date and time
      </Typography>

      <DatePicker selected={selectedDays} onSelect={onSelectDay} />

      <BookingOverview prices={prices} isLoading={isLoadingPrices} />

      <BookingButton
        fullWidth
        disableElevation
        variant='contained'
        data-testid='bike-booking-button'
        onClick={onBook}
        disabled={!selectedDays || !prices || isLoadingPrices || isBooking}
      >
        Add to booking
      </BookingButton>
    </Container>
  )
}

export default DesktopBikeRent
