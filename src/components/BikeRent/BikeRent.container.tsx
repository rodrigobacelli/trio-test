import * as React from 'react'

import Bike from 'models/Bike'
import BikeRent, { BikePrices } from './BikeRent.component'
import { DateRange } from 'react-day-picker'
import apiClient from '../../services/api'
import { format } from 'date-fns'
import type { AxiosResponse } from 'axios'

interface BikeRentContainerProps {
  bike?: Bike
}

const BikeRentContainer = ({ bike }: BikeRentContainerProps) => {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>()
  const [bikePrices, setBikePrices] = React.useState<BikePrices | undefined>()
  const [isGettingPrice, setIsGettingPrice] = React.useState(false)

  const handleBooking = React.useCallback(() => {}, [dateRange])

  React.useEffect(() => {
    console.log()
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

  return (
    <BikeRent
      selectedDays={dateRange}
      onSelectDay={setDateRange}
      prices={bikePrices}
      isLoadingPrices={isGettingPrice}
    />
  )
}

export default BikeRentContainer
