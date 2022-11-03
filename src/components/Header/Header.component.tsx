import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Actions, Container, LoginButton, SignUpButton, Title } from './Header.styles'

const Headers = () => {
  return (
    <Container data-testid='header'>
      <Title data-testid='app-name'>Bike Rental</Title>

      <Actions>
        <Box display='flex' alignItems='center' data-testid='location-label'>
          <Typography color='white' marginRight={1}>
            Manhattan
          </Typography>
          s2
        </Box>

        <Link to='/login' data-testid='login-button'>
          <LoginButton>Log in</LoginButton>
        </Link>

        <Link to='/sign-up' data-testid='signup-button'>
          <SignUpButton variant='contained' color='secondary' disableElevation>
            Sign up
          </SignUpButton>
        </Link>
      </Actions>
    </Container>
  )
}

export default Headers
