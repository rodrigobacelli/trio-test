import Bike from 'models/Bike'
// import { useNavigate } from 'react-router-dom'
import BikeCard from './BikeCard.component'
import './BikeCard.styles.css'

const BikeCardContainer = ({ id, ...rest }: Bike) => {
  //   const navigate = useNavigate()

  const handleOpenBikeDetails = () => {
    // navigate(`bike-details/${id}`)
    if (window.location.href.includes('bike-details')) {
      const baseUrl = window.location.href.split('bike-details')[0]
      window.location.href = baseUrl + `bike-details/${id}`
      return
    }

    window.location.href = window.location.href + `bike-details/${id}`
  }

  return <BikeCard handleOpenBikeDetails={handleOpenBikeDetails} {...rest} />
}

export default BikeCardContainer
