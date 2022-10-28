import Bike from 'models/Bike'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'
import BikeCard from './BikeCard.component'

interface BikeCardProps {
  bike: Bike
}

const BikeCardContainer = ({ bike }: BikeCardProps) => {
  const navigate = useNavigate()

  const handleOpenBikeDetails = () => {
    navigate(Paths.BIKE_DETAILS, { state: { bike } })
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
      rate={bike.rate}
    />
  )
}

export default BikeCardContainer
