import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import { Paths } from './paths'
import BikeDetails from 'pages/BikeDetails'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<Home />} />
      <Route path={Paths.BIKE_DETAILS} element={<BikeDetails />} />
    </Routes>
  )
}

export default AppRoutes
