import {
  Box,
  Card,
  CardHeader,
  CardHeaderProps,
  CardProps,
  styled,
  Typography,
  BoxProps,
  TypographyProps,
  Button,
  ButtonProps,
} from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import InfoOutlined from '@mui/icons-material/InfoOutlined'

interface BikeImageProps extends BoxProps {
  isLoaded: boolean
}

export const Container = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,
  height: 'fit-content',
  maxWidth: 400,
}))

export const Header = styled(CardHeader)<CardHeaderProps>(() => ({
  paddingTop: 0,
}))

export const FavoriteIcon = styled(FavoriteBorderOutlined)(({ theme }) => ({
  color: theme.palette.common.black,
}))

export const ImageContainer = styled(Box)<BoxProps>(() => ({
  padding: '0 73px',
  width: '100%',
}))

export const BikeImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'isLoaded',
})<BikeImageProps>(({ isLoaded }) => ({
  display: isLoaded ? 'block' : 'none',
}))

export const Name = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 24,
  fontWeight: 800,
  marginTop: 22,
}))

export const Footer = styled(Box)<BoxProps>(() => ({
  paddingTop: 8,
}))

export const PriceText = styled(Typography)<TypographyProps & { component: string }>(
  ({ theme }) => ({
    color: theme.palette.common.black,
    fontSize: 24,
    fontWeight: 800,
  }),
)

export const BookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))

export const DatePickerButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderColor: theme.palette.grey['500'],
  borderRadius: 30,
  padding: '18px 24px',
  marginTop: 8,
  textTransform: 'none',
  color: theme.palette.common.black,
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: 16,
  lineHeight: 1.5,
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))
