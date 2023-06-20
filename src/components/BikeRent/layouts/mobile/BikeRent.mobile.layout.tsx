import {
  Box,
  Button,
  Drawer,
  IconButton,
  SwipeableDrawer,
  Typography,
  useTheme,
} from '@mui/material'
import { DateRange, DayPickerRangeProps } from 'react-day-picker'

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
} from './BikeRent.mobile.styles'
import { useCallback, useState } from 'react'
import { ChevronLeft } from '@mui/icons-material'
import Bike from '../../../../models/Bike'
import BikeType from '../../../BikeType'
import BookingOverview from '../../../BookingOverview'
import { BookingButton, DatePickerButton } from '../desktop/BikeRent.desktop.styles'
import { format, isSameDay } from 'date-fns'
import DatePicker, { DatePickerProps } from '../../../DatePicker'

export type BikePrices = {
  rentAmount: number
  fee: number
  totalAmount: number
}

interface BikeRentComponentProps {
  bike?: Bike
  prices?: BikePrices
  selectedDays?: DayPickerRangeProps['selected']
  onSelectDay?: (value: DateRange) => void
  onBook?: () => void
  isLoadingPrices?: boolean
  isBooking?: boolean
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
  isLoadingPrices,
  isBooking,
  onBook,
  bike,
  onSelectDay,
}: BikeRentComponentProps) => {
  const theme = useTheme()
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isPickingDate, setIsPickingDate] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  const handleDateSelection = useCallback(() => {
    if (onSelectDay && dateRange?.from) {
      onSelectDay(dateRange)
    }
    setIsPickingDate(false)
  }, [dateRange])

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
            {!!bike?.imageUrls && (
              <img src={bike.imageUrls[0]} width={100} alt='Bike Image' data-testid='bike-image' />
            )}
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
    </Container>
  )
}

export default MobileBikeRent
