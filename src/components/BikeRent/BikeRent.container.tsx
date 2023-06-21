import { useMemo } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

import { DesktopBikeRent, MobileBikeRent } from './layouts'

import Bike from 'models/Bike'
import BikePrices from 'models/BikePrices'

import type { DatePickerProps } from 'components/DatePicker'

export type BikeRentProps = {
  bike?: Bike
  isBooking?: boolean
  isBooked?: boolean
  onBook?: () => void
  selectedDays?: DatePickerProps['selected']
  onSelectDays?: DatePickerProps['onSelect']
  isLoadingPrices?: boolean
  prices?: BikePrices
}

const BikeRentContainer = ({
  bike,
  prices,
  selectedDays,
  onBook,
  onSelectDays,
  isBooking = false,
  isBooked = false,
  isLoadingPrices = false,
}: BikeRentProps) => {
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

  const BikeRent = useMemo(
    () => (isMobileScreen ? MobileBikeRent : DesktopBikeRent),
    [isMobileScreen],
  )

  return (
    <BikeRent
      selectedDays={selectedDays}
      onSelectDay={onSelectDays}
      prices={prices}
      isLoadingPrices={isLoadingPrices}
      isBooking={isBooking}
      isBooked={isBooked}
      onBook={onBook}
      bike={bike}
    />
  )
}

export default BikeRentContainer
