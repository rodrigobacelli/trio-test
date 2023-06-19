import Bike from 'models/Bike'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paths } from 'routes/paths'

import BikeRent from './BikeRent.component'

// interface BikeRentProps {
//   bike: Bike
// }

const BikeRentContainer = () => {
  return <BikeRent />
}

export default BikeRentContainer
