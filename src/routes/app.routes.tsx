import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import { Paths } from './paths'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<Home />} />
      <Route path={Paths.BIKE_DETAILS} element={<div />} />
    </Routes>
  )
}

export default AppRoutes
