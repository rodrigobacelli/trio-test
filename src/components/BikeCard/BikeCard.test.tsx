import { render, screen } from '@testing-library/react'
import BikeCard from '.'

describe('BikeCard component', () => {
  beforeEach(() => {
    render(
      <BikeCard
        name={'Murazik, Thiel and Robel'}
        imgSrc={'https://cremecycles.com/images/glowne/13.jpg'}
        type={'Cyclocross Bicycle'}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
        priceByDay={25}
        city={'Manhattan'}
        bodySize={24}
      />,
    )
  })

  it('should has an image', () => {
    const imageElement = screen.getByTestId('bike-image')
    expect(imageElement).toBeInTheDocument()
  })

  it('should has name and city in the header', () => {
    const headerContainer = screen.getByTestId('card-header')
    expect(headerContainer).toBeInTheDocument()

    const nameElement = screen.getByTestId('bike-name')
    expect(nameElement).toBeInTheDocument()

    const cityElement = screen.getByTestId('bike-city')
    expect(cityElement).toBeInTheDocument()
  })

  it('should has a description', () => {
    const descriptionElement = screen.getByTestId('bike-description')
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should has type and body size in the footer', () => {
    const footerContainer = screen.getByTestId('card-footer')
    expect(footerContainer).toBeInTheDocument()

    const typeElement = screen.getByTestId('bike-type')
    expect(typeElement).toBeInTheDocument()

    const bodySizeElement = screen.getByTestId('bike-body-size')
    expect(bodySizeElement).toBeInTheDocument()
  })

  it('should has price by day and by week in the footer', () => {
    const footerContainer = screen.getByTestId('card-footer')
    expect(footerContainer).toBeInTheDocument()

    const priceByDayElement = screen.getByTestId('bike-price-day')
    expect(priceByDayElement).toBeInTheDocument()

    const priceByWeekElement = screen.getByTestId('bike-price-week')
    expect(priceByWeekElement).toBeInTheDocument()
  })
})
