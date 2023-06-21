import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

import { SERVICE_FEE_PERCENTAGE } from './BikeDetails.contants'

export const getServicesFee = (amount: number): number =>
  Math.floor(amount * SERVICE_FEE_PERCENTAGE)

interface GetRequestBody {
  bikeId?: number
  userId?: number
  range?: DateRange
}

export const getRequestBody = ({ bikeId, userId, range }: GetRequestBody) => {
  const dateFrom = range?.from ? format(range.from, 'yyyy-MM-dd') : undefined
  const dateTo = range?.to ? format(range.to, 'yyyy-MM-dd') : dateFrom

  return {
    bikeId: bikeId,
    userId: userId,
    dateFrom,
    dateTo,
  }
}
