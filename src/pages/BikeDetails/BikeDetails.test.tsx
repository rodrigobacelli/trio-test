import { render, screen } from '@testing-library/react'
import BikeDetails from '.'

describe('BikeDetails page', () => {
  beforeEach(() => {
    render(<BikeDetails />)
  })

  it('should has a header', () => {
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should has the bike name', () => {
    const nameElement = screen.getByTestId('bike-name-details')
    expect(nameElement).toBeInTheDocument()
  })
})
