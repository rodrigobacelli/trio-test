import { Link } from 'react-router-dom'
import { Container, LoginButton, SignUpButton, Title } from './Header.styles'

const Headers = () => {
  return (
    <Container data-testid='header'>
      <Title>Bike Rental</Title>

      <div>
        <Link to='/login'>
          <LoginButton>Log in</LoginButton>
        </Link>

        <Link to='/sign-up'>
          <SignUpButton variant='contained' color='secondary' disableElevation>
            Sign up
          </SignUpButton>
        </Link>
      </div>
    </Container>
  )
}

export default Headers
