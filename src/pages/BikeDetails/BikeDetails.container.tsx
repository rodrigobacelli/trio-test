import Bike from 'models/Bike'
import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BikeDetails from './BikeDetails.component'
import * as React from 'react'
import { format } from 'date-fns'
import apiClient from '../../services/api'
import { DateRange } from 'react-day-picker'

type StateReceived = {
  bike: Bike
}

const BikeDetailsContainer = () => {
  const { state } = useLocation()

  const [currentBikeData, setCurrentBikeData] = useState<Bike>()

  const [isBooking, setIsBooking] = React.useState(false)
  const [isBooked, setIsBooked] = React.useState(false)

  const handleBooking = useCallback(
    async (dateRange?: DateRange) => {
      try {
        if (currentBikeData && dateRange?.from) {
          setIsBooking(true)
          setIsBooked(false)

          const dateFrom = dateRange?.from ? format(dateRange.from, 'yyyy-MM-dd') : undefined
          const dateTo = dateRange?.to ? format(dateRange.to, 'yyyy-MM-dd') : dateFrom

          await apiClient.post('/bikes/rent', {
            bikeId: currentBikeData?.id,
            userId: 126,
            dateFrom,
            dateTo,
          })

          setIsBooked(true)
        }
      } catch {
        setIsBooked(false)
      } finally {
        setIsBooking(false)
      }
    },
    [currentBikeData],
  )

  useEffect(() => {
    if (state) {
      const { bike } = state as StateReceived
      setCurrentBikeData(bike)
    }
  }, [])

  return (
    <BikeDetails
      bike={currentBikeData}
      onBook={handleBooking}
      isBooking={isBooking}
      isBooked={isBooked}
    />
  )
}

export default BikeDetailsContainer
