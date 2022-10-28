import Bike from 'models/Bike'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import { getUrlWithParams } from 'utils/navigation'
import BikeCard from './BikeCard.component'

interface BikeCardProps {
  bike: Bike
}

const BikeCardContainer = ({ bike }: BikeCardProps) => {
  const navigate = useNavigate()

  const handleOpenBikeDetails = () => {
    const urlWithBikeId = getUrlWithParams(Paths.BIKE_DETAILS, { bikeId: bike.id })
    navigate(urlWithBikeId, { state: { bike } })
  }

  return (
    <BikeCard
      id={bike.id}
      handleOpenBikeDetails={handleOpenBikeDetails}
      name={bike.name}
      type={bike.type}
      bodySize={bike.bodySize}
      description={bike.description}
      imageUrls={bike.imageUrls}
      cardImage={bike.imageUrls[0] || ''}
      priceByDay={bike.rate}
    />
  )
}

export default BikeCardContainer
