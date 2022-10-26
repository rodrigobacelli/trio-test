import Bike from 'models/Bike'
import { getQuantityLabel } from './BikeList.utils'
import './BikeList.styles.css'
import BikeCard from 'components/BikeCard'

interface BikeListProps {
  bikes: Bike[]
}

const BikeList = ({ bikes }: BikeListProps) => {
  const quantityLabel = getQuantityLabel(bikes.length)

  return (
    <div className='list-container' data-testid='bikes-list'>
      <div className='list-quantity-container'>
        <span className='list-quantity' data-testid='list-quantity'>
          {quantityLabel}
        </span>
      </div>

      <div className='list-bikes-container'>
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            id={bike.id}
            name={bike.name}
            cardImage={bike.imageUrls[0]}
            type={bike.type}
            description={bike.description}
            priceByDay={bike.priceByDay}
            city={bike.city}
            bodySize={bike.bodySize}
          />
        ))}
      </div>
    </div>
  )
}

export default BikeList
