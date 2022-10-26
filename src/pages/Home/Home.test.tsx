import { render, screen } from '@testing-library/react'
import Home from '.'

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />)
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
