import { useCallback, useState } from 'react'

import { Box, Modal, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

import BikeType from 'components/BikeType'
import BookingOverview from 'components/BookingOverview'
import DatePicker, { DatePickerProps } from 'components/DatePicker'
import BikeImage from 'components/BikeImage'
import { Paths } from 'routes/paths'

import RentSuccess from '../../components/RentSuccess'

import Bike from 'models/Bike'
import BikePrices from 'models/BikePrices'

import { ChevronLeft } from '@mui/icons-material'

import {
  BookingContainer,
  Container,
  RentButton,
  BookingHeader,
  NavButton,
  BikeOverview,
  BikePrice,
  CalendarIcon,
  DatePickerDrawer,
  SuccessContainer,
  DatePickerButton,
  BookingButton,
} from './BikeRent.mobile.styles'

interface BikeRentComponentProps {
  bike?: Bike
  prices?: BikePrices
  selectedDays?: DatePickerProps['selected']
  onSelectDay?: DatePickerProps['onSelect']
  onBook?: () => void
  errorMessage?: string
  isLoadingPrices: boolean
  isBooking: boolean
  isBooked: boolean
}

const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

const DatePickerInput = ({
  dateRange,
  onClick,
}: {
  dateRange?: DateRange
  onClick?: () => void
}) => {
  let periodLabel = ''
  const startDate = dateRange?.from ? format(dateRange.from, 'MMM/dd') : ''
  const endDate = dateRange?.to ? format(dateRange.to, 'MMM/dd') : startDate
  if (startDate && endDate) {
    if (startDate === endDate) {
      periodLabel = startDate
    } else {
      periodLabel = `From ${startDate} to ${endDate}`
    }
  } else {
    periodLabel = startDate || endDate || ' '
  }

  return (
    <DatePickerButton variant='outlined' startIcon={<CalendarIcon />} onClick={onClick}>
      <Typography fontWeight={600} fontSize={16} lineHeight={1.5}>
        {periodLabel}
      </Typography>
    </DatePickerButton>
  )
}

const MobileBikeRent = ({
  selectedDays,
  prices,
  onBook,
  bike,
  onSelectDay,
  isLoadingPrices,
  isBooking,
  isBooked = false,
  errorMessage,
}: BikeRentComponentProps) => {
  const navigate = useNavigate()
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isPickingDate, setIsPickingDate] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | undefined>(selectedDays)

  const handleDateSelection = useCallback(() => {
    if (onSelectDay && dateRange?.from) {
      onSelectDay(dateRange)
    }
    setIsPickingDate(false)
  }, [dateRange])

  const handleGoHome = () => {
    navigate(Paths.HOME)
  }

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
            <NavButton onClick={() => setIsBookingOpen(false)}>
              <ChevronLeft />
            </NavButton>
            <Typography variant='h1' fontSize={34}>
              Booking
            </Typography>
          </BookingHeader>

          <BikeOverview variant='outlined'>
            {!!bike?.imageUrls && <BikeImage src={bike.imageUrls[0]} width={100} />}
            <Box marginLeft={2}>
              <Typography fontWeight={700} fontSize={18} lineHeight={1.3}>
                {bike?.name}
              </Typography>
              <BikeType type={bike?.type} />
              <BikePrice>
                <Typography fontWeight={800} fontSize={18}>
                  {bike?.rate} €/
                </Typography>
                <Typography fontWeight={700} fontSize={16}>
                  Day
                </Typography>
              </BikePrice>
            </Box>
          </BikeOverview>

          <Box marginTop={4}>
            <Typography variant='h2' fontSize={24} marginBottom={2}>
              Select date and time
            </Typography>

            <DatePickerInput dateRange={selectedDays} onClick={() => setIsPickingDate(true)} />
          </Box>

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
        </BookingContainer>
      ) : null}
      <DatePickerDrawer
        anchor='bottom'
        onOpen={() => undefined}
        open={isPickingDate}
        onClose={() => setIsPickingDate(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        disableSwipeToOpen
      >
        <DatePicker onSelect={setDateRange} selected={dateRange} />
        <RentButton
          variant='contained'
          color='secondary'
          size='large'
          onClick={() => handleDateSelection()}
          disabled={!dateRange || !dateRange?.from}
        >
          Select
        </RentButton>
      </DatePickerDrawer>
      <Modal
        open={isBooked}
        aria-labelledby='booking-modal-title'
        aria-describedby='booking-modal-description'
      >
        <SuccessContainer>
          <RentSuccess
            bike={bike}
            showGoHomeButton
            onGoHomeButtonClick={handleGoHome}
            titleId='booking-modal-title'
            contentId='booking-modal-description'
          />
        </SuccessContainer>
      </Modal>
    </Container>
  )
}

export default MobileBikeRent
