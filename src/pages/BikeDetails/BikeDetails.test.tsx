import { render, screen } from '@testing-library/react'
import BikeDetails from '.'
import { SERVICE_FEE_PERCENTAGE } from './BikeDetails.contants'
import { getServicesFee } from './BikeDetails.utils'

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

describe('BikeDetails utils', () => {
  it('should gets the services fee properly', () => {
    const amount = 100
    const expectedAmount = amount * SERVICE_FEE_PERCENTAGE

    const result = getServicesFee(amount)
    expect(result).toEqual(expectedAmount)
  })
})
