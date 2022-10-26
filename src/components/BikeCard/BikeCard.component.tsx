import Bike from 'models/Bike'
import './BikeCard.styles.css'

type BikeCardProps = Omit<Bike, 'id'> & { handleOpenBikeDetails: () => void }

const BikeCard = ({
  name,
  imgSrc,
  city,
  description,
  type,
  bodySize,
  priceByDay,
  handleOpenBikeDetails,
}: BikeCardProps) => {
  return (
    <div onClick={handleOpenBikeDetails} className='card-container' data-testid='bike-card'>
      <div>
        <img src={imgSrc} alt='Bike Image' className='bike-image' data-testid='bike-image' />
      </div>

      <div className='card-infos-container'>
        <div className='card-header' data-testid='card-header'>
          <strong data-testid='bike-name'>{name}</strong>
          <span data-testid='bike-city'>{city}</span>
        </div>

        <div className='card-description'>
          <p data-testid='bike-description'>{description}</p>
        </div>

        <div data-testid='card-footer'>
          <div>
            <span data-testid='bike-type'>{type}</span>
            <span> • </span>
            <span data-testid='bike-body-size'>Body Size: {bodySize}cm</span>
          </div>

          <div className='card-prices-container'>
            <strong data-testid='bike-price-day'>{priceByDay} €/Day</strong>
            <p data-testid='bike-price-week'>{priceByDay * 7} €/Week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeCard
