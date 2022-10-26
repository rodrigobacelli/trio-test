import './BikeCard.styles.css'

interface BikeCardProps {
  name: string
  imgSrc: string
  type: string
  description: string
  priceByDay: number
  city: string
  bodySize: number
}

const BikeCard = ({
  name,
  imgSrc,
  city,
  description,
  type,
  bodySize,
  priceByDay,
}: BikeCardProps) => {
  return (
    <div className='card-container' data-testid='bike-card'>
      <div>
        <img src={imgSrc} alt='Bike Image' className='bike-image' data-testid='bike-image' />
      </div>

      <div className='infos'>
        <div className='header' data-testid='card-header'>
          <strong data-testid='bike-name'>{name}</strong>
          <span data-testid='bike-city'>{city}</span>
        </div>

        <div className='description'>
          <p data-testid='bike-description'>{description}</p>
        </div>

        <div className='footer' data-testid='card-footer'>
          <div>
            <span data-testid='bike-type'>{type}</span>
            <span>-</span>
            <span data-testid='bike-body-size'>Body Size: {bodySize}cm</span>
          </div>

          <div>
            <strong data-testid='bike-price-day'>{priceByDay} $/day</strong>
            <p data-testid='bike-price-week'>{priceByDay * 7} $/week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeCard
