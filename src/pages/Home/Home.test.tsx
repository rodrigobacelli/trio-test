import { render, screen } from '@testing-library/react'
import { mockedBikesArray } from 'mocks/Bike'
import Home from './Home.component'

describe('Home page', () => {
  beforeEach(() => {
    render(<Home bikes={mockedBikesArray} />)
  })

  it('should has a header', () => {
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should has a bikes list', () => {
    const listElement = screen.getByTestId('bikes-list')
    expect(listElement).toBeInTheDocument()
  })
})
