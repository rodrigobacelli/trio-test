import Header from 'components/Header'
import Bike from 'models/Bike'
import './BikeDetails.styles.css'

interface BikeDetailsProps {
  bike?: Bike
}

const BikeDetails = ({ bike }: BikeDetailsProps) => {
  const cardImage = bike?.imageUrls[0] || ''

  return (
    <main className='bike-details-container' data-testid='bike-details-page'>
      <Header />

      <div className='details-container'>
        <section className='details-data-container bike-data'>
          <div className='bike-image-selector'>
            <div>
              {bike?.imageUrls?.map((imageUrl) => (
                <div key={imageUrl} className='image-selector'>
                  <img src={imageUrl} width='100%' />
                </div>
              ))}
            </div>

            <img key={cardImage} src={cardImage} className='chosen-image' />
          </div>

          <div className='spec-data-container'>
            <div>
              <p>Body size</p>
              <strong>{bike?.bodySize} cm</strong>
            </div>

            <div>
              <p>Max load</p>
              <strong>{bike?.maxLoad} kg</strong>
            </div>

            <div>
              <p>Rating</p>
              <strong>{bike?.ratings}</strong>
            </div>
          </div>

          <div className='bike-description'>
            <h1 className='bike-details-name' data-testid='bike-name-details'>
              {bike?.name}
            </h1>
            <p>{bike?.type}</p>
            <p className='bike-details-description'>{bike?.description}</p>
          </div>

          <div className='bike-prices'>
            <div className='price-row'>
              <span>Day</span>
              <strong>{bike?.priceByDay || 0} €</strong>
            </div>

            <div className='price-row'>
              <span>Week</span>
              <strong>{(bike?.priceByDay || 0) * 7} €</strong>
            </div>
          </div>

          <div className='map-container'>
            <h1>Full adress after booking</h1>

            <div className='mapouter'>
              <div className='gmap_canvas'>
                <iframe
                  className='gmap_iframe'
                  width='100%'
                  frameBorder='0'
                  scrolling='no'
                  marginHeight={0}
                  marginWidth={0}
                  src='https://maps.google.com/maps?width=750&amp;height=400&amp;hl=en&amp;q=745 Atlantic Ave, Boston, MA 02111, Estados Unidos&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className='details-data-container rent-overview'></section>
      </div>
    </main>
  )
}

export default BikeDetails
