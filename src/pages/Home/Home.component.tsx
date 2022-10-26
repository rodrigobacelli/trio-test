import Header from 'components/Header'
import BikeList from 'components/BikeList'
import { mockedBikesArray } from 'mocks/Bike'
import './Home.styles.css'

const Home = () => {
  return (
    <div className='container' data-testid='home-page'>
      <Header />

      <BikeList bikes={mockedBikesArray} />
    </div>
  )
}

export default Home
