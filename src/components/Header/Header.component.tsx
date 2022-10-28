import { Link } from 'react-router-dom'
import './Header.styles.css'

const Headers = () => {
  return (
    <header className='header-container' data-testid='header'>
      <h1 className='app-name'>BikeRent</h1>

      <div className='actions'>
        <Link to='/login' className='login-action'>
          Log in
        </Link>

        <Link to='/sign-up' className='sign-up-action'>
          Sign up
        </Link>
      </div>
    </header>
  )
}

export default Headers
