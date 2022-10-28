import './BikeType.styles.css'

interface BikeTypeProps {
  type?: string
}

const BikeType = ({ type }: BikeTypeProps) => {
  return (
    <p className='bike-type' data-testid='bike-type'>
      {type}
    </p>
  )
}

export default BikeType
