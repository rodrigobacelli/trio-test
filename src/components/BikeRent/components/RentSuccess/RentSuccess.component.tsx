import { Typography } from '@mui/material'

import BikeImage from 'components/BikeImage'
import BikeType from 'components/BikeType'

import Bike from 'models/Bike'

import { GoHomeButton, SuccessContainer } from './RentSuccess.styles'

interface BikeRentComponentProps {
  bike?: Bike
  titleId?: string
  contentId?: string
  showGoHomeButton?: boolean
  onGoHomeButtonClick?: () => void
}

const RentSuccess = ({
  bike,
  showGoHomeButton,
  onGoHomeButtonClick,
  titleId,
  contentId,
}: BikeRentComponentProps) => {
  return (
    <SuccessContainer>
      <Typography id={titleId} variant='h1' fontSize={24} marginBottom={4}>
        Thank you!
      </Typography>
      <Typography marginBottom={3} id={contentId}>
        Your bike is booked.
      </Typography>

      {!!bike?.imageUrls && <BikeImage src={bike.imageUrls[0]} height={105} />}

      <Typography fontWeight={700} fontSize={18} lineHeight={1.3} marginTop={2}>
        {bike?.name}
      </Typography>

      <BikeType type={bike?.type} />

      {showGoHomeButton && (
        <GoHomeButton
          disableElevation
          variant='contained'
          data-testid='booking-success-go-home-button'
          onClick={onGoHomeButtonClick}
        >
          Go to Home Page
        </GoHomeButton>
      )}
    </SuccessContainer>
  )
}

export default RentSuccess
