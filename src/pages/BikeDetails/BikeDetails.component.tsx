import BikeImageSelector from 'components/BikeImageSelector'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import BookingAddressMap from 'components/BookingAddressMap'
import Header from 'components/Header'
import Bike from 'models/Bike'
import { getRateByWeek } from 'utils/rates'
import { getServicesFee } from './BikeDetails.utils'
import './BikeDetails.styles.css'

interface BikeDetailsProps {
  bike?: Bike
}

const BikeDetails = ({ bike }: BikeDetailsProps) => {
  const rateByDay = bike?.rate || 0
  const rateByWeek = getRateByWeek(rateByDay)

  const servicesFee = getServicesFee(rateByDay)
  const total = rateByDay + servicesFee

  return (
    <div className='bike-details-container' data-testid='bike-details-page'>
      <Header />

      <div className='details-container'>
        <section className='details-data-container'>
          {!!bike?.imageUrls && <BikeImageSelector imageUrls={bike.imageUrls} />}

          <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />

          <div className='bike-description'>
            <h1 className='bike-details-name' data-testid='bike-name-details'>
              {bike?.name}
            </h1>

            <BikeType type={bike?.type} />

            <p className='bike-details-description'>{bike?.description}</p>
          </div>

          <div className='bike-prices'>
            <div className='price-row'>
              <span>Day</span>
              <strong>{rateByDay} €</strong>
            </div>

            <div className='price-row'>
              <span>Week</span>
              <strong>{rateByWeek} €</strong>
            </div>
          </div>

          <div className='map-container'>
            <h1>Full adress after booking</h1>
            <BookingAddressMap />
          </div>
        </section>

        <section className='details-data-container rent-overview'>
          <div className='overview-title'>
            <strong>Booking Overview</strong>
          </div>

          <div className='price-row'>
            <span>Subtotal</span>
            <span>{rateByDay} €</span>
          </div>

          <div className='price-row'>
            <span>Service Fee</span>
            <span>{servicesFee} €</span>
          </div>

          <div className='price-row'>
            <h4>Total</h4>
            <h2>{total} €</h2>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BikeDetails
