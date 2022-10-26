import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import { getUrlWithParams } from 'utils/navigation'
import BikeCard from './BikeCard.component'

export interface BikeCardProps {
  id: number
  name: string
  description: string
  type: string
  bodySize: number
  city?: string
  priceByDay?: number
  cardImage?: string
}

const BikeCardContainer = ({ id, ...rest }: BikeCardProps) => {
  const navigate = useNavigate()

  const handleOpenBikeDetails = () => {
    const urlWithBikeId = getUrlWithParams(Paths.BIKE_DETAILS, { bikeId: id })
    navigate(urlWithBikeId, { state: { bike: { id, ...rest } } })
  }

  return <BikeCard id={id} handleOpenBikeDetails={handleOpenBikeDetails} {...rest} />
}

export default BikeCardContainer
