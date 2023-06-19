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
} from '@mui/material'
import { FavoriteBorderOutlined } from '@mui/icons-material'

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
