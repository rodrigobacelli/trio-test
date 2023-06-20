import { Typography } from '@mui/material'
import { DayPickerRangeProps } from 'react-day-picker'

import DatePicker from '../../../DatePicker'
import { BookingButton, Container } from './BikeRent.desktop.styles'
import Bike from '../../../../models/Bike'
import BookingOverview from '../../../BookingOverview'
import RentSuccess from '../../components/RentSuccess'

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
  isLoadingPrices: boolean
  isBooking: boolean
  isBooked: boolean
}

const DesktopBikeRent = ({
  selectedDays,
  onSelectDay,
  prices,
  isLoadingPrices,
  isBooking,
  onBook,
  isBooked,
  bike,
}: BikeRentComponentProps) => {
  return (
    <Container variant='outlined' data-testid='bike-overview-container'>
      {isBooked && <RentSuccess bike={bike} />}
      {!isBooked && (
        <>
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
        </>
      )}
    </Container>
  )
}

export default DesktopBikeRent
