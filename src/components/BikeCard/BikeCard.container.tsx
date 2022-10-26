import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import { getUrlWithParams } from 'routes/utils'
import Bike from 'models/Bike'
import BikeCard from './BikeCard.component'
import './BikeCard.styles.css'

const BikeCardContainer = ({ id, ...rest }: Bike) => {
  const navigate = useNavigate()

  const handleOpenBikeDetails = () => {
    const urlWithBikeId = getUrlWithParams(Paths.BIKE_DETAILS, { bikeId: id })
    navigate(urlWithBikeId)
  }

  return <BikeCard handleOpenBikeDetails={handleOpenBikeDetails} {...rest} />
}

export default BikeCardContainer
