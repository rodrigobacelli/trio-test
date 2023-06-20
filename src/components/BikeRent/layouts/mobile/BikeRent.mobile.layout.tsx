import { Box, Button, CircularProgress, Divider, IconButton, Typography } from '@mui/material'
import { DayPickerRangeProps } from 'react-day-picker'

import DatePicker from '../../../DatePicker'
import {
  BookingContainer,
  Container,
  InfoIcon,
  PriceRow,
  RentButton,
  BookingHeader,
} from './BikeRent.mobile.styles'
import { formatMoney } from '../../BikeRent.utils'
import { useState } from 'react'
import Header from '../../../Header'
import { MobileHeader } from '../../../Header/layouts'
import { ChevronLeft } from '@mui/icons-material'

export type BikePrices = {
  rentAmount: number
  fee: number
  totalAmount: number
}

interface BikeRentComponentProps {
  prices?: BikePrices
  selectedDays?: DayPickerRangeProps['selected']
  onSelectDay?: DayPickerRangeProps['onSelect']
  onBook?: () => void
  isLoadingPrices?: boolean
  isBooking?: boolean
}

const MobileBikeRent = ({
  selectedDays,
  onSelectDay,
  prices,
  isLoadingPrices,
  isBooking,
  onBook,
}: BikeRentComponentProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  return (
    <Container data-testid='bike-overview-container'>
      <RentButton
        variant='contained'
        color='secondary'
        size='large'
        onClick={() => setIsBookingOpen(true)}
      >
        Rent Bike
      </RentButton>
      {isBookingOpen ? (
        <BookingContainer>
          <BookingHeader>
            <IconButton>
              <ChevronLeft />
            </IconButton>
            <Typography variant='h1' fontSize={34}>
              Booking
            </Typography>
          </BookingHeader>
        </BookingContainer>
      ) : null}
    </Container>
  )
}

export default MobileBikeRent
