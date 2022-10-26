import Header from 'components/Header'
import BikeList from 'components/BikeList'
import Bike from 'models/Bike'
import './Home.styles.css'

interface HomeProps {
  bikes: Bike[]
}

const Home = ({ bikes }: HomeProps) => {
  return (
    <div className='container' data-testid='home-page'>
      <Header />

      <BikeList bikes={bikes} />
    </div>
  )
}

export default Home
