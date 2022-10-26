import Bike from 'models/Bike'
import './BikeDetails.styles.css'

interface BikeDetailsProps {
  bike?: Bike
}

const BikeDetails = ({ bike }: BikeDetailsProps) => {
  return (
    <div className='bike-details-container' data-testid='bike-details-page'>
      <h1 data-testid='bike-name-details'>{bike?.name}</h1>
    </div>
  )
}

export default BikeDetails
