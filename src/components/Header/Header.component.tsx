import './Header.styles.css'

const Headers = () => {
  return (
    <header className='container' data-testid='header'>
      <h1 className='app-name'>BikeRent</h1>

      <div className='actions'>
        <a href='/login' className='login-action'>
          Log in
        </a>
        <a href='/sign-up' className='sign-up-action'>
          Sign up
        </a>
      </div>
    </header>
  )
}

export default Headers
