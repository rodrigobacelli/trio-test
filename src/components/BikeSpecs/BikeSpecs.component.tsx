import './BikeSpecs.styles.css'

interface BikeSpecsProps {
  bodySize?: number
  maxLoad?: number
  ratings?: number
}

const BikeSpecs = ({ bodySize, maxLoad, ratings }: BikeSpecsProps) => {
  return (
    <div className='bike-specs-container' data-testid='bike-specs'>
      <div data-testid='bike-body-size'>
        <p>Body size</p>
        <strong>{bodySize} cm</strong>
      </div>

      <div data-testid='bike-max-load'>
        <p>Max load</p>
        <strong>{maxLoad} kg</strong>
      </div>

      <div data-testid='bike-ratings'>
        <p>Rating</p>
        <strong>{ratings}</strong>
      </div>
    </div>
  )
}

export default BikeSpecs
