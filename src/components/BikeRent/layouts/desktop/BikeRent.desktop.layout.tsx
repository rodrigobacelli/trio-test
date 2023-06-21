import { Typography } from '@mui/material'

import DatePicker, { DatePickerProps } from 'components/DatePicker'
import BookingOverview from 'components/BookingOverview'

import RentSuccess from '../../components/RentSuccess'

import Bike from 'models/Bike'
import BikePrices from 'models/BikePrices'

import { BookingButton, Container } from './BikeRent.desktop.styles'

interface BikeRentComponentProps {
  bike?: Bike
  prices?: BikePrices
  selectedDays?: DatePickerProps['selected']
  onSelectDay?: DatePickerProps['onSelect']
  errorMessage?: string
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
  errorMessage,
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

          {errorMessage && (
            <Typography color='error.main' width='100%' paddingTop={2}>
              {errorMessage}
            </Typography>
          )}
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
