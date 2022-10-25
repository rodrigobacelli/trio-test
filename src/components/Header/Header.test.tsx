import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header component', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('should has the app name', () => {
    const titleElement = screen.getByText('BikeRent')
    expect(titleElement).toBeInTheDocument()
  })

  it('should has a Log in link', () => {
    const logInElement = screen.getByText('Log in')
    expect(logInElement).toBeInTheDocument()
  })

  it('should has a Sign up link', () => {
    const signUpElement = screen.getByText('Sign up')
    expect(signUpElement).toBeInTheDocument()
  })
})
