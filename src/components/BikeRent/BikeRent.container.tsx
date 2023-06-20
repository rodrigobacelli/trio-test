import Bike from 'models/Bike'
import { BikePrices } from './BikeRent.component'
import { DateRange } from 'react-day-picker'
import apiClient from '../../services/api'
import { format } from 'date-fns'
import type { AxiosResponse } from 'axios'
import { useMediaQuery, useTheme } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { DesktopBikeRent, MobileBikeRent } from './layouts'

export type BikeRentProps = {
  bike?: Bike
  isBooking?: boolean
  isBooked?: boolean
  onBook?: (value: DateRange) => void
}

const BikeRentContainer = ({ bike, isBooking, isBooked, onBook }: BikeRentProps) => {
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [bikePrices, setBikePrices] = useState<BikePrices | undefined>()
  const [isGettingPrice, setIsGettingPrice] = useState(false)

  const handleBooking = useCallback(async () => {
    if (dateRange && bike && onBook) {
      onBook(dateRange)
    }
  }, [dateRange])

  useEffect(() => {
    const getBikePrice = async (range?: DateRange) => {
      console.log(range)
      try {
        if (range?.from) {
          setIsGettingPrice(true)
          const dateFrom = range?.from ? format(range.from, 'yyyy-MM-dd') : undefined
          const dateTo = range?.to ? format(range.to, 'yyyy-MM-dd') : dateFrom

          const response: AxiosResponse<BikePrices> = await apiClient.post('/bikes/amount', {
            bikeId: bike?.id,
            userId: 126,
            dateFrom,
            dateTo,
          })

          setBikePrices(response.data)
        } else {
          setBikePrices(undefined)
        }
      } catch {
        setBikePrices(undefined)
      } finally {
        setIsGettingPrice(false)
      }
    }

    getBikePrice(dateRange)
  }, [dateRange])

  const BikeRent = useMemo(
    () => (isMobileScreen ? MobileBikeRent : DesktopBikeRent),
    [isMobileScreen],
  )

  return (
    <BikeRent
      selectedDays={dateRange}
      onSelectDay={setDateRange}
      prices={bikePrices}
      isLoadingPrices={isGettingPrice}
      isBooking={isBooking}
      onBook={handleBooking}
    />
  )
}

export default BikeRentContainer
