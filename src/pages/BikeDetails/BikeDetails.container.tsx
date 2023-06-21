import Bike from 'models/Bike'
import BikePrices from 'models/BikePrices'

import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-day-picker'
import { AxiosError, AxiosResponse } from 'axios'

import apiClient from 'services/api'
import { USER_ID } from 'config'

import BikeDetails from './BikeDetails.component'
import { getRequestBody } from './BikeDetails.utils'

type StateReceived = {
  bike: Bike
}

const BikeDetailsContainer = () => {
  const { state } = useLocation()

  const [currentBikeData, setCurrentBikeData] = useState<Bike>()

  const [requestError, setRequestError] = useState<string | undefined>()
  const [isBooking, setIsBooking] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [bikePrices, setBikePrices] = useState<BikePrices | undefined>()
  const [isGettingPrices, setIsGettingPrices] = useState(false)

  const handleBooking = useCallback(async () => {
    try {
      if (currentBikeData && dateRange?.from) {
        setIsBooking(true)
        setIsBooked(false)
        setRequestError(undefined)

        await apiClient.post(
          '/bikes/rent',
          getRequestBody({
            bikeId: currentBikeData?.id,
            userId: Number(USER_ID),
            range: dateRange,
          }),
        )

        setIsBooked(true)
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setRequestError(error?.response?.data?.message)
      } else {
        setRequestError('Unexpected error')
      }
      setIsBooked(false)
    } finally {
      setIsBooking(false)
    }
  }, [currentBikeData, dateRange])

  useEffect(() => {
    if (state) {
      const { bike } = state as StateReceived
      setCurrentBikeData(bike)
    }
  }, [])

  useEffect(() => {
    const getBikePrice = async (range?: DateRange) => {
      try {
        if (range?.from) {
          setIsGettingPrices(true)
          setRequestError(undefined)

          const response: AxiosResponse<BikePrices> = await apiClient.post(
            '/bikes/amount',
            getRequestBody({
              bikeId: currentBikeData?.id,
              userId: Number(USER_ID),
              range: range,
            }),
          )

          setBikePrices(response.data)
        } else {
          setBikePrices(undefined)
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setRequestError(error?.response?.data?.message)
        } else {
          setRequestError('Unexpected error')
        }
        setBikePrices(undefined)
      } finally {
        setIsGettingPrices(false)
      }
    }

    getBikePrice(dateRange)
  }, [dateRange])

  return (
    <BikeDetails
      bike={currentBikeData}
      onBook={handleBooking}
      isBooking={isBooking}
      isBooked={isBooked}
      prices={bikePrices}
      isLoadingPrices={isGettingPrices}
      selectedDays={dateRange}
      onSelectDays={setDateRange}
      errorMessage={requestError}
    />
  )
}

export default BikeDetailsContainer
